
// Example of for loop 

console.log("For Loop Running");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Example of while loop
console.log("While Loop Running");
let j = 5;

while (j < 10) {
    console.log(j);
    j++;
}


// Example of do-while loop
console.log("Do-While Loop Running");
let k = 10;

do {
    console.log(k);
    k++;
} while (k < 20);

// Example of for-in loop
console.log("For-in Loop Running");
const person = {
    name: 'John',
    age: 30,
    job: 'Developer'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Example of for-of loop
console.log("For-of Loop Running");
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}