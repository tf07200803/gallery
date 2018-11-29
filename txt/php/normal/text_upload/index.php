<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>無標題文件</title>

<script type="text/javascript">
      function check_data()
      {
        if (document.myForm.name.value.length == 0)
          alert("姓名欄位不可以空白哦！");
        else if (document.myForm.tel.value.length == 0)
          alert("電話欄位不可以空白哦！");
        else if (document.myForm.address.value.length == 0)
          alert("地址欄位不可以空白哦！");
		else if (document.myForm.email.value.length == 0)
          alert("EMAIL欄位不可以空白哦！");
        else
          myForm.submit();
      }
    </script>	

<link href="../../css.css" rel="stylesheet" type="text/css" />
</head>

<body>
<?php
	require_once("../../dbtools.inc.php");
	
	
	//指定每頁顯示幾筆記錄
      $records_per_page = 5;
			
	//取得要顯示第幾頁的記錄
	if (isset($_GET["page"]))
	  $page = $_GET["page"];
	else
	  $page = 1;
	
	//建立資料連接
	$link = create_connection();
	//執行 SQL 命令
	$sql = "SELECT id, name, tel, address, email FROM vip ORDER BY id DESC";
	$result = execute_sql($link, "artstudio", $sql);
	setcookie("page",$page,time()+3600);
	
	//取得記錄數
      $total_records = mysqli_num_rows($result);
			
	//計算總頁數
	$total_pages = ceil($total_records / $records_per_page);
		  
	//計算本頁第一筆記錄的序號
	$started_record = $records_per_page * ($page - 1);
		  
	//將記錄指標移至本頁第一筆記錄的序號
	mysqli_data_seek($result, $started_record);
	
	
	
	echo "<div class='listClassTitle listClass'>";
		echo "<div>姓名</div>";
		echo "<div>電話</div>";
		echo "<div>地址</div>";
		echo "<div>email</div>";
        echo "</div>";
	
	
	//顯示記錄
    $j = 1;
	
	/*如果無分頁
	while ($row = mysqli_fetch_assoc($result))
      {
        echo "<div class='listClass'>";
		echo "<div>" . $row["name"] . "　</div>";
		echo "<div>" . $row["tel"] . "　</div>";
		echo "<div>" . $row["address"] . "　</div>";
		echo "<div>" . $row["email"] . "　</div>";
        echo "</div>";
        
      }
	 */
	 
		 while ($row = mysqli_fetch_assoc($result) and $j <= $records_per_page)
		  {
			echo "<form name='editForm' method='post' action='edit.php?id=". $row["id"] ."'>";
			echo "<div class='listClass'>";
			echo "<div><input name='name' class='editClass' type='text' value='". $row["name"] ."'></div>";
			echo "<div><input name='tel' class='editClass' type='text' value='". $row["tel"] ."'></div>";
			echo "<div><input name='address' class='editClass' type='text' value='". $row["address"] ."'></div>";
			echo "<div><input name='email' class='editClass' type='text' value='". $row["email"] ."'></div>";
			
			
			echo "<div><div class='deletebtn'><a href='delete.php?id=". $row["id"] ."'>delete</a></div><input type='submit' class='editbtn' value='edit' /></div>";
			echo "</div>";
			echo "</form>";
			
			$j++;
		  }
	  
	  
	  
	  //產生導覽列
      echo "<div align='center' class='pageControl'>";
			
      if ($page > 1)
        echo "<a href='index.php?page=". ($page - 1) . "'>上一頁</a> ";
				
      for ($i = 1; $i <= $total_pages; $i++)
      {
        if ($i == $page)
          echo "$i ";
        else
          echo "<a href='index.php?page=$i'>$i</a> ";		
      }
			
      if ($page < $total_pages)
        echo "<a href='index.php?page=". ($page + 1) . "'>下一頁</a> ";			
				
      echo "</div>";
	  
	  
	  
	  
	  
			
      //釋放記憶體空間
      mysqli_free_result($result);
      mysqli_close($link);
	  
	  
	  
?>
<form name="myForm" method="post" action="post.php">
<div class="listClass_noline">
	<div><input type="text" class="textClass" placeholder="name" name="name" /></div>
    <div><input type="text" class="textClass" placeholder="tel" name="tel" /></div>
    <div><input type="text" class="textClass" placeholder="address" name="address" /></div>
  	<div><input type="text" class="textClass" placeholder="email" name="email" /></div>
    
</div>
<div class="wid100 fl center" style="margin-top:3%; margin-bottom:3%;"><input type="submit" class="btnClass" id="uploadbtn" value="資料送出" /></div>
</form>

</body>
</html>