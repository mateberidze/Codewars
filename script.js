//Find Nearest square number
function nearestSq(n){
    return Math.round(n**0.5)**2
}


//Sum of array singles
function repeats(arr){
    return arr
    .filter((v, i, arr) => arr.indexOf(v) == arr.lastIndexOf(v))
    .reduce((a, b) => a + b, 0)
  };

//Triangular Treasure
function triangular(n) {
    if (n <= 0) {
        return 0;
    }
    return n * (n + 1) / 2;
}
//Find the Mine!
function mineLocation(f){
    let p = 0;
    let p1 = 0; 
    for(let i = 0; i < f.lenght; i++){
      for(let j = 0; j < f[i].lenght; j++){
        if(f[j][i] === 1) {
          
          p1 = j;
          p = i;
      }
    }
   }
    return[p, p1];
   
  };





//Playing with digits

function digPow(n, p){
    let arr = 
        n 
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur, i, arr) => acc + Math.pow(arr[i], p + i), 0) / n;
    return("" + arr).includes(".") ? -1 : arr;
    
  }


//Backwards Read Primes
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function reverseNumber(n) {
    return parseInt(n.toString().split('').reverse().join(''));
}

function backwardsPrime(start, end) {
    const result = [];
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            const reversedNum = reverseNumber(num);
            if (num !== reversedNum && isPrime(reversedNum)) {
                result.push(num);
            }
        }
    }
    return result;
}


//cat years, dog years
const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    (humanYears - 1 ? 16 : 11) + 4 * humanYears,
    (humanYears -1 ? 14 : 11) + 5 * humanYears
  ];



//rot13
function rot13(str) {
    return str.split('').map(char => {
      if (char >= 'a' && char <= 'z') {
       
        return String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + 13) % 26 + 'a'.charCodeAt(0));
      } else if (char >= 'A' && char <= 'Z') {
      
        return String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + 13) % 26 + 'A'.charCodeAt(0));
      } else {
    
        return char;
      }
    }).join('');
  }
  
  
  const inputText = "Hello, World! 123";
  const outputText = rot13(inputText);
  console.log(outputText); 

