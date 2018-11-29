<?php



	$name = $_POST["name"];
  $tel = $_POST["tel"]; 
  $address = $_POST["address"]; 
  $email = $_POST["email"];
  
	$conn = new PDO('mysql:host=localhost;dbname=artstudio;charset=utf8', 'root', '');
	
$stmt = $conn->prepare("INSERT INTO vip (name, tel, address, email) VALUES (:name, :tel, :address, :email)");

$stmt->bindValue(':name', $name);
$stmt->bindValue(':tel', $tel);
$stmt->bindValue(':address', $address);
$stmt->bindValue(':email', $email);



$inserted = $stmt->execute();
  
	if($inserted){
    echo 'success';
}
  


			
  
  header("location:index.php");
?>