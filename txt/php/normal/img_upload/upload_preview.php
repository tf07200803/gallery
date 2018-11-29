<!doctype html>
<html>
  <head>
    <title>檔案上傳</title>
    <meta charset="utf-8">
  </head>
  <body>
    <p align="center"><img src="title.jpg"></p>
    <?php
      //指定檔案儲存目錄及檔名
      $upload_dir =  "./upload_files/";
	  
      $upload_file = $upload_dir . $to = iconv("UTF-8", "Big5", $_FILES["myfile"]["name"]);
		
      //將上傳的檔案由暫存目錄移至指定之目錄
      if (move_uploaded_file($_FILES["myfile"]["tmp_name"], $upload_file))
      {
        echo "<strong>檔案上傳成功</strong><hr>";	
				
        //顯示檔案資訊		
        echo "檔案名稱：" . $_FILES["myfile"]["name"] . "<br>";	
        echo "暫存檔名：" . $_FILES["myfile"]["tmp_name"] . "<br>";
        echo "檔案大小：" . $_FILES["myfile"]["size"] . "<br>";
        echo "檔案種類：" . $_FILES["myfile"]["tmp_name"] . "<br>";						
        echo "<p><a href='JavaScript:history.back()'>繼續上傳</a></p>";
      }
      else
      {
        echo "檔案上傳失敗 (" . $_FILES["myfile"]["error"] . ")<br><br>";
        echo "<a href='javascript:history.back()'>重新上傳</a>";
      }
    ?>
  </body>
</html>