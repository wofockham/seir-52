CREATE TABLE pets (
    id INTEGER PRIMARY KEY,
    name TEXT,
    breed TEXT,
    age INTEGER,
    dead BOOLEAN
);

-- seed data
INSERT INTO pets (id, name, breed, age, dead) VALUES (1, 'Fluffy', 'unicorn', 1000, 0);
INSERT INTO pets (id, name, breed, age, dead) VALUES (2, 'Gigantor', 'robot', 1, 1);

-- 0 => false, 1 => true
