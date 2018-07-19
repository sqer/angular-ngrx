import { Component } from '@angular/core';
import { AppState } from '../model/app.state';
import { Store } from '@ngrx/store';
import { ADD_FLIGHT, REMOVE_FLIGHT } from '../reducers/flights.reducer';
import { Flight } from '../model/flight';
import { getTestBed } from '@angular/core/testing';

@Component({
    selector: 'flights',
    templateUrl: 'flights.component.html'
})

export class FlightsComponent {

    flights: Flight[] = [];

    constructor(private store: Store<AppState>) {
        this.selectData();
    }

    addFlight() {
        this.store.dispatch({
            type: ADD_FLIGHT,
            payload: new Flight("LH", "100")
        });
        this.selectData();
    }

    removeFlight(flight: Flight) {
        this.store.dispatch({
            type: REMOVE_FLIGHT,
            payload: flight
        });
        this.selectData();
    }

    private selectData(): void {
      this.store.select(state => state.flights).subscribe(result => this.flights=result);
    }
}