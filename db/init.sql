CREATE DATABASE IF NOT EXISTS petsdb;
USE petsdb;

CREATE TABLE pets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  type VARCHAR(50),
  age INT
);

INSERT INTO pets (name, type, age) VALUES
('Bella', 'Dog', 3),
('Milo', 'Cat', 2),
('Coco', 'Bird', 1),
('Luna', 'Dog', 5),
('Charlie', 'Rabbit', 4);
