<?php
$bd = new mysqli('localhost', 'root', '', 'pochadia2');

$data = file_get_contents("php://input");

$data = json_decode($data);

$resultado = $bd->query("SELECT favorito from info_usuario_juego where id_usuario = '$data->id_usuario' and id_juego = $data->id_juego");
    echo empty($resultado);
    if ($resultado->num_rows == 0) {
        $bd->query("INSERT INTO info_usuario_juego VALUES($data->id_juego,$data->id_usuario,'00:00:00',1,0);");
    } else {
        echo $bd->query("UPDATE info_usuario_juego SET favorito = $data->favorito WHERE id_usuario = $data->id_usuario and id_juego = $data->id_juego;");
        $bd->query("UPDATE info_usuario_juego SET favorito = $data->favorito WHERE id_usuario = $data->id_usuario and id_juego = $data->id_juego;");
    }
?>