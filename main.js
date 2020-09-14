//
alert('hello world');
console.error('this is error');
console.warn('this is warning')

//let ,const
let number=30;
console.log(number);

const score =10;
console.log(score);

//string , number , boolean ,null,undefined

const name = 'kishan';
const age =20;
const iscool = 'true';
const rating = 5.5;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof iscool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//conscatenation

console.log('my name is '+ name + 'and im ' + age);

//temlate string
const hellow = 'my name is  ${name} and im ${age}';
console.log(hellow);

//string property 
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(0, 5). toUpperCase());
console.log(s.split(''));

//arrays -variable that hold multiple values

 const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apple','orange','pears'];
fruits[3]='grapes';
fruits.push('mango');
fruits.unshift('strawberries');
fruits.pop();

//console.log(array.isarray(fruits));
//console.log(array.indexof('orange'));
console.log(fruits);

//objact

const person = {
	fristname:'kishan',
	lastname:'sarvaiya',
	age:20,
	hobbies:['music','gamong'],
	address:{
		city:'palitana',
		state:'gujrat'

	}
}

person.email = 'sarvaiyakishank@gmail.com';

console.log(person);
console.log(person.fristname,person.lastname);









