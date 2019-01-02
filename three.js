// JavaScript Document

var container;
var camera, scene, renderer, objects;
var particleLight;
var textureCube;
var dae_mac;
var loader_mac = new THREE.ColladaLoader();
var dae_iphone;
var loader_iphone = new THREE.ColladaLoader();
var dae_air;
var loader_air = new THREE.ColladaLoader();
var geoArray=new Array()
var adArray=new Array()
var daeY=-200
var daecc=false
var mx=0
var my=0
var loadComplete=false



function load_mac(){
loader_mac.options.convertUpAxis = true;
loader_mac.load( 'dae3/imac.DAE', function ( collada ) {
	dae_mac = collada.scene;
	dae_mac.traverse( function ( child ) {
		geoArray.push(child)
		if(!ismobile){
			child.castShadow = true;
			child.receiveShadow = true;
		}
	} );
	dae_mac.scale.x = dae_mac.scale.y = dae_mac.scale.z = 0.6;
	dae_mac.position.set(0,daeY,0);
	
	
	load_iphone()
	} );
}
function load_iphone(){
loader_iphone.options.convertUpAxis = true;
loader_iphone.load( 'dae3/iphone.DAE', function ( collada ) {
	dae_iphone = collada.scene;
	dae_iphone.traverse( function ( child ) {
		geoArray.push(child)
		if(!ismobile){
			child.castShadow = true;
			child.receiveShadow = true;
		}
	} );
	dae_iphone.scale.x = dae_iphone.scale.y = dae_iphone.scale.z = 0.6;
	dae_iphone.position.set(250,daeY,60);
	dae_iphone.rotation.set(0,-.2,0);
	
	
	load_air()
	} );
}
function load_air(){
loader_air.options.convertUpAxis = true;
loader_air.load( 'dae3/air2.DAE', function ( collada ) {
	dae_air = collada.scene;
	dae_air.traverse( function ( child ) {
		geoArray.push(child)
		if(!ismobile){
			child.castShadow = true;
			child.receiveShadow = true;
		}
	} );
	dae_air.scale.x = dae_air.scale.y = dae_air.scale.z = 0.6;
	dae_air.position.set(350,daeY,60);
	dae_air.rotation.set(0,-.2,0);
	
	
	createMaterial()
	
	
	} );
}

