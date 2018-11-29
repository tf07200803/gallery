<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml'>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
<title>無標題文件</title>
</head>

<body>
<?php  

	
	
    require_once('./phpmailer/PHPMailerAutoload.php');  
    $C_name=$_POST['C_name'];  
    $C_email=$_POST['C_email'];  
    $C_tel=$_POST['C_tel'];  
    $C_message=$_POST['C_message'];  
	
     
    $mail= new PHPMailer();                          //建立新物件  
    $mail->IsSMTP();                                    //設定使用SMTP方式寄信  
    $mail->SMTPAuth = true;                        //設定SMTP需要驗證  
    $mail->SMTPSecure = "ssl";                    // Gmail的SMTP主機需要使用SSL連線  
    $mail->Host = "smtp.gmail.com";             //Gamil的SMTP主機  
    $mail->Port = 465;                                 //Gamil的SMTP主機的埠號(Gmail為465)。  
    $mail->CharSet = "utf-8";                       //郵件編碼  
    $mail->Username = "tommy@artstudio.com.tw"; //Gamil帳號  
    $mail->Password = "a126292269";                 //Gmail密碼  
    $mail->From = "tommy@artstudio.com.tw";        //寄件者信箱  
    $mail->FromName = "tommy";                  //寄件者姓名  
    $mail->Subject ="來自".$C_name."留言"; //郵件標題 
	$mail->IsHTML(true); //郵件內容為html  
	if (isset($_FILES['uploaded_file']) &&
    $_FILES['uploaded_file']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['uploaded_file']['tmp_name'],
                         $_FILES['uploaded_file']['name']);
	}
	
	$message = '<p>The following request was sent from: ';
	$message .= "<p>Name: ". $C_name ."</p><br />";
	$message .= "<p>Phone: ". $C_tel ."</p><br />";
	$message .= "<p>Email: ". $C_email ."</p><br />";
	$message .= '<p><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td bgcolor="#00CC33">1</td>
    <td bgcolor="#FF6633">4</td>
  </tr>
  <tr>
    <td bgcolor="#00CC33">2</td>
    <td bgcolor="#FF6633">5</td>
  </tr>
  <tr>
    <td bgcolor="#00CC33">3</td>
    <td bgcolor="#FF6633"><img src="http://demo.artstudio.com.tw/15/biot0629/images/v0.jpg" width="100" /></td>
  </tr>
</table></p><br />';
	
	
    $mail->Body = $message ; //郵件內容  
                               
    $mail->AddAddress("$C_email");            //收件者郵件及名稱  
    if(!$mail->Send()){  
        echo "Error: " . $mail->ErrorInfo;  
    }else{  
        echo "感謝您的留言，您的建議是我們前進的動力。?"; 
		
    }  
?>  

</body>
</html>