!function(){var n={form:document.getElementById("form"),newsWrapper:document.getElementById("newsWrapper")};function t(n){console.error(n),e("<p>Not found!</p>")}function e(t){n.newsWrapper.innerHTML=t}n.form.addEventListener("submit",(function(n){n.preventDefault();var r=n.currentTarget,c=r.elements.news.value.trim();if(!c)return;(a=c,fetch("".concat("https://newsapi.org/v2/everything","?apiKey=").concat("6b11c596281f446484f7375d55e6b20d","&q=").concat(a)).then((function(n){return n.json()}))).then((function(n){var t=n.articles;if(0===t.length)throw new Error("No data");return t.reduce((function(n,t){return function(n){var t=n.title,e=n.author,r=n.description,c=n.url,a=n.urlToImage;return"\n  <div class='article-card'>\n  <h2 class='article-title'>".concat(t,"</h2>\n  <h3 class='article-author'>").concat(e||"","</h3>\n  <img src=").concat(a," class='article-img'>\n  <p class='article-description'>").concat(r,"</p>\n  <a href=").concat(c," target='_blank' class='article-link'>Read more</a>\n  </div>\n  ")}(t)+n}),"")})).then(e).catch(t).finally((function(){return r.reset()}));var a}))}();
//# sourceMappingURL=04-pttp.59cefbb4.js.map
