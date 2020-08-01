<?php
include "conexion.php";

$id_juego = $_GET['id_juego'];
ejecutar("SELECT s.nombre_pegi from pegi s, juego_pegi j where s.id_pegi = j.id_pegi and j.id_juego = $id_juego");

?>