function createMaterial(){
	
	var r = "Bridge2/";
	var urls = [ r + "posx.jpg", r + "negx.jpg",
				 r + "posy.jpg", r + "negy.jpg",
				 r + "posz.jpg", r + "negz.jpg" ];
	textureCube = new THREE.CubeTextureLoader().load( urls );
	textureCube.format = THREE.RGBFormat;
	textureCube.mapping = THREE.CubeReflectionMapping;
	
	
	for( var i = 0; i < geoArray.length; i++ ) {
		if(geoArray[i].name=="Component_5"){//電腦面板
				var material = new THREE.MeshPhongMaterial({color:0xc4c4c4 ,envMap: textureCube,combine: THREE.MixOperation, reflectivity: 0.05 } );
				geoArray[i].children[0].material=material

		}
		if(geoArray[i].name=="ID42"){//螢幕黑框
			
			var material = new THREE.MeshPhongMaterial({color:0x000000 ,envMap: textureCube,combine: THREE.MixOperation, reflectivity: 0.25  } );
				geoArray[i].children[0].material=material
		}
		if(geoArray[i].name=="group_0"){//電腦腳架
			/*var texture = new THREE.TextureLoader().load( 'images/p2.jpg',function(map){
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.repeat.set( 0.99, 0.99 );
				} );*/
			var material = new THREE.MeshPhongMaterial({color:0xc4c4c4  ,envMap: textureCube,combine: THREE.MixOperation, reflectivity: 0.05} );
				geoArray[i].children[0].material=material
		}
		
		if(geoArray[i].name=="ID535" || geoArray[i].name=="ID1288" || geoArray[i].name=="ID418" || geoArray[i].name=="ID433" || geoArray[i].name=="ID443" || geoArray[i].name=="ID28" || geoArray[i].name=="ID20" || geoArray[i].name=="ID551"){//AIR2面板
			
			var material = new THREE.MeshPhongMaterial({color:0x000000 ,envMap: textureCube,combine: THREE.MixOperation, reflectivity: 0.25  } );
				geoArray[i].children[0].material=material
		}
		
		if(geoArray[i].name=="ID1302" || geoArray[i].name=="ID1321" || geoArray[i].name=="ID168" || geoArray[i].name=="ID1314" || geoArray[i].name=="ID1304"){//IPHONE面板
			
			var material = new THREE.MeshPhongMaterial({color:0x000000 ,envMap: textureCube,combine: THREE.MixOperation, reflectivity: 0.25  } );
				geoArray[i].children[0].material=material
		}
		if(geoArray[i].name=="ID1319"){//金屬配件
			
			var material = new THREE.MeshPhongMaterial({color:0xdfdfdf ,envMap: textureCube,combine: THREE.MixOperation, reflectivity: 0.25  } );
				geoArray[i].children[0].material=material
		}
		
		//pc螢幕 
 		if(geoArray[i].name=="ID50"){
			var texture = new THREE.TextureLoader().load( 'images/pc1.jpg',function(map){
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.repeat.set( 1, 1 );
					map.needsUpdate = true;
					
					map.offset.x=0.6
					adArray.push(map)
				} );
				//texture.map.needsUpdate = true;
			var material = new THREE.MeshBasicMaterial({map:texture, color:0xffffff  ,envMap: textureCube,combine: THREE.MixOperation, reflectivity: 0.05} );
				geoArray[i].children[0].material=material
		}
		if(geoArray[i].name=="ID1251"){
			var texture = new THREE.TextureLoader().load( 'images/mb1.jpg',function(map){
				//console.log(map)
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.repeat.set( 1, 1 );
					map.needsUpdate = true;
					
					map.offset.x=0.2
					adArray.push(map)
				} );
				//texture.map.needsUpdate = true;
			var material = new THREE.MeshBasicMaterial({map:texture, color:0xffffff  ,envMap: textureCube,combine: THREE.MixOperation, reflectivity: 0.05} );
				geoArray[i].children[0].material=material
		}
		if(geoArray[i].name=="image_002"){
			var texture = new THREE.TextureLoader().load( 'images/mb1.jpg',function(map){
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.repeat.set( 1, 1 );
					map.needsUpdate = true;
					
					map.offset.x=0.2
					adArray.push(map)
				} );
				//texture.map.needsUpdate = true;
			var material = new THREE.MeshBasicMaterial({map:texture, color:0xffffff  ,envMap: textureCube,combine: THREE.MixOperation, reflectivity: 0.05} );
				geoArray[i].children[0].material=material
		}
		
	}
	
	createDAE();
	animate();
	indexTimer()
}

