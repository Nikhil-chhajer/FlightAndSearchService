# Welcome to flight Service

# project setup
- clone projet to your local machine
- exceute`npm install` on the sam path as your root directory of the download project
- create `.env` file in you root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` create a new file `config.json` and then add the following piece of json
```
{
  "development": {
    "username": <Your_DB_Username>,
    "password": <Your_DB_Password>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
-  Once you've added your db config as listed above, go to the src folder from your terminal and execute
   npx sequelize db:create and then execute
```     



## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  
## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)