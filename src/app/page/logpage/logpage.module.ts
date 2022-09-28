import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogpagePageRoutingModule } from './logpage-routing.module';

import { LogpagePage } from './logpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogpagePageRoutingModule
  ],
  declarations: [LogpagePage]
})
export class LogpagePageModule {}
