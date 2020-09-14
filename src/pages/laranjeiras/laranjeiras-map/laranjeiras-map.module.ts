import { MayaCafePage } from './../estabelecimentos/maya-cafe/maya-cafe';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaranjeirasMapPage } from './laranjeiras-map';

@NgModule({
  declarations: [
    LaranjeirasMapPage,
    MayaCafePage
  ],
  imports: [
    IonicPageModule.forChild(LaranjeirasMapPage),
  ],
})
export class LaranjeirasMapPageModule {}





