<?php
require_once("../../dbtools.inc.php");
//建立資料連接
$link = create_connection();

//執行 SQL 命令
$sql = "SELECT * FROM vip";	
$result = execute_sql($link, "artstudio", $sql);
$NewArray=array();
//取出資料
while($row=mysqli_fetch_array($result,MYSQLI_BOTH)){

array_push($NewArray,array(
"name"=>$row["name"],
"tel"=>$row["tel"],
"address"=>$row["address"],
"email"=>$row["email"]
)
);
}

$json=json_encode($NewArray);
echo $json;
//print_r($json);

//釋放記憶體空間
mysqli_free_result($result);
mysqli_close($link);
?>

