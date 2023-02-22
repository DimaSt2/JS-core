const datesTask = {
    //вывести на консоль текущую дату в формате DD.MM.YYYY hh:mm:ss
    printCurrentDateAndTime() {
        let date = new Date(),
        month = date.getMonth() + 1;
        if(month < 10){
           month = '0' + month;
          }
     return (`${date.getDate()}.${month}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}  
    },

    //на вход ф-ция получается объект Date. Вывести на консоль сколько времени прошло от даты в прошлом до сейчас
    //длительность надо вывести в формате '1 years 2 months 3 days 4 hours 5 minutes 6 seconds ago'.
    //если какая=то часть равна 0 то её не нужно выводить
    fromNow(d) {

    }
};


Сколько сегодня прошло секунд?
function getSecondsToday(){
var date = new Date;
return Math.floor((date.getTime() - date.setHours(0,0,0,0))/1000);//получаем миллисекунды, делим на 1000 и округляем чтоб получить секунды
}
alert(getSecondsToday());

let d = new Date(2022, 10, 14);
let now = new Date();

const diffTime = [];

diffTime.push((now.getFullYear() - d.getFullYear()),
              (now.getMonth() - d.getMonth()),
              (now.getDate() - d.getDate()),
              (now.getHours() - d.getHours()),
              (now.getMinutes() - d.getMinutes()),
              (now.getSeconds() - d.getSeconds()));

const timeName = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];

let res = [];

for(i = 0; i < diffTime.length; i++){
    if(diffTime[i] !== 0){
      res.push(diffTime[i],timeName[i]);
    }
}
  
  res.push('ago');
  res = res.join(' ');
  
  console.log(res);


  let d = new Date(2022, 1, 11);
let now = new Date() - d;

const diffTime = [];

diffTime.push(year = (1000 * 60 * 60 * 24 * 30 * 12),
              month = (1000 * 60 * 60 * 24 *30),
              day = (1000 * 60 * 60 * 24),
              hour = (1000 * 60 * 60),
              minute = (1000 * 60),
              second = 1000);

let res = [];

for(i = 0; i < diffTime.length; i++){
    res[i] = now / diffTime[i]
}

  console.log(now);





// diffTime.push((now.getFullYear() - d.getFullYear()),
//               (now.getMonth() - d.getMonth()),
//               (now.getDate() - d.getDate()),
//               (now.getHours() - d.getHours()),
//               (now.getMinutes() - d.getMinutes()),
//               (now.getSeconds() - d.getSeconds()));

// const timeName = ['year', 'month', 'day', 'hours', 'minutes', 'seconds'];


  
  





    
    
    
    
    




    
    
