<?php
header('Content-type: application/x-javascript');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');  
$data = array('id'=>1,'email'=>'sam@example.com');
echo $_GET['callback'] . '(' . "{'success' : '1' , 'data' : ".json_encode($data)." }" . ')';die();

?>