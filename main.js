////Book 1 - Conditionals////

// Practice 1. Check Your Math
if (1+1 > 5) {
    console.log('True fact!')
} else {
    console.log('LIES!')
};

if (4*5 <= 20) {
    console.log('True fact!')
} else {
    console.log('LIES!')
};

if (6-2 >= 0) {
    console.log('True fact!')
} else {
    console.log('LIES!')
};

//Practice 2. Dog People vs. Cat People
const likesDogs = true;

if (likesDogs == true) {
    console.log('You\'re a dog person!');
} else {
    console.log('You\'re a cat person!');
};

//Practice 3. Greetings
const person = {
    name: 'John',
    language: 'French'
};

if (person.language == 'English') {
    console.log(`Hello, ${person.name}!`);
} else if (person.language == 'English') {
    console.log(`Hola, ${person.name}!`);
} else if (person.language == 'French') {
    console.log(`Bonjour, ${person.name}!`);
};

//Practice 4. Student Grades
const grade = 98;

if (grade >= 0 && grade <= 69) {
    console.log('You got a D');
} else if (grade >= 70 && grade <= 84) {
    console.log('You got a C');
} else if (grade >= 84 && grade <= 92) {
    console.log('You got a B');
} else if (grade >= 92 && grade <= 100) {
    console.log('You got an A');
};