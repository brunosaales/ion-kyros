import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { UserUnlockPage } from '../user-unlock/user-unlock';


/**
 * Generated class for the RequestUnlockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-unlock',
  templateUrl: 'request-unlock.html',
})
export class RequestUnlockPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

  userUnlock() {
    this.navCtrl.push(UserUnlockPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestUnlockPage');
  }

}
