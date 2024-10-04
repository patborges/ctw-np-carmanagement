
// Import necessary Angular modules
import { Component, OnInit }            from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { CarService } from '../../service/car.service';
import { Car }        from '../../model/car';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
// Defining class
export class ViewComponent implements OnInit {

  // Defining properties
  public carId: string | null;
  public car: Car | null;

  constructor(private carService: CarService, private route: ActivatedRoute) {
    this.carId = null;
    this.car = null;
  }

  ngOnInit(): void {
    // Retrieving carId from the route parameter /:carId/
    this.carId = this.route.snapshot.paramMap.get('carId');

    this.carService.getCarById(this.carId)
      .subscribe(
        (car) => {
          this.car = car;
        });
  }
}