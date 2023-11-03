import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFormSendDataPage } from './test-form-send-data.page';

const routes: Routes = [
  {
    path: '',
    component: TestFormSendDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFormSendDataPageRoutingModule {}
