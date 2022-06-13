"use stript";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};



      for (let i = 0; i < 2; i++) {
             const  a = prompt("Один из последних просмотенных фильмов?", ""),
                    b = prompt("На сколько оцените его?", "");

                    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50)  {
                        personalMovieDB.movies[a] = b;
                        console.log('done');
                    } else {
                        console.log('error');
                        i--;
                    }

            
      }

      if (personalMovieDB.count < 10 && personalMovieDB.count >= 1) {
        console.log('мало фильмов'); 
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('вы средний зритель');
      } else if (personalMovieDB.count >= 30) {
        console.log('да вы киноман мазафака!');
      } else if (personalMovieDB.count < 1) {
        console.log('Ану бысторо смотреть!');
      } else {
        console.log('ошибка!');
      }
      
       
     

      console.log(personalMovieDB); 