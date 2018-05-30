import {Component} from '@angular/core';
import {IonicPage, NavController, ModalController} from 'ionic-angular';

import {HttpClient} from "@angular/common/http";

import {ToastService} from "../../providers/util/toast.service";
import {AlertService} from "../../providers/util/alert.service";

import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {AppService, AppGlobal} from "../../app/app.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public backgroundImage = 'assets/imgs/background/background-5.jpg';
  path: string = "http://192.168.1.199:8081/hldapp/api/login";

  public loginForm: FormGroup;

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              public http: HttpClient,
              public toast: ToastService,
              public alert: AlertService,
              private formBuilder: FormBuilder,
              public appService: AppService) {

    this.loginForm = this.formBuilder.group({
      username: [
        'test',
        Validators.compose([Validators.required])
      ],
      password: [
        '123',
        Validators.compose([Validators.required])
      ]

      /*      username: [
              'chunkylover53@aol.com',
              Validators.compose([Validators.pattern(regexValidators.email), Validators.required])
            ],
            password: [
              'NoM@reSecrets1',
              Validators.compose([Validators.pattern(regexValidators.password), Validators.required])
            ]*/
    });
  }

  /**
   * 登录，使用formGroup提交表单
   */

  logIn() {
    var params = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value
    }

    if (this.loginForm.valid) {
      this.appService.httpGet(AppGlobal.API.getLogin, params, data => {
        console.debug(data);
        let msg: string = data.msg;
        let succ: boolean = data.success;
        if (succ) {
          let modal = this.modalCtrl.create('TabsPage');
          modal.present();
        } else {
          this.alert.presentErrorAlert(msg);
        }
      }, true);
    }

  }


  /**
   * 登录。不使用formGroup的方式
   * @param {HTMLInputElement} username
   * @param {HTMLInputElement} password
   */

  /*  logIn(
      username: HTMLInputElement,
      password: HTMLInputElement
    ) {

      if (0 == username.value.length) {
        this.toast.create("账号为空！");
        return;
      }
      if (0 == password.value.length) {
        this.alert.presentErrorAlert("密码为空！");
        return;
      }

      const loading = this.loadingCtrl.create({
        duration: 3000
      });

      loading.onDidDismiss(() => {
        console.log("in loading didDismiss...")
        // const alert = this.alertCtrl.create({
        //   title: 'Logged in!',
        //   subTitle: 'Thanks for logging in.',
        //   buttons: ['Dismiss']
        // });
        // alert.present();
      });

      loading.present()
        .then(() => {
          console.log("in loading present...")
          this.loginAjax(this.path + "?username=" + username.value + "&password=" + password.value, loading);
        })
        .catch(err => {
          console.log(err);
        });

      setTimeout(() => {
        loading.dismissAll();
      }, 4000);

    }*/


  /*
  loginAjax(path: string, loading: Loading) {
    this.http.get(path)
      .toPromise()
      .then(data => {

        console.log(data);
        console.log(data['msg']);
        console.log('查询是否成功？::' + data['success']);
        let msg: string = data['msg'];
        let succ: boolean = data['success'];
        if (succ) {
          // this.navCtrl.setRoot('TabsPage');
          let modal = this.modalCtrl.create('TabsPage');
          loading.dismissAll();
          modal.present();
        } else {
          loading.dismissAll();
          this.alert.presentErrorAlert(msg);
        }

      })
      .catch(err => {
        console.log(err);
      });

    /!*    this.http.get(this.path).subscribe(data => {
          console.log(data);
          console.log(data['msg']);
          console.log('查询是否成功？::' + data['success']);
          var msg: string = data['msg'];
          var succ: boolean = data['success'];
          if (succ) {
            // this.navCtrl.setRoot('TabsPage');
            let modal = this.modalCtrl.create('TabsPage');
            loading.dismissAll();
            modal.present();
          } else {
            loading.dismissAll();
            this.alert.presentErrorAlert(msg);
          }
        });
    *!/
  }
  */

}
