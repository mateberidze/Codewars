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