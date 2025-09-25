<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


$conn = new mysqli("localhost", "root", "", "flynext");

if ($conn->connect_error) {
    die(json_encode(["error" => "Lidhja deshtoi: " . $conn->connect_error]));
}


$input = file_get_contents("php://input");
$data = json_decode($input, true);


if (!$data) {
    echo json_encode(["error" => "Nuk erdhën të dhëna nga frontend"]);
    exit;
}

$from = $conn->real_escape_string($data["from"]);
$to = $conn->real_escape_string($data["to"]);
$date = $conn->real_escape_string($data["date"]);
$passenger = (int)$data["passenger"];

$sql = "INSERT INTO bookings (departure, destination, flight_date, passengers) 
        VALUES ('$from', '$to', '$date', '$passenger')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Booking saved successfully"]);
} else {
    echo json_encode(["error" => "Gabim SQL: " . $conn->error]);
}

$conn->close();
?>

