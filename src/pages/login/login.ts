import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import { PasswordPage } from '../password/password';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider: UserServiceProvider) {
    // this.getUsers();
  }

    user: any;

    // getUsers() {
    //   this.userServiceProvider.getUsers()
    //   .then(data => {
    //     this.users = data;
    //   });
    // }

    // user =[];
    //
    // data = this.user[
    //   {
    //     "username":"bruno",
    //     "password":"bruno",
    //     "senhaApp":"bruno",
    //     "usuarioApp":"bruno",
    //   }
    // ];

    // login() {
    //   this.userServiceProvider.login()
    //   .then(data => {
    //     this.user = data;
    //   });
    // }

    password() {
      this.navCtrl.push(PasswordPage);
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }

}
