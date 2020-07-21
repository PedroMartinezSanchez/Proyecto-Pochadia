<?php
function ejecutar($q)
{
    $bd = new mysqli('localhost', 'root', '', 'pochadia');
    $resultado = $bd->query($q);

    $datos = array();
    while($fila = $resultado->fetch_object()) {
        $datos[] = $fila;
    }

    echo json_encode($datos);
}
?>