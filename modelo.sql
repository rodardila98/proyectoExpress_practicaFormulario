CREATE DATABASE demo;

USE demo;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    documento VARCHAR(100),
    edad INT
);
