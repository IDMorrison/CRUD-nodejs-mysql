-- create database
create database crude;

-- using database;
use crude;

-- create a table 
create table customer (
    id int(6) auto_increment primary key, 
    name varchar(50) not null,
    address varchar(100) not null,
    phone varchar(15) 

);

-- to show tables
show tables;

-- to describe the table
describe customer;