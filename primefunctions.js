function primGen(n) {
  const array = [];
  for (let i = 1; i < n; i++) { // loop through number given
    if (i === 1) {
      // array.push(i);
    } else {
      let prime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) { // check through for the prime number
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
console.log(primGen(100));

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
console.log(cumulativeSum([1, 2, 3]));

function primetest(x) {
  if (x <= 1) return false;

  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function maxPrimeSum(val) {
  const prime = primGen(val);
  let sum = 0;
  let consec = 0;// counter
  let tmp = consec;
  let i;
  for (i = 0; i < prime.length; i++) { // looping through the prime array
    tmp = 0;
    for (let j = i; j < prime.length; j++) {
      tmp += prime[j];
      if (tmp > val) break;
      if ((j - i > consec) && primetest(tmp) && tmp > sum) {
        consec = j - i;
        sum = tmp;
      }
    }
  }
  return [sum, ++consec];
}
console.log(maxPrimeSum(100));
