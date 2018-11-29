<?php


 
  
	$name = $_POST["name"];
  $tel = $_POST["tel"]; 
  $address = $_POST["address"]; 
  $email = $_POST["email"];
    $id = $_GET["id"];
	
	
	$conn = new PDO('mysql:host=localhost;dbname=artstudio;charset=utf8', 'root', '');
	
$stmt = $conn->prepare("UPDATE vip SET name = :name, 
            tel = :tel, 
            address = :address,  
            email = :email
            WHERE id = :id");

$stmt->bindValue(':name', $name);
$stmt->bindValue(':tel', $tel);
$stmt->bindValue(':address', $address);
$stmt->bindValue(':email', $email);
$stmt->bindValue(':id', $id);


$inserted = $stmt->execute();
  
	if($inserted){
    echo 'success';
}
		
   
  
	
	header("location:index.php?page=".$_COOKIE["page"]);
    
  
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>無標題文件</title>
</head>

<body>



</body>
</html>
