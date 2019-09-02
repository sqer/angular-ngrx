import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { addFlightsReducer } from './reducers/flights.reducer';
import { FlightsComponent } from './flights/flights.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FlightsService } from './flights/flights.service';
import { FlightsEffects } from './effects/flights-effects';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ flights: addFlightsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([FlightsEffects])
  ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
