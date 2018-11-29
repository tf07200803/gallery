<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>無標題文件</title>

<?php
            header("Content-Type:text/html; charset=utf-8");

            $in="Test測試";
            $md5=md5($in);
            $crypt=crypt($in,$in);
            $base64_encode=base64_encode($in);
            $urlencode=urlencode($in);

            echo "MD5:".$md5."<br />";
            echo "MD5解密:".md5($md5)."<br /><hr />";

            echo "crypt:".$crypt."<br />";
            echo "crypt解密:".crypt($crypt,$crypt)."<br /><hr />";

            echo "base64_encode:".$base64_encode."<br />";
            echo "base64_encode解密:".base64_decode($base64_encode)."<br /><hr />";

            echo "urlencode:".$urlencode."<br />";
            echo "urlencode解密:".urldecode($urlencode)."<br /><hr />";
			
			
			//加密  

			
			
        ?>
<?php // str_rot13() example

header("Content-Type:text/html; charset=utf-8");

$string  = 'Encoding and Decoding Encrypted PHP Code';
$encoded = str_rot13($string);
$decoded = str_rot13(str_rot13($string));
echo $encoded ."<br />";
echo $decoded ."<hr />";
?>

<?php // base64_encode()/base64_decode() example
$string  = 'Encoding and Decoding Encrypted PHP Code';
$encoded = base64_encode($string);
$decoded = base64_decode($encoded);
echo $encoded ."<br />";
echo $decoded ."<hr />";
?>


<?php // example using second parameters
$string       = '我在測試唷';
$compressed   = gzdeflate($string);
$uncompressed = gzinflate($compressed);
echo $compressed ."<br />";
echo $uncompressed ."<hr />";
?>

<?php // gzinflate()/gzdeflate() example
$string       = '我在測試唷';
$compressed   = utf8_encode(gzdeflate($string));
$uncompressed = gzinflate(utf8_decode($compressed));
echo $compressed ."<br />";
echo $uncompressed ."<hr />";



?>




</head>

<body>
</body>
</html>