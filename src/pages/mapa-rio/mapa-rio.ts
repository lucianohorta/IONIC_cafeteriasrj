import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';


@IonicPage()
@Component({
  selector: 'page-mapa-rio',
  templateUrl: 'mapa-rio.html',
})
export class MapaRioPage {

  map: any;
  public position1:leaflet.PointTuple;
  public position2:leaflet.PointTuple;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.position1= [-22.9411731,-43.1919014];   // MAYA CAFE
    this.position2= [-22.9386697,-43.1912132];   // CLARA CAFE
  }

  ionViewDidLoad() {
    this.leafletMap();
  }

  leafletMap(){
 
    this.map=leaflet.map('mapId', {
       center: this.position1,
       zoom: 12
    });

    // https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}
    // https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}
    // http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

    var position=leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Luckzzz Dev'
    }).addTo(this.map);


    // ------------- PARTE DO ICONE DO LEAFLET:
    var xicaraIcon = leaflet.icon({
      iconUrl: 'assets/imgs/iconemapa.png',
      shadowUrl: 'leaf-shadow.png',
  
      iconSize:     [38, 40], // size of the icon
      shadowSize:   [50, 50], // size of the shadow
      iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [8, -10] // point from which the popup should open relative to the iconAnchor
  });

  leaflet.marker([51.5, -0.09], {icon: xicaraIcon}).addTo(this.map);
// ------------ TERMINA AQUI /\


    // MAYA CAFE:
    var marker1 = new leaflet.Marker(this.position1);
    this.map.addLayer(marker1);
    marker1.bindPopup("<a href='https://goo.gl/maps/YbLQS9TfcbWHcuyt7'>Maya Café</a>");
//.openPopup() usar no final caso queira pin sempre aberto /\

    // CLARA CAFE:
    var marker2 = new leaflet.Marker(this.position2);
    this.map.addLayer(marker2);
    marker2.bindPopup("<p> Clara Café </p>");
  }

}
