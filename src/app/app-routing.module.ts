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
  },
  {
    path: 'bt-test',
    loadChildren: () => import('./page/bt-test/bt-test.module').then( m => m.BtTestPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'profile',
    loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./page/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'logpage',
    loadChildren: () => import('./page/logpage/logpage.module').then( m => m.LogpagePageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./page/results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./page/questions/questions.module').then( m => m.QuestionsPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
