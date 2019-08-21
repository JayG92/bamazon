DROP DATABASE IF EXISTS ice_creamDB;

CREATE DATABASE ice_creamDB;

USE ice_creamDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product VARCHAR(100) NULL,
  department VARCHAR(100)(10,2) NULL,
  price INT NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product, department, price, quantity)
VALUES ("vanilla", 2.50, 100);

INSERT INTO products (flavor, price, quantity)
VALUES ("chocolate", 3.10, 120);

INSERT INTO products (flavor, price, quantity)
VALUES ("strawberry", 3.25, 75);