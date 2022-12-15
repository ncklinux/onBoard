<?php
require 'includes/php/PHPMailer/src/PHPMailer.php';
require 'includes/php/PHPMailer/src/SMTP.php';
require 'includes/php/PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

header('Content-Type: application/json; charset=utf-8');
$_POST = json_decode(file_get_contents("php://input"), true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER; //Enable verbose debug output
    $mail->isSMTP(); //Send using SMTP
    $mail->Host = 'smtp.test.local'; //Set the SMTP server to send through
    $mail->SMTPAuth = true; //Enable SMTP authentication
    $mail->Username = 'user@test.local'; //SMTP username
    $mail->Password = 'secret'; //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //Enable implicit TLS encryption
    $mail->Port = 465; //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('contact@test.local', 'Mailer');
    $mail->addAddress($_POST['email'], $_POST['firstname'] . ' ' . $_POST['lastname']);

    //Content
    $mail->isHTML(true); //Set email format to HTML
    $mail->Subject = 'Contact form - ' . $_POST['firstname'] . ' ' . $_POST['lastname'];
    $mail->Body = '<b>Fullname:</b> ' . $_POST['firstname'] . ' ' . $_POST['lastname'] . '<br><b>Email:</b> ' . $_POST['email'] . '<br><b>Telephone:</b> ' . $_POST['telephone'] . '<br><b>Message:</b> ' . $_POST['message'];
    $mail->AltBody = 'Fullname: ' . $_POST['firstname'] . ' ' . $_POST['lastname'] . ', Email: ' . $_POST['email'] . ', Telephone: ' . $_POST['telephone'] . ', Message: ' . $_POST['message'];

    // Send email
    $mail->send();
    echo json_encode(json_encode(["result" => "true", "message" => "success"]));
} catch (Exception $e) {
    echo json_encode(json_encode(["result" => "false", "message" => "Mailer Error: {$mail->ErrorInfo}"]));
}
