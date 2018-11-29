
<html>
  <head>
    <title>檔案上傳</title>
    <meta charset="utf-8">
  </head>
  <body>
  
    <?php
		
	define('UPLOAD_DIR', 'upload_files/');
	$img = $_POST['baseInput'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$file = UPLOAD_DIR . uniqid() . '.png';
	$success = file_put_contents($file, $data);
	print $success ? $file : 'Unable to save the file.';
	
	
    ?>
  </body>
</html>