import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserLockPage } from './user-lock';

@NgModule({
  declarations: [
    UserLockPage,
  ],
  imports: [
    IonicPageModule.forChild(UserLockPage),
  ],
})
export class UserLockPageModule {}
