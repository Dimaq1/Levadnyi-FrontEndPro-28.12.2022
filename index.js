const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


function generateKey(distance, symbols) {
  let result = '';
  for (let i = 0; i < distance; i++) {
    let rundomSym = Math.floor(Math.random() * symbols.length);
    result += symbols[rundomSym];
  }
  return result;
}

const key = generateKey(16, characters);
console.log(key);





