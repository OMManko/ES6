import "../scss/style.scss";
import "./polyfills/fetch.umd";
import "./polyfills/polyfill";

const newsWrapper = document.querySelector(".news-categories-wrapper");

document.querySelector(".load-button").addEventListener("click", () => {
    newsWrapper.classList.remove("hidden");

   import("./load").then(load => {
       load.init();
   })
});








