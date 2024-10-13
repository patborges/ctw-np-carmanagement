import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CarService } from '../../service/car.service';
import { Car } from '../../model/car';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  carId: string | null = '';
  carBrand: string = '';
  carModel: string = '';
  //carSeats: number = 0;
  //carLicense: string = '';
  carEngTyp: string = ''; 
  //carAutonomy: number = 0;
  //carColor: string = '';
  // carImg: File; // Exists (?)

  constructor(private carService: CarService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('carId');

    this.carService.getCarById(this.carId).subscribe((data: Car) => {
      
      this.carBrand = data.brand;
      this.carModel = data.model;
      this.carEngTyp = data.engineType;    
    });
  }

  saveCar(): void {
     let editCar = {
      id: this.carId,
      brand: this.carBrand,
      model: this.carModel,
      //seats: this.carSeats,
      //license: this.carLicense,
      engineType: this.carEngTyp,
      //autonomy: this.carAutonomy,
      //color: this.carColor,
      // image: this.carImg
    };

    if(!editCar.id) {
      throw new Error('Não existe id!');
    }

    this.carService.editCar(editCar.id, editCar).subscribe((data: Car) => {
      // Assign the response data to the cars property
      this.carBrand = data.brand;
      this.carModel = data.model;
      this.carEngTyp = data.engineType;    
    })
  }
}