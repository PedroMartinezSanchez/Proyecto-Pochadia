<?php
include "conexion.php";

$data = file_get_contents("php://input");

$data = json_decode($data);
echo "UPDATE comentario SET votos_positivos = $data->votosC WHERE id_comentario = '$data->id_comentario';";
insertar("UPDATE comentario SET votos_positivos = $data->votosC WHERE id_comentario = '$data->id_comentario';");
?>