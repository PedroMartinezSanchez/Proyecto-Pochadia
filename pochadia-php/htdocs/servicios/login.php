<?php
  session_start();
  
  // Obtengo los datos cargados en el formulario de login.
  $email = $_POST['correo'];
  $password = $_POST['contra'];
  $error = $_POST['error'];
  // Datos para conectar a la base de datos.
  $nombreServidor = "localhost";
  $nombreUsuario = "root";
  $passwordBaseDeDatos = "";
  $nombreBaseDeDatos = "pochadia";
 
  // Crear conexión con la base de datos.
  $conn = new mysqli($nombreServidor, $nombreUsuario, $passwordBaseDeDatos, $nombreBaseDeDatos);
  
  // Validar la conexión de base de datos.
  if ($conn ->connect_error) {
    die("Connection failed: " . $conn ->connect_error);
  }
  
  // Consulta segura para evitar inyecciones SQL.
  $sql = "SELECT * FROM usuario WHERE correo='".$email."' AND contrasenya = '".$password."'";
  $resultado = $conn->query($sql);
  
  // Verificando si el usuario existe en la base de datos.
  if ($resultado->num_rows>0){
	// Guardo en la sesión el email del usuario.
	$_SESSION['email'] = $email;
    $query = $conn->query("SELECT id_usuario from usuario where correo='".$email."' and contrasenya='".$password."'");
    
    $id = mysqli_fetch_assoc($query);
    // Redirecciono al usuario a la página principal del sitio.
    header("Location: http://127.0.0.1:5502/index.html?id_usuario=".$id['id_usuario']);
  }else{
    
  }

?>