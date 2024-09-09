import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
// import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'', // http://localhost:4200/
    component:SideBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
