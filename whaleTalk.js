// Step 1:
let input = 'urgent hello fom the ocean';
input = 'turpentine and turtles';
// Step 2:
const vowels = ['a', 'e', 'i', 'o', 'u'];
// Step 3:
let resultArray = [];
// Step 4:
for (let i = 0; i < input.length; i++) {
  // console.log(input[i]);
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        input[i] = 'ee';
        resultArray.push(input[i]);
      }
      else if (input[i] === 'u') {
        input[i] = 'uu';
        resultArray.push(input[i]);
      }
      //console.log(input[i]);
      resultArray.push(input[i]);
      } 
  }
}
console.log(resultArray.join('').toUpperCase());
