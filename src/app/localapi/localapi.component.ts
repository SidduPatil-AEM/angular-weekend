import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-localapi',
  templateUrl: './localapi.component.html',
  styleUrls: ['./localapi.component.css']
})
export class LocalapiComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getuser();
  }

  alluser:any[];
  getuser()
  {
    this.obj.get("http://localhost/phpmvc/admin/apiuser.php").subscribe(
      response=>{
        this.alluser= response as string[];
      }
    );
  }

  name:string;
  mobile:string;
  email:string;
  serverdata;
  msg : string;
  

  save()
  {
    var jsondata= {
      "name":this.name,
      "mobile":this.mobile,
      "email":this.email
    };

    var url ="http://localhost/phpmvc/admin/saveapiuser.php";
    this.obj.post(url,jsondata).subscribe(
       response =>{
         this.serverdata = response as string[];
         this.msg = this.serverdata.info;
         this.getuser(); 
         this.name="";// to clear field after save
         this.mobile="";// to clear field after save
         this.email="";// to clear field after save
       } 
    );
  }
}
