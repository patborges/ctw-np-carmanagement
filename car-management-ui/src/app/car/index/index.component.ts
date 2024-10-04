import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarService } from '../../service/car.service';
import { Car } from '../../model/car';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  // An empty array to store the list of cars
  cars: Car[] = []

  // Inject the CarService into the component's constructor
  constructor(public carService: CarService) { }

  /**
   * This method is called when the component is initialized
   * It fetches the list of cars from the CarService and assigns it to the cars property
   */

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    // Call the getAll() method of the CarService to fetch the list of cars
    this.carService.getAll().subscribe((data: Car[]) => {
      // Assign the response data to the cars property
      this.cars = data;
    })
  }

  loadCars(): void {
    this.carService.getAll().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

  deleteCar(carId: string | null): void {
    console.log("cheguei");
    if(!carId) throw new Error("Errorr, no id para eliminar");

    this.carService.deleteCar(carId).subscribe(
      {
      next: () => {
        this.loadCars(); // Reload the cars after deletion to update the list
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  /* canReserveCar(car: Car): boolean {
    return car.isAvailable && !car.isBooked; 
  }  */
}