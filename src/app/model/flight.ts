export class Flight {
    flightNumber: string;
    airlineId: string;
    departureAirport: string;
    arrivalAirport: string;
    scheduledTime: Date;
    estimatedTime: Date;

    constructor(airlineId: string, flightNumber: string){
        this.airlineId=airlineId;
        this.flightNumber=flightNumber;
    }
}