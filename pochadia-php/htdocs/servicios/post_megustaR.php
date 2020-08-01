<?php
include "conexion.php";

$data = file_get_contents("php://input");

$data = json_decode($data);

echo "UPDATE respuesta SET votos_positivos = $data->votosR WHERE id_respuesta = '$data->id_respuesta';";
insertar("UPDATE respuesta SET votos_positivos = $data->votosR WHERE id_respuesta = '$data->id_respuesta';");

?>