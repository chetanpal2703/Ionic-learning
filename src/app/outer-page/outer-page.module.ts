import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OuterPagePageRoutingModule } from './outer-page-routing.module';

import { OuterPagePage } from './outer-page.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OuterPagePageRoutingModule,ReactiveFormsModule
  ],
  declarations: [OuterPagePage]
})
export class OuterPagePageModule {}
