package com.ctw.car.boundary;

import com.ctw.car.control.CarService;
import com.ctw.car.entity.Car;
import com.ctw.car.entity.Routes;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.UUID;

@Path(Routes.CAR)
@ApplicationScoped
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CarResource {

    private final CarService carService;

    @Inject
    public CarResource(final CarService carService) {
        this.carService = carService;
    }

    // Method to handle GET requests to retrieve a list of cars
    @GET
    public Response getCars(
            @QueryParam("brand") String brand
    ) {
        List<Car> cars = this.carService.getCars();
        return Response.status(200).entity(cars).build();
    }

    // Method to handle GET requests to retrieve a single car by ID
    @GET
    @Path("{id}")
    public Response getCar(UUID id) {
        // should this return a copy of car ?
        Car car = this.carService.getCarByID(id);
        return Response.status(200).entity(car).build();
    }

    // Do i need this?
    // @Consumes(MediaType.APPLICATION_JSON)
    // Method to handle POST requests to create a new car
    @POST
    @Path("create")
    public Response createCar(Car car) {
        Car createdCar = this.carService.createCar(car);
        return Response.status(201).entity(createdCar).build();
    }
         
    // Method to handle PUT requests to update a car
    @PUT
    @Path("edit/{id}") // return Response.status(200).entity(car).build();
    public Response updateCar(@PathParam("id") UUID id, Car car) {
        Car updatedCar = this.carService.updateCar(id, car);
        return Response.status(200).entity(updatedCar).build();
    }

    // Method to handle DELETE requests to delete a car
    @DELETE
    @Path("delete/{id}")
    public Response deleteCar(@PathParam("id") UUID id) {
        
        try {
            this.carService.deleteCar(id);
            return Response.status(204).build();
        } catch(Exception e) {
            return Response.status(500).build();
        }
        
    }
}
