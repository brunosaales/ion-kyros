import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserUnlockPage } from '../user-unlock/user-unlock';
import { LoginPage } from '../login/login';


/**
 * Generated class for the UserLockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-lock',
  templateUrl: 'user-lock.html',
})
export class UserLockPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  unlock() {
    this.navCtrl.push(UserUnlockPage);
  }

  login() {
    this.navCtrl.push(LoginPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLockPage');
  }

}
