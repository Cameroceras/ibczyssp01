import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./business/login/login/login.component";
import {HomeComponent} from "./layout/home/home.component";
import {HeadComponent} from "./layout/head/head.component";
import {DataComponent} from "./business/data/data/data.component";
import {SdkComponent} from "./business/sdk/sdk/sdk.component";
import {UserComponent} from "./business/user/user/user.component";
import {MaterialModule} from "@angular/material";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: HomeComponent},
]

@NgModule({
  imports: [
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
  ]
})
export class RoutersModule {
}
