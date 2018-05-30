import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, Slides} from 'ionic-angular';

/**
 * Generated class for the MybotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mybot',
  templateUrl: 'mybot.html',
})
export class MybotPage {

  @ViewChild('slider') slider: Slides;
  slideIndex = 0;
  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/imgs/lists/wishlist-1.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/imgs/lists/wishlist-2.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/imgs/lists/wishlist-3.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/imgs/lists/wishlist-4.jpg',
      description: 'Take a look at our amazing options',
    }
  ];

  constructor(public modalCtrl: ModalController,
              public navCtrl: NavController) {
  }

  onSlideChanged() {
    this.slideIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.slideIndex);
  }

  goToApp() {
    console.log('Go to App clicked');
    this.goToLoginPage();
  }

  skip() {
    console.log('Skip clicked');
    this.goToLoginPage();
  }

  goToLoginPage() {
    console.log('Go to login page');
    // this.navCtrl.push('HomePage');
    // let modal = this.modalCtrl.create('TabsPage');
    // modal.present();
    this.navCtrl.setRoot('LoginPage');

  }

  /* ionViewDidLoad() {
     console.log("1.0 ionViewDidLoad 当页面加载的时候触发，仅在页面创建的时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发");
   }

   ionViewWillEnter() {
     console.log("2.0 ionViewWillEnter 顾名思义，当将要进入页面时触发");
   }

   ionViewDidEnter() {
     console.log("3.0 ionViewDidEnter 当进入页面时触发");
     // this.slider.autoplayDisableOnInteraction = false;
   }

   ionViewWillLeave() {
     console.log("4.0 ionViewWillLeave 当将要从页面离开时触发");
   }

   ionViewDidLeave() {
     console.log("5.0 ionViewDidLeave 离开页面时触发");
   }

   ionViewWillUnload() {
     console.log("6.0 ionViewWillUnload 当页面将要销毁同时页面上元素移除时触发");
   }

   ionViewCanEnter() {
     console.log("ionViewCanEnter");
   }

   ionViewCanLeave() {
     console.log("ionViewCanLeave");
   }*/

}
