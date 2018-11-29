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
	
	header("location:index.php?page=".$_COOKIE["page"]);
    mysqli_close($link);
  
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>無標題文件</title>
</head>

<body>

<?php

echo $name.'<br>';
echo $tel.'<br>';
echo $address.'<br>';
echo $email.'<br>';
echo $id.'<br>';

?>

</body>
</html>
