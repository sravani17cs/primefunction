function primGen(n) {
  const array = [];
  for (let i = 1; i < n; i++) {
    if (i === 1) {
      array.push(i);
    } else {
      let prime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          prime = false;
        }
      }
      if (prime) {
        array.push(i);
      }
    }
  }
  return array;
}
console.log(primGen(10));

function cumulativeSum(arr) {
  const total = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      total.push(arr[i]);
    } else {
      let sum = 0;
      for (let n = i; n >= 0; n--) {
        sum += arr[n];
      }
      total.push(sum);
    }
  }
  return total;
}
console.log(cumulativeSum(2, 3, 4));
