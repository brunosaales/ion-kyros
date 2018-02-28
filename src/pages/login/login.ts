import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';


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

    login() {
      // debugger;
      this.userServiceProvider.login()
      .then(data => {
        this.user = data;
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
