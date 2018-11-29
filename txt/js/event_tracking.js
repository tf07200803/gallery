/*
* filename: event_tracking_{請填寫專案ID}.js
* actionCode: 就是專案ID
* 專案名稱: 請填寫專案名稱
* 檔案請統一放在 /event.artstudio.com.tw 目錄下
* 載入時請統一用 https  , 例如 https://event.artstudio.com.tw/event_tracking_{請填寫專案ID}.js
*/

//設定
var actionCode = 'biore'; //活動命名 , 使用英數 , 不可使用空格
var gaNumber = 'UA-37383669-96'; //請輸入 GA 號碼
var singlePage=1

//定義變數
var debugMode = ''; //若為 1 表示開啟偵錯模式 , 0 為關閉偵錯模式 次處不用填寫


if(!gaNumber){
	showLog('no ga');
}else{
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', gaNumber, 'auto');
	ga('send', 'pageview');
}
//category , action  , label , value 
function clickga(label){
	if(singlePage==1 && (getQueryStringGA('utm_source')!='' && getQueryStringGA('utm_source')!=undefined)){var url = getQueryStringGA('utm_source'); if(window.console) {console.log('utm_source = '+url+' --  clickga = '+label);} }
	else if(getQueryStringGA('utm_source')!='' && getQueryStringGA('utm_source')!=undefined){var url = getQueryStringGA('utm_source'); if(window.console) {console.log('utm_source='+url+' --  clickga = '+label);}}
	else {var url = 'direct'; if(window.console) {console.log('clickga='+label+' url='+url);} }
	ga('send','event',url,'click',label);
}
function pagega(p){
	ga('send','pageview',p);
	if(window.console) {console.log('pagega = '+p);}
}
function goalga(label){
	if(singlePage==1 && getQueryStringGA('utm_source')!='') var url = getQueryStringGA('utm_source');
	else url = 'direct';
	ga('send','event',url,'submit',label);
	if(window.console) {console.log('goalga = '+label);}
}
function getQueryStringGA(param) {
	var q = document.location.search || document.location.hash;
	if (param == null) { return q; }
	if (q) {
		var pairs = q.substring(1).split("&");
		for (var i = 0; i < pairs.length; i++) {
			if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
				return pairs[i].substring((pairs[i].indexOf("=") + 1));
			}
		}
	}
}
function SetCookie(name,value)
{
    var Days = 30; //cookie 保留天數
    var exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ encodeURIComponent (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)//取得 cookie        
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return decodeURIComponent(arr[2]); return null;
}
function delCookie(name)//刪除  cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
if(getQueryStringGA('debugMode')=='1'){ //turn on debug mode
	SetCookie(actionCode+'_debugMode',1);
	debugMode = '1';
}
if(getQueryStringGA('debugMode')=='0'){ //turn off debug mode
	delCookie(actionCode+'_debugMode');
}
if(getCookie(actionCode+'_debugMode')=='1') debugMode = '1'; //detect debug mode
function showLog(e){ //Show Log
	if(debugMode=='1') { alert(e); }
	else { if(window.console) console.log('e'); }
}



//資料送出成功時,後端程式人員呼叫的 function , 成交代碼可以利用這個 function 觸發
function dataSubmitSuccess(){


}







