import {Component, ViewChild} from '@angular/core';
import {IonicPage, Platform, Tabs} from 'ionic-angular';
import {BackButtonService} from "../../providers/util/backButton.service";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabRoots: Object[];
  @ViewChild('myTabs') tabRef: Tabs;

  constructor(public backButtonService: BackButtonService,
              private platform: Platform) {
    this.tabRoots = [
      {
        root: 'HomePage',
        tabTitle: '首页',
        tabIcon: 'home'
      },
      {
        root: 'GatherPage',
        tabTitle: '设备',
        tabIcon: 'reorder'
      },
      {
        root: 'AlarmPage',
        tabTitle: '报警',
        tabIcon: 'warning'
      },
      {
        root: 'SettingsPage',
        tabTitle: '设置',
        tabIcon: 'person'
      }
    ];

    this.platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(this.tabRef);
    });

  }

}
