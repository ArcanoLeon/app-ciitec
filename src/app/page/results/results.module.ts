import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsPageRoutingModule
  ],
  declarations: [ResultsPage],
  providers: [ NgChartsModule ]
})
export class ResultsPageModule {}
