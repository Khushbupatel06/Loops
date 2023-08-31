console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 11; i >= 1; i--) {
    console.log(i);
}

for (let num = 1; num <= 11; num += 1) {
    console.log(num);
}

// TO GET EVEN NUMBERS
for (let num = 0; num <= 20; num += 2) {
    console.log(num);
}

// TO GET ODD NUMBERS
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}


for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

for (let i = 1; i <= 1000; i *= 5) {
    console.log(i);
}

for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}
// ==============================================
// DO NOT RUN THIS INFINITE LOOP!!! BAD!!
// for (let i = 20; i >= 0; i++) {
//     console.log(i);
// }
// ==============================================

// lOOPING OVER ARRAYS
// ==================================
const animals = ['lions', 'tigers', 'wolf', 'bears', 'fox', 'zebra', 'wombat', 'woodchuck', 'spider', 'monkies', 'hourses', 'dogs', 'cats', 'rabits'];
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

for (let i = animals.length - 1; i >= 0; i--) {
    console.log(animals[i]);
}

const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred'];

for (let i = 0; i < people.length; i++) {
    if (typeof people[i] === 'string') {
        people[i] = people[i].toUpperCase();
    }
    console.log(i + 1, people[i]);
}

// NESTED LOOPS
// =======================
for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j <= 4; j++) {
        console.log(`j is: ${j}`)
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`Row #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

// THE WHILE LOOP
// =============================
let count = 0;
while (count < 10) {
    count++;
    console.log(count)
}
// samething in for loop
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

const SECRET = "BabyHippo";
let guess = prompt("enter the secret code...");
while (guess !== SECRET) {
    guess = prompt("enter the secret code...");
}
console.log("Congratulation!! You got the secret.")

// THE BREAK KEYWORD
// ======================
let input = prompt("Hey, say something!")
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") break;
}
console.log("OK YOU WIN!!")

for (let i = 0; i < 1000; i++) {
    console.log(i);
    if (i === 100) break;
}

// ++++++++++++++++++============================++++++++++++++++++
// WRITING A GUESSING GAME!!!
// =================+++++++++++++++++++++++++++++=================
let maximum = parseInt(prompt("Enter the maximum number!!!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!!!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too High! Enter a new guess number!");
    } else {
        guess = prompt("Too low! Enter a new guess number!");
    }
}
if (guess === 'q') {
    console.log("OK, You Quit!")
} else {
    console.log("Congratulation!")
    console.log(`YOU GOT IT! It took you ${attempts} guesses.`)
}

// ================================
// FOR....OF LOOP
// ================================
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners']

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let sub of subreddits) {
    console.log(sub)
    console.log(`Visit reddit.com/r/${sub}`);
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]
for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for (let char of "Hello Everyone!") {
    console.log(char)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
    console.log(num * num);
}

// =================================
// FOR IN LOOP
// =================================
const testScores = {
    keenan: 87,
    damon: 76,
    kim: 98,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length);
console.log

// ===============================
// object.keys method inside console
// =================================
Object.keys(testScores);
Object.values(testScores);
Object.entries(testScores);
