// TODO: Create an array called numbers with values 1 through 5
// TODO: Write a for loop that prints each number in the array
// TODO: Write a while loop that counts down from 5 to 1
// TODO: Create a loop that prints only even numbers from the numbers array
// TODO: Create a loop that calculates the sum of all numbers in the array
let number = [1, 2, 3, 4, 5];

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}
let countDown = 5;
while (countDown > 0) {
    console.log(countDown);
    countDown--;
}
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        console.log (number[i]);
    }
}
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
console.log(sum);   