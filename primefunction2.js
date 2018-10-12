function primGen(n){
  var array = [], threshold = Math.sqrt(n), output = [];

  // Make an array from 2 to (n - 1)
  for (var i = 0; i < n; i++) {
    array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (var i = 2; i <= threshold; i++) {
    if (array[i]) {
      for (var j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }

  // All array[i] set to true are primes
  for (var i = 2; i < n; i++) {
    if(array[i]) {
      output.push(i);
    }
  }

  return output;
}

console.log(primGen(10))
function primetest(x) {
  if (x <= 1) return false;

  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
      break;
    }
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
        //if ((j-i) < consec){
          if (tmp > val) break;
               if ((j - i > consec) && primetest(tmp) && tmp > sum) {
                    consec = j - i;
                        sum = tmp;
     // }
      }
    }
  }
  return [sum, ++consec];
}
console.log(maxPrimeSum(1000));