import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConfirmInfoPage } from '../pages/confirm-info/confirm-info';
import { LoginPage } from '../pages/login/login';
import { RequestLoginPage } from '../pages/request-login/request-login';
import { RequestLoginSuccessPage } from '../pages/request-login-success/request-login-success';
import { RequestLoginKeyPage } from '../pages/request-login-key/request-login-key';
import { RequestUnlockPage } from '../pages/request-unlock/request-unlock';
import { UserLockPage } from '../pages/user-lock/user-lock';
import { UserUnlockPage } from '../pages/user-unlock/user-unlock';
import { UserServiceProvider } from '../providers/user-service/user-service';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ConfirmInfoPage,
    LoginPage,
    RequestLoginPage,
    RequestLoginSuccessPage,
    RequestLoginKeyPage,
    RequestUnlockPage,
    UserLockPage,
    UserUnlockPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ConfirmInfoPage,
    LoginPage,
    RequestLoginPage,
    RequestLoginSuccessPage,
    RequestLoginKeyPage,
    RequestUnlockPage,
    UserLockPage,
    UserUnlockPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
