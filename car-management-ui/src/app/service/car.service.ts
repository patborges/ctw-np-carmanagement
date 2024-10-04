import { Injectable }               from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError }             from 'rxjs/operators';

import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiURL = "http://localhost:8080"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/car')

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Error handler
   *
   * @param error Error object
   * @return throwError
   */

  errorHandler(error: any) {
    let errorMessage = '';
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    return throwError(errorMessage);
  }

  // ---- TO SOLVE THE VIEW ISSUE ----
  /**
  * Get a car by ID
  *
  * @param carId ID of the car to be retrieved
  * @return response()
  */
  getCarById(carId: string | null): Observable<any> {
    const response = this.httpClient.get(this.apiURL + '/car/' + carId, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
      console.log(response);
      return response;
    }


  // -- ADDED THIS -------------------
  /**
   * Create a new car
   *
   * @param car Car object to be created
   * @return response()
   */

  createCar(car: Car): Observable<any> {
    const response = this.httpClient.post(this.apiURL + '/car/create', JSON.stringify(car), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
      
      return response;
  }
  /* createCar(car: Car): Observable<Car> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Car>(this.apiUrl, car, { headers: headers });
  } */


  /**
  * Edit a car
  *
  * @param id ID of the car to be edited
  * @param car Car object with updated values
  * @return response()
  */
  editCar(id: string, car: Car): Observable<any> {
    return this.httpClient.put(this.apiURL + '/car/edit/' + id, JSON.stringify(car), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Delete a car
   *
   * @param id ID of the car to be deleted
   * @return response()
   */
  deleteCar(id: string): Observable<any> {
    return this.httpClient.delete(this.apiURL + '/car/delete/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  /**
   * TODO: Book a car
   *
   */ 
  // bookingCar(car: Car): Observable<any> {}

}
