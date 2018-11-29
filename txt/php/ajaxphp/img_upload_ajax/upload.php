<?php
$picurl = $_POST["picurl"];
$upload_dir =  "./upload_files/";
$cover = $_FILES["myfile"];   
$upload_file = $upload_dir.$picurl; 
  
     
        
  
        // only jpg or png file name ( or custom by yourself)   
       $extName = substr( $cover["name"],strrpos($cover["name"],".") );   
        // check the file type is image   
       $isImage =  getimagesize ($cover["tmp_name"]) ;
	   if($isImage and ($extName==".jpg" or $extName==".png") ) {   
	   
            if(move_uploaded_file($_FILES["myfile"]["tmp_name"], $upload_file) )   
            {   
                echo 'upload_files/'.$picurl;    
                // print the filename if success   
            } else {   
                echo "err";   
                // move upload file failed   
            } 
		} else{
			echo "err";   
		}
          
    
	

 
?>