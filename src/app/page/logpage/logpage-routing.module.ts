import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogpagePage } from './logpage.page';

const routes: Routes = [
  {
    path: '',
    component: LogpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogpagePageRoutingModule {}
