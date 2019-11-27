import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'list', loadChildren: () => import('./main/list/list.module').then(m => m.ListPageModule) },
      { path: 'home', loadChildren: () => import('./main/home/home.module').then(m => m.HomePageModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
