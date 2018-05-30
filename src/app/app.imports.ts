// Global state (used for theming)
import {AppState} from './app.state';
import {AppService} from "./app.service";
import {AppShare} from "./app.share";

// Providers
import {ToastService} from '../providers/util/toast.service';
import {AlertService} from '../providers/util/alert.service';
import {CameraProvider} from '../providers/util/camera.provider';
import {BackButtonService} from "../providers/util/backButton.service";

// Ionic native providers
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {Camera} from '@ionic-native/camera';
import {Diagnostic} from '@ionic-native/diagnostic';
import {Geolocation} from '@ionic-native/geolocation';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {JPush} from "ionic3-jpush";
import {Push} from "@ionic-native/push";

// Directives
import {SlidingDrawer} from '../components/sliding-drawer/sliding-drawer';
import {Autosize} from '../components/autosize/autosize';

// Modules
import {SwingModule} from 'angular2-swing';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from "@ionic/storage";

export const MODULES = [
  SwingModule,
  BrowserModule,
  HttpClientModule,
  IonicStorageModule.forRoot()
];

export const PROVIDERS = [
  AlertService,
  ToastService,
  AppState,
  CameraProvider,
  BackButtonService,
  AppService,
  AppShare,

  // Ionic native specific providers
  BarcodeScanner,
  Camera,
  Diagnostic,
  Geolocation,
  StatusBar,
  SplashScreen,
  JPush,
  Push
];

export const DIRECTIVES = [
  SlidingDrawer,
  Autosize,
];
