
let arr = process.argv.slice(2);

if (arr.length < 5) {
    console.log("Please enter 5 numbers");
    process.exit(0);
}

let num = [];

for (let i = 0; i < 5; i++) {
    num[i] = Number(arr[i]);
}

 
let max = num[0];
let min = num[0];
let sum = 0;

for (let i = 0; i < 5; i++) {
    sum = sum + num[i];

    if (num[i] > max) {
        max = num[i];
    }

    if (num[i] < min) {
        min = num[i];
    }
}

let avg = sum / 5;

console.log("Using loop");
console.log("Maximum number is:", max);
console.log("Minimum number is:", min);
console.log("Average is:", avg);

 
let maxNum = Math.max(...num);
let minNum = Math.min(...num);

let total = num.reduce((a, b) => a + b);

let average = total / 5;

console.log("\nUsing built-in methods");
console.log("Maximum number is:", maxNum);
console.log("Minimum number is:", minNum);
console.log("Average is:", average);
