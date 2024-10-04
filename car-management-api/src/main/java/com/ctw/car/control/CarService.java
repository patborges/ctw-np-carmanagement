package com.ctw.car.control;

import com.ctw.car.entity.Car;
import com.ctw.car.entity.CarEntity;

import jakarta.enterprise.context.Dependent;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Dependent
public class CarService {
    private final CarRepository carRepository;

    @Inject
    public CarService(final CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    // This method returns a list of all cars
    public List<Car> getCars() {
        return carRepository.fetchAllCars();
    }

    // This method returns a car by its ID
    public Car getCarByID(UUID id) {
        System.out.println(id);
        return carRepository.findByUUID(id).toCar();
    }

    /**
     * Creates a new car
     *
     * @param car the car to create
     * @return the created car
     */
    public Car createCar(Car car) {
        carRepository.save(car);
        return car;
    }

    /**
     * Updates an existing car
     *
     * @param id  the ID of the car to update
     * @param car the updated car information
     * @return the updated car
     */
    public Car updateCar(UUID id, Car car) {
        Car existingCar = getCarByID(id);
        existingCar.setBrand(car.getBrand());
        existingCar.setModel(car.getModel());
        existingCar.setEngineType(car.getEngineType());
        carRepository.update(existingCar);
        return existingCar;
    }

    /**
     * Deletes a car by its ID
     *
     * @param id the ID of the car to delete
     * @return true if the car was deleted, false otherwise
     */
    public void deleteCar(UUID id) {
        //CarEntity carEntity = carRepository.findByUUID(id);
        carRepository.delete(id);
    }

}
