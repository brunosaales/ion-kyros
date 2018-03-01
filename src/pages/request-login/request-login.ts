import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RequestLoginSuccessPage } from '../request-login-success/request-login-success';


/**
 * Generated class for the RequestLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-login',
  templateUrl: 'request-login.html',
})
export class RequestLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  requestLoginSuccess() {
    this.navCtrl.push(RequestLoginSuccessPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestLoginPage');
  }

}
