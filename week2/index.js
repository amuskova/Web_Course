
//#region variables
var str = 'some string';//string we can use '' or ""
var num = 123; //no difference between double, float and int
var flag = true; //boolean type
var nothing = null; //type null - used for variables with no value
var undef; //undefined type - used when the variables are no initialized

//typeof num - shows the type of the variable

//console.log(str.length); // - shows the size of the string
//console.log(str.charAt(5)); //shows char at the certain index
//var number = 123.4567788;
//console.log(number.toFixed(2)); zakryglq do 3ri znak

var obj = { //object literal - used for obj properties
	firstName: 'Ati',
	age: 21
}

var arr = [1,'dog',true, null]; //declaration of an array 
								//can have different types in the array

//#endregion


//#region conditional operators
var str1 = '123'; //iit accept that both are equal
var num = 123;

if (str1 == num) {
	console.log('equal');
} else {
	console.log('not equal');
}

var isEqual = str1 ===num ? 'yes' : 'no'; //conditions same as in C++

//#endregion


//#region loop
for(var key in obj){
	console.log(key + ' - ' + obj[key]);
}

//for(var item of arr){
//	console.log(item);
//}

//for(var i = 0; i < arr.length; i++){
//	console.log(arr[i]);
//}

//var j = 0;
//while(j < arr.length){
//	console.log(arr[i]);
//	j++;
//}
//#endregion

//#region functions
function log(msg){
	console.log(msg);
}

log('message');

function sum(a,b){
	return a + b;
}

log(sum(1,5));

//function expression

var func = function(arg){
	console.log(arg);
}

func('some string');

function func1(arg1){

	function func2(arg2){
		console.log(arg2);
	}

	func2(arg1);
}

func1('message');

function getOperation(type){
	if(type === 'sum'){
		return function(a,b){
			return a + b;
		}
	}else{
		return function(a,b){
			return a * b;
		}
	}
}

var myFunc = getOperation('sum');
console.log(myFunc(4,500));

var arr = [1,-43,0,5,7];

function operation(oper, arr){ //visibility of arguments does matter from the scope, but from the function
	var newArr = [];
	for(var item of arr){
		newArr.push(oper(item)); //push adds elements in the end of the array

	}

	return newArr;
}

function multipleBy10(e1){
	return e1 * 10;
}

var newArr = operation(multipleBy10,arr);

console.log(newArr);

const v = 5; //should use const and let insted of var
let p = 6; //their level of visibility depends on the block 
p = 7;

//for(let i =0; i < 5; i++){}
//console.log(i); here it will be error because o os defined only int the loop


//#endregion


let person = {
	firstName: 'Ati',
	age: 21
};

function func(a){
	a.firstName = "Atii";
}

func(person);

console.log(person);

//#region arrray
const myNumbers = [5,6,-5,0,10,9];
myNumbers.pop(); //last element
myNumbers.push(15); // at the end of the array

myNumbers.splice(myNumbers.indexOf(-5), 1); //that way we can delete -5 from the array

const filtredNumbers = myNumbers.filter(function(e1){
	return e1 > 5;
});

console.log(filtredNumbers);

myNumbers.forEach(e1 => console.log(e1));
//#endregion

//#regiona element
const header = document.getElementById('js-1');
console.log(header);

const per = document.createElement('per');
per.innerText = 'some text';

header.appendChild(per);

const article = document.getElementById('article-1');
article.innerHTML = '<h4> Hello JS</h4>';


const studentInput = document.getElementById('student');
const btn = document.getElementById('btn');

btn.addEventListener('click',(event) => {
	const studentName = studentInput.value;
	const el = document.createElement('h5');
	el.innerText = studentName;
	article.appendChild(el);
});
//#enregion