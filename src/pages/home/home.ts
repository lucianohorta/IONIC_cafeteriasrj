import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaranjeirasPage } from '../laranjeiras/laranjeiras';
import { HideHeaderDirective } from '../../directives/hide-header/hide-header';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  } 

  // footerScrollConfig: HideHeaderDirective = { cssProperty: 'margin-bottom', maxValue: undefined };
  // headerScrollConfig: HideHeaderDirective = { cssProperty: 'margin-top', maxValue: 56 };

  goToLaranjeirasPage() {
    this.navCtrl.push(LaranjeirasPage);        
  }
 
  ionViewDidLoad() {
  }
 
}