<?php
include "conexion.php";

$data = file_get_contents("php://input");

$data = json_decode($data);

if (empty($data->correo)) {
    exit();
} else {
    insertar("UPDATE usuario SET correo = '$data->correo' WHERE id_usuario = $data->id_usuario;");
}


?>