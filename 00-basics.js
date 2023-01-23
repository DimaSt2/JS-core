// return sum of given numbers
function sum(a, b, c) {
    let sum = 0;
    //your code should be here
    sum = a + b + c;  
    return sum;
}

// return sum of given arguments,
// if argument is not a number try to make a number and add to the sum
function safeSum(a, b, c) {
    let sum = 0;
    //your code should be here

    let arr = [a, b, c];   // возможно есть проще вариант, больше имел дело с массивами) 
    for(let elem of arr){
          elem = +elem;   // или как вариант, вместо знака +,  Number(elem)
          sum = sum + elem;     
        }
    return sum;
}

// return maximum of given arguments
// do not use Math.max
function max(a, b, c) {
    let m = a;
    //your code should be here

    if(a < b && b > c){
        m = b;
      } else if(a < c) {
        m = c;
      }

    return m;
}

//return minimum of given arguments
// do not use Math.min
function min(a, b, c) {
    let m = a;
    //your code is here
    if(a > b && b < c){
        m = b;
      } else if(c < a) {
        m = c;
      }

    return m;
}

// return true if given number is integer
// return false otherwise
// do not use Number.isInteger
function isInteger(n) {
    //your code is here
    if(n % 2 == 0 || n % 2 == 1){
        return true;
    }
   return false;
}

// write logic for rounding given number n with given precision k
// example roundNumber(0.77777, 2) == 0.78
// roundNumber(0.77777, 3) == 0.778
// do not use Number.toFixed
function roundNumber(n, k) {
    //your code is here
    let num = String(n);     //преобразуем число в строку
    let arr = num.split('');  // строку в массив
    
    let i = arr.indexOf('.');   //находим индекс точки
    let roundNumIndex = i + k;  //индекс числа для округления
      if(arr[roundNumIndex + 1] >= 5){    //проверяем след. число для верного округления
        arr[roundNumIndex]++;           
      }
    arr = arr.slice(0, roundNumIndex + 1);  //вырезаем нужную часть
    let result = Number(arr.join(''));   // преобразуем массив-строка-число
    
    return result;

}

// given array of numbers
// return percentages of each number in array
// it mean how many percents each number take from total sum
function percentage(numbers) {
    let sum = 0;
    let res = [];

   for(let i = 0; i < numbers.length; i++){  //находим сумму элементов массива
     sum = sum + numbers[i];
   }
   for(let i = 0; i < numbers.length; i++){
     res[i] = numbers[i]/sum * 100;
   /*  в условии не было, но если просто выводить в консоль строки для удобного
      представления можно добавить округление и %, но оно не точно считает)
    
      res[i] = res[i].toFixed(2) + '%';
     */
     }
     
   return res;
}

module.exports = {
    sum,
    safeSum,
    max,
    min,
    isInteger,
    roundNumber,
    percentage
};




 