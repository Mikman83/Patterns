
// Массив с карточками товара
// скрипт работает с пагинацией (8 карточек на странице),
// !!!ВАЖНО!!! выводит карточки вместо предыдущих
// вызванных 8 карточек.

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  const data ={
    books: [
      {
        src: '/img/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
      },
      {
        src: '/img/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
      },
      {
        src: '/img/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
      },
      {
        src: '/img/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
      },
      {
        src: '/img/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
      },
      {
        src: '/img/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
      },
      {
        src: '/img/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
      },
      {
        src: '/img/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
      },      
    ]
  };

  const cardsWrap = document.querySelector('.catalog__list');

  function createCards(object) {
    const memberArr = object.books;
    let cardString = '';

    memberArr.forEach(function(book) {
      cardString = cardString + `<div class="product-card-mini">
          <h2 class="product-card-mini__title">${book.title}</h2>
          <img src="${book.src}" alt="some card picture" class="product-card-mini__img">
          <p class="product-card-mini__descr">${book.descr}</p>
          <p class="product-card-mini__price">${book.price}</p>
        </div>`;
    });

    return cardString;
  }

  function insertElements(object, wrap) {
    const html = createCards(object);

    wrap.innerHTML = html;
  }

  insertElements(data, cardsWrap);

});

// ^^ скрипт вывода карточек под пагинацию ^^
//    с заменой предыдущих