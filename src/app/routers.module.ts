import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import 'hammerjs';

import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./business/login/login/login.component";
import {HomeComponent} from "./layout/home/home.component";
import {HeadComponent} from "./layout/head/head.component";
import {DataComponent} from "./business/data/data/data.component";
import {SdkComponent} from "./business/sdk/sdk/sdk.component";
import {UserComponent} from "./business/user/user/user.component";
import {MaterialModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {DataModule} from "./business/data/module/data.module";
import {LoginModule} from "./business/login/module/login.module";
import {SdkModule} from "./business/sdk/module/sdk.module";
import {UserModule} from "./business/user/module/user.module";
import {MediamgComponent} from "./business/mediamg/mediamg/mediamg.component";
import {AdvertmgComponent} from "./business/advertmg/advertmg/advertmg.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin',
    component: HomeComponent,
    children:[
      {path:'data',component:DataComponent},
      {path:'sdk',component:SdkComponent},
      {path:'user',component:UserComponent},
      {path:'media',component:MediamgComponent},
      {path:'advert',component:AdvertmgComponent}
    ],
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    HomeComponent,
    HeadComponent,
    LoginComponent,
    DataComponent,
    SdkComponent,
    UserComponent,
    MediamgComponent,
    AdvertmgComponent,
  ]
})
export class RoutersModule {
}
