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
group by nombre_genero
order by horas_juego_usuario desc;

/*Genero más jugado de un usuario*/
CREATE VIEW genero_mas_jugado
AS
SELECT id_usuario, max(horas_juego_usuario) as genero_mas_jugado, nombre_genero FROM pochadia.tiempo_genero_usuario
group by id_usuario;

/*Tiempo en meses y días que le quedan de suscripcion al usuario*/
CREATE VIEW tiempo_suscripcion
AS
SELECT id_usuario, TIMESTAMPDIFF(month, fecha_alta_pre, fecha_vencimiento_pre) as tiempo_suscripcion_meses, TIMESTAMPDIFF(day, fecha_alta_pre, fecha_vencimiento_pre) as tiempo_sucripcion_dias FROM pochadia.usuario;

/*Años que tiene el usuario*/
CREATE VIEW usuario_anyios
AS
SELECT id_usuario, TIMESTAMPDIFF(year, fecha_nacimiento, DATE_FORMAT(SYSDATE(), "%Y-%c-%d"))  as anyos FROM pochadia.usuario;

/*Juego y sus pegis*/
CREATE VIEW pegis_de_juego
AS
SELECT juego_pegi.id_juego, juego_pegi.id_pegi, nombre_pegi, juego.titulo FROM pochadia.juego_pegi, juego, pegi
where juego_pegi.id_juego = juego.id_juego and juego_pegi.id_pegi = pegi.id_pegi
group by id_juego;

/*Juego y su pegi de edad*/
CREATE VIEW pegi_edad_juego
AS 
SELECT * FROM pochadia.pegis_de_juego
where nombre_pegi = '18'
or nombre_pegi = '16'
or nombre_pegi = '12'
or nombre_pegi = '7'
or nombre_pegi = '3';

/*index*/
CREATE VIEW indice
AS
SELECT j.id_juego, u.id_usuario, u.nombre, u.imagen, ua.anyos as usuario_anyos, j.titulo, j.imagen_index, g.nombre_genero, j.fecha_subida, p.nombre_pegi, j.tipo_suscriptor as tipo_juego, u.suscrito as usuario_suscrito, j.disponible
FROM juego_genero jg, genero g, juego j, usuario u, pegi_edad_juego p, juego_pegi jp, usuario_anyios ua
WHERE  jg.id_genero = g.id_genero and jg.id_juego=j.id_juego and jp.id_juego = j.id_juego and jp.id_pegi = p.id_pegi;

