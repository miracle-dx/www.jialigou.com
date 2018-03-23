function convertObjToStr(obj){
		var str = "";
		for(var user in obj){
			var psw = obj[user];
			if(str){
				str += ":";
			}
			str += user + "," + psw;
		}
		return str;
	}
	function convertStrToObj(str){
		if(!str){
			return {};
		}
		var arr = str.split(":");
		var obj = {};
		for(var i = 0,len = arr.length;i < len;i ++){
			var arr1 = arr[i].split(",");
			obj[arr1[0]] = arr1[1];
		}
		return obj;
	}