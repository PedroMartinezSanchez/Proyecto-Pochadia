<?php
function ejecutar($q)
{
    $bd = new mysqli('localhost', 'root', '', 'pochadia2');
    $resultado = $bd->query($q);

    $datos = array();
    while($fila = $resultado->fetch_object()) {
        $datos[] = $fila;
    }

    echo json_encode($datos);
}
function insertar($q)
{
    $bd = new mysqli('localhost', 'root', '', 'pochadia2');
    $resultado = $bd->query($q);
}
?>