import { TracksModule } from './../tracks/tracks.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path:'', // http://localhost:4200/
  //   component:HomePageComponent
  // }
  {
    path:'tracks', 
    loadChildren:()=>import('@modules/tracks/tracks.module').then(m=>m.TracksModule)
  },
  {
    path:'favorities', 
    loadChildren:()=>import('@modules/favorites/favorites.module').then(m=>m.FavoritesModule)
  },
  {
    path:'history', 
    loadChildren:()=>import('@modules/history/history.module').then(m=>m.HistoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
