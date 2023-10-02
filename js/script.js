'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      bg = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list'),
      inputFilm = document.querySelector('.adding__input'),
      btnAddFilm = document.querySelector('.add button'),
      checkBox = document.querySelector('[data-favorit]')

adv.forEach(item => {
    item.remove()
});

genre.innerHTML = 'драма';
bg.style.backgroundImage = 'url(../img/bg.jpg)';


movieList.innerHTML = "";

movieDB.movies.sort();


function updateList () {
    movieList.innerHTML = '';
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            updateList();
        });
    });
}

updateList();

btnAddFilm.addEventListener('click', (e) => {
    e.preventDefault();

    const filmName = inputFilm.value;
    const filmLength = filmName.length > 21 ? filmName.slice(0, 21) + '...' : filmName;

    if(filmName.trim() === '') {
        alert('Введите корректные данные');
        inputFilm.value = '';
    } else {
        movieDB.movies.push(filmLength.toUpperCase());
        movieDB.movies.sort();
        inputFilm.value = '';
        updateList();
        
        if(checkBox.checked) {
            console.log('Сделать любимым');
        }

    }
}); 

