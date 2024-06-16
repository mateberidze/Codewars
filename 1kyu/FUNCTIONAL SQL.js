const { Query, QueryData } = require('./query');
const { BoolFunc } = require('./types')
function query() {
  const sqlQuery = new Query();
  return {
    select: selector => (sqlQuery.select(selector), this),
    from: data => (sqlQuery.from(data), this),
    where: whereFunc => (sqlQuery.where(whereFunc), this),
    execute: () => sqlQuery.call()
  };
}

console.log(
  query()
    .where(() => {})
    .from([1, 2])
    .select(d => d * 2)
    .execute()
);


// for (let i = 0; i <= 10; i++) {  
//   if (i % 2 === 0) {
//       console.log(`{i} is even`);
//   } else {
//       console.log(`{i} is odd`);
//   }
// }



// let password = "mate007"; 
// let attempts = 0;
// let maxAttempts = 3;

// while (attempts < maxAttempts) {
//   let userInput = prompt("Enter your password:");
//   if (userInput === password) {
//     console.log("You have access.");
//   } else {
//     console.log("Incorrect. Try again!");
//     if (attempts === maxAttempts) {
//       console.log("Maximum attempts is end.");
//     }
//   }
// }