$(function(){
	//ajax动态创建列表并获取数据
	$.getJSON("js/jsons.json",function(json){
		for(let p = 0,len = json.length;p < len;p ++){
			let div = `<li class="s-archive-li" data-good-id="${p+1}">
							<a href="${json[p].a}" target="_blank">
								<img src="${json[p].img}" alt="${json[p].alt}"/>
							</a>
							<div class="content">
								<input class="name" type="hidden" value = "${json[p].name}"/>
								<p class="f-archive-title">
								<a href="${json[p].a}" target="_blank">${json[p].title}</a>
								</p>
								<p class="price"><span>￥<i>${json[p].price}</i></span></p>
								<p class="sellnum">已售:<i>${json[p].sellnum}</i>件</p>
								<div class="f-clear"></div>
								<div class="cartgo">
									<button class="addToCart">加入购物车</button><button>收藏</button>
								</div>
							</div>
						</li>`
			$(".s-archive").append(div);
		};
		//显示获取商品的数量
		$(".shop_nums").children("i").eq(1).html(json.length);
		$(".bottom-archive").html(json.length + "条记录1/1页");
		shoppingCart();
	});
	//获取搜索框内容
	$("#txt").keyup(function(){
		let searchData = $("#txt").val();
		$(".shop_nums").children("i").eq(0).html(searchData);
	});
	//实现按价格排序的功能
	let num3 = 0;
	$(".pricepx").click(function(){
		num3 ++;
		if(num3%2 != 0){
			//价格按照从大到小排序
		$(".s-archive").children("li").remove();
		$.getJSON("js/jsons.json",function(arr){
			//获取json数组用冒泡进行排序
			for(let i = 0;i < arr.length;i ++){
				for(let j = 0;j < arr.length - 1;j ++){
					if(Number(arr[j].price) < Number(arr[j + 1].price)){
						let t =arr[j];
						arr[j] = arr[j + 1];
						arr[j + 1] = t;
					}
				}
			}
			//重新绘制网页
			for(let q = 0,lens = arr.length;q < lens;q ++){
				let div = `<li class="s-archive-li"  data-good-id="${q+1}">
								<a href="${arr[q].a}" target="_blank">
									<img src="${arr[q].img}" alt="${arr[q].alt}"/>
								</a>
								<div class="content">
									<input class="name" type="hidden" value = "${arr[q].name}"/>
									<p class="f-archive-title">
									<a href="${arr[q].a}" target="_blank">${arr[q].title}</a>
									</p>
									<p class="price"><span>￥<i>${arr[q].price}</i></span></p>
									<p class="sellnum">已售:<i>${arr[q].sellnum}</i>件</p>
									<div class="f-clear"></div>
									<div class="cartgo">
										<button class="addToCart">加入购物车</button><button>收藏</button>
									</div>
								</div>
							</li>`
				$(".s-archive").append(div);
			};
			$(".shop_nums").children("i").eq(1).html(arr.length);
			$(".bottom-archive").html(arr.length + "条记录1/1页");
		});
			shoppingCart();
		}else{
			//价格按照从小到大排序
			$(".s-archive").children("li").remove();
			$.getJSON("js/jsons.json",function(arr){
				//获取json数组用冒泡进行排序
				for(let i = 0;i < arr.length;i ++){
					for(let j = 0;j < arr.length - 1;j ++){
						if(Number(arr[j].price) > Number(arr[j + 1].price)){
							var t =arr[j];
							arr[j] = arr[j + 1];
							arr[j + 1] = t;
						}
					}
				}
				//重新绘制网页
				for(let q = 0,lens = arr.length;q < lens;q ++){
					let div = `<li class="s-archive-li"  data-good-id="${q+1}">
									<a href="${arr[q].a}" target="_blank">
										<img src="${arr[q].img}" alt="${arr[q].alt}"/>
									</a>
									<div class="content">
										<input class="name" type="hidden" value = "${arr[q].name}"/>
										<p class="f-archive-title">
										<a href="${arr[q].a}" target="_blank">${arr[q].title}</a>
										</p>
										<p class="price"><span>￥<i>${arr[q].price}</i></span></p>
										<p class="sellnum">已售:<i>${arr[q].sellnum}</i>件</p>
										<div class="f-clear"></div>
										<div class="cartgo">
											<button class="addToCart">加入购物车</button><button>收藏</button>
										</div>
									</div>
								</li>`
					$(".s-archive").append(div);
				};
				$(".shop_nums").children("i").eq(1).html(arr.length);
				$(".bottom-archive").html(arr.length + "条记录1/1页");
			});
			shoppingCart();
		};	
	});
	//实现按销量排序的功能
	let num1 = 0;
	$(".xlpx").click(function(){
		num1 ++;
		if(num1%2 != 0){
			//价格按照从大到小排序
		$(".s-archive").children("li").remove();
		$.getJSON("js/jsons.json",function(arr){
			//获取json数组用冒泡进行排序
			for(let i = 0;i < arr.length;i ++){
				for(let j = 0;j < arr.length - 1;j ++){
					if(Number(arr[j].sellnum) < Number(arr[j + 1].sellnum)){
						let t =arr[j];
						arr[j] = arr[j + 1];
						arr[j + 1] = t;
					}
				}
			}
			//重新绘制网页
			for(let q = 0,lens = arr.length;q < lens;q ++){
				let div = `<li class="s-archive-li"  data-good-id="${q+1}">
								<a href="${arr[q].a}" target="_blank">
									<img src="${arr[q].img}" alt="${arr[q].alt}"/>
								</a>
								<div class="content">
									<input class="name" type="hidden" value = "${arr[q].name}"/>
									<p class="f-archive-title">
									<a href="${arr[q].a}" target="_blank">${arr[q].title}</a>
									</p>
									<p class="price"><span>￥<i>${arr[q].price}</i></span></p>
									<p class="sellnum">已售:<i>${arr[q].sellnum}</i>件</p>
									<div class="f-clear"></div>
									<div class="cartgo">
										<button class="addToCart">加入购物车</button><button>收藏</button>
									</div>
								</div>
							</li>`
				$(".s-archive").append(div);
			};
			$(".shop_nums").children("i").eq(1).html(arr.length);
			$(".bottom-archive").html(arr.length + "条记录1/1页");
		});
			shoppingCart();
		}else{
			//价格按照从小到大排序
			$(".s-archive").children("li").remove();
			$.getJSON("js/jsons.json",function(arr){
				//获取json数组用冒泡进行排序
				for(let i = 0;i < arr.length;i ++){
					for(let j = 0;j < arr.length - 1;j ++){
						if(Number(arr[j].sellnum) > Number(arr[j + 1].sellnum)){
							let t =arr[j];
							arr[j] = arr[j + 1];
							arr[j + 1] = t;
						}
					}
				}
				//重新绘制网页
				for(let q = 0,lens = arr.length;q < lens;q ++){
					let div = `<li class="s-archive-li"  data-good-id="${q+1}">
									<a href="${arr[q].a}" target="_blank">
										<img src="${arr[q].img}" alt="${arr[q].alt}"/>
									</a>
									<div class="content">
										<input class="name" type="hidden" value = "${arr[q].name}"/>
										<p class="f-archive-title">
										<a href="${arr[q].a}" target="_blank">${arr[q].title}</a>
										</p>
										<p class="price"><span>￥<i>${arr[q].price}</i></span></p>
										<p class="sellnum">已售:<i>${arr[q].sellnum}</i>件</p>
										<div class="f-clear"></div>
										<div class="cartgo">
											<button class="addToCart">加入购物车</button><button>收藏</button>
										</div>
									</div>
								</li>`
					$(".s-archive").append(div);
				};
				$(".shop_nums").children("i").eq(1).html(arr.length);
				$(".bottom-archive").html(arr.length + "条记录1/1页");
			});
			shoppingCart();
		};	
	});
	//购物车
	function shoppingCart(){
		loadCart();
		$(".addToCart").click(function(e){
			loadCart();
			var goodId = $(this).parents("li").attr("data-good-id");
			var goodName = $(this).parent(".cartgo").siblings(".name").val();
			var goodPrice = parseFloat($(this).parent(".cartgo").siblings(".price").children().children("i").html());
			var goodSrc = $(this).parent(".cartgo").parent(".content").siblings().children().attr("src");
			console.log(goodId,goodName,goodPrice,goodSrc);
			var cartStr = $.cookie("cart1") ? $.cookie("cart1") : "";
			var cartObj = convertStrToObj(cartStr);
			if(goodId in cartObj){
				cartObj[goodId].num += 1;
			}else{
				cartObj[goodId] = {
					name : goodName,
					price : goodPrice,
					num : 1,
					src : goodSrc
				};
			}
			cartStr = convertObjToStr(cartObj);
			$.cookie("cart1",cartStr,{expires : 7,path : "/"});
			//点击购买按钮购物车数量+1
			$(".shop_car i").html(function(index,value){
				return Number(value) + 1;
			});
			$(".shop_car i").animate({left:5},30).animate({left:14},80).animate({left:5},80).animate({left:14},80).animate({left:5},80).animate({left:14},80).animate({left:5},80).animate({left:14},80).animate({left:5},80).animate({left:14},80);
		});	
		function loadCart(){
			var cartStr = $.cookie("cart1") ? $.cookie("cart1") : "";
			var cartObj = convertStrToObj(cartStr);
			var nums = 0;
			for(var id in cartObj){
				nums += parseInt(cartObj[id].num);
			}
			$(".shop_car i").html(nums);
		};
		
	};
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
	//左侧导航按钮
	$(".product_list").click(function(){
		$(this).children("ul").css("display","block");
		$(this).siblings(".product_list").children("ul").css("display","none");
	})
});
