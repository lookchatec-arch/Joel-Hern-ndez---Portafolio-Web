<?php
/**
 * Backend de contacto para el Portafolio de Joel Hernández
 * Procesa el envío de correos desde el servidor tradicional.
 */

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitización de entradas
    $nombre = strip_tags(trim($_POST["nombre"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $asunto = strip_tags(trim($_POST["asunto"]));
    $mensaje = trim($_POST["mensaje"]);

    // Configuración del correo
    $destinatario = "contacto@joelhernandez.tech";
    $titulo = "Nuevo mensaje del portafolio: $asunto";

    // Construcción del contenido del correo
    $contenido = "Has recibido un nuevo mensaje desde tu sitio web profesional.\n\n";
    $contenido .= "Nombre: $nombre\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Asunto: $asunto\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Cabeceras del correo
    $headers = "From: $nombre <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Envío del correo
    if (mail($destinatario, $titulo, $contenido, $headers)) {
        // Redirigir con éxito (puedes crear una página de éxito o volver al inicio)
        echo "<script>
                alert('¡Gracias! Tu mensaje ha sido enviado con éxito.');
                window.location.href = 'index.html#contacto';
              </script>";
    } else {
        // Error al enviar
        echo "<script>
                alert('Lo sentimos, hubo un error al enviar tu mensaje. Por favor intenta de nuevo.');
                window.location.href = 'index.html#contacto';
              </script>";
    }
} else {
    // Si no es POST, redirigir al inicio
    header("Location: index.html");
    exit;
}
?>
