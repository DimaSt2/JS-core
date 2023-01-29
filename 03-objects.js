const objectsTask = {
    //на вход всегда приходит просто объект в котором ключи и значения - строки
    //вернуть новый объект, что-бы в нём ключи и значения были поменяны местами
    //swapKeysWithValues({a: 'aa', b: 'bb'}) => { aa: 'a', bb: 'b' };
    swapKeysWithValues(obj) {

    },

    function swapKeysWithValues(obj) {
        const keys = Object.keys(obj),
              values = Object.values(obj),  
              obj2 = {};
       
        for(let i = 0; i < keys.length; i++){
           obj2[values[i]] = keys[i];
          }
         return obj2;
      }

     // решение с Object.entries

     function swapKeysWithValues(obj) {
        const obj2 = {},
              arr = Object.entries(obj);
       
     for(let i = 0; i < arr.length; i++){
        obj2[arr[i][1]] = arr[i][0]; 
     }   
     return obj2;
}



    /**
     * на вход подается объект
     * функция должна сделать и вернуть тн глубокую копию этого объекта
     * вся логика должна быть написана самостоятельно, так же нужно учесть что некоторые свойства копируемого объекта могут быть массивами
     */
    deepCopy(obj) {

    }
};


