<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>無標題文件</title>



<script src="js/md5.js"></script>
<script src="src/minified/TweenMax.min.js"></script>
<script src="src/minified/plugins/CSSPlugin.min.js"></script>
<script src="src/minified/easing/EasePack.min.js"></script>
<script src="src/minified/TweenLite.min.js"></script>
<script src="src/jquery-1.11.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="js/dist/sweetalert.css">
<script src="js/dist/sweetalert.min.js"></script>
<script src="js/addr.js"></script>
<script src="js/base64.js"></script>


<script>

$().ready(function(){
	
})

function sendData(){
	



	var txt=Base64.encode($("#txt").val())
	$("#myform").attr("action","post.php?action="+txt)
	$("#myform").submit()
}

</script>

</head>

<body>
<form method="post" id="myform">
<input type="text" id="txt" name="txt" />
<input type="button" id="sendbtn" value="提交" onclick="sendData()" />
</form>

</body>
</html>