
<?php
$header = "data";
$timestamp = $_GET["timestamp"];
$index = $header . $timestamp;

session_start();

if ($_SERVER['REQUEST_METHOD'] == "POST")
{
	
    $picurl = $_POST["picurl"];
	
    
    $_SESSION[$index]['name'] = $_FILES['file']['name'];
    $_SESSION[$index]['size'] = $_FILES['file']['size'];
    $_SESSION[$index]['picurl'] = $picurl;
    
    if ($_FILES['file']['size'] == 0)
    {
        $_SESSION[$index]['state'] = 'error';
        echo "false";
    }
    else
    {
        $_SESSION[$index]['state'] = "sussesful";
        echo "true";
		
		/*post方式成功*/
		
		//指定檔案儲存目錄及檔名
      $upload_dir =  "./upload_files/";
	  
      $upload_file = $upload_dir.$picurl; 
		
      //將上傳的檔案由暫存目錄移至指定之目錄
      if (move_uploaded_file($_FILES["file"]["tmp_name"], $upload_file))
      {
        echo "<strong>檔案上傳成功</strong><hr>";	
				
        //顯示檔案資訊		
        echo "檔案名稱：" . $_FILES["file"]["name"] . "<br>";	
        echo "暫存檔名：" . $_FILES["file"]["tmp_name"] . "<br>";
        echo "檔案大小：" . $_FILES["file"]["size"] . "<br>";
        echo "檔案種類：" . $_FILES["file"]["tmp_name"] . "<br>";						
       // echo "<p><a href='JavaScript:history.back()'>繼續上傳</a></p>";
      }
      else
      {
        echo "檔案上傳失敗 (" . $_FILES["file"]["error"] . ")<br><br>";
        //echo "<a href='javascript:history.back()'>重新上傳</a>";
      }
		
		
		/*post方式成功*/
		
    }
}
else
{
	$callback = $_GET['callback'];

    $output = '';
    if (isset($_SESSION[$index]))
    {
        $output = $_SESSION[$index]['picurl'];
            
        unset($_SESSION[$index]);
    }

    if (is_null($callback))
        echo $output;
    else
        echo $callback."('".$output."');";    
   
}