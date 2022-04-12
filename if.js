// if (булиновое значение) правда/true     ложь/false
// можно поставить значение которое будет всегда верно if(4)
if (4 == 9){
	console.log("Ok!");
} else {
	console.log("Error");
}

const num = 50;
if (num < 49) {
	console.log("Error");
} else if (num > 100) {
	console.log("Big");
} else {
	console.log("Ok!");
}

// Тернарный оператор, учавствуют 3 аргумента.
//        ?  действие в случаи правды : действие если условие не выполнилось(num === 50)
(num === 50) ? console.log("Ok!") : console.log("Error");

// Конструкция switch  ВСЕГДА НА СТРОГОЕ СРАВНЕНИЕ  (так же можно работать со строками)
const numSw = 50;
switch(numSw){
	case 49:
		console.log("Неверно!");
		break;
	case 100:
		console.log("Неверно!");
		break;
	case 51:
		console.log("В точку!");
		break;
	default:
		console.log("Не в этот раз");
		break;
}