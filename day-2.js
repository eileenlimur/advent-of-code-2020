const fs = require('fs');
fs.readFile('./day-2-data.txt', 'utf8', function read(err, data) {
  if (err) {
    throw err;
  }
  const content = data;
  const contentAsArray = content.split('\n')
  validPasswordCount(contentAsArray);
  secondValidPasswordCount(contentAsArray)
});

function validPasswordCount(array){
  let passwordCount = 0;
  for (let el of array) {
    const [code, password] = el.split(': ');
    const [rule, letter] = code.split(' ');
    const [min, max] = rule.split('-');
    let letterCount = 0;
    for (let char of password) {
      if (char === letter) {
        letterCount++;
      }
    }
    if (letterCount >= min && letterCount <= max) {
      passwordCount++;
    }
  }
  console.log(passwordCount);
}

function secondValidPasswordCount(array) {
  let passwordCount = 0;
  for (let el of array) {
    const [code, password] = el.split(': ');
    const [rule, letter] = code.split(' ');
    const [positionOne, positionTwo] = rule.split('-');
    let matchButNoDoubleMatch = false;
    for (let i = 0; i < password.length; i++) {
      let position = i + 1;
      if ((position == positionOne || position == positionTwo) && (password[i] === letter)) {
        matchButNoDoubleMatch = (!matchButNoDoubleMatch ? true : false);
      }
    }
    if (matchButNoDoubleMatch) {
      passwordCount++;
    }
  }
  console.log(passwordCount);
}