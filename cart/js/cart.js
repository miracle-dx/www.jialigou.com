$(document).ready(function(){
	var cartStr = $.cookie("cart1") ? $.cookie("cart1") : "";
	if(!cartStr){
		$(".blank").css("display","block");
		$(".cartHead").css("display","none");
	}else{
		$(".blank").css("display","none");
		$(".cartHead").css("display","block");
		var cartObj = convertStrToObj(cartStr);
		for(var id in cartObj){
			var good = cartObj[id];
			var str = `
			<ul class="cartgood" data-good-id=${id}>
				<li class="ll"><input type="checkbox" checked="checked" class="check"/><img src=../list/${good.src}/></li>
				<li class="ll">${good.name}</li>
				<li class="ll">${good.price}</li>
				<li class="ll"><a href="javascript:;" class="num reduce">-</a>
					<input type="text" class="txt" value=${good.num} />
					<a href="javascript:;" class="num add">+</a>
				</li>
				<li class="total ll">${good.num*good.price}</li>
				<li class="ll"><a href="javascript:;" class="del">删除</a></li>
			</ul>`
			$(".cartList").append(str);
		}
		var str1 = `
		<ul class="totalprice">
			<li class="ll"><input type="checkbox" checked="checked" class="check1"/><p>全选</p></li>
			<li class="ll">
				<p>共<span class="span1"></span>件商品，总价:<i>¥</i><span class="span2"></span></p>
			</li>
			<li class="ll buys">去结算</li>
		</ul>`
		$(".cartList").append(str1);
		function GetCount(){
		var conts = 0;
		var aa = 0;
		$(".check").each(function(){
			if($(this).prop("checked")){
				for(var i = 0;i < $(this).length;i ++){
					conts += parseFloat($(this).parent("li").siblings(".total").html());
					aa += parseInt($(this).parent("li").siblings().eq(2).children(".txt").val());
				}
			}
		});
		$(".span1").html(aa);
		$(".span2").html(conts);
		}
		GetCount();
		$(".cartgood a.del").hover(
			function(){$(this).css("color","#000");},
			function(){$(this).css("color","#fff")}
		)
		$(".cartgood a.del").click(function(){
			$(this).parents(".cartgood").remove();
			GetCount();
			var id = $(this).parents(".cartgood").attr("data-good-id");
			var cartStr = $.cookie("cart1") ? $.cookie("cart1") : "";
			var cartObj = convertStrToObj(cartStr);
			delete cartObj[id];
			$.cookie("cart1",convertObjToStr(cartObj),{expires : 7,path : "/"});
			//判断购物车是否为空
			var cartStr = $.cookie("cart1") ? $.cookie("cart1") : "";
			if(cartStr == ""){
				$(".blank").css("display","block");
				$(".cartHead").css("display","none");
				$(".totalprice").css("display","none");
			}
		});
		$(".cartgood a.reduce").click(function(){
			var id = $(this).parents(".cartgood").attr("data-good-id");
			var cartStr = $.cookie("cart1") ? $.cookie("cart1") : "";
			var cartObj = convertStrToObj(cartStr);
			if(cartObj[id].num > 1){
				cartObj[id].num--;
				$(this).siblings("input").val(cartObj[id].num + "");
				$(this).parent().siblings(".total").html(cartObj[id].num * cartObj[id].price + "");
				$.cookie("cart1",convertObjToStr(cartObj),{expires : 7,path : "/"});
				GetCount();
			}
		});
		$(".cartgood a.add").click(function(){
			var id = $(this).parents(".cartgood").attr("data-good-id");
			var cartStr = $.cookie("cart1") ? $.cookie("cart1") : "";
			var cartObj = convertStrToObj(cartStr);
				cartObj[id].num++;
				$(this).siblings("input").val(cartObj[id].num + "");
				$(this).parent().siblings(".total").html(cartObj[id].num * cartObj[id].price + "");
				$.cookie("cart1",convertObjToStr(cartObj),{expires : 7,path : "/"});
				GetCount();
		});
		$(".cartgood li input.txt").blur(function(){
			var id = $(this).parents(".cartgood").attr("data-good-id");
			var cartStr = $.cookie("cart1") ? $.cookie("cart1") : "";
			var cartObj = convertStrToObj(cartStr);
				var re = /^\d+$/;
				if(!(re.test($(this).val()))){
					$(this).val("1");
					cartObj[id].num = 1;
				}else{
					cartObj[id].num = parseInt($(this).val());
				};
				$(this).parent().siblings(".total").html(cartObj[id].num * cartObj[id].price + "");
				$.cookie("cart1",convertObjToStr(cartObj),{expires : 7,path : "/"});
				 GetCount();
		});
	};
	$(".check").click(function(){
		GetCount();
		if($(this).prop("checked")){
			$(this).parent().parent().children().css("background","peachpuff");
		}else{
			$(this).parent().parent().children().css("background","white");
		}
	});
	$(".check").change(function(){
		GetCount();
		if($(".check").not("checked").size()<=0){
			$(".check1").prop({checked:true});
		}else{
			$(".check1").prop({checked:false});
		}
	});
	$(".check1").click(function(){
		if($(this).prop("checked")){
			$(".check").prop({checked:true});
			GetCount();
			$(".check").parent().parent().children().css("background","peachpuff");
		}else{
			$(".check").prop({checked:false});
			$(".check").parent().parent().children().css("background","white");
			$(".span1").html(0);
		$(".span2").html(0);
		}
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
	//提交订单
	$(".buys").click(function(){
		$(".step").children("li").eq(1).css("background","red");
	})
});