<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "campus_maintenance";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Database connection failed.");
}

?>