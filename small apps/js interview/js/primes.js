let getPrimes = (arr) => {
  const primes = [];
  const seive = [];
  for (let i = 2; i <= arr; i++) {
    if (!seive[i]) {
      primes.push(i);
      for (let j = i * 2; j <= arr; j += i) {
        seive[j] = true;
      }
    }
  }
  return primes
};
console.log(getPrimes(100));
