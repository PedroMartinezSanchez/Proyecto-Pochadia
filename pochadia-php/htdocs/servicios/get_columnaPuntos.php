<?php
include "conexion.php";

$id_columna = $_GET['columna'];
$id_juego = $_GET['id_juego'];

$columna = "";

if ($id_columna == 1) {
    $columna = "puntuacion_1_S";
}
if ($id_columna == 2) {
    $columna = "puntuacion_2_S";
}
if ($id_columna == 3) {
    $columna = "puntuacion_3_S";
}
if ($id_columna == 4) {
    $columna = "puntuacion_4_S";
}
if ($id_columna == 5) {
    $columna = "puntuacion_5_S";
}

echo ejecutar("SELECT $columna from juego where id_juego = $id_juego");

?>