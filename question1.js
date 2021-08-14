let cards = [1,2,3,4,5,6,7,8]
// write code to pick a card and from the start then add it to the end of the array 

let temp = cards.shift();

cards.push(temp)

console.log(cards);


// output [2,3,4,5,6,7,8,1]



