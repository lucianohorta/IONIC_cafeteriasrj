import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaRioPage } from './mapa-rio';

@NgModule({
  declarations: [
    MapaRioPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaRioPage),
  ],
})
export class MapaRioPageModule {}
