import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }  from '@angular/forms';

import { CarService } from '../../service/car.service';
import { Car }        from '../../model/car';

@Component({
  selector: 'app-create',
  standalone: true,
  // From index.component.ts
  imports: [CommonModule, RouterModule, FormsModule],
  // -----------------------
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

// number - whole numbers and floating point values
export class CreateComponent {
  carBrand: string = '';
  carModel: string = '';  
  //carSeats: number = 0;
  //carLicense: string = '';
  carEngTyp: string = ''; // (?) Or Option
  //carAutonomy: number = 0;
  //carColor: string = '';
  // carImg: File; // What format/ type (?)
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  createCar(): void {
    const newCar: Car = {
      id: null,
      brand: this.carBrand,
      model: this.carModel,
      //seats: this.carSeats,
      //license: this.carLicense,
      engineType: this.carEngTyp,
      //autonomy: this.carAutonomy,
      //color: this.carColor,
      // image: this.carImg
    };
    
       
    this.carService.createCar(newCar).subscribe((data: Car) => {
      console.log(data);
      // Assign the response data to the cars property
      this.cars = [data];
    })
  }

}