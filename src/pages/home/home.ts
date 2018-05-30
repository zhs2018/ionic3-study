import {Component, ViewChild} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, Slides} from 'ionic-angular';
import {AppShare} from "../../app/app.share";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slider') slider: Slides;
  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/imgs/lists/wishlist-1.jpg',
      songs: 2,
      private: false
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/imgs/lists/wishlist-2.jpg',
      songs: 4,
      private: false
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/imgs/lists/wishlist-3.jpg',
      songs: 5,
      private: true
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/imgs/lists/wishlist-4.jpg',
      songs: 12,
      private: true
    }
  ];

  constructor(private navCtrl: NavController,
              private actionSheetCtrl: ActionSheetController,
              private appShare: AppShare) {
  }

  pushPage(type: number) {
    switch (type) {
      case 1:
        this.navCtrl.parent.select(0);
        break;
      case 2:
        this.navCtrl.parent.select(1);
        break;
      case 3:
        this.navCtrl.parent.select(2);
        break;
      case 4:
        this.navCtrl.parent.select(3);
        break;
      default:
        console.log('empty...')
    }
  }

  share(event) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '分享',
      buttons: [
        {
          text: 'QQ好友',
          handler: () => {
            this.appShare.qqShare(0)
          }
        },
        {
          text: 'QQ空间',
          handler: () => {
            this.appShare.qqShare(1)
          }
        },
        {
          text: '微信好友',
          handler: () => {
            this.appShare.wxShare(0)
          }
        },
        {
          text: '朋友圈',
          handler: () => {
            this.appShare.wxShare(1)
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
