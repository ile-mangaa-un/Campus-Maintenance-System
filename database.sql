CREATE DATABASE IF NOT EXISTS campus_maintenance;

USE campus_maintenance;

CREATE TABLE reports (

    id INT AUTO_INCREMENT PRIMARY KEY,

    fullname VARCHAR(100) NOT NULL,

    student_id VARCHAR(30) NOT NULL,

    email VARCHAR(100) NOT NULL,

    phone VARCHAR(20) NOT NULL,

    building VARCHAR(100) NOT NULL,

    category VARCHAR(50) NOT NULL,

    severity VARCHAR(20) NOT NULL,

    report_date DATE NOT NULL,

    description TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);