<?php
include "conexion.php";

$correo = $_GET['correo'];

ejecutar("SELECT correo from usuario where correo = '$correo'");

?>