import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MapaRioPage } from './../mapa-rio/mapa-rio';
// import { LaranjeirasPage } from '../laranjeiras/laranjeiras';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  // tab2Root = LaranjeirasPage;
  tab2Root = MapaRioPage;

  constructor() {

  }
}
