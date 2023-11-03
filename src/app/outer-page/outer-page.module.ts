import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OuterPagePageRoutingModule } from './outer-page-routing.module';

import { OuterPagePage } from './outer-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OuterPagePageRoutingModule
  ],
  declarations: [OuterPagePage]
})
export class OuterPagePageModule {}
