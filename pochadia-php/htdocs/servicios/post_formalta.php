<?php
include "conexion.php";

$data = file_get_contents("php://input");

$data = json_decode($data);

if (empty($data->nombre) || empty($data->contrasenya)) {
    exit();
}
$data->contrasenya = md5($data->contrasenya);

insertar("INSERT into usuario (nombre,contrasenya,correo,fecha_nacimiento,suscrito,imagen,img_banner) VALUES('$data->nombre','$data->contrasenya','$data->correo','$data->fecha_nacimiento','NORMAL','img/img_perfil/perfil_1.jpg','img/banner.jpg')");

ejecutar("SELECT * from usuario where correo = '$data->correo' and contrasenya = '$data->contrasenya'");
?>