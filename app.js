// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function arraySum (numbers) {
  if (!numbers?.length) {
    console.error('Invalid parameter passed to sum() function');
    return;
  }

  let sum = 0;

  numbers.forEach(number => {
    sum += number;
  });

  return sum;
}

const numbers = [2, 22, 12, 17, 18, 39, 129];
console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {};

book.title = 'Alice in Wonderland';
book.author = 'Lewis Carroll';
book.pages = 352;
book.readCount = 1;

book.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
}

console.log(book.info());


