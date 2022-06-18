"use stript";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == ''  || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
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

}

rememberMyFilms();

function detectPersinalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 1) {
        console.log('мало фильмов'); 
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('вы средний зритель');
        } else if (personalMovieDB.count >= 30) {
        console.log('да вы киноман мазафака!');
        } else if (personalMovieDB.count < 1) {
        console.log('Ану бысторо смотреть!');
        } else {
        console.log('Ошибка!');
        }
}

rememberMyFilms();

function shawMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);

    }

}

shawMyDB(personalMovieDB.privat);


function whileYourGenres() {
    for ( let i = 1; i <= 3; i++) {
        const genre = prompt(`ваш любымый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre
    }
}

whileYourGenres();