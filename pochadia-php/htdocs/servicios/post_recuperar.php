<?php
include "conexion.php";

$data = file_get_contents("php://input");

$data = json_decode($data);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require('Exception.php');
require('PHPMailer.php');
require('SMTP.php');

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'pochadiasquad@gmail.com';              // SMTP username
    $mail->Password   = 'pochadiarules5685';                    // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom($data->correo, $data->nombre);
    $mail->addAddress($data->correo, $data->nombre);   // Add a recipient

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');             // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');        // Optional name

    // Content
    $mail->isHTML(true);                                        // Set email format to HTML
    $mail->Subject = 'Estimado '.$data->nombre;
    $mail->Body    = '<html>
    <head>
      <title>Restablece tu contraseña</title>
    </head>
    <body>
     <p>Buenas '.$data->nombre.' hemos recibido una petición para restablecer la contrasña de tu cuenta.</p>
     <p>Si hiciste esta petición, haz clic en el siguiente enlace, si no hiciste esta petición puedes ignorar este correo.</p>
     <p>
       <strong>Enlace para restablecer tu contraseña</strong><br>
       <a href="http://127.0.0.1:5502/restablecer_contraseña.html?id_usuario='.$data->id_usuario.'"> Restablecer contraseña </a>
     </p>
    </body>
   </html>';
    //$mail->AltBody = $data->texto;

    $mail->send();
    echo 'Se ha enviado correctamente';
} catch (Exception $e) {
    echo "Hubo un Error: {$mail->ErrorInfo}";
}
?>