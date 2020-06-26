/*Juego mejor puntuado (solo 3,4,5 estrellas)*/
CREATE VIEW juego_mejor_puntuado
AS
SELECT juego.id_juego, (puntuacion_3_S*3)+(puntuacion_4_S*4)+(puntuacion_5_S*5)/
(puntuacion_3_S)+(puntuacion_4_S)+(puntuacion_5_S) 
as puntuacion
FROM pochadia.juego
order by puntuacion DESC;

/*Tiempo que ha jugado cada usuario a cada genero*/
CREATE VIEW tiempo_genero_usuario
AS
SELECT id_usuario, horas_juego_usuario, info_usuario_juego.id_juego, genero.id_genero, nombre_genero FROM info_usuario_juego, juego_genero, genero
WHERE info_usuario_juego.id_juego = juego_genero.id_juego AND juego_genero.id_genero = genero.id_genero
group by nombre_genero;

/*Genero más jugado de un usuario*/
CREATE VIEW genero_mas_jugado
AS
SELECT id_usuario, max(horas_juego_usuario) as genero_mas_jugado, nombre_genero FROM pochadia.tiempo_genero_usuario;

/*Tiempo en meses y días que le quedan de suscripcion al usuario*/
CREATE VIEW tiempo_suscripcion
AS
SELECT id_usuario, TIMESTAMPDIFF(month, fecha_alta_pre, fecha_vencimiento_pre) as tiempo_suscripcion_meses, TIMESTAMPDIFF(day, fecha_alta_pre, fecha_vencimiento_pre) as tiempo_sucripcion_dias FROM pochadia.usuario;

/*Años que tiene el usuario*/
CREATE VIEW usuario_anyios
AS
SELECT id_usuario, TIMESTAMPDIFF(year, fecha_nacimiento, DATE_FORMAT(SYSDATE(), "%Y-%c-%d"))  as anyos FROM pochadia.usuario;

/*Juego y su pegi*/
