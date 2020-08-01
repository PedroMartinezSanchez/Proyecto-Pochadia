<?php
include "conexion.php";

$data = file_get_contents("php://input");

$data = json_decode($data);

insertar("INSERT into respuesta (texto,hora_fecha,id_usuario,votos_positivos, id_juego, id_comentario) VALUES('$data->textoRespuesta',now(),$data->id_usuario,0,$data->id_juego,$data->id_comentario)");
?>