import {Flight} from "../model/flight";
import {GET_ALL_FLIGHTS, GET_ALL_FLIGHTS_SUCCESS} from "../actions/flights-actions";

export const ADD_FLIGHT = 'ADD_FLIGHT';
export const REMOVE_FLIGHT = 'REMOVE_FLIGHT';

export function addFlightsReducer(state: Flight[] = [], action) {
  switch (action.type) {
    case GET_ALL_FLIGHTS: {
      return {
        ...state,
      };
    }
    case GET_ALL_FLIGHTS_SUCCESS: {
      return action.payload;
    }
    case ADD_FLIGHT:
      return [...state, action.payload];
    case REMOVE_FLIGHT:
      return state.filter(st => st !== action.payload);
    default:
      return state;
  }
}
