package com.ctw.car.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

// Car details: brand, model, seats, license plate, engine type, autonomy, color, image

@Entity
@Table(name = "T_CAR")
public class CarEntity extends PanacheEntityBase {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "ID")
    public UUID id;

    @Column(name = "BRAND", nullable = false)
    public String brand;

    @Column(name = "MODEL", nullable = false)
    public String model;

    /*
     * @Column(name = "SEATS", nullable = false)
     * public Integer seats;
     */

    /*
     * @Column(name = "LICENSE_PLATE", nullable = false)
     * public String licensePlate;
     */

    @Enumerated(EnumType.STRING)
    @Column(name = "ENGINE_TYPE", nullable = false)
    public EngineType engineType;

    /*
     * @Column(name = "AUTONOMY", nullable = false)
     * public Integer autonomy;
     */

    /*
     * @Column(name = "COLOR", nullable = false)
     * public String color;
     */

    /*
     * @Column(name = "IMAGE", nullable = true)
     * public byte[] image;
     */

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "CREATED_AT", updatable = false, nullable = false)
    public LocalDateTime createdAt;


    @Column(name = "CREATED_BY", updatable = false)
    public String createdBy = "system"; // default value

    public Car toCar() {
        return new Car(this.id, this.brand, this.model, this.engineType);
    }

    public Object map(Object object) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'map'");
    }
}
