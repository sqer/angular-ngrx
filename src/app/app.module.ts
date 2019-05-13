import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '../../node_modules/@ngrx/store';
import { addFlightsReducer } from './reducers/flights.reducer';
import { FlightsComponent } from './flights/flights.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {FlightsService} from "./flights/flights.service";
import {FlightsEffects} from "./effects/flights-effects";

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({flights: addFlightsReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    EffectsModule.forRoot([FlightsEffects])
  ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
