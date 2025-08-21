
var a = [ { name: "David",   number:  7, salary: 70000 },
          { name: "Michael", number: 10, salary: 65000 },
          { name: "Wayne",   number:  9, salary: 53000 },
          { name: "Frank",   number:  8, salary: 32000 }
        ]

var b = a.map( p => p.salary * 0.1 );
console.log(b);

