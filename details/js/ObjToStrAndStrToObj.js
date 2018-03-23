define(function(){
	return {
		convertObjToStr : function convertObjToStr(obj){
		var str = "";
		for(var user in obj){
			if(str){
				str += ":";
			}
			str += user + "," + obj[user].name + "," + obj[user].price + "," + obj[user].num + "," + obj[user].src;
		}
		return str;
	},convertStrToObj : function convertStrToObj(str){
		if(!str){
			return {};
		}
		var arr = str.split(":");
		var obj = {};
		for(var i = 0;i < arr.length;i ++){
			var arr1 = arr[i].split(",");
			obj[arr1[0]] = {
				name : arr1[1],
				price : parseFloat(arr1[2]),
				num : parseInt(arr1[3]),
				src : arr1[4]
			}
		}
		return obj;
		}
	}
})

	