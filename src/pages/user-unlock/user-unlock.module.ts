import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserUnlockPage } from './user-unlock';

@NgModule({
  declarations: [
    UserUnlockPage,
  ],
  imports: [
    IonicPageModule.forChild(UserUnlockPage),
  ],
})
export class UserUnlockPageModule {}
