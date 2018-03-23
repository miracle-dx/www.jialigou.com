
$(function(){
	//菜单栏功能
	$(".m-category-nav-info").hover(
		function(){
			$(this).children(".m-category-sub-nav").removeClass("f-dn").addClass("f-db");
			$(this).addClass("s-category-nav-info");
			$(".detail").css("color","#3B2C33");
		},
		function(){
			$(this).children(".m-category-sub-nav").removeClass("f-db").addClass("f-dn");
			$(this).removeClass("s-category-nav-info");
			$(".detail").css("color","#fff");
		}
	);
	//轮播图功能
	var i = 0 ;
	var timer;
	 $('.uls').children("li").eq(0).show().siblings('.ig').hide();
	 showTime();
    $('.j-slider').children("li").hover(function(){ i = $(this).index(); Show(); clearInterval(timer); },
    function(){ showTime();});
    function showTime(){
  		timer = setInterval(function(){
	  		Show();
	    	i++;
	    	if(i==5){
	     	i=0;
	   		}
  		},1700);
	} 
	function Show(){
	  $('.uls').children("li").eq(i).fadeIn(300).siblings().fadeOut(300);	   
    $('.j-slider').children("li").eq(i).addClass('s-slider-red').removeClass("s-slider-black");	
    $('.j-slider').children("li").eq(i).siblings().addClass('s-slider-black').removeClass("s-slider-red");
	}
	//商品框
	$(".s-floor-container,.m-tv-live>ul>li").mouseover(function(){
		$(this).removeClass("s-white-border").addClass("s-border");
	});
	$(".s-floor-container,.m-tv-live>ul>li").mouseout(function(){
		$(this).removeClass("s-border").addClass("s-white-border");
	});
	//选项卡
	$(".j-today").addClass("live").css("color","#e91456");
	$(".j-today-live").css("display","block").siblings(".j-last-live").css("display","none");//设置默认属性
	$(".j-today").click(function(){
		$(this).addClass("live").siblings(".j-last").removeClass("live");
		$(this).css("color","#e91456").siblings(".j-last").css("color","#444");
		$(".j-today-live").css("display","block").siblings(".j-last-live").css("display","none");
	});
	$(".j-last").click(function(){
		$(this).addClass("live").siblings(".j-today").removeClass("live");
		$(this).css("color","#e91456").siblings(".j-today").css("color","#444");
		$(".j-last-live").css("display","block").siblings(".j-today-live").css("display","none");
	});
//	选项卡轮播图按钮
	$(".j-today-live,.j-last-live").mouseover(function(){
		$(".left_nav").css({"display":"block","background":"red"});
		$(".right_nav").css({"display":"block","background":"red"});
	});
	$(".j-today-live,.j-last-live").mouseout(function(){
		$(".left_nav").css("display","none");
		$(".right_nav").css("display","none");
	});
//	选项卡轮播图
	var j = 1;
	$(".left_nav").click(function(){
		left();
		j++;
		if(j == 3){
			j = 0;
		}
	});
	$(".right_nav").click(function(){
		right();
		j--;
		if(j == -1){
			j = 2;
		}
	});
	function left(){
		if($(".j-today").hasClass("live")){
			$(".j-today-live").children(".j-div").eq(j).css("display","block").siblings(".j-div").css("display","none");
		}else{
			$(".j-last-live").children(".j-div").eq(j).css("display","block").siblings(".j-div").css("display","none");
		}
	};
	function right(){
		if($(".j-today").hasClass("live")){
			$(".j-today-live").children(".j-div").eq(j).css("display","block").siblings(".j-div").css("display","none");
		}else{
			$(".j-last-live").children(".j-div").eq(j).css("display","block").siblings(".j-div").css("display","none");
		}
	}
//	广告
	setTimeout(function(){
		$("#ad").css("display","none");
	},5000);
	$("#hidead").click(function(){
		$("#ad").css("display","none");
	});
//登录信息
	var str = $.cookie("loginCookie") ? $.cookie("loginCookie") : "";
	if(str){
		$(".person").before("<i style='color : red'>欢迎你：" + str + "</i>&emsp;<a class='logout'>[注销]</a>");
		$(".person").remove();
	}
	$(".logout").click(function(){
				$.removeCookie("loginCookie",{expires : 7,path:"/"});
				location.reload();
	});
})
