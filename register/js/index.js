//注册页js文件
$(function(){
	//正则验证
	var tag = true;
	var nums = 0;
	$("#txt").on({
		'click': function(){
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
			let user = $("#txt").val();
			let re1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/g;
			if(re1.test(Number(user))){
				$(this).css("box-shadow","none");
				tag = true;
			}else{
				$(this).css("box-shadow","1px 1px 3px red");
				tag = false;
			}
		},
		 "keyup" : function(){
			let user = $("#txt").val();
			let re1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/g;
			if(re1.test(Number(user))){
				$(this).css("box-shadow","none");
				tag = true;
			}else{
				$(this).css("box-shadow","1px 1px 3px red");
				tag = false;
			}
		}
	});
	$("#pass").keyup(function(){
		let psw = $("#pass").val();
		let re2 = /^(\w){6,18}$/g;
		if(re2.test(Number(psw))){
			$(this).css("box-shadow","none");
			tag = true;
		}else{
			$(this).css("box-shadow","1px 1px 3px red");
			tag = false;
		}
	});
	$("#passconf").keyup(function(){
		let psw = $("#pass").val();
		let conf = $("#passconf").val();
		let re2 = /^(\w){6,18}$/g;
		if(conf == psw && re2.test(Number(psw))){
			$(this).css("box-shadow","none");
			tag = true;
		}else{
			$(this).css("box-shadow","1px 1px 3px red");
			tag = false;
		}
	});
	//按钮登录操作
	$("#sub").click(function(){
		let user = $("#txt").val(); 
		let psw = $("#pass").val();
		let conf = $("#passconf").val(); 
		let re1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/g;
		let cookie = $.cookie("registerCookie") ? $.cookie("registerCookie") : "";
		cookie = convertStrToObj(cookie);
		if(user==""&&tag){
			$(".notice").html("账号不能为空").slideDown(500).delay(2000).slideUp(500);
			return;
		}else if(psw==""&&tag){
			$(".notice").html("密码不能为空").slideDown(500).delay(2000).slideUp(500);
			return;
		}else if(conf==""&&tag){
			$(".notice").html("确认密码不能为空").slideDown(500).delay(2000).slideUp(500);
			return;
		}else if(!tag||user==""||psw==""||!(re1.test(Number(user)))){
			$(".notice").html("账号或者密码格式错误").slideDown(500).delay(2000).slideUp(500);
			return;
		}else if(user in cookie && tag&&user!=""){
			$(".notice").html("账户已经被注册").slideDown(500).delay(2000).slideUp(500);
			return;
		}else if(!($("#check").prop("checked"))){
			$(".notice").html("请先阅读服务条款").slideDown(500).delay(2000).slideUp(500);
		}else if($("#check").prop("checked")&&tag&&user!=""){
			cookie[user] = psw;
			cookie = convertObjToStr(cookie);
			$.cookie("registerCookie",cookie,{expires : 7,path : "/"});
			if(confirm("注册成功，确定要登录吗？")){
				location.href = "../login/login.html";
			}
		}
	});
	//回车登录操作
	$("#txt1").keydown(function(e){
	    if(e.keyCode == 13){
	        $("#sub").click();
	    }
	});
})
