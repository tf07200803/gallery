<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>無標題文件</title>

<script type="text/javascript">
     
    </script>	

<link href="../../css.css" rel="stylesheet" type="text/css" />
</head>

<body>
<?php
	$conn = new PDO('mysql:host=localhost;dbname=artstudio;charset=utf8', 'root', '');
	
	
	

	$query = "SELECT name,email FROM vip";
$q = $conn->prepare($query, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
$q->execute();

$q->setFetchMode(PDO::FETCH_ASSOC);
$arrayData = $q->fetchAll();

foreach ($arrayData as $row){

   // echo $row['name'] ." ";
   // echo $row['email'] ."<br>";
}

$result = $q->fetch(PDO::FETCH_OBJ,PDO::FETCH_ORI_ABS,4);

var_dump($result);
	
	
	
     
	  
	  
	  
?>


</body>
</html>