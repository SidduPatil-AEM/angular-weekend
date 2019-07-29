import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getemp();
    this.getitem();
    this.getditem();
  }

  allemp:any[];
  tokenno=localStorage.getItem("tokenno");
  getemp()
  {
    var url = "https://jobswalkin.com/web/getemployee.php";
    var jsondata={"id":this.tokenno};
    this.obj.post(url,jsondata).subscribe(
      response =>{
        this.allemp = response as string[];
      }
    )
  }

  msg:string;
  allitem:any[];
  getitem()
  {
    var url = "https://jobswalkin.com/web/getitem.php";
    var jsondata = {"id":this.tokenno};
    this.obj.post(url,jsondata).subscribe(
      response =>{
        this.allitem = response as string[]; 
        this.msg="My Total Item : "+this.allitem.length;
      }
    )
  }

  allditem:number;//change 
  getditem()//change  
  {
    var url = "https://jobswalkin.com/web/getditem.php";
    var jsondata = {"id":this.tokenno};
    this.obj.post(url,jsondata).subscribe(
      response =>{
        this.allditem = Number(response as string);
        this.msg="My Total Item : "+this.allitem.length;//change 
      });
  }

}
