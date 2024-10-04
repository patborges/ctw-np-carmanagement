
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CarService } from '../../service/car.service';
import { Car } from '../../model/car';

@Component({
    selector: 'app-booking',
    standalone: true,
    // From index.component.ts
    imports: [CommonModule, RouterModule, FormsModule],
    // -----------------------
    templateUrl: './booking.component.html',
    styleUrl: './booking.component.css'
})

export class BookingComponent {
    carLicense: string = '';
    cars: Car[] = [];

    constructor(private carService: CarService) { }

    /* bookingCar(): void {
      const bookingCar: Car = {
        id: '',
        //license: this.carLicense,
      }; */


    /* this.carService.bookingCar(bookingCar).subscribe((data: Car) => {
      // Assign the response data to the cars property
      this.cars = [data];
    }) */


    /* onSubmit(cars: Car[]) {
      // Submission logic here
      console.log('Form submitted:', cars);
    } */
}