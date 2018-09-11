const title = `Array Cardio Day 1`;
document.title = title;
document.querySelector('.navigation__title').innerHTML = title;

/**
 * Exercise JS
 */
const inventors = [
  {
    first: 'Roz',
    last: 'Durdy',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Silvana',
    last: 'Cogle',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Ulises',
    last: 'Kerswell',
    year: 1858,
    passed: 1947
  }
];

const people = [
  'Felix',
  'Candace',
  'Jamal',
  'Colorado',
  'Griffith',
  'Hamish',
  'Charde',
  'Ferdinand',
  'Marshall',
  'Kylie',
  'Dawn',
  'Selma',
  'Unity',
  'Juliet',
  'Galvin',
  'Walter',
  'Malik',
  'Donovan',
  'Axel',
  'Fallon',
  'Ethan',
  'Demetria'
];

const fifteen = inventors.filter(
  inventor => inventor.year > 1499 && inventor.year < 1600
);
console.table(fifteen);

const fullNames = inventors.map(
  inventor => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);

const ordered = inventors.sort((a, b) => a.year - b.year);
console.table(ordered);

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy - nextGuy;
});
console.table(oldest);

const alphabetically = people.sort();
console.log(alphabetically);
