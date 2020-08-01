<?php
include "conexion.php";

$correo = $_GET['correo'];
$contra = md5($_GET['contra']);

ejecutar("SELECT * from usuario where correo = '$correo' and contrasenya = '$contra'");

?>