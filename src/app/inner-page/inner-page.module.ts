import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InnerPagePageRoutingModule } from './inner-page-routing.module';
import { CustomStyleDirective } from './custom-style.directive';
import { InnerPagePage } from './inner-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InnerPagePageRoutingModule,
    
  ],
  declarations: [InnerPagePage,CustomStyleDirective,]
})
export class InnerPagePageModule {}
