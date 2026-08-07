<?php

include "config.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $fullname = trim($_POST["fullname"]);
    $studentid = trim($_POST["studentid"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $building = trim($_POST["building"]);
    $category = trim($_POST["category"]);
    $severity = trim($_POST["severity"]);
    $reportdate = $_POST["reportdate"];
    $description = trim($_POST["description"]);

    $sql = "INSERT INTO reports
            (fullname, student_id, email, phone, building, category, severity, report_date, description)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    if ($stmt) {

        $stmt->bind_param(
            "sssssssss",
            $fullname,
            $studentid,
            $email,
            $phone,
            $building,
            $category,
            $severity,
            $reportdate,
            $description
        );

        if ($stmt->execute()) {

            echo "
            <!DOCTYPE html>
            <html>
            <head>
                <title>Report Submitted</title>
                <link rel='stylesheet' href='../css/style.css'>
            </head>
            <body>

                <div class='form-container'>

                    <form>

                        <h2>Report Submitted Successfully</h2>

                        <p>
                            Thank you. Your maintenance report has been received.
                        </p>

                        <br>

                        <a href='../index.html' class='btn'>
                            Return Home
                        </a>

                    </form>

                </div>

            </body>
            </html>
            ";

        } else {

            echo "Error submitting report.";

        }

        $stmt->close();

    } else {

        echo "Database error.";

    }

}

$conn->close();

?>