

/**计算rem**/
(function(win){
	var remCalc = {};
	var docEl = win.document.documentElement,
		tid,
		hasRem = true;
	hasZoom = true;
	designWidth = 750;
	function refresh(){
		var width = docEl.getBoundingClientRect().width;
		if(hasRem){
			var rem = width/10;
			docEl.style.fontSize = rem + "px";
			remCalc.rem = rem;
			var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
			if(actualSize!== rem && actualSize>0 && Math.abs(actualSize-rem)>1){
				var remScaled = rem*rem/actualSize;
				docEl.style.fontSize = remScaled + "px";
			}
		}
		if(hasZoom){
			var style = document.getElementById('y_style');
			if(!style){
				style = document.createElement('style');
				style.id = 'y_style';
			}
			style.innerHTML = '._z{zoom:'+ width/designWidth + '}';
			document.getElementsByTagName('head')[0].appendChild(style);
		}
	}
	function dbcRefresh(){
		clearTimeout(tid);
		tid = setTimeout(refresh,100);
	}
	win.addEventListener("resize",function(){
		dbcRefresh()
	},false);
	win.addEventListener("pageshow",function(e){
		if(e.persisted){
			dbcRefresh()
		}
	},false);
	refresh();
	if(hasRem){
		remCalc.refresh = refresh;
		remCalc.rem2px = function(d){
			var val = parseFloat(d)/this.rem;
			if(typeof d==="string" && d.match(/px$/)){
				val+="rem";
			}
			return val
		};
		win.remCalc = remCalc;
	}
})(window);
		

function ImgLoadingByFile(imgArray,loadPageID,loadTxtID,showpageID,musicID){
	function complete(long){
		var timer = setTimeout(function(){
			$('#'+loadPageID).hide();
			$('#'+showpageID).show();
			$('.btn-music').show();
			musicStar.play();
			clearTimeout(timer);
			timer = null
		},long);
	}
	if(sessionStorage.getItem("pageloaded")){
			var now = 0;
			console.log(now);
			var timer02 = setInterval(function(){
			    if(now<=100){
			        $('#'+ loadTxtID +' span').html(now + '%');
			    }else{
							clearInterval(timer02);
							timer02=null
							return
			    }
			    now +=8
			    console.log(now);
			},10);
		complete(2500);
		return 
	}else{
		var imgLoad = 0;
		var btime = new Date();
		if(imgArray.length>0){
			var imgTotal = imgArray.length;
			var percent = 0;
			var img = [];
			for(var i = 0;i<imgArray.length;i++){
				img[i] = new Image();
				img[i].src=imgArray[i];
				img[i].onload = function(){
					imgLoad++;
					percent = parseInt(imgLoad/imgTotal*100);
						$('#'+loadTxtID +' span').html(percent + '%');
						//console.log(percent);
						
					if(percent>=100){
					    var etime = new Date();
					    console.log(etime-btime);
					    if(etime-1000>btime){
					        complete(100);
					    }else{
					        complete(200);
					    }
						sessionStorage.setItem("pageloaded", "true");	
					}
				}
			}
		}
	}
}

