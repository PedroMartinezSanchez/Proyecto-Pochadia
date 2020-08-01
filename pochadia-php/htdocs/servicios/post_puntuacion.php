<?php
$bd = new mysqli('localhost', 'root', '', 'pochadia2');

$data = file_get_contents("php://input");

$data = json_decode($data);

$columna = "";
$columnaAnterior = "";

if ($data->estrella == "1") {
    $columna = "puntuacion_1_S";
}
if ($data->estrella == "2") {
    $columna = "puntuacion_2_S";
}
if ($data->estrella == "3") {
    $columna = "puntuacion_3_S";
}
if ($data->estrella == "4") {
    $columna = "puntuacion_4_S";
}
if ($data->estrella == "5") {
    $columna = "puntuacion_5_S";
}

if ($data->columnaAnterior != 0) {
    if ($data->columnaAnterior == 1) {
        $columnaAnterior = "puntuacion_1_S";
    }
    if ($data->columnaAnterior == 2) {
        $columnaAnterior = "puntuacion_2_S";
    }
    if ($data->columnaAnterior == 3) {
        $columnaAnterior = "puntuacion_3_S";
    }
    if ($data->columnaAnterior == 4) {
        $columnaAnterior = "puntuacion_4_S";
    }
    if ($data->columnaAnterior == 5) {
        $columnaAnterior = "puntuacion_5_S";
    }
} else {
    $columnaAnterior = "";
}
//echo $columna;
$resultado = $bd->query("SELECT puntuado from info_usuario_juego where id_usuario = '$data->id_usuario' and id_juego = $data->id_juego");
    echo empty($resultado);
    if ($resultado->num_rows == 0) {
        echo "entro si no hay registro en info usuario juego";
        $bd->query("UPDATE juego SET $columna = $data->puntuacion WHERE id_juego = $data->id_juego;");
        $bd->query("INSERT INTO info_usuario_juego VALUES($data->id_juego,$data->id_usuario,'00:00:00',0,$data->estrella);");
    } else {
        echo "entro si si hay registro en info usuario juego";
        if ($columna == $columnaAnterior) {
            exit();
        }
        else if ($columnaAnterior != "") {
            echo "UPDATE juego SET $columna = $data->puntuacion, $columnaAnterior = $data->puntosAnteriores WHERE id_juego = $data->id_juego;";
            echo "UPDATE info_usuario_juego SET puntuado = $data->estrella WHERE id_usuario = $data->id_usuario and id_juego = $data->id_juego;";
            $bd->query("UPDATE juego SET $columna = $data->puntuacion, $columnaAnterior = $data->puntosAnteriores WHERE id_juego = $data->id_juego;");
            $bd->query("UPDATE info_usuario_juego SET puntuado = $data->estrella WHERE id_usuario = $data->id_usuario and id_juego = $data->id_juego;");
        } else {
            echo "UPDATE juego SET $columna = $data->puntuacion WHERE id_juego = $data->id_juego;";
            echo "UPDATE info_usuario_juego SET puntuado = $data->estrella WHERE id_usuario = $data->id_usuario and id_juego = $data->id_juego;";
            $bd->query("UPDATE juego SET $columna = $data->puntuacion WHERE id_juego = $data->id_juego;");
            $bd->query("UPDATE info_usuario_juego SET puntuado = $data->estrella WHERE id_usuario = $data->id_usuario and id_juego = $data->id_juego;");
        }
    }
?>