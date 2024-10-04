# car-management-api

This project is the Backend component for our Car Management application, which provides a REST API to perform CRUD operations on a car entity.

It uses Quarkus, a Java Framework. If you want to learn more about Quarkus, please visit its website: <https://quarkus.io/>.

## Application architecture

This section will provide insights into the proposed architecture for this application

#### ECB Pattern

The project uses the ECB pattern to decouple the business logic from external part of the product like the database and the UI.
> The entity-control-boundary (ECB), or entity-boundary-control (EBC), or boundary-control-entity (BCE) is an architectural pattern used in use-case driven object-oriented programming that structures the classes composing high-level object-oriented source code according to their responsibilities in the use-case realization.

It is flat and easy to organize the application's components.

#### Code structure

```
db
   |-- changelog // Add database changes to a file
   |   |-- local // Used locally in the test context
   |   |   |-- 1.0.0 // Changesets: Define database changes
   |   |   |   |-- sql //SQL commands used to define data structures and modify data
   |   |-- master // Used in the pipeline to change a database in productive environment
   |   |   |-- 1.0.0 // Changesets: Define database changes
   |   |   |   |-- sql // SQL commands used to define data structures and modify data
   |-- init-db // Hold script to initialize the database structure
src
   |-- main
   |   |-- java
   |   |   |-- com
   |   |   |   |-- ctw
   |   |   |   |   |-- car  // Domain package
   |   |   |   |   |   |-- boundary // This provides the external boundary to communicate with the outside world (ie. exposes the REST API).
   |   |   |   |   |   |-- control // This contains a set of classes that provide business logic to validate, manipulate and transform data for internal/external use (e.g. DB persistence).
   |   |   |   |   |   |-- entity // Entities describes the main business concepts that we want to model in our application, both internally and externally.
   |   |-- resources    // Application configuration resource
   |-- test // Contains Test related resources (code, configurations) 
   |   |-- java
   |   |   |-- com
   |   |   |   |-- bmw
   |   |   |   |   |-- car
```

## Development environment setup

### Stack
In our project, we use the following main technical tooling:

* [Java 21](https://www.azul.com/downloads/#zulu)
* [Maven](https://maven.apache.org/)
* [Quarkus](https://quarkus.io/about/)
* [Postgres](https://www.postgresql.org/about/)
* [Docker](https://docs.docker.com/get-started/overview/)

## Running the application

> <span style="color: #800080">**_IMPORTANT_**</span>
>
> Docker must be installed, it should be up and running in the environment before trying to run the application.

There are two different ways to run the application.

### Containerized (Docker)

#### 1) Build the application
- Through the CLI/terminal execute the command below.<br/>
    ```
    ./mvnw clean package
    ```
  Test execution success messages and a build success message should be displayed as output

# THIS ONE !!!
#### 2) Build and startup the application's containers
- Through the CLI/terminal execute the command below (modified for linux [ docker compose>=v2 ]).<br/>
    ```
    sudo docker compose up --build -w
    ```
  The creates and starts up all the containers needed to run the application (Backend API, DB, including the DB initialization with liquibase). The application should be accessible in http://localhost:8080.


### Quarkus Dev mode

#### 1) Packaging the application

- The Backend API application can be packaged using the following command, in CLI/Terminal:
  ```shell script
  ./mvnw package
  ```
  This will create the base package to run the application.

#### 3) Running application in Dev mode
- Through the CLI/terminal execute the command below.<br/>
    ```
    ./mvnw quarkus:dev
    ```
  This will launch everything, including the Backend API application and the DB.
