import {Component} from "@angular/core";
import {AppState} from "../model/app.state";
import {select, Store} from "@ngrx/store";
import {ADD_FLIGHT, REMOVE_FLIGHT} from "../reducers/flights.reducer";
import {Flight} from "../model/flight";
import {Subject} from "rxjs/index";
import {retryWhen, takeUntil} from "rxjs/internal/operators";
import {genericRetryStrategy} from "../reducers/genericRetryStrategy";
import {GET_ALL_FLIGHTS} from "../actions/flights-actions";

@Component({
  selector: 'flights',
  templateUrl: 'flights.component.html'
})

export class FlightsComponent {

  flights: Flight[] = [];
  private destroy$: Subject<void> = new Subject<void>();


  constructor(private store: Store<AppState>) {
    this.fetchDataFromEndpoint();
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
    this.store.select(state => state.flights).subscribe(result => this.flights = result);
  }

  private fetchDataFromEndpoint(): void {
    let waitForResult = false;
    this.store.pipe(
      select((state: AppState) => state.flights),
      takeUntil(this.destroy$),
      retryWhen(genericRetryStrategy())
    ).subscribe((flights: Flight[]) => {
      if (flights && flights.length > 0) {
        this.flights = flights;
      } else if (!waitForResult) {
        waitForResult = true;
        this.store.dispatch({type: GET_ALL_FLIGHTS});
      }
    });
  }
}
