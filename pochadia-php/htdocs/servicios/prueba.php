<?php
$bd = new mysqli('localhost', 'root', '', 'pochadia');

$bd->query("INSERT INTO info_usuario_juego VALUES('00001','00001','03:05:14',1,0)");

$resultados = $bd->query("SELECT * from info_usuario_juego");

$datos = array();
    while($fila = $resultados->fetch_object()) {
        $datos[] = $fila;
    }

echo json_encode($datos);
?>