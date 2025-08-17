
// create a Object name a which has 2 field

var a = {
  	  title: "Astronomy",
	  price: 85.0
  	};

// We can add field by following syntax 
a.available = 20;

a["bar-code"] = "85317-22019";
a["available"] = 19;

console.log(a);

// Try to create a empty object
var b = { };
b.title = "Biology";
b.price = 72.0;

console.log(b);
