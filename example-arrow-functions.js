var names = ['Andres','Martin','Juan','Jose'];
/*
names.forEach(function(name){
	console.log('forEach', name);
});

names.forEach((name) => {
	console.log('arrowFunc', name);
	console.log('something else');
});

names.forEach((names) => console.log(names));
//--------------------------------------------------------------
var returnMe = (name) => name + '!';

console.log(returnMe('Andres'));


var person = {
	name: 'Andrew',
	greet: function(){
		names.forEach((name) =>	{console.log(this.name + ' say hi to ' + name)})
	}
}

person.greet();
*/

function add(a,b){
	return a+b;
}

console.log(add(1,3));
console.log(add(9,0));

var addStatement = (a, b) => {
	return a + b;
}

var addExpression = (a, b) => a + b;

addStatement(1, 3);
addExpression(0, 9);