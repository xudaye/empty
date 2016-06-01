'use strict';

function double_to_one(collection) {
	var arr = collection.join(",").split(",");
	var arr_num = new Array();
	for(var j = 0;j < arr.length;j++){
		arr_num[j] = parseInt(arr[j]);
	}
	var arr_new = new Array();
	for(var i = 0;i < arr_num.length; i++){
		if(arr_new.indexOf(arr_num[i])==-1)  
			arr_new.push(arr_num[i]);
	}
	return arr_new;
}

module.exports = double_to_one;
