<?php


 
    require_once("../../dbtools.inc.php");
		
    $id = $_GET["id"];
		
    //建立資料連接
    $link = create_connection();
				
    //刪除帳號
    $sql = "DELETE FROM vip Where id = $id";
    $result = execute_sql($link, "artstudio", $sql);
		
    //關閉資料連接
	header("location:index.php?page=".$_COOKIE["page"]);
    mysqli_close($link);
  
?>

