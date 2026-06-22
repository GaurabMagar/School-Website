CREATE DATABASE school_website;

USE school_website;



-- Admin Users Table

CREATE TABLE admin_users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100),

    email VARCHAR(100) UNIQUE,

    password VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);





-- Notices Table

CREATE TABLE notices (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(200),

    description TEXT,

    file VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);






-- Events Table

CREATE TABLE events (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(200),

    description TEXT,

    image VARCHAR(255),

    event_date DATE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);






-- Gallery Table

CREATE TABLE gallery (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(100),

    image VARCHAR(255),

    category VARCHAR(100),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);






-- Students Table

CREATE TABLE students (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100),

    class VARCHAR(50),

    email VARCHAR(100),

    phone VARCHAR(20)

);






-- Contact Messages

CREATE TABLE contact_messages (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100),

    email VARCHAR(100),

    subject VARCHAR(200),

    message TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);






-- Insert Admin Account

INSERT INTO admin_users
(name,email,password)

VALUES

(
'Administrator',
'admin@school.com',
'123456'
);
UPDATE admin_users

SET password='YOUR_HASH'

WHERE email='admin@school.com';
CREATE TABLE admissions (

id INT AUTO_INCREMENT PRIMARY KEY,

student_name VARCHAR(100),

dob DATE,

gender VARCHAR(20),

class_apply VARCHAR(50),

parent_name VARCHAR(100),

phone VARCHAR(20),

email VARCHAR(100),

address TEXT,

previous_school VARCHAR(150),

document VARCHAR(255),

status VARCHAR(50) DEFAULT 'Pending',

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);