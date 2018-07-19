import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '../../node_modules/@ngrx/store';
import { addFlightsReducer } from './reducers/flights.reducer';
import { FlightsComponent } from './flights/flights.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({flights: addFlightsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
