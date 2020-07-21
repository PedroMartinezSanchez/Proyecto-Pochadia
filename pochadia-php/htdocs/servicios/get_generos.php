<?php
include "conexion.php";

$id_juego = $_GET['id_juego'];

ejecutar("select DISTINCT g.nombre_genero from genero g, juego_genero j where g.id_genero=j.id_genero and j.id_juego='$id_juego'");


?>