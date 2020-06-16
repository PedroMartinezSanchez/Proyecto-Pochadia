CREATE TABLE usuario (
  id_usuario INT(5) NOT NULL,
  nombre varchar(20) NOT NULL,
  contrasenya varchar(20) NOT NULL,
  fecha_nacimiento date NOT NULL,
  correo varchar(50) NOT NULL,
  imagen varchar(40), /*¿NOT NULL?*/
  img_banner varchar(40), 
  suscrito BIT NOT NULL,
  fecha_alta_pre date,
  fecha_vencimiento_pre date,
  PRIMARY KEY (id_usuario)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuario VALUES('00001','Pedro','1234','1994/10/11','correo@hotmail.com','perfil.jpg','banner_1.jpg',1,'2020/06/10','2020/09/10');

CREATE TABLE juego (
  id_juego INT(5) NOT NULL,
  puntuacion_1_S INT(5) NOT NULL,/*1 estrella*/
  puntuacion_2_S INT(5) NOT NULL,/*2 estrellas*/
  puntuacion_3_S INT(5) NOT NULL,/*3 estrellas*/
  puntuacion_4_S INT(5) NOT NULL,/*4 estrellas*/
  puntuacion_5_S INT(5) NOT NULL,/*5 estrellas*/
  titulo varchar(50) NOT NULL,
  autor varchar(50) NOT NULL,
  anyo_lanzamiento INT(4) NOT NULL,
  tipo_suscriptor ENUM('NORMAL','PREMIUM') NOT NULL,
  franquicia varchar(50) NOT NULL,
  idiomas varchar(500) NOT NULL,
  descripcion_short varchar(500) NOT NULL,
  descripcion_long varchar(900) NOT NULL,
  fecha_subida date NOT NULL,
  imagen_index varchar(400) NOT NULL,
  disponible BIT NOT NULL, 
  multijugador ENUM('NO','LOCAL','EN LINEA') NOT NULL,
  num_jugadores INT(3) NOT NULL,
  PRIMARY KEY (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO juego VALUES('00001','12','5','34','0','2','Assassins Creed Odyssey','Ubisoft',2019,'NORMAL','Assassins Creed','Inglés, francés, italiano, alemán, español, japonés, coreano, neerlandés, polaco, portugués, ruso, chino (simplificado), chino (tradicional)','Descripción corta','Descripción larga','2020/06/02','Assassins_Creed_Odyssey.jpg',1,'NO',1);

CREATE TABLE comentario (
  id_comentario INT(5) NOT NULL,
  id_usuario INT(5) NOT NULL,
  votos_positivos INT(10) NOT NULL,
  votos_negativos INT(10) NOT NULL,
  hora_fecha datetime NOT NULL,
  cabecera varchar(50) NOT NULL,
  texto varchar(600) NOT NULL,
  recomendado BIT NOT NULL,
  img_usuario varchar(40) NOT NULL,
  PRIMARY KEY (id_comentario),
  CONSTRAINT comentario_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO comentario VALUES('00001','00001',32,10,'2020/05/02 12:32','Mi opinión sobre Assassins Creed Odyssey','Es un juego muy entretenido, con mucho contenido y muchas horas de entretenimiento. La verdad es que al principio es un poco aburrido, todo hay que decirlo, pero poco a poco te va metiendo en la historia, en la trama. Tiene muchas cosas para hacer, por ejemplo (Sin hacer spoilers) hay un sistema de mercenarios, asi como una clasificación, es entretenido y te incita a ser el numero 1. Graficamente el juego es muy bonito y detallado.',1,'perfil.jpg');


CREATE TABLE juego_carousel (
   id_carousel INT(5) NOT NULL,
   id_juego INT(5) NOT NULL,
   img_1 varchar(600) NOT NULL,
   img_2 varchar(600) NOT NULL,
   img_3 varchar(600) NOT NULL,
   PRIMARY KEY (id_carousel),
   CONSTRAINT juego_carro FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO juego_carousel VALUES('00001','00001','Assassins_Creed_Odyssey_C1.jpg','Assassins_Creed_Odyssey_C2.jpg','Assassins_Creed_Odyssey_C3.jpg');

CREATE TABLE info_usuario_juego (
   id_info INT(10) NOT NULL,
   id_juego INT(5) NOT NULL,
   id_usuario INT(5) NOT NULL,
   horas_juego_usuario TIME NOT NULL,
   favorito BIT NOT NULL,
   puntuado BIT NOT NULL,
   PRIMARY KEY (id_info),
   CONSTRAINT info_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
   CONSTRAINT info_juego FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO info_usuario_juego VALUES('00001','00001','00001','03:05:12',1,1);

CREATE TABLE usuario_genero_horas (
   id_genero INT(5) NOT NULL,
   id_usuario INT(5) NOT NULL,
   accion TIME,
   aventura TIME,
   carreras TIME,
   casual TIME,
   deportes TIME,
   estrategia TIME,
   indie TIME,
   multijugador_masivo TIME,
   rol TIME,
   simuladores TIME,
   PRIMARY KEY (id_genero),
   CONSTRAINT usuario_genero FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuario_genero_horas VALUES('00001','00001','03:30:25','00:00:00','01:03:02','00:30:25','05:45:36','03:30:25','','00:12:00','01:23:01','04:15:05');

CREATE TABLE juego_genero (
   id_genero INT(5) NOT NULL,
   id_juego INT(5) NOT NULL,
   accion BIT NOT NULL,
   aventura BIT NOT NULL,
   carreras BIT NOT NULL,
   casual BIT NOT NULL,
   deportes BIT NOT NULL,
   estrategia BIT NOT NULL,
   indie BIT NOT NULL,
   multijugador_masivo BIT NOT NULL,
   rol BIT NOT NULL,
   simuladores BIT NOT NULL,
   PRIMARY KEY (id_genero),
   CONSTRAINT juego_genero FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO juego_genero VALUES('00001','00001',1,1,0,0,0,0,0,0,1,0);

CREATE TABLE juego_pegi (
   id_pegi INT(5) NOT NULL,
   id_juego INT(5) NOT NULL,
   pegi_3 BIT NOT NULL,
   pegi_7 BIT NOT NULL,
   pegi_12 BIT NOT NULL,
   pegi_16 BIT NOT NULL,
   pegi_18 BIT NOT NULL,
   violencia BIT NOT NULL,
   mal_lenguaje BIT NOT NULL,
   miedo BIT NOT NULL,
   juegos_azar BIT NOT NULL,
   sexo BIT NOT NULL,
   drogas BIT NOT NULL,
   discriminacion BIT NOT NULL,
   PRIMARY KEY (id_pegi),
   CONSTRAINT juego_pegi FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO juego_pegi VALUES('00001','00001',0,0,0,0,0,1,1,1,0,0,1,0);