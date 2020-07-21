<?php
include "conexion.php";

$id_usuario = $_GET['id_usuario'];
ejecutar("select id_usuario, nombre, imagen, suscrito, YEAR(CURDATE())-YEAR(`usuario`.`fecha_nacimiento`) as edad from usuario where id_usuario='$id_usuario'");

?>