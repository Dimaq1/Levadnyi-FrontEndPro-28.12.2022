function sum() {
  let num = 0
  return function (n) {
    num += n
    return num
  }
}

const result = sum()
console.log(result(3));
console.log(result(5));
console.log(result(20));
console.log(result(2));
