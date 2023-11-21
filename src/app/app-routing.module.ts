import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inner-page',
    loadChildren: () => import('./inner-page/inner-page.module').then( m => m.InnerPagePageModule)
  },
  {
    path: 'outer-page',
    loadChildren: () => import('./outer-page/outer-page.module').then( m => m.OuterPagePageModule)
  },
  {
    path: 'test-form-send-data',
    loadChildren: () => import('./test-form-send-data/test-form-send-data.module').then( m => m.TestFormSendDataPageModule)
  },
  {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then( m => m.FirstPagePageModule)
  },
  {
    path: 'second-page',
    loadChildren: () => import('./second-page/second-page.module').then( m => m.SecondPagePageModule)
  },
  // {
  //   path: 'outer-page',
  //   loadChildren: () => import('./outer-page/outer-page.module').then( m => m.OuterPageModule)
  // }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
