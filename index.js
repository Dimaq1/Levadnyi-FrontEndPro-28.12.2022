function pow(num, degree) {
  if (degree === 1) {
    return num;
  } else {
    return num * pow(num, degree - 1)
  }
}

const result = pow(3, 3)
console.log(result);
