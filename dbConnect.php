<?php
mb_internal_encoding("utf8");

$pdo = new PDO("mysql:dbname=artistsite;localhost;","root","");

$pdo->exec("insert into contactform(name,mail,message)
values('".$_POST['name']."','".$_POST['mail']."','".$_POST['message']."');");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/confirm.css">
    <title>登録完了</title>
</head>
<body>
    <h1>Thank you for your message</h1>
    <a href="home.html">Home</a>
</body>
</html>
