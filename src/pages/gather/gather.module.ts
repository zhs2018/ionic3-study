import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GatherPage } from './gather';

@NgModule({
  declarations: [
    GatherPage,
  ],
  imports: [
    IonicPageModule.forChild(GatherPage),
  ],
})
export class GatherPageModule {}
