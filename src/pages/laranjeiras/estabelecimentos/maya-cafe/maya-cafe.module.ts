import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MayaCafePage } from './maya-cafe';

@NgModule({
  declarations: [
    MayaCafePage,
  ],
  imports: [
    IonicPageModule.forChild(MayaCafePage),
  ],
})
export class MayaCafePageModule {}
