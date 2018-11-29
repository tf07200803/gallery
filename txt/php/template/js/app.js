
function vd_req($ele,msg){
	if($.trim($ele.val())==''){ alert(msg); $ele.focus();return false; }
	return true;	
}
function vd_eq($ele,$ele2,msg){
	if($.trim($ele.val())!=$.trim($ele2.val())){ alert(msg); $ele.focus();return false; }
	return true;	
}
function vd_phone($ele,msg){
	var v =$.trim($ele.val());
	if (/^[-#0-9]{7,15}$/i.test(v)) { return true; } else { alert(msg); $ele.focus(); return false; }
}
function vd_cell($ele,msg){
	var v =$.trim($ele.val());
	if (/^[0-9]{10}$/i.test(v)) { return true; } else { alert(msg); $ele.focus(); return false; }
}
function vd_eng($ele,msg){
	var v =$.trim($ele.val());
	if (/^[a-zA-Z0-9]{4,20}$/i.test(v)) { return true; } else { alert(msg); $ele.focus(); return false; }
}
function vd_invoice($ele,msg){
	var v =$.trim($ele.val());
	if (/^[a-zA-Z]{2}[0-9]{8}$/i.test(v)) { return true; } else { alert(msg); $ele.focus(); return false; }
}
function vd_num($ele,msg){
	var v =$.trim($ele.val());
	if (/^[0-9]{1,10}$/i.test(v)) { return true; } else { alert(msg); $ele.focus(); return false; }
}
function vd_email($ele,msg){
	var v =$.trim($ele.val());
	if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(v)) { return true; } else { alert(msg); $ele.focus(); return false; }
}
function vd_strlen($ele,msg,minlen,maxlen){
	var v =$.trim($ele.val());
	if(v==''){ return true; }
	if(v.length<minlen || v.length>maxlen){ alert(msg); $ele.focus();return false; }
	return true;	
}
function vd_radio_req($ele,msg){
	var isc = false;
	$ele.each(function(index, element) {
        if(this.checked){isc=true;}
    });	
	if(isc){ return true;}
	else{ alert(msg); $ele.eq(0).focus(); return false;}
}
//save_case_form
function vd_checkbox(){
	if(document.getElementById('r1').checked){
		return true;
	}else{
		alert('請閱讀並同意個資蒐集同意書');document.getElementById('r1').focus(); return false;
	}
}
function shareTo(){
    FB.ui({
    method: 'feed',
    link: 'http://project.artstudio.net.tw/flavoredmilk/',
    picture: 'http://project.artstudio.net.tw/flavoredmilk/200x200.jpg',
    name: "瑞穗調味乳 香醇滋味幸福の美味關係",
    description: '瑞穗調味乳 香醇滋味幸福の美味關係!'
  }, function(response){
    if(response){
     $("#action").css("display","block")
    }
    
  });

  }

function save_data_review(){
	var $f = $('#save_data_form');
	
	var vt = (vd_req($f.find('input[name=userName]'),'請填入姓名！')
			
			 && vd_req($f.find('input[name=phone]'),'請填入電話號碼！')
			 && vd_phone($f.find('input[name=phone]'),'請正確填入電話號碼！')
			 && vd_req($f.find('input[name=email]'),'請填入電子信箱！')
			 && vd_email($f.find('input[name=email]'),'請正確填入電子信箱！')
			 && vd_req($f.find('input[name=address]'),'請填入地址！')&&vd_checkbox());
			 if(vt && confirm('確認送出嗎？')){ 
			 		$.post('ajax_action.php?op=save_data',{
						address:$f.find('input[name=address]').val(), 
						userName:$f.find('input[name=userName]').val(),
						phone:$f.find('input[name=phone]').val(),
						email:$f.find('input[name=email]').val()
					},function(data,state){
						if(data.op=='y' || data.op=='d'){
							alert(data.msg);
							$("#action").css("display","none");
						}else{
							alert(data.msg);
						}

					},'json');
			  } 
				

}

function framesetsize(w, h) {
	var obj = new Object;
	obj.width = w;
	obj.height = h;
	FB.Canvas.setSize(obj);
}
window.fbAsyncInit = function () {
	FB.init({
		appId: '514220822027072', 
		status     : true, 
		cookie     : true, 
		xfbml      : true  
	});
	
	
	
}