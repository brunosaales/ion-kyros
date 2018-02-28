import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { ConfirmInfoPage } from '../pages/confirm-info/confirm-info';
import { LoginPage } from '../pages/login/login';
import { RequestLoginPage } from '../pages/request-login/request-login';
import { RequestLoginSuccessPage } from '../pages/request-login-success/request-login-success';
import { RequestLoginKeyPage } from '../pages/request-login-key/request-login-key';
import { RequestUnlockPage } from '../pages/request-unlock/request-unlock';
import { UserLockPage } from '../pages/user-lock/user-lock';
import { UserUnlockPage } from '../pages/user-unlock/user-unlock';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'Confirme os dados', component: ConfirmInfoPage },
      { title: 'Login', component: LoginPage },
      { title: 'Recuperar login', component: RequestLoginPage },
      { title: 'Recuperação de login - sucesso', component: RequestLoginSuccessPage },
      { title: 'Recuperação de login - chave', component: RequestLoginKeyPage },
      { title: 'Solicitação de desbloqueio', component: RequestUnlockPage },
      { title: 'Usuário Bloqueado', component: UserLockPage },
      { title: 'Desbloquear Usuário', component: UserUnlockPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
