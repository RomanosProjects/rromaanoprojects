<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "info@rromaanoprojects.com";
    $subject = "Nuovo messaggio da $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $body = "Nome: $name\nEmail: $email\n\nMessaggio:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email inviata con successo!";
    } else {
        echo "Errore nell'invio dell'email.";
    }
}
?>