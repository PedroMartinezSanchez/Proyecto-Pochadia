<?php
include "conexion.php";

$id_usuario = $_GET['id_usuario'];

ejecutar("SELECT correo, nombre from usuario where id_usuario = $id_usuario");

?>