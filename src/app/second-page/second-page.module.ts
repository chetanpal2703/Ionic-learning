import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondPagePageRoutingModule } from './second-page-routing.module';

import { SecondPagePage } from './second-page.page';
import { InnerPagePageModule } from '../inner-page/inner-page.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondPagePageRoutingModule,
    InnerPagePageModule
  ],
  declarations: [SecondPagePage]
})
export class SecondPagePageModule {}
