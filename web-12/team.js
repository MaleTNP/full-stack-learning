// Create a Array of Object with 3 fields

var team = [
	     { name: "David Beckham", number:  7, salary: 83000 },
	     { name: "Michael Owen",  number: 10, salary: 60000 },
 	     { name: "Wayne Ronneyy", number:  9, salary: 47000 }
	   ]

console.log(team[0].number);		// 7
console.log(team[1].name);		// Michael Owen
console.log(team[2].salary);		// 47000

// Regarding the data above, try to display name of each player and determine the average salary

var total_salary = 0;
for (var i = 0; i < team.length; i++) {
  console.log(team[i].name);
  total_salary += team[i].salary;
}
var avg_salary = total_salary / team.length;
console.log("Average salary: " + avg_salary.toFixed(2));

