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

INSERT INTO
    structure_menu (title, private, public)
VALUES
    (
        'Clube das Series',
        '{"novidades", "populares", "estreias"}',
        '{"home", "login","signup" }'
    );

INSERT INTO
    structure_footer (url, redes)
VALUES
    (
        'https://www.facebook.com/marcos.marinho.16547/?locale=pt_BR',
        'Facebook'
    ),
    (
        'https://www.instagram.com/_marcosmarinho98/',
        'Instagram'
    ),
    (
        'https://github.com/marcosfrancomarinho',
        'Github'
    ),
    (
        'https://www.linkedin.com/in/marcos-franco-marinho-031b55187/',
        'Linkedin'
    );

INSERT INTO
    structure_images (url, title)
VALUES
    ('/images/100.jpg', '100'),
    ('/images/aneis.jpg', 'aneis'),
    ('/images/arcane.jpg', 'acarne'),
    ('/images/bad.jpg', 'bad'),
    ('/images/blind.jpg', 'blind'),
    ('/images/dark.jpg', 'dark'),
    ('/images/game.jpg', 'game'),
    ('/images/gaviao_arqueiro.jpg', 'gaviao_arqueiro'),
    ('/images/gothan.jpg', 'gothan'),
    ('/images/loki.jpg', 'loki'),
    ('/images/lost.jpg', 'lost'),
    ('/images/lucifer.jpg', 'lucifer'),
    ('/images/office.jpg', 'office'),
    ('/images/Pinguim.jpg', 'Pinguim'),
    ('/images/quarta.jpg', 'quarta'),
    ('/images/saul.jpg', 'saul'),
    ('/images/simpson.jpg', 'simpson'),
    ('/images/sopranos.jpg', 'sopranos'),
    ('/images/sopranos.jpg', 'sopranos'),
    ('/images/string.jpg', 'string'),
    ('/images/supernatural.jpg', 'supernatural'),
    ('/images/the_last.jpg', 'the_last'),
    ('/images/viking.jpg', 'viking'),
    ('/images/wandavision.jpg', 'wandavision'),
    ('/images/witcher.jpg', 'witcher');