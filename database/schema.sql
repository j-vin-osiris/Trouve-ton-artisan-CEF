CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE specialties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE artisans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    specialty_id INT,
    location VARCHAR(255) NOT NULL,
    about TEXT,
    email VARCHAR(255),
    website VARCHAR(255),
    rating FLOAT NOT NULL,
    top TINYINT(1) DEFAULT 0,
    FOREIGN KEY (specialty_id) REFERENCES specialties(id) ON DELETE CASCADE
);
