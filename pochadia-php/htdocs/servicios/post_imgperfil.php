<?php
include "conexion.php";

$data = file_get_contents("php://input");

$data = json_decode($data);

//echo $data->imagen;

//echo insertar("UPDATE usuario SET imagen = '$data->imagen' WHERE id_usuario = '$data->id_usuario';");

insertar("UPDATE usuario SET imagen = '$data->imagen' WHERE id_usuario = '$data->id_usuario';");

?>