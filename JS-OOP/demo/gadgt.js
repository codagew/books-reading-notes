
function Gadgt(name, color) {
    this.name = name;
    this.color = color;

    this.whatAreYou = function() {
        return 'I am a ' + this.color + ' ' + this.name;
    }
}

Gadgt.prototype = {
    price: 100, 
    rating: 3, 
    getInfo: function() {
        return 'Rating: ' + this.rating + ' , price: ' + this.price;
    }
}

var user = new Gadgt('abc', 'red');

var userInfo = user.whatAreYou();

var info = user.getInfo();

console.log(userInfo);

console.log(info);