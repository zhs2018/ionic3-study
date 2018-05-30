import {AppState} from './app.state';
import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from "@ionic/storage";

import {JPush} from "ionic3-jpush";
import {Push, PushObject, PushOptions} from "@ionic-native/push";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;// = 'MybotPage';

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public global: AppState,
    private storage: Storage,
    private jPush:JPush,
    private push:Push
  ) {
    this.initializeRootPage();

    this.initializeApp();

    this.initializeJPush();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // 设置主题
      this.global.set('theme', '');
      // this.global.set('theme', 'theme-light');

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initializeRootPage() {
    this.storage.get("isFirstIn").then((result) => {
      if (null == result) {
        result = true;
      }
      if (result) {
        this.storage.set("isFirstIn", false);
        this.rootPage = 'MybotPage';
      } else {
        this.rootPage = 'LoginPage';
      }
    });
  }

  initializeJPush(){
    //根据不同平台实现消息推送功能
    if(this.platform.is('ios')){
      this.initPushNotification();
    }else if(this.platform.is('android')){
      this.jPush.init();
      this.androidGetRegId();

      this.jPush.openNotification()
        .subscribe( res => {
          console.log('收到推送');
          console.log(res)
        });

      this.jPush.receiveNotification()
        .subscribe( res => {
          console.log('收到推送');
          console.log(res)
        });

      this.jPush.receiveMessage()
        .subscribe( res => {
          console.log('收到推送');
          console.log(res)
        });
    }else{
      //...
      console.log('其他平台不做处理。。。');
    }
  }


  //Android端获取RegestrationId，用于消息推送
  androidGetRegId(){
    this.jPush.getRegistrationID()
      .then(regId => {
        console.log('regId::' + regId)
      })
      .catch(err => alert(err))
  }

  //IOS端消息推送函数
  initPushNotification() {
    if(!this.platform.is('cordova')) {
      console.warn('Push notifications only work on a real device');
      return;
    }

    const options: PushOptions = {
      ios: {
        alert: true,
        badge: true,
        sound: true
      }
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((data: any) => {
      console.log('device token: ' + data.registrationId);
      this.storage.set('device token', data.registrationId);
    });
    pushObject.on('error').subscribe(error => {
      console.error('Error with Push plugin' + error);
    });
    pushObject.on('notification').subscribe((data: any) => {
      // log message
      console.log('Got a message: ' + data.message);
      // if user using app and push notification comes
      if(data.additionalData.foreground) {
        // for example show some alert in the app
        console.log('Notification received while App was in foreground');
      } else {
        // do something on push notification click
        console.log('Push notification clicked');
      }
    });
  }

}

