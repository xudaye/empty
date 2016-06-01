'use strict';

function double_to_one(collection) {
	var arr = new Array();
	var n = 0;
	for(var i = 0;i < collection.length;i++){
		if(typeof(collection[i]) == "object"){
			for(var j = 0; j<collection[i].length;j++){
				arr[n] = collection[i][j];
				n++;
			}	
		}
		else{
			arr[n] = collection[i];
			n++;
		}
	}
	return arr;
}
module.exports = double_to_one;
