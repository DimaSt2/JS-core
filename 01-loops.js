const loopsTasks = {
    /**
     * 
     * @param {} n - целое число
     * нужно посчитать и вернуть сумму всех чисел начиная с 1 и до n
     */
    sumFromOneToN: function sumNumbers (n) {   //добавил название функции
        let sum = 0;
        for(let i = 1; i <= n; i++){
              sum = sum + i;
          }
         return sum;
       }
 ,
  
    /**
     * вывести не консоль строку посимвольно всеми доступными циклами. for, for of, while, do .. while
     */
  
    function printString(str) {
        for(let i = 0; i < str.length; i++){
          console.log(str[i]);      
        }
      }

      function printString(str) {
        let arr = str.split('');
        for(let i of arr){
          console.log(i);
        }      
      }

      function printString(str) {
        let i = 0;
        while(i < str.length){
          console.log(str[i]);
          i++;
        }
      }

      function printString(str) {
        let i = 0;
        do{
          console.log(str[i]);
          i++;
        } while(i < str.length)
      }
    /**
     * на вход ф-ция получет 2 числа n, maxAttempts
     * n - максимальное число, maxAttemps - максимальное кол-во попыток угадывания
     * ф-ция генерирует псевдослучайное счисло между 1 и n
     * далее у пользователя есть maxAttemps попыток это число угадать
     * ф-ция должна запрашивать у пользователя число, через prompt
     * если пользователь угадал число - вернуть true, если все попытки использованы и число не угадано - false
     * использовать цикл do ... while
     */
    guessNumber(n, maxAttempts) { },
  
  };
  

  function guessNumber(n, maxAttempts) { 
    let randomNumber = Math.floor(Math.random() * (n - 1) + 1);
    let i = 1;    // 1 потому что do отработает мин 1 раз
   do {
      let userNumber = +prompt('Отгадайте число, которое сгенерировала программа', '');
      if(userNumber == randomNumber){
        return true;
      } 
      i++;
    } while(i <= maxAttempts)
     return false;
 }