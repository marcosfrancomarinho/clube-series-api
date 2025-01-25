CREATE TABLE structure_footer (
    id SERIAL PRIMARY KEY,
    url VARCHAR NOT NULL,
    redes VARCHAR NOT NULL
);

CREATE TABLE structure_images(
    id SERIAL PRIMARY KEY,
    url VARCHAR NOT NULL,
    title VARCHAR NOT NULL
);

CREATE TABLE structure_menu (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    private VARCHAR [],
    public VARCHAR []
);