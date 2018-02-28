import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestLoginSuccessPage } from './request-login-success';

@NgModule({
  declarations: [
    RequestLoginSuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestLoginSuccessPage),
  ],
})
export class RequestLoginSuccessPageModule {}
