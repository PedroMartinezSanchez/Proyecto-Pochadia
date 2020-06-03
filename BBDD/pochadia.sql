CREATE TABLE usuario (
  id_usuario INT(5) NOT NULL,
  nombre varchar(20) NOT NULL,
  contrasenya varchar(20) NOT NULL,
  fecha_nacimiento date NOT NULL,
  correo varchar(50) NOT NULL,
  estado ENUM('Conectado','Ausente','Ocupado') NOT NULL,
  imagen varchar(40), /*¿NOT NULL?*/ 
  suscrito ENUM('SI','NO') NOT NULL,
  PRIMARY KEY (id_usuario)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuario VALUES('00001','Pedro','1234','1994/10/11','correo@hotmail.com','Conectado','perfil.jpg','00001');

CREATE TABLE juego (
  id_juego INT(5) NOT NULL,
  puntuacion_1_S INT(5) NOT NULL,/*1 estrella*/
  puntuacion_2_S INT(5) NOT NULL,/*2 estrellas*/
  puntuacion_3_S INT(5) NOT NULL,/*3 estrellas*/
  puntuacion_4_S INT(5) NOT NULL,/*4 estrellas*/
  puntuacion_5_S INT(5) NOT NULL,/*5 estrellas*/
  titulo varchar(50) NOT NULL,
  autor varchar(50) NOT NULL,
  genero varchar(300), /*¿ENUM?*/
  anyo_lanzamiento INT(4) NOT NULL,
  tipo_suscriptor ENUM('NORMAL','PREMIUM') NOT NULL,
  franquicia varchar(50) NOT NULL,
  idiomas varchar(500) NOT NULL,
  pegi varchar(50) NOT NULL,/*¿ENUM?*/
  general_horas_jugadas INT(20) NOT NULL,
  fecha_subida date NOT NULL,
  imagen varchar(40) NOT NULL,
  disponible ENUM('SI','NO') NOT NULL, 
  multijugador ENUM('NO','LOCAL','EN LINEA') NOT NULL,
  num_jugadores INT(3) NOT NULL,
  PRIMARY KEY (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO juego VALUES('00001','12','5','34','0','2','Assassins Creed Odyssey','Ubisoft','Acción, Aventura',2019,'NORMAL','Assassin\'s Creed','Inglés, francés, italiano, alemán, español, japonés, coreano, neerlandés, polaco, portugués, ruso, chino (simplificado), chino (tradicional)','18',389,'2020/06/02','Assassins_Creed_Odyssey.jpg','SI','NO',1);

CREATE TABLE comentario (
  id_comentario INT(5) NOT NULL,
  id_usuario INT(5) NOT NULL,
  nombre_usuario varchar(20) NOT NULL,
  votos_positivos INT(10) NOT NULL,
  votos_negativos INT(10) NOT NULL,
  hora time NOT NULL,
  cabecera varchar(50) NOT NULL,
  texto varchar(600) NOT NULL,
  horas_jugadas_user INT(10) NOT NULL,
  recomendado ENUM('SI','NO'),
  img_usuario varchar(40) NOT NULL,
  PRIMARY KEY (id_comentario),
  CONSTRAINT comentario_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO comentario VALUES('00001','00001','Pedro',32,10,'12:32','Mi opinión sobre Assassins Creed Odyssey','Es un juego muy entretenido, con mucho contenido y muchas horas de entretenimiento. La verdad es que al principio es un poco aburrido, todo hay que decirlo, pero poco a poco te va metiendo en la historia, en la trama. Tiene muchas cosas para hacer, por ejemplo (Sin hacer spoilers) hay un sistema de mercenarios, asi como una clasificación, es entretenido y te incita a ser el numero 1. Graficamente el juego es muy bonito y detallado.',12,'SI','perfil.jpg');

CREATE TABLE info_usuario_juego (
   id_info INT(10) NOT NULL,
   id_juego INT(5) NOT NULL,
   id_usuario INT(5) NOT NULL,
   horas_juego_usuario INT(6) NOT NULL,
   genero_jugado varchar(300) NOT NULL,
   favorito ENUM('SI','NO') NOT NULL,
   PRIMARY KEY (id_info),
   CONSTRAINT info_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
   CONSTRAINT info_juego FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO info_usuario_juego VALUES('00001','00001','00001',50,'Acción, Aventura','SI');