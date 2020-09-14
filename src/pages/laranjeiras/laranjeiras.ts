import { MayaCafePage } from './estabelecimentos/maya-cafe/maya-cafe';
import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular';
import { LaranjeirasMapPage } from './laranjeiras-map/laranjeiras-map';

@Component({
  selector: 'page-laranjeiras',
  templateUrl: 'laranjeiras.html',
})
export class LaranjeirasPage {
  public bairroLaranjeiras:string = "Laranjeiras";    // aqui vai receber os bairros (por api sei la)

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToLaranjeirasMap() {
    this.navCtrl.push(LaranjeirasMapPage);
  }

  goToMayaCafe() {
    this.navCtrl.push(MayaCafePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaranjeirasPage');
  }


}
