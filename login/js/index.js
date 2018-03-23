//登录页js文件
$(function(){
	var str1=identity();
	function identity(){
		//验证码
		var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		var str1='';
		for(var i = 0;i < 4;i ++){
			var num = Math.floor(Math.random() * str.length);
			str1 += str.charAt(num);
		}
		$('.code').html(str1);
		return str1;
	}
	 $('.code').click(function(){
		str1=identity();
	});
	//正则
	var nums = 0;
	$("#txt").on('click keyup',function(){
		let cookie = $.cookie("registerCookie") ? $.cookie("registerCookie") : "";
			cookie = convertStrToObj(cookie);
			$(".lis").remove();
			for(let i in cookie){
				$(".num-list").append('<li class="lis">'+i+'</li>');
			}
			if(nums % 2 == 0){
				$(".num-list").css("display","block");
			}else{
				$(".num-list").css("display","none");
			}
			nums++;
			$(".lis").on("click",function(){
				$("#txt").val($(this).html());
				$("#txt").click();
				$(".num-list").css("display","none");
			});
		var user = $("#txt").val();
		var re1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/g;
		if(re1.test(Number(user))){
			$(this).css("box-shadow","none");
		}else{
			$(this).css("box-shadow","1px 1px 3px red");
		}
	});
	$("#psw").keyup(function(){
		var psw = $("#psw").val();
		var re2 = /^(\w){6,18}$/g;
		if(re2.test(Number(psw))){
			$(this).css("box-shadow","none");
		}else{
			$(this).css("box-shadow","1px 1px 3px red");
		}
	});
	//一键获取验证码
	$(".catch-code").click(function(){
			$("#txt1").val(str1);
	});
	//登录功能
	$("#sub").click(function(){
		var user = $("#txt").val();
		var psw = $("#psw").val();
		var cookie = $.cookie("registerCookie") ? $.cookie("registerCookie") : "";
		cookie = convertStrToObj(cookie);
		if(cookie[user] == psw && $("#txt1").val()==str1){
			$.cookie("loginCookie",user,{expires : 7,path : "/"});
			alert("登录成功了");
			location.href = "../main.html";
			return;
		}else if(user == "" || psw == ""){
			alert("用户名或者密码不能为空");
			return;
		}else if($("#txt1").val() !=str1){
			alert("验证码错误！");
			return;
		}else{
			alert("用户名和密码不匹配，请确认后重新登录");
			return;
		}
	})
	//回车登录操作
	$("#txt1").keydown(function(e){
	    if(e.keyCode == 13){
	        $("#sub").click();
	    }
	});
})
