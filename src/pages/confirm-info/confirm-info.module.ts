import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmInfoPage } from './confirm-info';

@NgModule({
  declarations: [
    ConfirmInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmInfoPage),
  ],
})
export class ConfirmInfoPageModule {}
