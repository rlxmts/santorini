<?php


if(isset($_POST['email']) && !empty($_POST['email'])){

    $nome = addcslashes($_POST['name']);
    $email = addcslashes($_POST['email']);
    $tel = addcslashes($_POST['tel']);
    $mensagem  = addcslashes($_POST['message']);

    $to = "santorini@santoriniprofissional.com.br";
    $subject = "Enviado através do formulario do site!";
    $body = "nome: ". $nome . "\r\n" .
            "E-mail: ". $email . "\r\n" .
            "Telefone: " . $tel . "\r\n" .
            "Mensagem: ". $mensagem;

    $header = "From: santorini@santoriniprofissional.com.br"."\r\n" . 
              "Reply-To: " . $email . "\r\n" .
              "X-Mailer:PHP/" . phpversion();

    if(mail($to, $subject, $body, $header)){
        echo('E-mail enviado com sucesso!');
    }else{
        echo('Ops, E-mail não pode ser enviado!');
    }
}
?>