const arraysTask = {
    /**
   * 
   * @param array - массив, где могут быть не только числа
   * нужно посчитать и вернуть сумму всех чисел
   */
    totalSum: function (array) {
            
    },

    function totalSum(array) {
        let sum = 0;
        for(let elem of array){
             if(isNaN(elem) || typeof elem === 'string'){
                 continue;       
               }
           sum += elem;     
             }
         return sum;
         }


    /**
     * на вход ф-ция получает 2 массива
     * нужно вернуть новый массив, в котором будут скомбинированы элементы из 2 массивов таким образом:
     * сначала будут идти первые элементы, потом вторые и тд, если в одном из массивов элементов больше не осталось то просто заполнять элементами из другого массива
     * пример: combine([1, 2, 3], ['a', 'b', 'c', 'd']) => [1, 'a', 2, 'b', 3, 'c', 'd']
     */
    combine: function (array1, array2) {

    },


    // с этой функцией чувство что изобретаю велосипед, должен быть какой-то метод, 
    //делающий это короче 
    function combine(array1, array2) {   
        let arr = [];      //массив в который поместим результат
        let arrCut = [];   //отрезок, если длины аргументов не равны, для добавления в конце
      
        let diff = array1.length - array2.length;   //разность между длинами массивов
      
        let commonLeigth = (array1.length + array2.length - Math.abs(diff)) / 2; 
                      //общая длина обоих массивов, которая содержит элементы
          
          for(let i = 0; i < commonLeigth; i++){
              arr[i] = [array1[i], array2[i]]; 
              }                                 //заполняем пустой массив в виде двумерного
              
          arr = [].concat(...arr);             //переводим в одномерный
          
          if(diff == 0){
            return(arr);
          }                         //если массивы были равны, возвращаем результат
    
          if(diff > 0){        //если неравны, вырезаем остаток для добавления в конец нашего массива 
            arrCut = array1.slice(- diff);
          } else {
            arrCut = array2.slice(diff);
          }
           
           arr = arr.concat(...arrCut); //присоединяем отрезок 
          return arr;
    }
    

    //вернуть массив, состоящий из идущих подряд чисел, начиная со start, и до end включительно
    //range(0, 3) => [0, 1, 2, 3]
    range(start, end) {
        let arr = [];
        let diff = end - start;

        for(let i = 0; i <= diff; i++){
        arr[i] = start;
        start++;
     }  
        return arr;
    },


    //ф-ция должна вернуть последние n элементов массива
    //если n > array.length то вернуть копию массива
    lastN(array, n) {
        let arr = [];
            if(n > array.length){
            return arr = [...array];
            }
        return arr = array.slice(-n);
    }
    },
    //ф-ция должна вернуть новый массив, в котором будут все элементы исходного массива, но без дубликатов
    //unique([1, 2, 3, 3]) => [1, 2, 3]
    unique(array) {
        let arr = [];
        let set = new Set(array);
        
        for(let elem of set){
             arr.push(elem);
            }
        return arr;
    },
    /**
     * разбить исходный массив на несколько подмассивов длиной chunkSize
     * chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
     */
    chunk: function chunk(arr, chunkSize) {
        array = [];
        cutCount = Math.floor(arr.length/chunkSize); //кол-во целых отрезков
    
       for(let i = 0; i < cutCount; i++){
          array[i] = arr.splice(0, chunkSize);
       }
       
         if(arr.length > 0){       //если остался отрезок, добавляем в конец массива
           array.push(arr);
         } 
        return array;
    },

    //вернуть новый массив из элементов, для которых ф-ция cb вернёт true
    //аналог родного array.filter
    filter(array, cb) {

    },
    //эта ф-ция должна работать как array.forEach, но если cb возвращает false то обход цикла должен прикратиться
    breakableForEach(array, cb) {

    },
    //ф-ция должна вернуть true если в обеих массивах одинаковые элементы, иначе false
    //areArraysEqual([1, 2, 3], [2, 3, 1]) => true
    //areArraysEqual([1, 2, 2], [1, 2]) => false
    areArraysEqual(arr1, arr2) {

    },

    /**
     * На вход подается массив чисел, 2 числа min/max и необязательный булевый параметр strict, который по-умолчанию будет true
     * может быть быть так что min > max, те сначала надо убедиться и обеспечить min>=max
     * параметр strict надо помнимать так: если true то сравнивать числа через ><, иначе сравнивать через >=, <=
     * ф-ция должна вернуть новый массив в котором все элементы будут находиться между min и max
     */
    selectIntervalFromArray(array, min, max, strict=true) {

    }
};
