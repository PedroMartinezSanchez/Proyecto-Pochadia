<?php
include "conexion.php";

$data = file_get_contents("php://input");

$data = json_decode($data);

if (empty($data->contrasenya)) {
    exit();
} else {
    $data->contrasenya = md5($data->contrasenya);
    insertar("UPDATE usuario SET contrasenya = '$data->contrasenya' WHERE id_usuario = $data->id_usuario;");
}
?>