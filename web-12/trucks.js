/* Requirement:
   Count the number of trucks which weight is over 25 ton.
   And determine the average weight of the over weight trucks.
*/

var trucks = [23.7, 25.9, 24.2, 25.8, 26.1, 27.0, 12.0];
var total_weight = 0;
var over_weight  = 0;
var count        = 0;
for (var i = 0; i < trucks.length; i++) {
  if (trucks[i] > 25) { 
    over_weight += trucks[i];
    count++;
  }
  total_weight += trucks[i];  
}
var total_avg = total_weight / trucks.length;
var over_avg  = over_weight / count;

// Display the result
console.log(trucks);
console.log("Total trucks:         " + trucks.length);
console.log("Total average weight: " + total_avg.toFixed(2));
console.log("Over 25 ton:          " + count);
console.log("Average weight:       " + over_avg.toFixed(2));