//横屏
function landscape(){
	var w = window.Utils.windowW();
	var h = window.Utils.windowH();
	// $("body").css({"width":w,"height":h,"overflow-x":'hidden',"-webkit-overflow-x":"hidden"});
	// $('#page-landscape').css({"width":w,"height":h}).show();
	$('#page-landscape').show()
	//$('#page-portrait').css({"width":w,"height":h});
}
var firstInit = true,wrem = 0;
//竖屏
function portrait(){
	var w = window.Utils.windowW();
	var h = window.Utils.windowH();
	// $("body").css({"width":'600vw',"height":'100vh',"overflow-x":'scroll',"-webkit-overflow-x":"scroll"});
	$('#page-portrait').show();
	$('#page-landscape').hide();
	$('.btn-music').click(function(){
		if(musicStar.paused){
			musicStar.play();
			$('.open').show();
			$('.clock').hide();
		}else{
			musicStar.pause();
			$('.open').hide();
			$('.clock').show();
		}
	});
	$('#goContent').click(function(){
		$('.pageone').hide()
		$('.pagebox').show()
		$('.content1').show()
		if(musicStar.paused){
			musicStar.play();
			$('.btn-music').show()
			$('.open').show();
			$('.clock').hide();
		}
	})	
	//初始化加载
	if(firstInit) {
		musicStar.play();
		wrem = window.remCalc.rem;
		var imgFile = [
			"img/loading02.gif",
		];
		ImgLoadingByFile(imgFile, 'loadingPage', 'loadTxt', 'pageOne',"musicStar");
		//活动详情
		SaveInfo.init();
		//内容
		var time01 = true,
		time02 = true,
		time03 = true,
		time04 = true,
		time05 = true,
		time06 = true,
		time07 = true,
		time08 = true,
		time09 = true,
		time10 = true,
		time11 = true,
		time12 = true,
		time13= true,
		time14= true,
		time15 =true;

	$('#page-portrait').on('scroll',function() {
		/* ...do something... */
		var sh = $('#page-portrait').scrollLeft();
	
		console.log(sh*2);
		/********动画**********/
		if(sh > (50 / 75 * wrem) && time01) { 
			$(".move-tip").hide();
			time01 = false;
		}
		if(sh > (600 / 75 * wrem) && time02) { 
			$('.content2').show()
			time02 = false;
		}
		if(sh > (1280 / 75 * wrem) && time03) { 
			$('.content3').show()
			time03 = false;
		}
		if(sh > (1900 / 75 * wrem) && time04) { 
			$('.content4').show()
			var timer = setTimeout(function(){
				$('.pagefive-people').hide()
				clearTimeout(timer)
				timer = null
			}, 3000)
			time04 = false;
			
		}
		if(sh > (2646 / 75 * wrem) && time05) { 
			$('.content5').show()
			time05 = false;
		}
		if(sh > (3454 / 75 * wrem) && time06) {
			$('.content6').show();
			time06 = false;
		}
		
		if(sh > (8950 / 75 * wrem) && time07) { 
			$(".p1-kuang2").show();
			time07 = false;
		}
		if(sh > (11300 / 75 * wrem) && time08) { 
			$(".p1-kuang3").show();
			time08 = false;
		}
		if(sh > (11700 / 75 * wrem) && time09) { 
			$(".p1-that").show();
			time09 = false;
		}
		if(sh > (14200 / 75 * wrem) && time10) { 
			$(".p1-fuck").show();
			time10 = false;
		}
		if(sh > (14362 / 75 * wrem) && time11) {
			$(".p1-banma").show();
			time11 = false;
		}
		if(sh > (14896 / 75 * wrem) && time12) { 
			$(".p1-haode").show();
			$(".p1-haode2").show();
			$('.p1-music').show();
		
			time12 = false;
		}
		if(sh > (8406/ 75 * wrem) && time13) {
			
			time13 = false;
		}
		if(sh > (1000/ 75 * wrem) && time14) { 
	        
			time14 = false;
		}
		if(sh > (9150/ 75 * wrem) && time15) { 
			$(".p1-money01").show();
			$(".p1-money02").show();
			time15 = false;
		}

	});
	$(".p3-yuyue").click(function() {
		$(this).hide();
		$(".p3-shijia").fadeIn(300);
		$(".userEnd").fadeIn(300);
	})
		
		
		firstInit = false;
	}

	//part1
	
}
var getPixelRatio = function(context) {
	var backingStore = context.backingStorePixelRatio ||
			context.webkitBackingStorePixelRatio ||
			context.mozBackingStorePixelRatio ||
			context.msBackingStorePixelRatio ||
			context.oBackingStorePixelRatio ||
			context.backingStorePixelRatio || 1;
	return (window.devicePixelRatio || 1) / backingStore;
};
function drawImg (obj) {
	var canvas = document.createElement('canvas')//画布
	var ctx = canvas.getContext("2d");
	var ratio = getPixelRatio(ctx);
	canvas.width = 459*ratio;
	canvas.height = 845*ratio;
	// ctx.clearRect(0,0,canvas.width,canvas.height);
	// ctx.fillStyle = '#000000';
	// ctx.fillRect(0,0,canvas.width, canvas.height);
	var bg = new Image()
	bg.crossOrigin = "*";
	bg.src = obj.bg	
	bg.onload = function() {
		console.log(bg.width, bg.height, canvas.width, canvas.height)
		 //画结果图
		ctx.drawImage(bg, 0, 0, bg.width, bg.height, 0, 0, canvas.width, canvas.height);
		var head = new Image()
		head.crossOrigin = "*";
		head.src = obj.head
		head.onload = function() {
			//画头像
			console.log(head.width, head.height)
			ctx.save()
			var r = 50*ratio
			var d = 2*r
			var cx = 37*ratio + r
			var cy = 700*ratio + r
			ctx.arc(cx, cy, r ,0, 2*Math.PI)
			ctx.clip();
			ctx.drawImage(head, 37*ratio, 700*ratio, d, d);
			ctx.restore();
			// ctx.drawImage(head, 0, 0, head.width, head.height, 37/750*canvas.width, 1203/1450*canvas.height, 100/750*canvas.width, 100/750*canvas.width);
				//画用户昵称
			ctx.font = 14*ratio + 'px Arial';
			ctx.fillStyle = '#ffffff';
			ctx.fillText(obj.username, 150*ratio, 750*ratio)
			//img 数据，可传给后台数据库
			var imgData = canvas.toDataURL()
			$('.pagelast-saveimg').attr('src', imgData)
			$('.content6-saveimg').show()
			$('.content6-success').hide()	
		}  
	}   
}


