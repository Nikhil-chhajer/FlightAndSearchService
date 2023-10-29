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
```     

