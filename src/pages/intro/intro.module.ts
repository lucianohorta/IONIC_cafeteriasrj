import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage } from './intro';
import { Component } from '@angular/core';

@NgModule({
  declarations: [
    IntroPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroPage),
  ],
})
@Component({
  selector: 'slides-example'
})
export class IntroPageModule {
  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  // slideOpts = {
  //   initialSlide: 1,
  //   speed: 400
  // };
  constructor() {}
}