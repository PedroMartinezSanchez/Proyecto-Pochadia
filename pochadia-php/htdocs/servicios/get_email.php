<?php
include "conexion.php";

$correo = $_GET['correo'];

ejecutar("SELECT correo, nombre, id_usuario from usuario where correo = '$correo'");

?>