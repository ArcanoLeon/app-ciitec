import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./page/loader/loader.module').then( m => m.LoaderPageModule)
  },  {
    path: 'bt-test',
    loadChildren: () => import('./page/bt-test/bt-test.module').then( m => m.BtTestPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
