CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
	burger_name varchar(127) NOT NULL,
	devoured BOOLEAN DEFAULT false
);