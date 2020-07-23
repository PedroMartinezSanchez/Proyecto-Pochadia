app.service('usuario', function($http) {
    var usuario;

    this.login=function(u,c){
        console.log(u);
        console.log(c);
        usuario = localStorage.getItem("usuario");
        if (!usuario) {
            $http.get("http://localhost/servicios/login.php?correo="+u+"&contra="+c).then(function(datos) {
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
    this.id = function (){
        usuario = JSON.parse(localStorage.getItem("usuario"))
        if (!usuario) {
            return "";
        }
        return usuario.id_usuario;
    };
    this.registrar = function(usuario, clave) {
        $http.put("https://localhost/servicios/registro.php", {usuario:usuario, clave:clave}).then(function(datos) {
            usuario = datos.data[0];
            localStorage.setItem("usuario", JSON.stringify(usuario));
            console.log(usuario);
            window.location.href = "index.html";
        });        
    }
});
