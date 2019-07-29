import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private obj:HttpClient) { }
  tokenno = localStorage.getItem("tokenno");
  ngOnInit() {
    this.getitem();
  }

  itemname:string;
  price:any;
  qty:any;
  msg:string;
  allitem:any[];
  save()
  {
    var url = "https://jobswalkin.com/web/saveitem.php";
    var jsondata = {
      "name":this.itemname,
      "price":this.price,
      "qty":this.qty,
      "userid":this.tokenno
    };



    this.obj.post(url,jsondata).subscribe(
      response =>{
        //this.msg = response as string;
        this.getitem();// to reload the list
        this.itemname="";
        this.price="";
        this.qty="";
      }
    )
  }

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
}
