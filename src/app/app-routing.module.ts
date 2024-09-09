import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =  [ //TODO: router-outlet (Padre)
  {
    path: 'auth', //TODO (Public) Login, Register, Forgot...
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: '',// localhost:4200    TODO (Private) 🔴🔴
    // component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule),
    // canActivate: [SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
