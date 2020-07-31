app.service('usuario', function ($http, $timeout) {
    var usuario;

    this.login = function (u, c) {
        console.log(u);
        console.log(c);
        usuario = localStorage.getItem("usuario");
        if (!usuario) {
            $http.get("http://localhost/servicios/login.php?correo=" + u + "&contra=" + c).then(function (datos) {
                usuario = datos.data[0];
                console.log(usuario);
                if (!usuario) {
                    Swal.fire("Login erróneo");
                } else {

                    localStorage.setItem("usuario", JSON.stringify(usuario));
                    window.location.href = "index.html";
                }
            });
        }
        else {
            console.log(usuario);
        }
    };
    this.logout = function () {
        localStorage.removeItem("usuario");
    };

    this.validado = function () {
        usuario = localStorage.getItem("usuario");

        if (usuario) return true;
        return false;
    };
    this.id = function () {
        usuario = JSON.parse(localStorage.getItem("usuario"))
        if (!usuario) {
            return "";
        }
        return usuario.id_usuario;
    };
    this.registrar = function (nombre, contrasenya, correo, fecha_nacimiento) {
        this.logout();
        $http.put("http://localhost/servicios/post_formalta.php", { nombre: nombre, contrasenya: contrasenya, correo: correo, fecha_nacimiento: fecha_nacimiento }).then(function (datos) {

            usuario = datos.data[0];
            localStorage.setItem("usuario", JSON.stringify(usuario));
            console.log(datos.data);
            console.log(usuario);
            window.location.href = "index.html";
        });
    }
    this.comentar = function (cabecera, recomendado, texto, id_juego, scope) {
        $http.put("http://localhost/servicios/post_infojuego.php", { id_usuario: usuario.id_usuario, cabecera: cabecera, recomendado: recomendado, texto: texto, id_juego: id_juego }).then(function (datos) {
            console.log(datos.data);
            scope.comentarios.length = 0;
            $http.get("http://localhost/servicios/get_comentarios.php?id_juego=" + id_juego).then(function (response6) {

                $timeout(function () {
                    response6.data.forEach(comentario => {

                        //console.log(comentario);
                        if (comentario.id_respuesta == null) {
                            scope.comentarios.push(comentario);
                            //console.log(scope.comentarios);
                        } else {
                            scope.respuestas.push(comentario);
                        }
                    });
                }, 0);
            });
        });
    };
    this.responder = function (cabecera, texto, id_juego, scope, id_comentario) {
        $http.put("http://localhost/servicios/post_infojuego.php", {id_usuario:usuario.id_usuario, cabecera:cabecera, texto:texto, id_juego:id_juego, id_comentario:id_comentario}).then(function (datos) {
            console.log(datos.data);
            scope.comentarios.length = 0;
            /*$http.get("http://localhost/servicios/get_comentarios.php?id_juego=" + id_juego).then(function (response6) {

                $timeout(function () {
                    response6.data.forEach(comentario => {

                        console.log(comentario);
                        if (comentario.id_respuesta == null) {
                            scope.comentarios.push(comentario);
                            //console.log(scope.comentarios);
                        } else {
                            scope.respuestas.push(comentario);
                        }
                    });
                }, 0);
            });*/
        });
    };
    this.actualizaBanner = function (img_banner) {
        $http.put("http://localhost/servicios/post_banner.php", {img_banner:img_banner, id_usuario:usuario.id_usuario}).then(function (datos) {
            console.log(datos.data);
        });
    };
    this.actualizaPerfil = function (imagen) {
        $http.put("http://localhost/servicios/post_imgperfil.php", {imagen:imagen, id_usuario:usuario.id_usuario}).then(function (datos) {
            console.log(datos.data);
        });
    };
    this.puntuacion = function (estrella,columnaAnterior, puntuacion, id_juego, puntosAnteriores) {
        $http.put("http://localhost/servicios/post_puntuacion.php", {estrella:estrella, columnaAnterior:columnaAnterior, puntuacion:puntuacion, id_juego:id_juego, puntosAnteriores:puntosAnteriores, id_usuario:usuario.id_usuario}).then(function (datos) {
            console.log(datos.data);
        });
    };
    this.actualizaCorreo = function (correo) {
        $http.put("http://localhost/servicios/post_correo.php", {correo:correo, id_usuario:usuario.id_usuario}).then(function (datos) {
            console.log(datos.data);
        });
    };
    this.actualizaContrasenya = function (contrasenya) {
        $http.put("http://localhost/servicios/post_contrasenya.php", {contrasenya:contrasenya, id_usuario:usuario.id_usuario}).then(function (datos) {
            console.log(datos.data);
        });
    };
    this.actualizaNick = function (nombre) {
        $http.put("http://localhost/servicios/post_nick.php", {nombre:nombre, id_usuario:usuario.id_usuario}).then(function (datos) {
            console.log(datos.data);
        });
    };
    this.favorito = function (favorito,id_juego) {
        $http.put("http://localhost/servicios/post_favorito.php", {favorito:favorito, id_juego:id_juego, id_usuario:usuario.id_usuario}).then(function (datos) {
            console.log(datos.data);
        });
    };
    this.contactar = function (correo,nombre,texto) {
        $http.put("http://localhost/servicios/post_contactar.php", {correo:correo, nombre:nombre, texto:texto, id_usuario:usuario.id_usuario}).then(function (datos) {
            console.log(datos.data);
        });
    };
    this.contactar2 = function (correo,asunto,texto) {
        $http.put("http://localhost/servicios/post_contactar2.php", {correo:correo, asunto:asunto, texto:texto}).then(function (datos) {
            console.log(datos.data);
        });
    };
});
