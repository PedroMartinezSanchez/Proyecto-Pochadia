CREATE TABLE usuario (
  id_usuario INT(5) NOT NULL AUTO_INCREMENT,
  nombre varchar(20) NOT NULL,
  contrasenya varchar(200) NOT NULL,
  fecha_nacimiento date NOT NULL,
  correo varchar(50) NOT NULL,
  imagen varchar(40), /*¿NOT NULL?*/
  img_banner varchar(40), 
  suscrito ENUM('NORMAL','PREMIUM') NOT NULL,
  fecha_alta_pre date,
  fecha_vencimiento_pre date,
  PRIMARY KEY (id_usuario)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuario VALUES('00001','Pedro José','81dc9bdb52d04dc20036dbd8313ed055','1994/10/11','correo@hotmail.com','perfil_1.jpg','banner_1.jpg','NORMAL','2020/06/10','2020/09/10');
INSERT INTO usuario VALUES('00002','Manu','81dc9bdb52d04dc20036dbd8313ed055','1994/10/11','correo@hotmail.com','perfil_2.jpg','banner_1.jpg','PREMIUM','2020/06/10','2020/09/10');
INSERT INTO usuario VALUES('00003','Pedro','81dc9bdb52d04dc20036dbd8313ed055','1994/10/11','correo@hotmail.com','perfil_3.jpg','banner_1.jpg','NORMAL','2020/06/10','2020/09/10');

CREATE TABLE juego (
  id_juego INT(5) NOT NULL AUTO_INCREMENT,
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

INSERT INTO juego VALUES('00001','0','0','0','0','0','Unravel','Coldwood Interactive',2020,'NORMAL','Electronic Arts','Español de España, Inglés, Francés, Italiano, Alemán, Japonés','Unravel es un juego de plataformas basado en la física. Yarny, un personaje hecho de una hebra de lana, vivirá una aventura que desborda la realidad.','Con Unravel conoceremos a Yarny, un simpático y adorable personaje nuevo hecho de una única hebra de lana que se va desenrollando progresivamente. Inspirado en los impresionantes e irrepetibles paisajes nórdicos, Unravel es un juego de plataformas basado en la física con un imponente aspecto visual. Yarny podrá usar su lana para afrontar cualquier desafío, desde saltar de rama en rama hasta dar un paseo en cometa. Al cobrar vida, nuestro protagonista representa los lazos que unen a los seres queridos. Acompaña a Yarny en una aventura que desborda la realidad y vuelve a conectar los recuerdos perdidos de una familia. Disfruta de un relato sin palabras, de una historia sincera y emocionante sobre el amor, la esperanza y el viaje de la vida.','2020/06/02','https://steamcdn-a.akamaihd.net/steam/apps/1225560/header.jpg?t=1591282642',1,'NO',1);
INSERT INTO juego VALUES('00002','0','0','0','0','0','Total war Warhammer 2','CREATIVE ASSEMBLY',2017,'NORMAL','SEGA','Español de España, Inglés, Francés, Italiano, Alemán, Checo, Coreano, Polaco','La secuela del galardonado Total War™: WARHAMMER®, Total War™: WARHAMMER II presenta una asombrosa campaña de exploración, expansión y conquista a través del Nuevo Mundo.','Total War™: WARHAMMER® II es un juego de estrategia de proporciones épicas. Elige de entre cuatro exclusivas facciones y decide cómo librar la guerra: lanzando una campaña de conquista para salvar este enorme y fantástico mundo o destruirlo. Este juego posee dos partes diferenciadas: una de ellas es la campaña de mundo abierto por turnos y la segunda consiste en batallas tácticas a tiempo real, ambientadas en los fantásticos paisajes del Nuevo Mundo. Elige cómo jugar: te sumergirás en una intensa y atractiva campaña con la posibilidad de jugar muchas veces y desafiar al mundo en modo multijugador con un ejército personalizado, compuesto por tus unidades favoritas. Total War: WARHAMMER II te ofrece cientos de horas de juego, donde no habrá dos partidas iguales.','2020/06/17','https://steamcdn-a.akamaihd.net/steam/apps/594570/header.jpg?t=1590682472',1,'NO',1);
INSERT INTO juego VALUES('00003','0','0','0','0','0','Monster hunter: World','CAPCOM Co., Ltd.',2018,'NORMAL','CAPCOM Co., Ltd.','Español de España, Inglés, francés, italiano, alemán, español, japonés, coreano, neerlandés, polaco, portugués, ruso, chino (simplificado), chino (tradicional)','Bienvenidos a un nuevo mundo! En Monster Hunter: World, la última entrega de la serie, podrás disfrutar de la mejor experiencia de juego, usando todos los recursos a tu alcance para acechar monstruos en un nuevo mundo rebosante de emociones y sorpresas.','¡Bienvenidos a un nuevo mundo! Conviértete en un gran cazador y acaba con feroces monstruos en un ecosistema lleno de vida donde podrás aprovechar tu entorno y su variada flora y fauna para vencer. ¡Caza solo o en cooperativo con hasta tres jugadores más y usa los materiales abandonados por tus enemigos caídos para crear nuevo equipo con que luchar con bestias aún más grandes y poderosas!','2020/06/15','https://steamcdn-a.akamaihd.net/steam/apps/582010/header.jpg?t=1587600484',1,'EN LINEA',4);
INSERT INTO juego VALUES('00004','0','0','0','0','0','Skyrim special edition','Bethesda Game Studios',2016,'NORMAL','Bethesda Softworks','Español de España, Inglés, Francés, Italiano, Alemnán, Polaco, Ruso','Skyrim Special Edition, ganador de más de 200 premios al "Juego del año", da vida a la fantasía épica con un nivel de detalle asombroso. La Special Edition incluye el juego aclamado por la crítica y los complementos, así como nuevas características: gráficos y efectos renovados, rayos crepusculares...','Skyrim Special Edition, ganador de más de 200 premios al "Juego del año", da vida a la fantasía épica con un nivel de detalle asombroso. La Special Edition incluye el juego aclamado por la crítica y los complementos, así como nuevas características: gráficos y efectos renovados, rayos crepusculares volumétricos, reflejos en tiempo real, profundidad de campo dinámica y muchas más. Además, Skyrim Special Edition lleva todo el poder de los mods a PC y Xbox One: nuevas misiones, entornos, personajes, diálogos, armaduras y armas, entre otras muchas cosas. ¡Con los mods, la experiencia no tiene límites!','2020/06/15','https://steamcdn-a.akamaihd.net/steam/apps/489830/header.jpg?t=1590515887',1,'NO',1);
INSERT INTO juego VALUES('00005','0','0','0','0','0','The sims 4','Maxis',2020,'NORMAL','Electronic Arts','Español de España, Inglés, Francés, Italiano, Alemán, Japonés','Disfruta del poder de crear y controlar a personas en un mundo virtual donde no hay reglas. ¡Ejerce tu poder con total libertad, diviértete y juega a la vida!','Da rienda suelta a tu imaginación y crea un mundo de Sims totalmente único. Explora y personaliza todos los detalles, desde tus Sims a sus hogares y mucho más. Elige el aspecto, la personalidad y la ropa de tus Sims. Define cómo van a vivir día a día. Diseña y construye casas increíbles para cada familia y luego decóralas con tus muebles y elementos decorativos favoritos. Desplázate a distintos barrios donde podrás conocer a otros Sims y enterarte de sus vidas. Descubre bellos lugares con entornos característicos y embárcate en aventuras espontáneas. Gestiona los altibajos de la vida cotidiana de los Sims y observa qué pasa cuando recreas situaciones realistas o fantásticas. Cuenta tus historias como quieras desarrollando relaciones, asignando profesiones y aspiraciones y sumergiéndote en un extraordinario juego en el que las posibilidades son infinitas.','2020/06/15','https://steamcdn-a.akamaihd.net/steam/apps/1222670/header.jpg?t=1592750152',1,'NO',1);
INSERT INTO juego VALUES('00006','0','0','0','0','0','Black desert online remastered','Pearl Abyss',2017,'NORMAL','Kakao Games Europe B.V.','Español de España, Inglés, francés, italiano, alemán, español, japonés, coreano, neerlandés, polaco, portugués, ruso, chino (simplificado), chino (tradicional)','Black Desert Online es un MMORPG con un mundo abierto lleno de vida. Lánzate a la batalla con combates rápidos y llenos de acción, caza monstruos y derrota Jefes temibles, lucha junto con amigos y aliados para conquistar territorios y hacerte con la gloria.','Black Desert Online es un MMORPG con un mundo abierto lleno de vida. Lánzate a la batalla con combates rápidos y llenos de acción, caza monstruos y derrota Jefes temibles, lucha junto con amigos y aliados en una hermandad y conquista territorios, dedícate a la pesca, al comercio, la artesanía, la cocina y... ¡Mucho más!','2020/06/15','https://steamcdn-a.akamaihd.net/steam/apps/582660/header.jpg?t=1590581615',1,'EN LINEA',32);
INSERT INTO juego VALUES('00007','0','0','0','0','0','Need for Speed Most Wanted','Criterion Games',2020,'NORMAL','Electronic Arts','Español de Españam, Inglés, francés, italiano, alemán, español, japonés, coreano, neerlandés, polaco, portugués, ruso, chino (simplificado), chino (tradicional)','Ponte el cinturón, pisa a fondo y sal a liarla.','La acción en el mundo abierto de Need for Speed™ Most Wanted te da la libertad de conducir a tu manera. Salta, coge atajos, cambia de coche, pasa desapercibido o ve a las zonas que mejor se adapten a los puntos fuertes de tu vehículo. Ábrete paso entre los policías y rivales con tus habilidades, la tecnología punta de tu coche y un montón de nitro. Todo depende de ti, de tus amigos y amigas, y de una selección de coches sin igual. Veamos de qué eres capaz.','2020/06/15','https://steamcdn-a.akamaihd.net/steam/apps/1262560/header.jpg?t=1592510757',1,'EN LINEA',32);
INSERT INTO juego VALUES('00008','0','0','0','0','0','Burnout Paradise Remastered','Stellar Entertainment, Criterion',2020,'NORMAL','Electronic Arts','Españo de España, Inglés, francés, italiano, alemán, español, japonés, coreano','¡Bienvenido de nuevo a Paradise City! ¡Hazte un nombre en las calles de Burnout™ Paradise Remastered!','¡Bienvenido de nuevo a Paradise City! Hazte un nombre en las calles de Burnout™ Paradise Remastered. Siembra el caos desde las avenidas del centro de la ciudad hasta las carreteras más peligrosas de las montañas. ¡Haz acrobacias de infarto y arrasa con todo en el mejor juego de conducción arcade de todos los tiempos!','2020/06/15','https://steamcdn-a.akamaihd.net/steam/apps/1238080/header.jpg?t=1591812596',1,'EN LINEA',16);
INSERT INTO juego VALUES('00009','0','0','0','0','0','DRIFT21','ECC GAMES S.A.',2020,'NORMAL','505 Games','Inglés, polaco','¡Sintonice el automóvil de deriva de sus sueños, cambie las piezas, aumente el rendimiento y muestre sus habilidades en los legendarios circuitos EBISU de Japón!','La actualización de contenido de hoy agrega una nueva pista, el EBISU Touge! La ruta es una reproducción de las curvas japonesas de montaña. El recorrido Touge (Shintoge) es de 1.200 metros de camino estrecho y sinuoso con visibilidad muy limitada. ¡La ruta está diseñada para vagabundos experimentados con nervios de acero, que han dominado la habilidad de deslizarse a la perfección!','2020/06/15','https://steamcdn-a.akamaihd.net/steam/apps/520950/header.jpg?t=1592492482',1,'EN LINEA',16);
INSERT INTO juego VALUES('00010','0','0','0','0','0','Farming Simulator 19','Giants Software',2018,'NORMAL','Focus Home Interactive','Español de España, Inglés, francés, italiano, alemán, español, japonés, coreano, neerlandés, polaco, portugués, ruso','La franquicia superventas da un gran paso adelante con una revisión completa de su motor gráfico, que ofrece los gráficos y efectos más espectaculares e inmersivos y la experiencia agrícola más profunda y completa jamás creada.','¡Farming Simulator 19 da su mayor paso adelante con la lista de vehículos más extensa de la saga! Tomarás el control de máquinas y vehículos fielmente recreados de todas las marcas líderes de la industria, entre las que se incluye por primera vez John Deere, la empresa de maquinaria agrícola más grande del mundo, Case IH, New Holland, Challenger, Fendt, Massey Ferguson, Valtra, Krone, Deutz-Fahr y muchos más.','2020/06/15','https://steamcdn-a.akamaihd.net/steam/apps/787860/header.jpg?t=1592404816',1,'EN LINEA',4);
INSERT INTO juego VALUES('00011','0','0','0','0','0','Stardew Valley','ConcernedApe',2016,'NORMAL','ConcernedApe','Español de España, Inglés, francés, italiano, alemán, español, japonés','Acabas de heredar la vieja parcela agrícola de tu abuelo de Stardew Valley. Decides partir hacia una nueva vida con unas herramientas usadas y algunas monedas. ¿Te ves capaz de vivir de la tierra y convertir estos campos descuidados en un hogar próspero?','Acabas de heredar la vieja parcela agrícola de tu abuelo de Stardew Valley. Decides partir hacia una nueva vida con unas herramientas usadas y algunas monedas. ¿Te ves capaz de vivir de la tierra y convertir estos campos descuidados en un hogar próspero?','2020/06/15','https://steamcdn-a.akamaihd.net/steam/apps/413150/header.jpg?t=1592414257',1,'NO',1);
INSERT INTO juego VALUES('00012','0','0','0','0','0','Plants vs Zombies La Batalla de Neighborville','PopCap',2019,'NORMAL','Electronic Arts','Inglés, francés, italiano, alemán, español, japonés, coreano, neerlandés','Líala planta en Plants vs. Zombies: La Batalla de Neighborville, ¡el shooter más absurdo hasta la fecha!','Te damos la bienvenida a Neighborville, donde todo va bien. ¡Salvo porque parece estar brotando un nuevo y coniferoz conflicto entre descerebrados y elementos botánicos! ¿Qué vas a hacer? ¿Llamar a los plantidisturbios? ¿Quedarte ahí plantado? Prepárate para liarla planta en este duelo entre plantas y zombis, en el que visitarás hasta el último rincón de Neighborville y más allá.','2020/06/15','https://steamcdn-a.akamaihd.net/steam/apps/1262240/header.jpg?t=1592013845',1,'EN LINEA',32);
INSERT INTO juego VALUES('00013','0','0','0','0','0','Football Manager 2020','Sports Interactive',2020,'NORMAL','SEGA','Español de Espeña, Inglés, francés, italiano, alemán, español, japonés, coreano, neerlandés, polaco, portugués, ruso, chino (simplificado), chino (tradicional)','Cruza el túnel hacia un mundo de fútbol lleno de vida donde estás en el centro, ¡un mundo donde tu opinión importa!','Da buen uso a tus opiniones y haz las cosas a tu manera en tu club esta temporada. En FM20, cada decisión cuenta gracias a nuevas funcionalidades y mecánicas depuradas, que añaden frescura y autenticidad, dando más poder a los mánagers para controlar mejor su destino y el de su equipo.','2020/06/15','https://steamcdn-a.akamaihd.net/steam/apps/1100600/header.jpg?t=1584981392',1,'NO',1);



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
INSERT INTO genero VALUES('00007','Indie');
INSERT INTO genero VALUES('00008','Multijugador masivo');
INSERT INTO genero VALUES('00009','Rol');
INSERT INTO genero VALUES('00010','Simuladores');

CREATE TABLE comentario (
  id_comentario INT(5) NOT NULL,
  id_respuesta INT(5),
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

INSERT INTO juego_carousel VALUES('00001','https://steamcdn-a.akamaihd.net/steam/apps/1225560/ss_222b64545eaedb17f47dae9898a4054a18251c75.600x338.jpg?t=1591282642','https://steamcdn-a.akamaihd.net/steam/apps/1225560/ss_107b49291a2cdc76a73b1c84191dbf0b86a6c8ef.600x338.jpg?t=1591282642','https://steamcdn-a.akamaihd.net/steam/apps/1225560/ss_36ad54e8d93463e65133eeb46b440179850ea6f5.600x338.jpg?t=1591282642');
INSERT INTO juego_carousel VALUES('00002','https://steamcdn-a.akamaihd.net/steam/apps/594570/ss_48c4d7b7c0ae11978b6f29fe58c3006802ee9651.600x338.jpg?t=1592492519','https://steamcdn-a.akamaihd.net/steam/apps/594570/ss_2595ece9a7ab534866613e7716039e66bb3df6fc.600x338.jpg?t=1592492519','https://steamcdn-a.akamaihd.net/steam/apps/594570/ss_e12a1320cd1ab645c2e63a0e6ae196c8874b93bd.600x338.jpg?t=1592492519');
INSERT INTO juego_carousel VALUES('00003','https://steamcdn-a.akamaihd.net/steam/apps/582010/ss_a262c53b8629de7c6547933dc0b49d31f4e1b1f1.600x338.jpg?t=1594255915','https://steamcdn-a.akamaihd.net/steam/apps/582010/ss_6b4986a37c7b5c185a796085c002febcdd5357b5.600x338.jpg?t=1594255915','https://steamcdn-a.akamaihd.net/steam/apps/582010/ss_681cc5358ec55a997aee9f757ffe8b418dc79a32.600x338.jpg?t=1594255915');
INSERT INTO juego_carousel VALUES('00004','https://steamcdn-a.akamaihd.net/steam/apps/489830/ss_73c1a0bb7e1720c8a1847186c3ddd837d3ca7a8d.600x338.jpg?t=1590515887','https://steamcdn-a.akamaihd.net/steam/apps/489830/ss_921ccea650df936a0b14ebd5dd4ecc73c1d2a12d.600x338.jpg?t=1590515887','https://steamcdn-a.akamaihd.net/steam/apps/489830/ss_5d19c69d33abca6f6271d75f371d4241c0d6b2d1.600x338.jpg?t=1590515887');
INSERT INTO juego_carousel VALUES('00005','https://steamcdn-a.akamaihd.net/steam/apps/1222670/ss_537683e5e29c2d6d02c64aa7321dcb26166f7d82.600x338.jpg?t=1592924524','https://steamcdn-a.akamaihd.net/steam/apps/1222670/ss_2fc938d99a1e87893852cb2d2113478190607941.600x338.jpg?t=1592924524','https://steamcdn-a.akamaihd.net/steam/apps/1222670/ss_c3a50777fc989b38bb6d7b2c3b33db6ee9d19493.600x338.jpg?t=1592924524');
INSERT INTO juego_carousel VALUES('00006','https://steamcdn-a.akamaihd.net/steam/apps/582660/ss_ac07b1399cc2c6abd952307187a54487e065d1de.600x338.jpg?t=1592945105','https://steamcdn-a.akamaihd.net/steam/apps/582660/ss_1e8cbc809f9dd62a632894b85a223155b08c5dd4.600x338.jpg?t=1592945105','https://steamcdn-a.akamaihd.net/steam/apps/582660/ss_4c828939e070f6515946e50bddb9ef231498480b.600x338.jpg?t=1592945105');
INSERT INTO juego_carousel VALUES('00007','https://steamcdn-a.akamaihd.net/steam/apps/1262560/ss_4292ba4d468883bb13c619330229047f9ab197f7.600x338.jpg?t=1592510757','https://steamcdn-a.akamaihd.net/steam/apps/1262560/ss_9793d77282f58a643e6b5ecbf082e83638a8edc3.600x338.jpg?t=1592510757','https://steamcdn-a.akamaihd.net/steam/apps/1262560/ss_82adddc724f99986dafdfe5f713de45e12a4ece5.600x338.jpg?t=1592510757');
INSERT INTO juego_carousel VALUES('00008','https://steamcdn-a.akamaihd.net/steam/apps/1238080/ss_99a41070a24edee74d8d1cad94bf390a427978aa.600x338.jpg?t=1591812596','https://steamcdn-a.akamaihd.net/steam/apps/1238080/ss_0ede399d2c0a7ad1bd4416bef9a4da22f840df75.600x338.jpg?t=1591812596','https://steamcdn-a.akamaihd.net/steam/apps/1238080/ss_6b49979c197ee247719a607e3a2b5b23eb1e837f.600x338.jpg?t=1591812596');
INSERT INTO juego_carousel VALUES('00009','https://steamcdn-a.akamaihd.net/steam/apps/520950/ss_3fded4755ea17866965a047c4b1734fab370618e.600x338.jpg?t=1592492482','https://steamcdn-a.akamaihd.net/steam/apps/520950/ss_89018fe6f78f2a8cf7454e6e37123f2129913746.600x338.jpg?t=1592492482','https://steamcdn-a.akamaihd.net/steam/apps/520950/ss_4dd2e0a54e4db6502bad1cc6675425dd7b5eb4ee.600x338.jpg?t=1592492482');
INSERT INTO juego_carousel VALUES('00010','https://steamcdn-a.akamaihd.net/steam/apps/787860/ss_409aca7beb98362696c7905a191fb39819c9e9c6.600x338.jpg?t=1592846895','https://steamcdn-a.akamaihd.net/steam/apps/787860/ss_93eef48f077663a49afd5801239cb21c150f6091.600x338.jpg?t=1592846895','https://steamcdn-a.akamaihd.net/steam/apps/787860/ss_409aca7beb98362696c7905a191fb39819c9e9c6.600x338.jpg?t=1592846895');
INSERT INTO juego_carousel VALUES('00011','https://steamcdn-a.akamaihd.net/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.600x338.jpg?t=1592414257','https://steamcdn-a.akamaihd.net/steam/apps/413150/ss_d836f0a5b0447fb6a2bdb0a6ac5f954949d3c41e.600x338.jpg?t=1592414257','https://steamcdn-a.akamaihd.net/steam/apps/413150/ss_c115a28cab72b7a20416773d3a659cf535610346.600x338.jpg?t=1592414257');
INSERT INTO juego_carousel VALUES('00012','https://steamcdn-a.akamaihd.net/steam/apps/1262240/ss_5e445990e844de0b941606315672be8f874f2547.600x338.jpg?t=1594083327','https://steamcdn-a.akamaihd.net/steam/apps/1262240/ss_5cc96bd273c28cee9341762d9a420c66cac30782.600x338.jpg?t=1594083327','https://steamcdn-a.akamaihd.net/steam/apps/1262240/ss_db7d8553adf19c6645beeb39b4225ab996b8de7d.600x338.jpg?t=1594083327');
INSERT INTO juego_carousel VALUES('00013','https://steamcdn-a.akamaihd.net/steam/apps/1100600/ss_4e27222f66e8543f76f152afd5ed958011377bc5.600x338.jpg?t=1584981392','https://steamcdn-a.akamaihd.net/steam/apps/1100600/ss_b9fe6690107580699dcbbe67dc6aa01be6e15d24.600x338.jpg?t=1584981392','https://steamcdn-a.akamaihd.net/steam/apps/1100600/ss_5a8087f77bd1fd23c77babf65bb6427e3e73e252.600x338.jpg?t=1584981392');

CREATE TABLE info_usuario_juego (
   id_juego INT(5) NOT NULL,
   id_usuario INT(5) NOT NULL,
   horas_juego_usuario TIME NOT NULL,
   favorito BIT NOT NULL,
   puntuado INT(1) NOT NULL, /*Si no ha puntuadio se inicializa a 0*/
   PRIMARY KEY (id_juego,id_usuario),
   CONSTRAINT info_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
   CONSTRAINT info_juego FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO info_usuario_juego VALUES('00001','00001','03:05:12',1,0);
INSERT INTO info_usuario_juego VALUES('00010','00001','14:50:25',1,0);
INSERT INTO info_usuario_juego VALUES('00006','00001','3:00:02',0,0);
INSERT INTO info_usuario_juego VALUES('00006','00002','00:30:02',0,0);
INSERT INTO info_usuario_juego VALUES('00002','00002','1:13:15',0,0);
INSERT INTO info_usuario_juego VALUES('00009','00003','8:10:04',1,0);

CREATE TABLE juego_genero (
   id_genero INT(5) NOT NULL,
   id_juego INT(5) NOT NULL,
   PRIMARY KEY (id_genero,id_juego),
   CONSTRAINT info_genero FOREIGN KEY (id_genero) REFERENCES genero (id_genero),
   CONSTRAINT info_genero_juego FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO juego_genero VALUES('00001','00001');
INSERT INTO juego_genero VALUES('00002','00001');

INSERT INTO juego_genero VALUES('00001','00002');
INSERT INTO juego_genero VALUES('00006','00002');

INSERT INTO juego_genero VALUES('00001','00003');
INSERT INTO juego_genero VALUES('00002','00003');
INSERT INTO juego_genero VALUES('00009','00003');

INSERT INTO juego_genero VALUES('00009','00004');

INSERT INTO juego_genero VALUES('00004','00005');
INSERT INTO juego_genero VALUES('00010','00005');

INSERT INTO juego_genero VALUES('00001','00006');
INSERT INTO juego_genero VALUES('00002','00006');
INSERT INTO juego_genero VALUES('00009','00006');
INSERT INTO juego_genero VALUES('00006','00006');
INSERT INTO juego_genero VALUES('00008','00006');

INSERT INTO juego_genero VALUES('00001','00007');
INSERT INTO juego_genero VALUES('00002','00007');
INSERT INTO juego_genero VALUES('00003','00007');

INSERT INTO juego_genero VALUES('00001','00008');
INSERT INTO juego_genero VALUES('00002','00008');
INSERT INTO juego_genero VALUES('00003','00008');

INSERT INTO juego_genero VALUES('00001','00009');
INSERT INTO juego_genero VALUES('00002','00009');
INSERT INTO juego_genero VALUES('00003','00009');

INSERT INTO juego_genero VALUES('00010','00010');

INSERT INTO juego_genero VALUES('00010','00011');
INSERT INTO juego_genero VALUES('00009','00011');
INSERT INTO juego_genero VALUES('00004','00011');
INSERT INTO juego_genero VALUES('00007','00011');

INSERT INTO juego_genero VALUES('00001','00012');
INSERT INTO juego_genero VALUES('00006','00012');
INSERT INTO juego_genero VALUES('00004','00012');

INSERT INTO juego_genero VALUES('00010','00013');
INSERT INTO juego_genero VALUES('00005','00013');

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
INSERT INTO pegi VALUES('00012','discriminacion');

CREATE TABLE juego_pegi (
   id_pegi INT(5) NOT NULL,
   id_juego INT(5) NOT NULL,
   PRIMARY KEY (id_pegi,id_juego),
   CONSTRAINT info_pegi FOREIGN KEY (id_pegi) REFERENCES pegi (id_pegi),
   CONSTRAINT info_pegi_juego FOREIGN KEY (id_juego) REFERENCES juego (id_juego)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO juego_pegi VALUES('00002','00001');
INSERT INTO juego_pegi VALUES('00006','00001');

INSERT INTO juego_pegi VALUES('00004','00002');
INSERT INTO juego_pegi VALUES('00006','00002');


INSERT INTO juego_pegi VALUES('00004','00003');
INSERT INTO juego_pegi VALUES('00006','00003');

INSERT INTO juego_pegi VALUES('00005','00004');
INSERT INTO juego_pegi VALUES('00006','00004');

INSERT INTO juego_pegi VALUES('00003','00005');
INSERT INTO juego_pegi VALUES('00006','00005');
INSERT INTO juego_pegi VALUES('00010','00005');

INSERT INTO juego_pegi VALUES('00004','00006');
INSERT INTO juego_pegi VALUES('00006','00006');
INSERT INTO juego_pegi VALUES('00011','00006');

INSERT INTO juego_pegi VALUES('00003','00007');
INSERT INTO juego_pegi VALUES('00006','00007');
INSERT INTO juego_pegi VALUES('00007','00007');

INSERT INTO juego_pegi VALUES('00002','00008');
INSERT INTO juego_pegi VALUES('00006','00008');

INSERT INTO juego_pegi VALUES('00001','00009');

INSERT INTO juego_pegi VALUES('00001','00010');

INSERT INTO juego_pegi VALUES('00002','00011');
INSERT INTO juego_pegi VALUES('00006','00011');

INSERT INTO juego_pegi VALUES('00002','00012');
INSERT INTO juego_pegi VALUES('00006','00012');
INSERT INTO juego_pegi VALUES('00008','00012');

INSERT INTO juego_pegi VALUES('00001','00013');




