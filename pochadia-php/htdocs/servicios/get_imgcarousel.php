<?php
include "conexion.php";

$id_juego = $_GET['id_juego'];
ejecutar("SELECT img_1, img_2, img_3 from juego_carousel where id_juego = $id_juego");

?>