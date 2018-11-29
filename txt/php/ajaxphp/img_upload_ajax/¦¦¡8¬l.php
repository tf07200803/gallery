<?php

$cover = $_FILES["pic"];   
    $fileid= "pic_name_".rand(100,999);   
  
    if($cover["error"]>0) {   
        echo "err";   
    }    
    else    
    {   
        // Get the extension name by uploaded filename   
        $extName = substr( $cover["name"],strrpos($cover["name"],".") );   
        // check the file type is image   
        $isImage =  getimagesize ($cover["tmp_name"]) ;   
  
        // only jpg or png file name ( or custom by yourself)   
        if($isImage and ($extName==".jpg" or $extName==".png") ) {   
            if( move_uploaded_file($cover["tmp_name"], $fileid.$extName) )   
            {   
                echo $fileid.$extName;    
                // print the filename if success   
            } else {   
                echo "err";   
                // move upload file failed   
            }   
        } else {   
            echo "err";   
            // err file type   
        }   
    }
	

 
?>