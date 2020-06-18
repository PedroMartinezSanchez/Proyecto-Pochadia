/*Juego mejor puntuado*/
CREATE VIEW juego_mejor_puntuado
AS
SELECT juego.id_juego, (puntuacion_4_S*4)+(puntuacion_5_S*5) as puntuacion FROM pochadia.juego
order by puntuacion DESC;

/*Juego más jugado*/
CREATE VIEW juego_mas_jugado
AS
SELECT id_juego as mas_jugado, cast(sum(horas_juego_usuario) as time) as tiempo_total FROM pochadia.info_usuario_juego
group by id_juego
order by tiempo_total desc;