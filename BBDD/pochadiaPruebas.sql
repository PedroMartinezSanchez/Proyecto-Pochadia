CREATE TABLE usuario (
  id_usuario INT(5) NOT NULL,
  nombre varchar(20) NOT NULL,
  contrasenya varchar(20) NOT NULL,
  fecha_nacimiento date NOT NULL,
  correo varchar(50) NOT NULL,
  imagen varchar(40), /*¿NOT NULL?*/
  img_banner varchar(40), 
  suscrito ENUM('NORMAL','PREMIUM') NOT NULL,
  fecha_alta_pre date,
  fecha_vencimiento_pre date,
  PRIMARY KEY (id_usuario)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuario VALUES('00001','Pedro','1234','1994/10/11','correo@hotmail.com','perfil.jpg','banner_1.jpg','NORMAL','2020/06/10','2020/09/10');

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
INSERT INTO juego VALUES('00002','8','2','0','42','50','Unravel 2','Electronic Arts',2020,'NORMAL','EA Originals','Inglés, francés, italiano, alemán, español, japonés, coreano, neerlandés, polaco, portugués, ruso, chino (simplificado), chino (tradicional)','Descripción corta','Descripción larga','2020/06/17','Unravel_2.jpg',1,'NO',1);
INSERT INTO juego VALUES('00003','3','15','1','12','60','Sea of Thieves','Rare Ltd',2020,'NORMAL','Xbox Game Studios','Inglés, francés, italiano, alemán, español, japonés, coreano, neerlandés, polaco, portugués, ruso, chino (simplificado), chino (tradicional)','Descripción corta','Descripción larga','2020/06/15','Sea_of_Thieves.jpg',1,'EN LINEA',32);


CREATE TABLE genero (
  id_genero INT(5) NOT NULL,
  nombre_genero varchar(200) NOT NULL,
  PRIMARY KEY (id_genero)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO genero VALUES('00001','Accion');
INSERT INTO genero VALUES('00002','Aventuras');
INSERT INTO genero VALUES('00003','Carreras');
INSERT INTO genero VALUES('00004','Casual');
INSERT INTO genero VALUES('00005','Deportes');
INSERT INTO genero VALUES('00006','Estrategia');
INSERT INTO genero VALUES('00007','Indle');
INSERT INTO genero VALUES('00008','Multijugador masivo');
INSERT INTO genero VALUES('00009','Rol');
INSERT INTO genero VALUES('00010','Simuladores');

CREATE TABLE comentario (
  id_comentario INT(5) NOT NULL,
  id_respuesta INT(5) NOT NULL,
  id_usuario INT(5) NOT NULL,
  id_juego INT(5) NOT NULL,
  votos_positivos INT(10) NOT NULL,
  votos_negativos INT(10) NOT NULL,
  hora_fecha datetime NOT NULL,
  cabecera varchar(50),
  texto varchar(600) NOT NULL,
  recomendado BIT,
  PRIMARY KEY (id_comentario),
  CONSTRAINT comentario_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
  CONSTRAINT comentario_juego FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO comentario VALUES('00001','00001','00001','00001', 32,10,'2020/05/02 12:32','Mi opinión sobre Assassins Creed Odyssey','Es un juego muy entretenido, con mucho contenido y muchas horas de entretenimiento. La verdad es que al principio es un poco aburrido, todo hay que decirlo, pero poco a poco te va metiendo en la historia, en la trama. Tiene muchas cosas para hacer, por ejemplo (Sin hacer spoilers) hay un sistema de mercenarios, asi como una clasificación, es entretenido y te incita a ser el numero 1. Graficamente el juego es muy bonito y detallado.',1);

CREATE TABLE juego_carousel (
   id_juego INT(5) NOT NULL,
   img_1 varchar(600) NOT NULL,
   img_2 varchar(600) NOT NULL,
   img_3 varchar(600) NOT NULL,
   PRIMARY KEY (id_juego),
   CONSTRAINT juego_carro FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO juego_carousel VALUES('00001','Assassins_Creed_Odyssey_C1.jpg','Assassins_Creed_Odyssey_C2.jpg','Assassins_Creed_Odyssey_C3.jpg');

CREATE TABLE info_usuario_juego (
   id_juego INT(5) NOT NULL,
   id_usuario INT(5) NOT NULL,
   horas_juego_usuario TIME NOT NULL,
   favorito BIT NOT NULL,
   puntuado BIT NOT NULL,
   PRIMARY KEY (id_juego,id_usuario),
   CONSTRAINT info_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
   CONSTRAINT info_juego FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO info_usuario_juego VALUES('00001','00001','03:05:12',1,1);
INSERT INTO info_usuario_juego VALUES('00002','00001','14:50:25',1,1);
INSERT INTO info_usuario_juego VALUES('00003','00001','3:00:02',1,1);

CREATE TABLE juego_genero (
   id_genero INT(5) NOT NULL,
   id_juego INT(5) NOT NULL,
   PRIMARY KEY (id_genero,id_juego),
   CONSTRAINT info_genero FOREIGN KEY (id_genero) REFERENCES genero (id_genero),
   CONSTRAINT info_genero_juego FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO juego_genero VALUES('00001','00001');
INSERT INTO juego_genero VALUES('00002','00001');
INSERT INTO juego_genero VALUES('00009','00001');
INSERT INTO juego_genero VALUES('00002','00002');
INSERT INTO juego_genero VALUES('00004','00002');
INSERT INTO juego_genero VALUES('00007','00002');
INSERT INTO juego_genero VALUES('00010','00003');
INSERT INTO juego_genero VALUES('00006','00003');
INSERT INTO juego_genero VALUES('00009','00003');
INSERT INTO juego_genero VALUES('00004','00003');

CREATE TABLE pegi (
   id_pegi INT(5) NOT NULL,
   nombre_pegi varchar(100) NOT NULL,
   PRIMARY KEY (id_pegi)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO pegi VALUES('00001','3');
INSERT INTO pegi VALUES('00002','7');
INSERT INTO pegi VALUES('00003','12');
INSERT INTO pegi VALUES('00004','16');
INSERT INTO pegi VALUES('00005','18');
INSERT INTO pegi VALUES('00006','violencia');
INSERT INTO pegi VALUES('00007','mal_lenguaje');
INSERT INTO pegi VALUES('00008','miedo');
INSERT INTO pegi VALUES('00009','juegos_azar');
INSERT INTO pegi VALUES('00010','sexo');
INSERT INTO pegi VALUES('00011','drogas');
INSERT INTO pegi VALUES('00012','discriminación');

CREATE TABLE juego_pegi (
   id_pegi INT(5) NOT NULL,
   id_juego INT(5) NOT NULL,
   PRIMARY KEY (id_pegi,id_juego),
   CONSTRAINT info_pegi FOREIGN KEY (id_pegi) REFERENCES pegi (id_pegi),
   CONSTRAINT info_pegi_juego FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO juego_pegi VALUES('00005','00001');
INSERT INTO juego_pegi VALUES('00006','00001');
INSERT INTO juego_pegi VALUES('00007','00001');
INSERT INTO juego_pegi VALUES('00010','00001');

