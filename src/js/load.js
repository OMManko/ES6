import "../scss/news.scss";
import fetchRequest from "./fetchRequest";
import { ul } from "./News"

export function init() {
    const radios = document.querySelectorAll(".news-radio");
    const url = `https://newsapi.org/v2/top-headlines?category=general&country=us&sortBy=publishedAt&apiKey=0672e1602aad4dc9aa61e122190937d7`;
    const req = new Request(url);

    fetchRequest(req);

    [...radios].forEach(radio => {
        radio.addEventListener("click", () => {
            let searchCategory = radio.nextElementSibling.innerHTML;
            const url = `https://newsapi.org/v2/top-headlines?category=${searchCategory}&country=us&sortBy=publishedAt&apiKey=0672e1602aad4dc9aa61e122190937d7`;
            const req = new Request(url);

            ul.innerHTML = "";

            fetchRequest(req);
        });
    });
}






