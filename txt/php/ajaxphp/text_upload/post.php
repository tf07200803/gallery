<?php
  require_once("../../dbtools.inc.php");
	
  $name = $_POST["name"];
  $tel = $_POST["tel"]; 
  $address = $_POST["address"]; 
  $email = $_POST["email"];

  //建立資料連接
  $link = create_connection();
			
  //執行 SQL 命令
  $sql = "INSERT INTO vip(name, tel, address, email)
          VALUES ('$name', '$tel', '$address', '$email')";
  $result = execute_sql($link, "artstudio", $sql);


	
  //關閉資料連接
  mysqli_close($link);
  
  //將網頁重新導向
  
  exit();
?>