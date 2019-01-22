CREATE DATABASE personalbank;
CREATE USER 'personalbank'@'localhost' IDENTIFIED BY 'personalbank';
GRANT ALL ON personalbank.* TO 'personalbank'@'localhost';


CREATE  TABLE IF NOT EXIST users (
    id          INT PRIMARY KEY auto_increment,
    name        VARCHAR(100)    NOT NULL,
    subname     VARCHAR(100)    NOT NULL,
    email       VARCHAR(100)    NOT NULL,
    username    VARCHAR(20)     NOT NULL,
    password    VARCHAR(255)    NOT NULL,
    token       VARCHAR(255),
    role_id     int default 0,
    avatar_url  text,
    active      INT default 0,
);

CREATE  TABLE IF NOT EXISTS accounts(
    id          INT PRIMARY KEY auto_increment,
    user_id     int DEFAULT 0,
    iban        VARCHAR(255),
    type        VARCHAR(10),
    balance     VARCHAR(255),
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME ON UPDATE CURRENT_TIMESTAMP 
);

CREATE  TABLE IF NOT EXIST transactions (
    id              INT PRIMARY KEY auto_increment,
    account_id      INT NOT NULL,
    ammount         VARCHAR(100),
    title           VARCHAR(100),
    state           int default 0,
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME ON UPDATE CURRENT_TIMESTAMP 
);


CREATE TABLE IF NOT EXIST activities (
    id              INT PRIMARY KEY auto_increment,
    user_id         INT NOT NULL,
    owner_id        INT NOT NULL,
    title           VARCHAR(255),
    type            VARCHAR(20),
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
);
