import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MybotPage} from './mybot';

@NgModule({
  declarations: [
    MybotPage,
  ],
  imports: [
    IonicPageModule.forChild(MybotPage),
  ],
  exports: [
    MybotPage
  ],
})
export class MybotPageModule {
}
