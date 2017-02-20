import {Component, OnInit} from '@angular/core';
import {UserBean} from "../../../beans/user-bean";
import {LoggerUtils} from "../../../common/logger-utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: UserBean = new UserBean();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login(): void {
    LoggerUtils.i("login function ...........");
    // alert(JSON.stringify(this.loginUser));

    //do somathing to auth login
    // navigate to admin layoutE
    if ("admin" === this.loginUser.name && "admin" === this.loginUser.password) {
      this.router.navigate(["/admin"]);
    } else {
      alert("用户或者密码错误 ！");
    }
  }
}
