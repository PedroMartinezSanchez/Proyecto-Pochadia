<?php
include "conexion.php";

$data = file_get_contents("php://input");

$data = json_decode($data);

if (empty($data->recomendado)) {
    $data->recomendado = 0;
}

insertar("INSERT into comentario (cabecera,texto,recomendado,hora_fecha,id_usuario,votos_positivos, id_juego) VALUES('$data->cabecera','$data->texto',$data->recomendado,now(),$data->id_usuario,0, $data->id_juego)");
?>