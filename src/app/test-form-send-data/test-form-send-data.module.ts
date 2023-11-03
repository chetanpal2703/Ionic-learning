import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFormSendDataPageRoutingModule } from './test-form-send-data-routing.module';

import { TestFormSendDataPage } from './test-form-send-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFormSendDataPageRoutingModule
  ],
  declarations: [TestFormSendDataPage]
})
export class TestFormSendDataPageModule {}
