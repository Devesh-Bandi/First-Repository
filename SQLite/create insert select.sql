CREATE TABLE student (name VARCHAR(200), age INT, score INT)
INSERT INTO
  student (name, age, score)
VALUES
  ("Raj", 26, 120);

  SELECT * FROM student
  WHERE
  name LIKE "Raj"