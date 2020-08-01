<?php
include "conexion.php";

$data = file_get_contents("php://input");

$data = json_decode($data);

if (empty($data->nombre)) {
    exit();
} else {
    insertar("UPDATE usuario SET nombre = '$data->nombre' WHERE id_usuario = $data->id_usuario;");
}
?>