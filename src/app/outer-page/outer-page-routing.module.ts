import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OuterPagePage } from './outer-page.page';

const routes: Routes = [
  {
    path: '',
    component: OuterPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OuterPagePageRoutingModule {}
