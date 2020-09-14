import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MayaCafePage } from '../estabelecimentos/maya-cafe/maya-cafe';
import { Geolocation } from '@ionic-native/geolocation/';
import 'rxjs/add/operator/map';

declare var google:any;


@IonicPage()
@Component({
  selector: 'page-laranjeiras-map',
  templateUrl: 'laranjeiras-map.html',
})
export class LaranjeirasMapPage {
  @ViewChild('map') mapRef: ElementRef;
  map: any;
  markers: any;
  platform: any;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private alertCtrl: AlertController,
              private geolocation: Geolocation) {   
  }


  // -------------------------------- Cria alerta estilizado pra ligar GPS
  openAlertGPS() {    
    let alertGPS = this.alertCtrl.create({
      title: "Por favor,",
      message: "Ligue seu GPS! :)",
      cssClass: 'alertCustomCss',
      buttons:[
      //   {
      //     text: "Cancelar"
      //   },
        {
          text: "OK"
        }]
    });
    alertGPS.present();
  }


  initPage() {
    this.geolocation.getCurrentPosition().then(
      (result) => {
      this.initMap(result.coords.latitude, result.coords.longitude);
    }, err =>{ 
      alert('Error message : '+ err.message);
    })
  }

  ionViewWillEnter(){
    this.initPage();
 }

  initMap(lat: number, lng: number) {
    var latLng = new google.maps.LatLng(lat, lng);    // pega sua posição do GPS


    var mapOptions = {       // OPCOES DO MAPA: ONDE CENTRALIZA O MAPA
      center:latLng,
      zoom:12,
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
      // streetViewControl:false,
      // disableDefaultUI: true,
      mapTypeId: 'roadmap' // 'terrain', 'hybrid', 'satellite'
    }


    var element = document.getElementById('map');
    this.map = new google.maps.Map(element, mapOptions);


    var minhaposicao = new google.maps.Marker({         // pega posição do seu GPS
      position: latLng,
      // title: 'Meu local', // mouse on hover - só pra pc
      icon: 'assets/imgs/location.png'
    })
    minhaposicao.setMap(this.map);


    var infowindowGps = new google.maps.InfoWindow({          // exibe infowindow se clicar no seu local
      content: '<div><span>Te encontramos!</span></div>',
      // maxWidth: 300
    });
    minhaposicao.addListener('click', () => {
      infowindowGps.open(this.map, minhaposicao);
    });


    var iconecafeteria = 'assets/imgs/iconemapa2.png';     // seta icone padrao das cafeterias


    var cafeteria1 = new google.maps.Marker({              // cafeteria1
      position: {lat: -22.9411731, lng: -43.1919014},
      title: 'Meu local',
      animation: google.maps.Animation.DROP,
      icon: iconecafeteria
    })
    cafeteria1.setMap(this.map);





   // Places
  function getNearbyPlaces(position) {
    let request = {
    location: position,
    rankBy: google.maps.places.RankBy.DISTANCE,
    keyword: 'sushi'
    };

    this.service = new google.maps.places.PlacesService(this.map);
    this.service.nearbySearch(request, nearbyCallback);
}

// Handle the results (up to 20) of the Nearby Search
function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      this.createMarkers(results);
    }
}

// Call Places Nearby Search on user's location
getNearbyPlaces(latLng);


/* TODO: Step 3C, Generate markers for search results */
// Set markers at the location of each place result
function createMarkers(places) {
  places.forEach(place => {
  let marker = new google.maps.Marker({
      position: place.geometry.location,
      map: this.map,
      title: place.name
  });



  /* TODO: Step 4B: Add click listeners to the markers */

  // Adjust the map bounds to include the location of this marker
  this.bounds.extend(place.geometry.location);
  });
  /* Once all the markers have been placed, adjust the bounds of the map to
  * show all the markers within the visible area. */
  this.map.fitBounds(this.bounds);
}
/* TODO: Step 4C: Show place details in an info window */



 
  }  // fim do initMap


}  // fim da Page