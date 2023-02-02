const stringTasks = {
    /**
     * вернуть строку, где все слова из исходной строки будут начинаться с заглавных букв
     */
    capitalizeWords(srcStr) { },
  
    function capitalizeWords(srcStr) { 
      const str2 = srcStr.split(' ');
    
      for(let i = 0; i < str2.length; i++){
         str2[i] = str2[i][0].toUpperCase() + str2[i].slice(1);
      }
      return str2.join(' ');
   }
    /**
     *
     * на вход подается строка со словами разделенными пробелами
     * вернуть строку в camelCase
     * 'just a string' => 'justAString'
     */
    toCamelCase(srcStr) { },
   
   function toCamelCase(srcStr) { 
      const str2 = srcStr.split(' ');
    
      for(let i = 1; i < str2.length; i++){
      str2[i] = str2[i][0].toUpperCase() + str2[i].slice(1);
      }
      return str2.join('');
   }
    /**
     * на вход подается строка в camelCase
     * вернуть строку в snake_case
     * 'camelCaseString' => 'camel_case_string'
     */
    camelToSnake(srcStr) { },
    
    function camelToSnake(srcStr) { 
      const str2 = srcStr.split('');
      
       for(let i = 0; i < str2.length; i++){
          if(str2[i] === str2[i].toUpperCase()){
           str2[i] = str2[i].toLowerCase();
           str2.splice(i, 0, '_');
          } 
       }
       return str2.join('');
    }
    
    /**
       * 
       * вернуть строку, в которой все слова будут начинаться с большой буквы
       * считать что на вход подается строка, в которой все слова разделены одним пробелом
       * capitalize('this string will be capitalized') => 'This String Will Be Capitalized'
       */
    capitalizeWords: function (str) {
            
       /*дубликат первой задачи*/

    },
    /*на входе строка @srcString, в которой слова разделены пробелами, и ch - символ, из которого будем "рисовать" рамку
      вывести строку на консоль, так что-бы каждое слово было в новой строке а весь вывод был в текстовой псевдорамке
      например
      printInFrame('This string will be printed in frame', '*');
      ***********
      * This    *
      * string  *
      * will    *
      * be      *
      * printed *
      * in      *
      * frame   *
      * *********
       */
    printInFrame: function (srcString, ch) {
 
    },
 
    function printInFrame (srcString, ch) {

      const str2 = srcString.split(' ');
    
      const arr = [];
      for(let elem of str2){
        arr.push(elem.length);
      }
    
     let maxLength = Math.max.apply(null, arr);    //макс. длина слова в строке
    
     const frame = [];
     
     let frameChar = ''.padEnd(maxLength + 3, `${ch}`)
     frame.push(frameChar);
     
     for(let elem of str2){
       let a = `${ch} ${elem}`;
       a = a.padEnd(maxLength + 3, ` `)
       a = a.padEnd(maxLength + 4, `${ch}`)
       frame.push(a);
     }
    
       frame.push(frameChar);
       return frame.join('\n');
    }


    /**
     * вернуть строку, в которой все символы будут идти в обратном порядке
     * reverseString('abc') => 'cba';
     */
    reverseString(str) {
      return srcStr.split('').reverse().join('');
    },
 
    /**
     * вернуть число, в котором цифры будут идти в обратном порядке
     * обратить внимание и правильно обработать случай когда число со знаком -
     */
    /*
    reverseNumber(2) => 2
    reverseNumber(12345) => 54321
    reverseNumber(543210) => 12345
    reverseNumber(1020) => 201
    reverseNumber(-345) => -543
     */
    reverseNumber: function (n) {
 
    },
    /**
     * нужно посчитать кол-во каждого символа в строке
     * считать 'a' и 'A' разными символами
     * вывести результат в любом удобном виде
     */
    charCount: function (str) {
 
    },
 
    /**
     * 
     * проверить являются ли строки анаграмами и вернуть true если да, иначе - вернуть false
     * пробелы игнорировать
     * примеры
     * areAnagrams('anagram', 'nag a ram') => true;
     * areAnagrams('Eleven plus two', 'Twelve plus one'); => true;
     * areAnagrams('O, Draconian devil', 'Leonardo da Vinci') => true;
     */
    areAnagrams: function (str1, str2) {
 
    },
    /**
     * 
     * проверить, является ли строка палиндромом
     * палиндром - это такая строка, которая одинаково читается в обе стороны
     * примеры:
     * isPalindrome('a') => true;
     * isPalindrome('abc') => false;
     * isPalindrome('aabbaa') => true;
     */
    isPalindrome: function (str) {
 
    },
 };