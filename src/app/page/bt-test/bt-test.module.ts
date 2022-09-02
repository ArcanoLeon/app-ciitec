import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BtTestPageRoutingModule } from './bt-test-routing.module';

import { BtTestPage } from './bt-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BtTestPageRoutingModule
  ],
  declarations: [BtTestPage]
})
export class BtTestPageModule {}
