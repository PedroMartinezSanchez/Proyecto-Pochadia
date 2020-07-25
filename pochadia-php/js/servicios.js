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
    }
    this.responder = function (texto, id_juego, scope, id_comentario, respuesta) {
        $http.put("http://localhost/servicios/post_infojuego.php", { id_usuario: usuario.id_usuario, texto: texto, id_juego: id_juego, id_comentario:id_comentario, respuesta:respuesta}).then(function (datos) {
            console.log(datos.data);
            scope.comentarios.length = 0;
            $http.get("http://localhost/servicios/get_comentarios.php?id_juego=" + id_juego).then(function (response6) {

                $timeout(function () {
                    response6.data.forEach(comentario => {

                        console.log(comentario);
                        if (comentario.id_respuesta == null) {
                            scope.comentarios.push(comentario);
                            console.log(scope.comentarios);
                        } else {
                            scope.respuestas.push(comentario);
                        }
                    });
                }, 0);
            });
        });
    }
});
