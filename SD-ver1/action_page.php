<?php
$name = $_POST['name'];
$vemail = $_POST['email'];
$message = $_POST['message'];

$email_from='mailto:info@sdicgroup.com';
$email_subject="New Form Submission";
$email_body="You have received a new message from the user $name.\n"."email address: $vemail\n"."Here is the message:\n $message";
$to ='mailto:info@sdicgroup.com';
$header="From: $email_from \r\n";
mail($to,$email_subject,$email_body,$header);
?>