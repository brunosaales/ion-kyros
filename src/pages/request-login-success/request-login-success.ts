import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RequestLoginKeyPage } from '../request-login-key/request-login-key';


/**
 * Generated class for the RequestLoginSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-login-success',
  templateUrl: 'request-login-success.html',
})
export class RequestLoginSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  requestLoginKey() {
    this.navCtrl.push(RequestLoginKeyPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestLoginSuccessPage');
  }

}