var SaveInfo = {
	companyname:null,//公司名称
	job:"未知", //参会人员职务
	phone:null, //联系方式
	turnover:0, //2018年营业额
	puzzled:0, //puzzled
	plan:0, //当下企业面临的困惑？
	study:0, //曾经参加过哪些学些？
	consult:0, //相关咨询
	code: null, // 邀请码
	init:function(){
		function GetQueryString(name){
			var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r!=null&&r!=undefined)return  unescape(r[2]); return null;
		}
		SaveInfo.source = GetQueryString('source')==null?'wz':GetQueryString('source');
		SaveInfo.updateView();
	},
	updateView:function(){
		SaveInfo.inputReg();
		SaveInfo.submit();
		$('select').on('touchstart',function(){
			$(this).find('option[value="0"]').attr('disabled','disabled');
		});
		$('select').change(function(){
			$(this).addClass('changed');
		})
		$('.pagenine-huodong').click(function() {
			$('.content6-detail').show()
			// $(".page-portrait").addClass('fixed').removeClass('scroll');
		})
		$('.pagenine-close').click(function(){
			$('.content6-detail').fadeOut(300)
			// $(".page-portrait").removeClass('fixed').addClass('scroll');
		})
		$('.pageten-save').click(function(){
			var obj = {
				bg: 'img/pagelast-saveimg.png',
				head: 'img/pagesix-people1.png', // 用户头像，微信获取
				username: '用户昵称' // 微信获取
			}
			drawImg(obj)
		})
	},
	inputReg:function(){
		$('input[name="companyname"]').blur(function(){
			var val = $(this).val();
			var reg =/^[a-zA-Z\u4E00-\u9FA5]*$/;
			console.log(reg.test(val));
			if(val!=""&&val!="test"&&val!="空白"&&val!="Unknown"&&val!="未知"&&val!="未告知"&&this.validity.valid&&reg.test(val)){
				$(this).removeClass('error')
				$(this).attr('placeholder','公司名称*');
			}else{
				$(this).attr('placeholder','请正确输入公司名称');
				$(this).addClass('error')			
			}
		});
		$('input[name="job"]').blur(function(){
			var val = $(this).val();
			var reg =/^[a-zA-Z\u4E00-\u9FA5]*$/;
			console.log(reg.test(val));
			if(val!=""&&val!="test"&&val!="空白"&&val!="Unknown"&&val!="未知"&&val!="未告知"&&this.validity.valid&&reg.test(val)){
				$(this).removeClass('error')
				$(this).attr('placeholder','参会人员职务*');
			}else{
				$(this).attr('placeholder','请正确输入参会人员职务');
				$(this).addClass('error')			
			}
		});


		$('input[name="phone"]').blur(function(){
			var reg = /^1[345678]\d{9}$/;
			var val = $(this).val();
			if(isNaN(parseFloat(val))){
				// $(this).val('');
				$(this).attr('placeholder','请您输入联系方式');
				$(this).addClass('error')
			}else{
				if(reg.test(val)){
					$(this).attr('placeholder','联系方式*');
					$(this).removeClass('error')
				}else{
					// $(this).val('');
					$(this).attr('placeholder','请您正确输入联系方式');
					$(this).addClass('error')
				}
			}
		});

	},
	clickReg:function(){
		var companynameReg = false, jobReg = false, phoneReg = false;
		var inputCompanyname = document.getElementById('companyname');
		if(inputCompanyname.validity.valid){
			companynameReg = true;
			$(inputCompanyname).removeClass('error')
		}else{
			companynameReg = false;
			$(inputCompanyname).addClass('error')
		}
		var inputJob = document.getElementById('job');
		if(inputJob.validity.valid){
			jobReg = true;
			$(inputJob).removeClass('error')
		}else{
			jobReg = false;
			$(inputJob).addClass('error')
		}
		var reg = /^1[345678]\d{9}$/;
		if(reg.test($('input[name="phone"]').val())){
			phoneReg = true;
			$('input[name="phone"]').removeClass('error')
		}else{
			phoneReg = false;
			$('input[name="phone"]').addClass('error')
		}
		var total = companynameReg&&phoneReg&&jobReg;
		console.log(companynameReg&&phoneReg&&jobReg);
		console.log(total);
		return total;
		//return true;
	},
	submit:function(){
		$('#btn-userInfo').on('click',function(e){
			e.preventDefault();
			$(".alert").click(function(){
				$(".alertBox").fadeOut(300);
				$('.btn-userInfo').addClass('btn-move');
			});
			if(SaveInfo.clickReg()){
				$('.content6-success').show()
				$('.content6').hide()
				//  ajax 提交=====================
				// SaveInfo.username = $('input[name="username"]').val();
				// SaveInfo.phone = $('input[name="phone"]').val();
				// SaveInfo.province = $('select[name="ddlProvince"] option:selected').val();
				// SaveInfo.city = $('select[name="ddlCity"] option:selected').val();
				// //SaveInfo.agency = $('select[name="agency"] option:selected').val();
				// // 发起Ajax调用
				// var xyData = {
				// 	name:SaveInfo.username,
				// 	mobile:SaveInfo.phone,
				// 	sex:SaveInfo.sex,
				// 	dealer_name:SaveInfo.province+','+SaveInfo.city+','+SaveInfo.agency,
				// 	car_type:SaveInfo.cartype,
				// 	buy_time:SaveInfo.buytime,
				// 	chart:SaveInfo.chart,
				// 	source:SaveInfo.source
				// };
				// //console.log(xyData);
				// $.ajax({
				// 	type:'post',
				// 	url:'https://h5api.xingyuanauto.com/userinfo',
				// 	data:xyData,
				// 	dataType:'json',
				// 	success:function(msg){

				// 		//console.log(msg);
				// 		if(msg.code==1001){
				// 			$('.success').show();
				// 			$('.btn-userInfo').removeClass('btn-move');
				// 			$('select option[value="0"]').attr('disabled',false);
				// 			$('#userForm')[0].reset();
				// 			$('select').removeClass('changed');
				// 		}else if(msg.code==1003){//已注册
				// 			$(".repace").show();
				// 			$('.btn-userInfo').removeClass('btn-move');
				// 		}else if(msg.code==1005){//重复提交
				// 			$(".repaceagain").show();
				// 			$('select option[value="0"]').attr('disabled',false);
				// 			$('.btn-userInfo').removeClass('btn-move');
				// 			$('#userForm')[0].reset();
				// 		}else{
				// 			$(".error").show();
				// 		}
				// 	},
				// 	error:function(msg){
				// 		$(".error").show();
				// 	}
				// });
			}else{
				// $(".error").show();
				alert('请完善信息');
			}

		});
	}
};

