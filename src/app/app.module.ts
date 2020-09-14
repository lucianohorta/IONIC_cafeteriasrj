import { MapaRioPage } from './../pages/mapa-rio/mapa-rio';
import { LaranjeirasPageModule } from '../pages/laranjeiras/laranjeiras.module';
import { LaranjeirasMapPage } from './../pages/laranjeiras/laranjeiras-map/laranjeiras-map';
import { MayaCafePage } from './../pages/laranjeiras/estabelecimentos/maya-cafe/maya-cafe';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { ConfigProvider } from '../providers/config/config';

import { HideHeaderDirective } from '../directives/hide-header/hide-header';

@NgModule({
  declarations: [
    MyApp,
    HideHeaderDirective,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapaRioPage,
    LaranjeirasMapPage,
    MayaCafePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LaranjeirasPageModule,
    IntroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapaRioPage,    
    LaranjeirasMapPage,
    MayaCafePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConfigProvider,
    Geolocation,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
