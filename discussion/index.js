let favoriteVideoGame = {
	title:"Wildermyth",
	publisher:"Worldwalker Games LLC",
	year:2021,
	price:412.46,
	isAvailable:true
};

console.log(favoriteVideoGame);
// accessing array items: array[index]
// in object, keys and valyes together make up the object properties
// accessing object properties: object.property
console.log(favoriteVideoGame.title);

/*
	Objects are data type that allows us to store collections of key-value pairs.
	
	They can represent real-world properties such as a person, car, or more abstract concepts.
	
	object literal = {}
*/
console.log(favoriteVideoGame.publisher);

// re-assign array items: array[index] = <value>
// re-assign object properties
favoriteVideoGame.title = 'Final Fantasy X';
console.log(favoriteVideoGame.title);

favoriteVideoGame.year = 2001;
favoriteVideoGame.publisher = "Square Enix";
favoriteVideoGame.price = 30;

console.log(favoriteVideoGame.year, favoriteVideoGame.publisher, favoriteVideoGame.price);

// object can not onlyhave primitive values but it can also have array and even other objects

let course = {
	title: 'Philosophy',
	description: 'Learn values of life',
	price: 5000,
	isActive: true,
	instructor: ['Mr. Johnson', 'Ms. Smith', 'Mr. Frances']
};

console.log(course);
//access the array inside the course
console.log(course.instructor);
//access the second item inside the instructor array
console.log(course.instructor[1]);
//delete Mr. Frances from the array
course.instructor.pop();
console.log(course);

//add another instructor
course.instructor.push('Mr. McGee');
console.log(course.instructor);

let isPresent = course.instructor.includes('Mr. Johnson');
console.log(isPresent);

let instructor = {};
// if you re-assign value to a property that does not exist
// you are able to add a property with value in our object

instructor.name = 'James Johnson';
console.log(instructor);

instructor.age = 56;
instructor.gender = "Male";
instructor.department = "Humanities";
instructor.courses = ['Philosophy 101', 'Humanities 201'];
instructor.isActive = true;
instructor.salary = 50000;

console.log(instructor);

instructor.address = {
	street: "#1 Maginhawa Street",
	city: "Quezon City",
	country: "Philippines"
};

console.log(instructor);
// How will we access the street property of our instructor's address property?
console.log(instructor.address.street);

// Create objects using a constructor function

// In Javascript, a constructor is a special type of function that is used to create and initialize objects. it is typically used in conjunction with 'new' key word to create a new instance of an object on a template or blueprint.

// nstance of an object is a unique occurence of an object that is created from a constructor function.
// 'new' keyword - creates a new object and initializes it with the properties and methods defined in the constructor
// 'new object' is called instance of an object

/*
	Create reusable functions to create several objects with similar data structure or keys
	
	This is useful for creating multiple instance of objects
	
	'this' keyword when used in a constructor funcion will allow us to assign a new object's properties and associating them with the values received from a constructor function's parameter
*/

function Superhero(name, superpower, powerLevel){
	this.name = name;
	this.superpower = superpower;
	this.powerLevel = powerLevel;
};

let superhero1 = new Superhero('Saitama', 'One Punch', 300000);
console.log(superhero1);

let superhero2 = new Superhero('Wonder Woman', 'Super Strength', 250000);
console.log(superhero2);

function laptop(name, brand, price){
	this.name = name;
	this.brand = brand;
	this.price = price;
};

let laptop1 = new laptop('Aspire VX', 'Acer', 50000);
let laptop2 = new laptop('Inspire II', 'Lenovo', 35000);

console.log(laptop1);
console.log(laptop2);

//without the new keyword we cannot instantiate a new laptop object from our constructor, instead we can only invoke/call it.

//Object Methods
/*
	A method is a function which is a property of an object.
	In essence, it is still a function, however, it is now associated with an object.
	And to invoke or call the function we have to access the property which contains our functions
	
*/

let person = {
	name: 'Shady',
	talk: function() {
		//when the this keyword is used by a function within an object, it refers to the object where the function is.
		console.log(this);
		console.log(`Hi, my name is, what? My name is who? ${this.name}`);
	}
}

person.talk();

let person2 = {
	name: 'Jungkook',
	age: 26,
	address: {
		city: 'Austin',
		state: 'Texas',
		country: 'USA'
	},
	friends: ['Jin', 'V', 'Jimin'],
	introduce: function() {
		console.log(`Hi my name is ${this.name}. I am ${this.age} years old. I live in ${this.address.city}, ${this.address.state}, ${this.address.country} and my friends are ${this.friends}`);
	},
	addFriend: function(str){
		//console.log(str);
		this.friends.push(str);
		console.log(`My friends are now ${this.friends}`)
	},
	greet: function(obj){
		console.log(obj);
		// Good day, <nameofPerson!>
		console.log(`Good day, ${obj.name}/1`);
	}
}

person2.introduce();
person2.addFriend("Suga");
person2.greet(person);

function personObj(name, address, age) {
	// this refer to object that will be made
	// adding .name allows to add/assign a property/key-value to our object
	//parameter name is assigned value
	this.name = name;
	this.address = address;
	this.age = age;
	this.isGreeted = false;
	// We can also add a method in our constructor
	this.greet = function(personToGreet) {
		console.log(`Hello! ${personToGreet}`);
		//can we re-assigned the value of the argument's property?
		//yes.
		personToGreet.isGreeted = true;
	};
};

let pers1 = new personObj('Juan', 'Quezon', 22);
let pers2 = new personObj('Maria', 'Bicol', 21);
console.log(pers1);
console.log(pers2);

let pers3 = new personObj('Jimin', 'New York', 25);
console.log(pers3);
let pers4 = new personObj('Thonie', 'San Pedro City', 45);
console.log(pers4);

pers3.greet(pers4);
console.log(pers4);

// Arrays are special objects with method that allows us to manipulate them.

let newArr = [];

/*
	[Scenario] Real World Application Objects
	1. We would create a game that would have several pokemon interact with each other
	2. Every pokemon would have the same set of stats, properties, and functions
*/

// Using object literals to create multiple kinds of pokemon would be time consuming

let myPokemon = {
	name: 'Pikachu',
	level: 3,
	health: 100,
	attack: 50,
	tackle: function() {
		console.log(`This Pokemon tackled targetPokemon`);
		console.log(`targetPokemon's health is now reduced to _targetPokemonhealth_`);
	},
	faint: function() {
		console.log(`Pokemon fainted!`);
	}
}

console.log(myPokemon);

// create an object constructor instead will help with this process

function Pokemon(name, level){
	//properties
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = level;
	//methods
	this.tackle = function(target) {
		console.log(`${this.name} tackled ${target.name}`);
		console.log(`${target.name}'s health is now reduced to ${target.health}.`);
	};
	this.faint = function() {
		console.log(this.name + "fainted.");
	};
};

//Creates new instances of the pokemon object each with their unique properties.

let pikachu = new Pokemon('Pikachu', 16);
let rattata = new Pokemon('Rattata', 8);

pikachu.tackle(rattata);