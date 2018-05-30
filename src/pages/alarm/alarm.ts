import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {ToastService} from "../../providers/util/toast.service";
import {AppService, AppGlobal} from "../../app/app.service";

/**
 * Generated class for the AlarmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html',
})
export class AlarmPage {

  // path: string = 'http://192.168.1.199:8081/hldapp/api/alarm/alarmList?userId=179';
  listData: any;
  params = {
    userId: 179
  };

  constructor(private toast: ToastService,
              public appService: AppService) {
  }

  ionViewDidLoad() {
    this.appService.httpGet(AppGlobal.API.getAlarms, this.params, data => {
      console.debug(data);
      let msg: string = data.msg;
      let succ: boolean = data.success;
      if (succ) {
        this.listData = data['datas'];
      } else {
        this.toast.create(msg);
      }
    }, true);

  }

  /*  requestAjax(path: string) {
      this.http.get(path)
        .toPromise()
        .then(data => {

          console.log(data);
          let msg: string = data['msg'];
          let succ: boolean = data['success'];
          if (succ) {
            this.listData = data['datas'];
          } else {
            this.toast.create(msg);
          }

        })
        .catch(err => {
          console.log(err);
        });
    }*/

}
