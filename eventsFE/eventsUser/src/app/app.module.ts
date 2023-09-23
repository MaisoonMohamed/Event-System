import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNewEventComponent } from './create-new-event/create-new-event.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServices } from './Shared/ApiServices';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
