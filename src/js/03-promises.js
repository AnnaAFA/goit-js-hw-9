import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  let delay = Number(form.elements.delay.value);
  let step = Number(form.elements.step.value);
  let amount = Number(form.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
// ____________________________________________________СЕРВЕРНІ ЗАПИТИ__________________________________________
// // 6b11c596281f446484f7375d55e6b20d
// // GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=6b11c596281f446484f7375d55e6b20d

// const URL = 'https://newsapi.org/v2/everything';
// // const q = 'gpt';
// const API_KEY = '6b11c596281f446484f7375d55e6b20d';

// // Функція, яка робить запити
// // .then(res => res.json()) розпарсили (перетворити на читабельний скрипт)
// function getNews(query) {
//   return fetch(`${URL}?apiKey=${API_KEY}&q=${query}`).then(res => res.json());
// }

// // getNews('gpt-3').then(result => console.log(result));
// // export { getNews };
// // export default { getNews };
// // назвать файл api.js и кинуть туда код выше

// // в script.js
// // import { getNews } from '';
// // import API from ''; импортується обєкт в якому є метод getNews
// // console.log(API);
// // API.getNews('gpt-3').then(result => console.log(result));
// // getNews('gpt-3').then(result => console.log(result));

// // 1. отримати refs
// // 2. повісити слухача на сабміт на форму
// // 3. отримати запит з інпуту і передати його у вигляді квері параметру на сервер
// // 4. перевірити відповіть серверу (якщо негативна відповіть - інформувати користувача) + невалідні дані
// // 5. отримаємо результат та перебираємо новий масив і створюємо з нього розмітку
// // 6. показуємо користувачу розмітку(innerHTML)
// // 7. очистити форму
// // 8. треба id якщо є видалення елементу чи фільтрація під час запиту

// const refs = {
//   form: document.getElementById('form'),
//   newsWrapper: document.getElementById('newsWrapper'),
// };

// refs.form.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   const form = e.currentTarget;
//   const value = form.elements.news.value.trim();
//   // .trim() - прибираємо зайві пробіли
//   // console.log(e.currentTarget.elements.news.value);
//   // перевірка, якщо value нема, то робити запит не будемо
//   if (!value) return;
//   getNews(value)
//     // витягуємо аргументи з параметрів - деструктурізація
//     .then(({ articles }) => {
//       if (articles.length === 0) throw new Error('No data');

//       return articles.reduce(
//         (markup, article) => createMarkup(article) + markup,
//         ''
//       );
//       // викидаємо помилку через throw
//     })
//     .then(updateNewsList)
//     .catch(onError)
//     .finally(() => form.reset());
// }

// // функція яка оброблює помилки

// function onError(err) {
//   console.error(err);
//   // виводим користувачу повідомлення про помилку
//   updateNewsList('<p>Not found!</p>');
// }

// // функція яка малює розмітку + деструктурізацію
// function createMarkup({ title, author, description, url, urlToImage }) {
//   return `
//   <div class='article-card'>
//   <h2 class='article-title'>${title}</h2>
//   <h3 class='article-author'>${author || ''}</h3>
//   <img src=${urlToImage} class='article-img'>
//   <p class='article-description'>${description}</p>
//   <a href=${url} target='_blank' class='article-link'>Read more</a>
//   </div>
//   `;
// }

// // функція яка оновлює розмітку
// function updateNewsList(markup) {
//   refs.newsWrapper.innerHTML = markup;
// }
