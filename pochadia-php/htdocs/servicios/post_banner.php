<?php
include "conexion.php";

$data = file_get_contents("php://input");

$data = json_decode($data);

echo $data->img_banner;

echo insertar("UPDATE usuario SET img_banner = '$data->img_banner' WHERE id_usuario = '$data->id_usuario';");

insertar("UPDATE usuario SET img_banner = '$data->img_banner' WHERE id_usuario = '$data->id_usuario';");

?>