Codigma Backend
===============


npm init

- Restart the server every time we change something in our code
$ npm i -D nodemon

```js
"scripts": {
  "start": "nodemon App.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

Starting the server
$ npm run start


or without nodemon
$ node App.js


export development environment
export NODE_ENV=development


PostgreSQL Server Setup
----------------------
Starting the postgres database server

**************
$ postgres -D /usr/local/var/postgres


$ createdb

start the command center for PostgreSQL
$ psql -h localhost

Inside the psql console
CREATE DATABASE example;

\connect Codigma;

CREATE TABLE Code(
  code text,
  title varchar(40)
);

List all the tables
\dt

Input data into table
INSERT INTO numbers VALUES (732);

Show All table contents
TABLE numbers;


Sequelize: javascript ORM for MySQL, PostgreSQL, Sqlite....
---------------------------------------
$ npm install -g sequelize-cli

pg will be responsible for creating the database connection while pg-hstore is a module for serializing and deserializing JSON data into the Postgres hstore format.

$ npm i pg-hstore


sequelize init

- Setup all the configurations

Create a model
sequelize model:create --name Todo --attributes title:string


$ createdb Codigma
$ sequelize db:migrate








Making localhost available to all the internet
---------------------
download ngrok

./ngrok http 80
