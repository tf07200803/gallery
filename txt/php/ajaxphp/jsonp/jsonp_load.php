<?php 


require_once("../../dbtools.inc.php");
//建立資料連接
$link = create_connection();

//執行 SQL 命令
$sql = "SELECT * FROM vip ORDER BY id DESC";	
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

mysqli_free_result($result);
mysqli_close($link);

header('Content-type: application/x-javascript');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');  
//$data = array('id'=>1,'email'=>'sam@example.com');
echo $_GET['callback'] . '(' . "{'success' : '1' , 'data' : ".json_encode($NewArray)." }" . ')';die();


 	
	
	
	
	
	
?>