import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import "hammerjs";
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./business/login/login/login.component";
import {HomeComponent} from "./layout/home/home.component";
import {HeadComponent} from "./layout/head/head.component";
import {DataComponent} from "./business/data/data/data.component";
import {SdkComponent} from "./business/sdk/sdk/sdk.component";
import {UserComponent} from "./business/user/user/user.component";
import {MaterialModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {MediamgComponent} from "./business/mediamg/mediamg/mediamg.component";
import {AdvertmgComponent} from "./business/advertmg/advertmg/advertmg.component";
import {DashboardComponent} from "./business/data/dashboard/dashboard/dashboard.component";
import {SearchComponent} from "./business/data/search/search/search.component";
import {MtableComponent} from "./business/data/mtable/mtable/mtable.component";
import {MediasearchComponent} from "./business/mediamg/mediasearch/mediasearch/mediasearch.component";
import {MediatableComponent} from "./business/mediamg/mediatable/mediatable/mediatable.component";
import {MediaaddComponent} from "./business/mediamg/mediaadd/mediaadd/mediaadd.component";
import {AdvertsearchComponent} from "./business/advertmg/advertsearch/advertsearch/advertsearch.component";
import {AdverttableComponent} from "./business/advertmg/advertable/adverttable/adverttable.component";
import {AdvertaddComponent} from "./business/advertmg/advertadd/advertadd/advertadd.component";
import {UseraccountComponent} from "./business/user/useraccount/useraccount/useraccount.component";
import {UserbaseComponent} from "./business/user/userbase/userbase/userbase.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin',
    component: HomeComponent,
    children: [
      {path: 'data', component: DataComponent},
      {path: 'sdk', component: SdkComponent},
      {path: 'user', component: UserComponent},
      {path: 'media', component: MediamgComponent},
      {path: 'advert', component: AdvertmgComponent},
      {path: 'addMedia', component: MediaaddComponent},
    ],
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
    MediamgComponent,
    DashboardComponent,
    SearchComponent,

    MtableComponent,
    MediasearchComponent,
    MediatableComponent,
    MediaaddComponent,

    AdvertmgComponent,
    AdverttableComponent,
    AdvertsearchComponent,
    AdvertaddComponent,

    UserComponent,
    UserbaseComponent,
    UseraccountComponent,
  ]
})
export class RoutersModule {
}
