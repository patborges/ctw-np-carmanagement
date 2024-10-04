
// Car info: brand, model, seats, license plate, engine type, autonomy, color, image

package com.ctw.car.entity;

import java.util.UUID;

public class Car {

    private UUID id;
    private String brand;
    private String model;
    // private int seats;
    // private String licensePlate;
    private EngineType engineType;
    // private double autonomy;
    // private String color;
    // private byte[] image;

    // WHY ?
    // check ->
    // https://stackoverflow.com/questions/18993936/how-to-best-explain-and-use-empty-constructors-in-java

    public Car() {}

    public Car(String brand, String model, EngineType engineType) {
        this.brand = brand;
        this.model = model;
        this.engineType = engineType;
    }

    public Car(UUID id, String brand, String model, EngineType engineType) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.engineType = engineType;
    }

    static public Car fromEntity(CarEntity e) {
        return new Car(
                e.brand,
                e.model,
                e.engineType);
    }

    public UUID getId() {
        return id;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    /*
     * public int getSeats() {
     * return seats;
     * }
     */

    /*
     * public String getLicensePlate() {
     * return licensePlate;
     * }
     */

    public EngineType getEngineType() {
        return engineType;
    }

    /*
     * public double getAutonomy() {
     * return autonomy;
     * }
     */

    /*
     * public String getColor() {
     * return color;
     * }
     */

    /*
     * public byte[] getImage() {
     * return image;
     * }
     */

    // ---- SETTERS ----

    public void setId(UUID id) {
        this.id = id;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setModel(String model) {
        this.model = model;
    }

    /*
     * public void setSeats(int seats) {
     * this.seats = seats;
     * }
     */

    /*
     * public void setLicensePlate(String licensePlate) {
     * this.licensePlate = licensePlate;
     * }
     */

    public void setEngineType(EngineType engineType) {
        this.engineType = engineType;
    }

    /*
     * public void setAutonomy(double autonomy) {
     * this.autonomy = autonomy;
     * }
     */

    /*
     * public void setColor(String color) {
     * this.color = color;
     * }
     */

    /*
     * public void setImage(byte[] image) {
     * this.image = image;
     * }
     */

    @Override
    public String toString() {
        return this.id + ": B:" + this.brand + " M:" + this.model + " ET:" + this.engineType;
    }
}
