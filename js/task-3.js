function filterArray(numbers, value) {
  
    const filteredNumbers = [];
    
    for (const number of numbers) {
       
        if (number > value) {
          
            filteredNumbers.push(number);
        }
    }
    
    return filteredNumbers;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
console.log(filterArray([5, 10, 15, 20], 15)); // [20]
console.log(filterArray([100, 200, 300], 150)); // [200, 300]
console.log(filterArray([10, 9, 8, 7, 6], 7)); // [10, 9, 8]
