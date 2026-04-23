CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    creat_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) 
    VALUES ('Alejandro Campos','alex.campos@gmail.com'), 
    ('Cesar Camopos', 'cesar@gmail.com');