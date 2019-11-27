import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';


const COMPONETS: any[] = [

];

const MODULES: any[] = [
  IonicModule,
];

const PIPES: any[] = [

];

const DIRECTIVES: any[] = [

];


@NgModule({
  declarations: [
    ...COMPONETS,
    ...PIPES,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONETS,
    ...DIRECTIVES
  ],
  providers: [
  ]
})
export class SharedModule { }
