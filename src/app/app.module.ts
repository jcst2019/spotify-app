import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [//Declaraciones, componentes, directivas , pipes
    AppComponent
  ],
  imports: [ //Solo se importan otros moduloes
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
