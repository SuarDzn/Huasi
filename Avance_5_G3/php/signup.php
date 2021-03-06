<?php

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (empty($_POST['name'])) {
        $name_error = "Porfavor ingrese su nombre completo";
    }
    if (empty($_POST['email'])) {
        $email_error = "Porfavor ingrese su correo electrónico";
    }

    if (empty($_POST['password'])) {
        $password_error = "Porfavor ingrese su contraseña";
    }

    if (!empty($_POST['password'])) {
        if (($_POST['password']) != ($_POST['confirm_password'])) {
            $confirmation_error = "Las contraseñas no coinciden";
        }
    }

    if (!empty($_POST['password']) && !empty([$_POST['email']] && !empty([$_POST['name']]))) {
        if (($_POST['password']) == $_POST['confirm_password']) {
            $register_user = "Usuario registrado con éxito";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Huasi - Registro</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/69e84cf231.js" crossorigin="anonymous"></script>
</head>

<body bgcolor="#050924">
    <section class="sub-header h-login">

        <nav>
            <a href="../pages/index.html"><img src="../img/new_logo_white_min.png"></a>
            <div class="nav-links" id="navLinks">
                <i class="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><a href="../pages/index.html">Inicio</a></li>
                    <li><a href="../pages/nosotros.html">Nosotros</a></li>
                    <li><a href="../carta_pages/entradas.html"> Nuestra Carta</a></li>
                    <li><a href="../pages/integrantes.html">Nuestro Equipo</a></li>
                    <li><a href="../pages/login.html">Ingresa o Registrate</a></li>
                </ul>
            </div>
            <div class="icons">
                <i class="fas fa-search" id="search-icon"></i>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-shopping-cart"></a>
            </div>
            <i class="fa fa-bars" onclick="showMenu()"></i>
        </nav>
    </section>

    <!-- Login Contenido -->

    <section class="login">

        <div class="row">
            <form class="login" action="../php/signup.php" method="post">
                <h3>¡Bienvenido!</h3>
                <p>Configuremos tu cuenta personal</p>
                <p>¿Ya tienes una cuenta? &nbsp;<a href="../pages/login.html">Ingresa Sesión</a></p>
                <span><?php if (isset($register_user)) {
                            echo $register_user;
                        } ?></span>
                <input type="name" class="login-input" placeholder="Nombre Completo*" name="name" required />
                <span><?php if (isset($name_error)) {
                            echo $name_error;
                        } ?></span>
                <input type="email" class="login-input" placeholder="Correo Electrónico*" name="email" required />
                <span><?php if (isset($email_error)) {
                            echo $email_error;
                        } ?></span>
                <input type="password" class="login-input" placeholder="Contraseña*" name="password" required />
                <span><?php if (isset($password_error)) {
                            echo $password_error;
                        } ?></span>
                <input type="password" class="login-input" placeholder="Confirme la Contraseña*" name="confirm_password" required />
                <span><?php if (isset($confirmation_error)) {
                            echo $confirmation_error;
                        } ?></span><br><br>
                <input type="submit" value="Crear Cuenta" class="hero-btn white-btn" />
            </form>
        </div>
        </div>
    </section>

    <!-- Footer -->

    <section class="footer">
        <div class="head-section">
            <h3>Contáctanos</h3>
            <p>
                <i class="fa-solid fa-phone"></i>&nbsp;934-734-454 <br>
                <i class="fa-solid fa-phone"></i>&nbsp;923-435-322
            </p>
        </div>
        <div class="head-section">
            <h4>Síguenos en Nuestras Redes Sociales</h4>
            <div class="footer-content">
                <div class="section">
                    <a href="https://www.facebook.com/restaurantecriollohuasi" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i>&nbsp;Restaurante Huasi</a>
                    <a href="https://www.instagram.com/restaurantecriollohuasi/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i>&nbsp;@restaurantecriollohuasi</a>
                </div>
            </div>
        </div>
        <div class="footer-content">
            <div class="section">
                <h4><a href=https://landbot.site/v3/H-1274677-JS11L3Z3YALRSIR5/index.html target="_blank" rel="noopener noreferrer">Horarios y más información</a></h4>
                <h4><a href=https://landbot.site/v3/H-1274677-JS11L3Z3YALRSIR5/index.html target="_blank" rel="noopener noreferrer">Haz una reserva</a></h4><br>
            </div>
            <div class="section">
                <h4><a href=#>Libro de Reclamaciones</a></h4>
                <h4><a href=#>Política de Cookies</a></h4><br>
            </div>
        </div><br>
        <div class="head-section">
            <small>&copy; 2022 Página desarrollada por el grupo 3</small><br>
        </div>
    </section>

    <!-- JavaScript para el Menu -->

    <script>
        var navLinks = document.getElementById("navLinks")

        function showMenu() {
            navLinks.style.right = "0";
        }

        function hideMenu() {
            navLinks.style.right = "-200px";
        }
    </script>

    <!-- Boton Chatbot -->
    <a href="https://landbot.site/v3/H-1274677-JS11L3Z3YALRSIR5/index.html" target="_blank" rel="noopener noreferrer" class="chatbot"></a>
</body>


</html>