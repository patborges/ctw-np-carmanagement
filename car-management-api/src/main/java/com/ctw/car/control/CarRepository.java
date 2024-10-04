package com.ctw.car.control;

import com.ctw.car.entity.Car;
import com.ctw.car.entity.CarEntity;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.Dependent;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Dependent
public class CarRepository implements PanacheRepository<CarEntity> {

    // This method fetches all cars from the database and converts them to the Car
    // object.
    public List<Car> fetchAllCars() {
        return listAll()
                .stream()
                .map(CarEntity::toCar)
                .collect(Collectors.toCollection(ArrayList::new));
    }

    @Transactional
    public CarEntity findByUUID(UUID id) {
        System.out.println(id);
        return getEntityManager().find(CarEntity.class, id);
    }

    
    // CRUD (Create, Read, Update, Delete)
    @Transactional
    public void save(Car car) {
        CarEntity carEntity = new CarEntity();
        carEntity.brand = car.getBrand();
        carEntity.model = car.getModel();
        carEntity.engineType = car.getEngineType();
        getEntityManager().persist(carEntity);
    }
    
    @Transactional
    public void delete(UUID id) {
        CarEntity.deleteById(id);
        //getEntityManager().remove(carEntity);
    }
    
    @Transactional
    public void update(Car car) {
        getEntityManager().createQuery("UPDATE CarEntity c SET c.brand = :brand, c.model = :model, c.engineType = :engineType WHERE c.id = :id")
            .setParameter("brand", car.getBrand())
            .setParameter("model", car.getModel())
            .setParameter("engineType", car.getEngineType())
            .setParameter("id", car.getId())
            .executeUpdate();
    }
}