const e={form:document.getElementById("form"),newsWrapper:document.getElementById("newsWrapper")};function t(e){console.error(e),r("<p>Not found!</p>")}function r(t){e.newsWrapper.innerHTML=t}e.form.addEventListener("submit",(function(e){e.preventDefault();const n=e.currentTarget,a=n.elements.news.value.trim();if(!a)return;(c=a,fetch(`https://newsapi.org/v2/everything?apiKey=6b11c596281f446484f7375d55e6b20d&q=${c}`).then((e=>e.json()))).then((({articles:e})=>{if(0===e.length)throw new Error("No data");return e.reduce(((e,t)=>function({title:e,author:t,description:r,url:n,urlToImage:a}){return`\n  <div class='article-card'>\n  <h2 class='article-title'>${e}</h2>\n  <h3 class='article-author'>${t||""}</h3>\n  <img src=${a} class='article-img'>\n  <p class='article-description'>${r}</p>\n  <a href=${n} target='_blank' class='article-link'>Read more</a>\n  </div>\n  `}(t)+e),"")})).then(r).catch(t).finally((()=>n.reset()));var c}));
//# sourceMappingURL=04-pttp.075611e3.js.map