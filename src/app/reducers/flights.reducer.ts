import { Action } from '@ngrx/store';
import { Flight } from '../model/flight';

export const ADD_FLIGHT = 'ADD_FLIGHT';
export const REMOVE_FLIGHT = 'REMOVE_FLIGHT';

export function addFlightsReducer(state: Flight[] = [], action) {
  switch (action.type) {
    case ADD_FLIGHT:
        return [...state, action.payload];
    case REMOVE_FLIGHT:
        return state.filter(st=> st !== action.payload);
    default:
        return state;
    }
}