function indexTimer(){
	var obj = {myProp:0};
	TweenLite.to(obj, 3, {myProp:100,onComplete:indexTimer});
	
	for(i=0;i<adArray.length;i++){
		
		var engine=adArray[i].offset.x+0.2
		TweenLite.to(adArray[i].offset,.5,{x:engine})
	}
	
	
}
function createDAE() {

  container = document.getElementById( 'three' );
  
  camera = new THREE.PerspectiveCamera( 45, (window.innerWidth) / (window.innerHeight*0.6), 1, 4000 );
  camera.position.set( -50, 0, 800 );
//目的標位 camera.position.set( -50, 0, 800 );
//camera.position.set( -50, 0, 800 );
 //camera.rotation.set( -1, 9, 0 );
 

  scene = new THREE.Scene();
  scene.add( dae_mac );
  scene.add( dae_iphone );
  scene.add( dae_air );
  scene.background = new THREE.Color( 0xffffff );
  scene.fog = new THREE.Fog( 0xffffff, 1000, 4000 );
 

				
	scene.add( new THREE.AmbientLight( 0xffffff ) );
				
				
			
			
			
			// LIGHTS
				/*scene.add( new THREE.AmbientLight( 0x000000 ) );*/
				hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 10 );
				hemiLight.color.setHSL( 0, 0, 0 );
				hemiLight.groundColor.setHSL( 0, 0, 0 );
				hemiLight.position.set( 0, 1000, 0 );
				scene.add( hemiLight );
				
				var light = new THREE.DirectionalLight( 0xffffff, 1 );
				light.position.set( 500, 1000, -500 );
				light.castShadow = true;
				light.shadow.mapSize.width = 1024;
				light.shadow.mapSize.height = 512;
				light.shadow.camera.near = 100;
				light.shadow.camera.far = 4000;
				light.shadow.camera.left = -1000;
				light.shadow.camera.right = 1000;
				light.shadow.camera.top = 350;
				light.shadow.camera.bottom = -350;
				scene.add( light );
				
			
			
			//  GROUND
				var gt = new THREE.TextureLoader().load( "images/floor.jpg" );
				var gg = new THREE.PlaneBufferGeometry( 16000, 16000 );
				var gm = new THREE.MeshPhongMaterial( { color: 0xffffff, map: gt } );
				var ground = new THREE.Mesh( gg, gm );
				ground.rotation.x = - Math.PI / 2;
				ground.position.y = daeY;
				ground.material.map.repeat.set( 10, 10 );
				ground.material.map.wrapS = THREE.RepeatWrapping;
				ground.material.map.wrapT = THREE.RepeatWrapping;
				
				ground.receiveShadow = true;
				scene.add( ground );
				
				
  
  // RENDERER
				renderer = new THREE.WebGLRenderer( { antialias: true, alpha:true } );
				renderer.setClearColor( 0xffffff, 0 );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight*0.6 );
				container.appendChild( renderer.domElement );
				//
				renderer.gammaInput = true;
				renderer.gammaOutput = true;
				renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.PCFSoftShadowMap;
 
  //var controls = new THREE.OrbitControls( camera, renderer.domElement );
  
  
  
 /* TweenMax.to($("#container"),1,{alpha:1,delay:1})
 TweenMax.set(camera.position,{x:0,y:4000,z:3000})
 TweenMax.set(camera.rotation,{x:-1.5,y:0,z:.3})
  TweenMax.to(ground.material.map.offset,4,{y:12,delay:1,ease: Power0.easeNone})
  TweenMax.to(camera.position,1,{x:0,y:3500,z:3000,delay:1})
  TweenMax.to($("#indexTextName"),1,{alpha:1,delay:2,marginLeft:0})
  TweenMax.to($("#indexWorker_en"),1,{alpha:1,delay:2,marginLeft:0})
  TweenMax.to($("#indexbtn"),1,{alpha:1,delay:3,marginLeft:0})
   TweenMax.to(camera.position,3,{x:0,y:0,z:800,delay:4,ease: Power4.easeInOut})
   TweenMax.to(camera.rotation,3,{x:0,y:0,z:0,delay:4,ease: Power4.easeInOut,onComplete:function(){
	  indexcc=true
	  
	  }})*/
	  
	  
	  
  
  onWindowResize()
  window.addEventListener( 'resize', onWindowResize, false );
	
}



function animate() {

  requestAnimationFrame( animate );
  render();
	if(!loadComplete){//初始化動畫
		TweenMax.to($("#logo"),1,{position:"absolute",top:15,right:15,left:"auto",bottom:"auto",ease: Power4.easeInOut,delay:1,onComplete:function(){
			indexcc=true
			TweenMax.to($("#container"),.5,{alpha:1,ease: Power0.easeNone})
			TweenMax.to($("#indexTextName"),1,{alpha:1,delay:1,marginLeft:0})
			  TweenMax.to($("#indexWorker_en"),1,{alpha:1,delay:1,marginLeft:0})
			  TweenMax.to($("#indexbtn"),1,{alpha:1,delay:2})
			var $li=$(".grid").find(".grid-item")
			$li.each(function(i) {
				if (isOnScreen($(this))) {
					//console.log($(this).attr("class"))
					$mc=$(this).find(".grid-img>img")
					ox=parseInt($mc.css("margin-left"))
					if(ox<-10){
					TweenMax.to($mc,.5,{marginLeft:0,ease: Circ.easeOut,delay:Math.random()*1})
					
					}
				}
			});
			
		}})
		loadComplete=true
		
	}
  
}

function indexClick(){
	//indexcc=true
	myScroll('work')
}