(function() {
	"use strict";

	function Utils() {
	}

	Utils.isWeiXin = function(){
		return navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/);
	};
	Utils.isQQ = function(){
		return navigator.userAgent.ua.match(/QQ\/([\d\.]+)/);
	};
	Utils.isQZone = function(){
		return navigator.userAgent.ua.indexOf("Qzone/") !== -1;
	};

	Utils.isIos = function() {
		return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	};
	Utils.isIPhone = function() {
		return navigator.userAgent.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1;
	};
	Utils.isIpad = function() {
		return navigator.userAgent.indexOf('iPad') > -1;
	};
	Utils.isAndroid = function() {
		var u = navigator.userAgent;
		return navigator.userAgent.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
	};
	Utils.isMobile = function() {
		// var u = navigator.userAgent;
		return navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i) != null;
	};

	// ## 屏幕方向
	Utils.isPortrait = function() {
		if (!Utils.isMobile()) {
			//alert(111);
			return true;

		}
		// 安卓版 微信里面 只用判断 width 和 height
		if (Utils.isAndroid() && Utils.isWeiXin()) {
			if (Utils.windowW() < Utils.windowH()) {
				//alert(22);
				return true;

			} else {
				//alert(331);
				return false;

			}
		}
		var orientation = window['orientation'];
		if (orientation||orientation==0) {
			if (orientation == 90 || orientation == -90) {
				//alert(4442);
				return false;

			}else{
				//alert(555111);
				return true;

			}
		} else {
			if (Utils.windowW() < Utils.windowH()) {
				//alert(666111);
				return true;

			} else {
				//alert(777111);
				return false;

			}
		}
	};
	// ## jquery 获取 window 的宽度
	Utils.windowW = function() {
		// var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		return $(window).width();
	};
	// ## jquery 获取 window 的高度
	Utils.windowH = function() {
		return $(window).height();
	};
	window.Utils = Utils;
}());
$(function(){
	onResize();
	if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", onResize, false);
	}else{
		window.addEventListener( "resize", onResize, false);
	}
});

function  onResize() {

	if(Utils.isPortrait()){
		if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){

			var timer = setTimeout(function(){
				portrait();

				clearTimeout(timer);
			},100);
		}else{
			portrait();
		}
	} else {
		if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
			var timer = setTimeout(function(){
				landscape();
				clearTimeout(timer);
			},100);
		}else{
			landscape();
		}
	}
}



