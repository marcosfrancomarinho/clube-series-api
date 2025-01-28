CREATE TABLE register_user (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR NOT NULL
);

ALTER TABLE register_user
ALTER COLUMN name TYPE VARCHAR(255),
ALTER COLUMN name SET NOT NULL;

ALTER TABLE register_user
ALTER COLUMN email TYPE VARCHAR(255),
ALTER COLUMN email SET NOT NULL;

ALTER TABLE register_user
ADD CONSTRAINT unique_email UNIQUE (email);


