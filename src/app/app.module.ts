import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyuserComponent } from './myuser/myuser.component';
import { ItemComponent } from './item/item.component';
import { UseritemComponent } from './useritem/useritem.component';
import { ProfileComponent } from './profile/profile.component';
import { LocalapiComponent } from './localapi/localapi.component';

const allpage : Routes=[
							{path:"dashboard", component:DashboardComponent},
							{path:"item", component:ItemComponent},
              {path:"myuser", component:MyuserComponent},
              {path:"myapi", component:LocalapiComponent},
              {path:"useritem", component:UseritemComponent},
              {path:"profile", component:ProfileComponent}
						];


@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UsersignupComponent,
    DashboardComponent,
    MyuserComponent,
    ItemComponent,
    UseritemComponent,
    ProfileComponent,
    LocalapiComponent
  ],
  imports:[
    BrowserModule,
	FormsModule,
  ReactiveFormsModule,
  HttpModule,
  HttpClientModule,
  RouterModule.forRoot(allpage)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
