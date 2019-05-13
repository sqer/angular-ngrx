import {Action} from "@ngrx/store";
import {Flight} from "../model/flight";

export const GET_ALL_FLIGHTS: string = 'GET_ALL_FLIGHTS';
export const GET_ALL_FLIGHTS_SUCCESS: string = 'GET_ALL_FLIGHTS_SUCCESS';
export const ADD_FLIGHT: string = 'ADD_FLIGHT';
export const ADD_FLIGHT_SUCCESS: string = "ADD_FLIGHT_SUCCESS";
export const REMOVE_FLIGHT: string = 'REMOVE_FLIGHT';
export const REMOVE_FLIGHT_SUCCESS: string = "REMOVE_FLIGHT_SUCCESS";

export abstract class AbstractFlightsAction implements Action {
  type: string;
  payload?: any;
}

export class GetFlightsSuccess implements AbstractFlightsAction {
  constructor(public type: string, public payload: Flight[]) {
  }
}

export class AddOrRempveFlightsSuccess implements AbstractFlightsAction {
  constructor(public type: string, public payload: Flight) {
  }
}
