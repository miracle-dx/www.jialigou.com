require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"jqzoom" : "jqzoom",
		"strObj" : "ObjToStrAndStrToObj"
	}
})
require(['jquery','cookie','jqzoom','strObj'],function(jquery,cookie,jqzoom,strObj){
	$(function(){
//	登录信息
		var str = $.cookie("loginCookie") ? $.cookie("loginCookie") : "";
		if(str){
			$(".person").before("<i style='color : red'>欢迎你：" + str + "</i>&emsp;<a class='logout'>[注销]</a>");
			$(".person").remove();
		}
		$(".logout").click(function(){
					$.removeCookie("loginCookie",{expires : 7,path:"/"});
					location.reload();
		});
//		下拉菜单功能
		let num = 0;
		$(".shop_all").click(function(){
			num ++;
			if(num%2 == 0){
				$(".down-list").slideUp(700);
			}else{
				$(".down-list").slideDown(700);
			}
		});
		$(".match-good ul li").hover(function(){
			$(this).css("borderColor","#ccc");
		},function(){
			$(this).css("borderColor","#fff");
		});
		//二维码隐藏功能
		$(".product-wx li:first").hover(function(){$(".product-wx li:last").css("display","block")},function(){
			$(".product-wx li:last").css("display","none");
		});
		//商品详情页选项卡功能
		$(".product_bottom_right ul:first li").click(function(){
			$(this).children("i").css("background","url(images/red.png) no-repeat 0 0");
			$(this).siblings("li").children("i").css("background","url(images/gray.png) no-repeat 0 0");
			var _index = $(this).index();
			console.log(_index);
			$(".product_container ul li").css("display","none");
			$(".product_container ul li").eq(_index).css("display","block");
		});
		//购物车
		loadCart();
		$("#cart").click(function(e){
			loadCart();
			var goodId = 7;
			var goodName = "电扫拖";
			var goodPrice = 199;
			var goodSrc = "images/7.jpg";
			var cartStr = $.cookie("cart1") ? $.cookie("cart1") : "";
			var cartObj = strObj.convertStrToObj(cartStr);
			if(goodId in cartObj){
				cartObj[goodId].num += Number($(".txt").val());
			}else{
				cartObj[goodId] = {
					name : goodName,
					price : goodPrice,
					num : $(".txt").val(),
					src : goodSrc
				};
			}
			cartStr = strObj.convertObjToStr(cartObj);
			$.cookie("cart1",cartStr,{expires : 7,path : "/"});
			//点击购买按钮购物车数量+1
			$(".shop_car i").html(function(index,value){
				return Number(value) + Number($(".txt").val());
			});
			$(".shop_car i").animate({left:5},30).animate({left:14},80).animate({left:5},80).animate({left:14},80).animate({left:5},80).animate({left:14},80).animate({left:5},80).animate({left:14},80).animate({left:5},80).animate({left:14},80);
		});	
		function loadCart(){
			var cartStr = $.cookie("cart1") ? $.cookie("cart1") : "";
			var cartObj = strObj.convertStrToObj(cartStr);
			var nums = 0;
			for(var id in cartObj){
				nums += parseInt(cartObj[id].num);
			}
			$(".shop_car i").html(nums);
		};
		//给加减按钮添加功能
		$(".reduce").click(function(){
			if($(".txt").val()>1){
				$(".txt").val(function(index,value){
					return Number(value) - 1;
				});
			}
		});
		$(".add").click(function(){
			$(".txt").val(function(index,value){
				return Number(value) + 1;
			});
		});
		//调用轮播图插件
		$("#etalage").zoom({
			zoom_area_width: 300,
		    autoplay_interval :3000,
		    small_thumbs : 5,
		    autoplay : true
		});
	});
})
