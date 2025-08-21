
var a = [ 
	  { name: "David",    number:  7 },
  	  { name: "Michael", number: 10 },
  	  { name: "Wayne",   number:  9 },
	  { name: "Frank",   number:  8 }
	]

a.sort(compare);

for (var i = 0; i < a.length; i++) {
  console.log(a[i].name + " " + a[i].number);
}

function compare(x, y) {
  if (x.number < y.number) return -1;
  if (x.number > y.number) return +1;
  return 0;
}

