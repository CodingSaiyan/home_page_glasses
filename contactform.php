<?php 
    if(isset($_POST[submit])){
        $name = $_POST['name'];
        $email_from = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
    }

    $mail_to = 'webdevpuck@hotmail.com';
    $headers = "From: " . $email_from;
    $txt = "You have recieved an email from " . $name.".\n\n".$message;
    

    mail($mail_to, $phone, $txt, $headers);
    
    header("Location: index.php?mailsend");


?>