import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../core/shared/shared.module';

const COMOPONENTS = [
  MainComponent
];
@NgModule({
  declarations: [
    ...COMOPONENTS
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