function render() {
	//
		renderer.render( scene, camera );
		camera.lookAt( scene.position );
	if(indexcc){
		
		
		
		//滑鼠互動
		if(ismobile){
			
			 
				  
				 
				  	var rot=50
					var roty=50
					var difx=mbx
					var dify=mby
					var angle=degrees*(Math.PI/180)
					var _x=Math.cos(angle)*redius
					var _z=Math.sin(angle)*redius
					var angley=degreesy*(Math.PI/180)
					var _y=Math.sin(angley)*rediusy
					var rotX=difx/-7*rot
					var rotX2=rotX+90
					var rotY=dify/10*roty
					$("#mb").val(rotY)
					var rotY2=rotY+50
					degrees+=((rotX2)-degrees)*0.1
					degreesy+=((rotY2)-degreesy)*0.1
					camera.position.x=_x
					camera.position.z=_z 
					if(_y>-150){
						camera.position.y=_y
						
					}else{
						camera.position.y=-150
					}    
				
			
			
		}else{
			
			
			
			var rot=50
			var roty=50
			var difx=w/2-mx
			var dify=h/2-my
			var angle=degrees*(Math.PI/180)
			var _x=Math.cos(angle)*redius
			var _z=Math.sin(angle)*redius
			var angley=degreesy*(Math.PI/180)
			var _y=Math.sin(angley)*rediusy
			var rotX=difx/(w/2)*rot
			var rotX2=rotX+90
			var rotY=dify/(h/2)*roty
			var rotY2=rotY
			if(yytest==0){
				degrees=rotX2
				degreesy=rotY2
				yytest++
			}
			degrees+=((rotX2)-degrees)*0.1
			degreesy+=((rotY2)-degreesy)*0.1
			camera.position.x=_x
			camera.position.z=_z
			
			if(_y>-150){
				camera.position.y=_y
				
			}else{
				camera.position.y=-150
			}
		}
	}
}
jQuery(document).mousemove(function(event) {
	mx=event.pageX;
	my=event.pageY;
})


