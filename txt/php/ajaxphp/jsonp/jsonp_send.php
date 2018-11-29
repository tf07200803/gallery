<?php 

	


 	$name = $_GET["name"];
    $tel = $_GET["tel"];
	$address = $_GET["address"];
    $email = $_GET["email"];
	
	require_once("../../dbtools.inc.php");
	 //建立資料連接
    $link = create_connection();
				
    //執行 UPDATE 陳述式來更新使用者資料
     $sql = "INSERT INTO vip (name, tel, address, email) VALUES ('$name', '$tel', '$address', '$email')";
	

    $result = execute_sql($link, "artstudio", $sql);
		
    //關閉資料連接
    mysqli_close($link);
	
	header('Content-type: application/x-javascript');
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');  
	//echo $_GET['callback'] . '(' . "{'success' : '1' }" . ')';die();
	include 'jsonp_load.php';
	
?>