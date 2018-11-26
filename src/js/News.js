import {PLACEHOLDER_IMAGE} from "./variables";

export const ul = document.querySelector(".news-wrapper");

export default class News {
    constructor({title, description, author, url, urlToImage,}) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = PLACEHOLDER_IMAGE;
        if (urlToImage !== null) this.urlToImage = urlToImage;
    }

    createNewsArticle() {
        const li = document.createElement("li");
        const article = document.createElement("article");
        const div = document.createElement("div");
        const div2 = document.createElement("div");
        const img = document.createElement("img");
        const a = document.createElement("a");
        const span = document.createElement("span");

        li.className = "news-block";
        div.className = "news-img-wrapper";
        div2.className = "news-content";
        a.className = "news-title";
        span.className = "news-description";
        img.className = "news-img";

        a.href = this.url;
        a.innerHTML = this.title;
        span.innerHTML = this.description;
        img.src = this.urlToImage;

        li.appendChild(article);
        article.appendChild(div);
        div.appendChild(img);
        article.appendChild(div2);
        div2.appendChild(a);
        div2.appendChild(span);
        ul.appendChild(li);
    }
}




