import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InnerPagePageRoutingModule } from './inner-page-routing.module';
import { CustomStyleDirective } from './custom-style.directive';
import { InnerPagePage } from './inner-page.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InnerPagePageRoutingModule,
    
  ],
  declarations: [InnerPagePage,CustomStyleDirective,],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class InnerPagePageModule {}
