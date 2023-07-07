CREATE DATABASE backend_solo_project_dev;
use backend_solo_project_dev;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, 
    role ENUM('admin','user') DEFAULT 'user',
    is_verified BOOLEAN DEFAULT false,
    dm_access BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)

);

CREATE TABLE circles (
    id INT NOT NULL AUTO_INCREMENT,
    circle_title VARCHAR(255) NOT NULL,
    creator_id INT NOT NULL,
    is_active BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (creator_id) REFERENCES users(id)

);

CREATE TABLE circle_members (
    id INT NOT NULL AUTO_INCREMENT,
    member_id INT NOT NULL,
    circle_id INT NOT NULL,
    member_role ENUM('circle_admin','circle_member') DEFAULT 'circle_member',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (member_id) REFERENCES users(id) ON DELETE CASCADE, 
    FOREIGN KEY (circle_id) REFERENCES circles(id) ON DELETE CASCADE,
    UNIQUE (member_id,circle_id)

);


CREATE TABLE messages (
    id INT NOT NULL AUTO_INCREMENT,
    content VARCHAR (255) NOT NULL,
    sender_id INT NOT NULL,
    receiver_id INT,
    is_dm BOOLEAN DEFAULT false,
    circle_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id),
    FOREIGN KEY (circle_id) REFERENCES circles(id) ON DELETE CASCADE

);