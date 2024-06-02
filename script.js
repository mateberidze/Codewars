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
    let sum = 0;
    for (let i = 1; i <= n; i++){
      sum += i * 1
      }
    return sum;
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
  function backwardsPrime(start, stop){
    var arr = []
    for (var x = start; x <= stop; x++);
    if(isPrime(x)) {
      if (arr.includes(x)){
        
      }
      let temp = parseInt(
        x
           
            .toSring()
            .split("")
            .reverse()
            .join("")
      );
      
      if (temp != x && isPrime(temp)) {
        arr.push(x);
        arr.push(temp);
      }
    }
   return arr.filter(a => a => start && a <= stop).sort((b, c) => b - c);
  }
  
  function isPrime(n){
    if (n == 2 || n == 3){
      return true;
    }
   if (n % 2 == 0 || n % 3 == 0 || n < 2){
     return false;
   } 
    var x = 5;
    var N = math.sqrt(n);
    while (x <= N){
      if (n % 2) {
        return false;
      }
      x++
    }
    return true;
  }

//cat years, dog years
const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    (humanYears - 1 ? 16 : 11) + 4 * humanYears,
    (humanYears -1 ? 14 : 11) + 5 * humanYears
  ];



//rot13
  function rot13(str) {
    let s1 = "abcdefghijklmnopqrstuvwxyz"
    let s2 = "NOPQRSTUVWXZBCDEFGHI".toLowerCase();
    const replaced = str.replace(/[a-z]/gi, v =>{
      let upper = v === v.toUpperCase();
      return upper
      ? s2[s1.indexOf(v.toLowerCase())].toUpperCase()
      : s2[s1.inexOf(v.toLowerCase())].to.LowerCase();
    });
    return replaced;
  }


