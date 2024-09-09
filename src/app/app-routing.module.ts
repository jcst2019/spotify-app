import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =  [ //TODO: router-outlet (Padre)
  {
    path: '',//TODO loaclhost:4200 (Private) 🔴🔴
    component: HomePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
