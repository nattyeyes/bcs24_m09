let trainer1 = {
	name: "Ash",
	age: 15,
	pokemon: ["Pikachu", "Charizard", "Butterfree"],
	friends: {
		normalFriend: ["Misty", "May", "Serena"],
		bestFriend: "Brock"
	},
	talk: function() {
		console.log('Pikachu! I choose you!');
	}
};

console.log(trainer1);
console.log(trainer1.name);
console.log(trainer1["age"]);
console.log(trainer1.pokemon[1]);
trainer1.talk();

function Pokemon(name, level) {
	this.name = name;
	this.level = level;
	this.health = 15 + (level * 5);
	this.attack = 3 + (level * 2);
	this.tackle = function(target) {
		console.log(`${this.name} tackled ${target.name}!`);
		target.health -= 10;
		console.log(`${target.name}'s health dropped to ${target.health}!`);
		if (target.health <= 0) {
			target.faint();
		};
	};
	this.faint = function() {
		console.log(`${this.name}'s health is 0! ${this.name} fainted!`);
	};
};

let pikachu = new Pokemon('Pikachu', 1);
let pidgey = new Pokemon('Pidgey', 1);

pikachu.tackle(pidgey);
pikachu.tackle(pidgey);