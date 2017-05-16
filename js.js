
var m2 = {
	"z" : 4, 
	"b" : 5000, 
	"c" : 1, 
	"d" : 2000
}
// по возрастанию?
function mySortArr(m){
	//1. Преобразовать ассоцивный массив(объект) в обычный;
	var temp = [];
	count = 0;
	for (var key in m) {
		var t = {};
			t.id = key;
			t.cost = m[key];
		temp[count] = t;
		count++;
	}
	// console.log(temp);
	//2. Сортировка
	for (var j=0; j<temp.length; j++){
	// var min = temp[j];
	for (var i = 0; i< temp.length-1;  i++ ){
		if (temp[i].cost > temp[i+1].cost) {
			var koshik = temp[i];//сохраняю промежуточное значение
			temp[i] = temp[i+1];
			temp[i+1] = koshik;
		}
	}
}
	console.log(temp);
}

mySortArr(m2);