function aboutInit(){
	
	var _h=$("#head").height()
	
	//260X300
	var app = new PIXI.Application(360, 500, {antialias : true,transparent: true,resolution: 1});
	app.view.style['touch-action'] = 'auto';
	//console.log(app)
	app.renderer.plugins.interaction.autoPreventDefault = false;
	document.getElementById("headContainer").appendChild(app.view);
	head = PIXI.Sprite.fromImage('images/shead.png')
	//head.anchor.set(0.5);
	head.x = 50;
	head.y = 200;
	head.alpha=0.6;
	$("#headContainer").css("top",-500+_h)//.css("left",-100)
	
	app.stage.addChild(head);
	
	var heart = new PIXI.Container();
	var graphics = new PIXI.Graphics();
	graphics.lineStyle(1, 0xc5c5c5, 0);
	graphics.beginFill(0xff0000, 0);
	graphics.drawCircle(0, 0,10);
	graphics.endFill();
	heart.addChild(graphics);
	heart.pivot.x = heart.width / 2;
	heart.pivot.y = heart.height / 2;
	heart.x=175
	heart.y=379
	//console.log("x="+heart.x+",y="+heart.y)
	//heart.interactive = true;
	//heart.buttonMode = true;
	/*heart
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);*/
	app.stage.addChild(heart);
	
	for(i=0;i<ballNum;i++){
		var container = new PIXI.Container();
		var ball = PIXI.Sprite.fromImage('images/v'+i+'.jpg')
		ball.width=30
		ball.height=30
		container.x = Math.random()*500;
		container.y = Math.random()*500;
		var graphics = new PIXI.Graphics();
		
		graphics.lineStyle(1, 0xc5c5c5, 1);
		graphics.beginFill(0xffffff, 1);
		graphics.drawCircle(15, 15,25);
		graphics.endFill();
		container.addChild(graphics);
		container.addChild(ball);
		container.vx=Math.random()*10-5
		container.vy=Math.random()*10-5
		container.x=Math.random()*app.renderer.width
		container.y=Math.random()*app.renderer.height
		container.pivot.x = container.width / 2;
		container.pivot.y = container.height / 2;
		app.stage.addChild(container);
		myArray.push(container)
		
	}
	
	app.ticker.add(function(delta) {
		
		if(icancc){
			
			for(i=0;i<ballNum;i++){
				ballA=myArray[i]
				for(j=0;j<ballNum;j++){
					ballB = myArray[j]
					var dx = ballB.x-ballA.x;
					var dy = ballB.y-ballA.y;
					var dist = Math.sqrt(dx*dx+dy*dy);
					var mindist = ballA.width/2+ballB.width/2;
					if (dist<mindist) {
						var angle = Math.atan2(dy, dx);
						var tx = ballA.x+Math.cos(angle)*mindist;
						var ty = ballA.y+Math.sin(angle)*mindist;
						var ax = (tx-ballB.x)*spring;
						var ay = (ty-ballB.y)*spring;
						ballA.vx -= ax;
						ballA.vy -= ay;
						ballB.vx += ax;
						ballB.vy += ay;
					}
				}
			}
			
			for(i=0;i<ballNum;i++){
				balling = myArray[i];
				moves(balling,heart);
			}
			
			power.num+=((0)-power.num)*0.1
			heart.y+=((379+power.num)-heart.y)*0.1
			var _h=$("#head").height()
			$("#headContainer").css("top",-500+_h)
		}
		
	});
}
function moves(ballA, ballB) {
	var dx = ballB.x-ballA.x;
	var dy = ballB.y-ballA.y;
	
	var angle = Math.atan2(dy, dx);
	var targetX = ballB.x-Math.cos(angle)*springLength;
	var targetY = ballB.y-Math.sin(angle)*springLength;
	ballA.vx += (targetX-ballA.x)*spring;
	ballA.vy += (targetY-ballA.y)*spring;
	ballA.vx *= friction;
	ballA.vy *= friction;
	ballA.x += ballA.vx;
	ballA.y += ballA.vy-fly;
	
	
	
}
function onDragStart(event) {
    
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

function myScroll(type){
	var position=0
	
	if(type=="index"){
		position=$('#index').offset();  
	}
	if(type=="work"){
		position=$('#worker').offset();  
	}
	if(type=="about"){
		position=$('#me').offset();  
	}
	var y = position.top; 
	var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	TweenLite.to($body,1,{scrollTop:y}) 
		
}

function onDragMove() {
    if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}


$(document).scroll(function () {
	barY=$(window).scrollTop()
	
	var $li=$(".grid").find(".grid-item")
	$li.each(function(i) {
        if (isOnScreen($(this))) {
			//console.log($(this).attr("class"))
			$mc=$(this).find(".grid-img>img")
			ox=parseInt($mc.css("margin-left"))
			
			if(ox<-10){
			TweenMax.to($mc,.5,{marginLeft:0,ease: Circ.easeOut,delay:Math.random()*1})
			}
		}
    });
	
 if (isOnScreen($('#ican'))) {
	 if(barY>oldbarY){
		 if(ismobile){
			 power.num+=20
		 }else{
			power.num-=20
		 }
		
	}else{
		if(ismobile){
			 power.num-=20
		 }else{
			power.num+=20
		 }
		
	}
	oldbarY=barY
 	icancc=true
 }
 else {
 	icancc=false
 }
 
 if (isOnScreen($('#index'))) {
 	indexcc=true
	
 }
 else {
 	indexcc=false
	
 }
 
  
 
 if(barY<worker_y-h/2){
	 menuChange(0)
 }else if(barY>worker_y-h/2 && barY<about_y-h/2){
	 menuChange(1)
 }else if(barY>about_y-h/2){
	 menuChange(2)
 }
 
 menuResize()
 //console.log(indexcc)
 /*if (isOnScreen($('.call:eq(1)'))) {
 $('.label2').text('second div show')
 }
 else {
 $('.label2').text('second div hide')
 }*/

 });
 
 function menuChange(num){
	 if(num!=menuTargetNum){
		 $mc=$("#menuLeft li:eq("+num+")")
		 $omc=$mc.siblings()
		 $mc.addClass("target")
		 $omc.removeClass("target")
		 menuTargetNum=num
	 }
	 
 }
 
 function menuResize(){
	 indexheight=$("#index").height()
	 
	 if(barY>indexheight){
		 if($("#menu").css("position")=="absolute"){
			 $("#menu").css("position","fixed").css("top",0)
		 }
	 }else{
		 //console.log(indexheight)
		// if($("#menu").css("position")=="fixed"){
			 $("#menu").css("position","absolute").css("top",parseInt($("#index").css("height"))-30)
		 //}
	 }
}
 
 function isOnScreen(elem) {
	 var docViewTop = $(window).scrollTop();
 var docViewBottom = docViewTop + $(window).height();
 var elemTop = $(elem).offset().top;
 
 //var elemBottom = elemTop + $(elem).height();
	var elemBottom = elemTop;
	
 return ((elemBottom <= docViewBottom) && (elemTop+$(elem).height() >= docViewTop));
 }
 
 
 
 function reload(){
	manifest = [
			"images/c0.jpg",
			"images/c1.jpg",
			"images/c2.jpg",
			"images/c3.jpg",
			"images/c4.jpg",
			"images/c5.jpg",
			"images/c6.jpg",
			"images/c7.jpg",
			"images/c8.jpg",
			"images/c9.jpg",
			"images/c10.jpg",
			"images/c11.jpg",
			"images/c12.jpg",
			"images/c13.jpg",
			"images/c14.jpg",
			"images/c15.jpg",
			"images/c16.jpg",
			"images/c17.jpg",
			"images/c18.jpg",
			"images/c19.jpg",
			"images/c20.jpg",
			"images/c21.jpg",
			"images/c22.jpg",
			"images/c23.jpg",
			"images/c24.jpg",
			"images/c25.jpg",
			"images/c26.jpg",
			"images/c27.jpg",
			"images/c28.jpg",
			"images/c29.jpg",
			"images/c30.jpg",
			"images/c31.jpg",
			"images/c32.jpg",
			"images/c33.jpg",
			"images/c34.jpg",
			"images/c35.jpg",
			"images/c36.jpg",
			"images/c37.jpg",
			"images/c38.jpg",
			"images/c39.jpg",
			"images/c40.jpg",
			"images/c41.jpg",
			"images/c42.jpg",
			"images/c43.jpg",
			"images/l0.png",
			"images/l1.png",
			"images/l2.png",
			"images/l3.png",
			"images/l4.png",
			"images/l5.png",
			"images/l6.png",
			"images/l7.png",
			"images/l8.png",
			"images/l9.png",
			"images/l10.png",
			"images/l11.png",
			"images/l12.png",
			"images/l13.png",
			"images/l14.png",
			"images/l15.png",
			"images/l16.png",
			"images/l17.png",
			"images/l18.png",
			"images/l19.png",
			"images/l20.png",
			"images/l21.png",
			"images/l22.png",
			"images/l23.png",
			"images/l24.png",
			"images/l25.png",
			"images/v0.jpg",
			"images/v1.jpg",
			"images/v2.jpg",
			"images/v3.jpg",
			"images/v4.jpg",
			"images/v5.jpg",
			"images/v6.jpg",
			"images/v7.jpg",
			"images/v8.jpg",
			"images/v9.jpg",
			"images/v10.jpg",
			"images/v11.jpg",
			"images/v12.jpg",
			"images/v13.jpg",
			"images/logo.png",
			"images/about.jpg",
			"images/share1.png",
			"images/shead.png",
			"Bridge2/negx.jpg",
			"Bridge2/negy.jpg",
			"Bridge2/negz.jpg",
			"Bridge2/posx.jpg",
			"Bridge2/posy.jpg",
			"Bridge2/posz.jpg",
			"images/pc1.jpg",
			"images/mb1.jpg",
			"images/floor.jpg"
			
		];
		
		preload = new createjs.LoadQueue(true, "");
		preload.on("fileload", handleFileLoad);
		preload.on("progress", handleOverallProgress);
		preload.on("fileprogress", handleFileProgress);
		preload.on("error", handleFileError);
		loadAll()
}

function loadAll() {
		while (manifest.length > 0) {
			loadAnother();
		}
	}
function loadAnother() {
		// Get the next manifest item, and load it
		var item = manifest.shift();
		preload.loadFile(item);
		
	}
function handleFileLoad(event) {
		var div = event.item.id
		

		// Get a reference to the loaded image (<img/>)
		var img = event.result;
		//console.log("start")
		// Resize it to fit inside the item
		
	}

	// File progress handler
	function handleFileProgress(event) {
		
		//div.children("DIV").width(event.progress * div.width()); // Set the width the progress.
		//console.log(event.progress)
	}

	// Overall progress handler
	function handleOverallProgress(event) {
		//$("#mainProgress > .progress").width(preload.progress * $("#mainProgress").width());
		//console.log(preload.progress)
		var loadw=50
		if(ismobile){
			loadw=30
		}
		
		$(".mc0").attr("y",50-preload.progress*50)
		if(preload.progress==1){
			init()
		}
	}

	// An error happened on a file
	function handleFileError(event) {
		//var div = map[event.item.id];
		//div.addClass("error");
	}
	
	
	function drawIntro(svg) { 
var img=svg.image(0,0,"100%","100%","images/logo.svg",{opacity:0.1,class:"mc1"})
var img=svg.image(0,0,"100%","100%","images/logo.svg",{mask: 'url(#Mask)',class:"mc2"})
var mask= svg.mask('Mask', 0, 0, "100%", "100%", {maskUnits: 'userSpaceOnUse'}); 
svg.rect(mask,0, "100%", "100%", "100%", {fill: '#ffffff',class:"mc0"});
}