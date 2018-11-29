<?php


 
    require_once("../../dbtools.inc.php");
	$name = $_POST["name"];
  $tel = $_POST["tel"]; 
  $address = $_POST["address"]; 
  $email = $_POST["email"];
    $id = $_GET["id"];
		
    //建立資料連接
    $link = create_connection();
				
    //編輯
	//UPDATE `vip` SET `name` = 'Mendoza', `tel` = '076-433-2437', `address` = 'Wood Buffale', `email` = 'dignissim.magna@placeratorcilacus.cz' WHERE `vip`.`id` = 7;
  $sql = "UPDATE vip SET name = '$name', tel = '$tel', address = '$address', 
            email = '$email' WHERE id = $id";
    $result = execute_sql($link, "artstudio", $sql);
		
    //關閉資料連接
	
	//header("location:index.php?page=".$_COOKIE["page"]);
    mysqli_close($link);
  
?>

