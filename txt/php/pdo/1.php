<?php 

$connection = new PDO('mysql:host=localhost;dbname=artstudio;charset=utf8', 'root', '');
$statement = $connection->query('select * from vip');

foreach($statement as $row){
    echo $row['name'];
}



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