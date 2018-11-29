<?php


 
    
		
    $id = $_GET["id"];
		
    //建立資料連接
    $conn = new PDO('mysql:host=localhost;dbname=artstudio;charset=utf8', 'root', '');
	
$stmt = $conn->prepare("DELETE FROM vip Where id = :id");
$stmt->bindValue(':id', $id);
				
   $inserted = $stmt->execute();
  
	if($inserted){
    echo 'success';
} 
    //關閉資料連接
	header("location:index.php?page=".$_COOKIE["page"]);
   
  
?>

