<?php
include "conexion.php";

$id_usuario = $_GET['id_usuario'];
ejecutar("select u.id_usuario, u.nombre, u.imagen, u.img_banner, u.correo, u.suscrito, YEAR(CURDATE())-YEAR(`u`.`fecha_nacimiento`) as edad, u.fecha_nacimiento, t.tiempo_suscripcion_meses as meses, t.tiempo_suscripcion_dias as dias from usuario u, tiempo_suscripcion t  where u.id_usuario = t.id_usuario and u.id_usuario=$id_usuario");

?>