CREATE DATABASE backend_solo_project_dev;
use backend_solo_project_dev;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, 
    dm_access BOOLEAN NOT NULL DEFAULT false,
    role VARCHAR(255) DEFAULT 'user',
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
    is_admin BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (member_id) REFERENCES users(id),
    FOREIGN KEY (circle_id) REFERENCES circles(id),
    UNIQUE (member_id,circle_id)

);

CREATE TABLE users_relationship (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    related_user_id INT NOT NULL,
    relationship_type VARCHAR (255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (related_user_id) REFERENCES users(id),
    UNIQUE (user_id,related_user_id)

);

CREATE TABLE chatrooms (
    id INT NOT NULL AUTO_INCREMENT,
    chatroom_title VARCHAR(255) NOT NULL,
    circle_id INT NOT NULL,
    creator_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (circle_id) REFERENCES circles(id),
    -- FOREIGN KEY (creator_id) REFERENCES chatroom_members(id),
    UNIQUE (chatroom_title,circle_id)

);

CREATE TABLE chatroom_members (
    id INT NOT NULL AUTO_INCREMENT,
    member_id INT NOT NULL,
    chatroom_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (member_id) REFERENCES users(id),
    -- FOREIGN KEY (chatroom_id) REFERENCES chatrooms(id),
    UNIQUE (member_id,chatroom_id)

);

ALTER TABLE chatrooms
ADD CONSTRAINT FK_Chatrooms_Chatroom_Members
FOREIGN KEY (creator_id) REFERENCES chatroom_members(id);

ALTER TABLE chatroom_members
ADD CONSTRAINT FK_Chatroom_Members_Chatroom
FOREIGN KEY (chatroom_id) REFERENCES chatrooms(id);


CREATE TABLE messages (
    id INT NOT NULL AUTO_INCREMENT,
    sender_id INT NOT NULL,
    receiver_id INT,
    content VARCHAR (255) NOT NULL,
    circle_id INT,
    chatroom_id INT,
    is_dm BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id),
    FOREIGN KEY (circle_id) REFERENCES circles(id),
    FOREIGN KEY (chatroom_id) REFERENCES chatrooms(id)

);