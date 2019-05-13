import {Actions, Effect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {catchError, map, switchMap} from "rxjs/operators";

import {HttpErrorResponse} from "@angular/common/http";
import {GET_ALL_FLIGHTS, GET_ALL_FLIGHTS_SUCCESS, GetFlightsSuccess} from "../actions/flights-actions";
import {Flight} from "../model/flight";
import {FlightsService} from "../flights/flights.service";

@Injectable()
export class FlightsEffects {

  constructor(private readonly actions$: Actions,
              private readonly flightsService: FlightsService) {
  }

  @Effect()
  allFlights$: Observable<Action> = this.actions$.pipe(
    ofType(GET_ALL_FLIGHTS),
    switchMap(() =>
      this.flightsService.getFlights().pipe(
        map((items: Flight[]) => new GetFlightsSuccess(GET_ALL_FLIGHTS_SUCCESS, items),
          catchError((error: HttpErrorResponse) => {
            console.error('Error executing http request for GET flights items: ', error);
            return null;
          })
        )
      )
    )
  );
}
