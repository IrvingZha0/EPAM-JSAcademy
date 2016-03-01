'use strict'
//which is jicheng which is owned
var creature = {
	name : 'some thing',
	log : function  () {
		// body...
		console.log(this.name);
	}
}

var goblin = Object.create(creature,{
	hiddenPower: {
		enumerable : false ,
		writable : true
	}
});

goblin.name = 'GGGG';
goblin.hiddenPower = 'mind cccccccccccc';

for(var prop in goblin){}

console.log(goblin);
console.log('----------');
console.log(Object.getOwnPropertyNames(goblin));
console.log('----------');
/*Object.keys();*/

