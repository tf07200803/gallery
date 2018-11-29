<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>無標題文件</title>

<script src="src/jquery-1.11.0.min.js"></script>
<script src="src/minified/TweenLite.min.js"></script>
<script>

var dataArray=new Array()

$().ready(function(){

})

function deleteClick(num){
	var URLs="delete.php?id="+num;
           
            $.ajax({
                url: URLs,
                type:"GET",
                success: function(msg){
                    alert("刪除成功");
					createData()
					
					
                },

                 error:function(xhr, ajaxOptions, thrownError){ 
                    alert(xhr.status); 
                    alert(thrownError); 
                 }
            });
}

function editClick(num){
	
	var URLs="edit.php?id="+num;
           
            $.ajax({
                url: URLs,
				data: $('#editform'+num).serialize(),
                type:"POST",
				dataType:'text',
                success: function(msg){
                    alert("更新成功");
					createData()
					
					
                },

                 error:function(xhr, ajaxOptions, thrownError){ 
                    alert(xhr.status); 
                    alert(thrownError); 
                 }
            });
}

function sendClick(){
	
			
	var URLs="post.php";
           
            $.ajax({
                url: URLs,
                data: $('#sentToBack').serialize(),
                type:"POST",
                dataType:'text',

                success: function(msg){
                    alert("送出成功");
					createData()
                },

                 error:function(xhr, ajaxOptions, thrownError){ 
                    alert(xhr.status); 
                    alert(thrownError); 
                 }
            });
          
}

function createData(){
	$.ajax({
                url: "body.php"+ window.location.search,
                type:"POST",
                dataType:'html',

                success: function(msg){
                   
					/*for(i=0;i<msg.length;i++){
						dataArray.push({name:msg[i].name,tel:msg[i].tel,address:msg[i].address,email:msg[i].email})
					}*/
					
					$("#container").html(msg)
                },

                 error:function(xhr, ajaxOptions, thrownError){ 
                    alert(xhr.status); 
                    alert(thrownError); 
                 }
            });
}

</script>

<link href="../../css.css" rel="stylesheet" type="text/css" />
<style>
.listClass>form>div{
	width:20%;
	float:left;
}
</style>


</head>

<body>

<div class="wid100 fl" id="container">
<?php 
include 'body.php';
?>

</div>



<form action="" id="sentToBack">
<div class="listClass_noline">
	<div><input type="text" class="textClass" placeholder="name" name="name" /></div>
    <div><input type="text" class="textClass" placeholder="tel" name="tel" /></div>
    <div><input type="text" class="textClass" placeholder="address" name="address" /></div>
  	<div><input type="text" class="textClass" placeholder="email" name="email" /></div>
    
</div>

</form>

<div class="wid100 fl center" style="margin-top:3%; margin-bottom:3%;"><input type="submit" class="btnClass" id="uploadbtn" value="資料送出" onclick="sendClick()" /></div>

</body>
</html>