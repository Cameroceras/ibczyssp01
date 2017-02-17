import {Component, OnInit} from '@angular/core';
import {UserBean} from "../../../beans/user-bean";
import {LoggerUtils} from "../../../common/logger-utils";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: UserBean = new UserBean();

  constructor() {
  }

  ngOnInit() {
  }

  login(): void {
    LoggerUtils.i("login function ...........");

  }

}
