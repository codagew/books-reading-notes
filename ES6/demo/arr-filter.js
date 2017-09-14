var arr = [
	{
		name: 'name1', 
		age: '5'
	}, {
		name: 'name2', 
		age: 8
	}, {
		name: 'name3', 
		age: 10
	}, {
		name: 'name4', 
		age: 77
	}, {
		name: 'name5', 
		age: 21
	}
];
var arr2 = arr.filter(function(user) {
	return user.age > 10;
});
console.log(arr2);

console.log(arr2[0] === arr[3])