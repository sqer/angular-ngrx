import {Injectable} from "@angular/core";
import {Flight} from "../model/flight";
import {Observable, of} from "rxjs/index";

@Injectable()
export class FlightsService {

  flights: Flight[] = [new Flight("LH", "100")];


  getFlights(): Observable<Flight[]> {
    return of(this.flights);
  }

}
