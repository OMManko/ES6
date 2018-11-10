const radios = document.querySelectorAll(".news-radio");
const ul = document.querySelector(".news-wrapper");


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

class News {
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.author = data.author;
        this.source = data.source.name;
        this.url = data.url;
        this.urlToImage = "http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png";
        if (data.urlToImage !== null) this.urlToImage = data.urlToImage;
    }

    createNewsArticle() {
        let li = createNode(("li")),
            article = createNode("article"),
            div = createNode("div"),
            div2 = createNode("div"),
            img = createNode("img"),
            a = createNode("a"),
            span = createNode("span");

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

        append(li, article);
        append(article, div);
        append(div, img);
        append(article, div2);
        append(div2, a);
        append(div2, span);
        append(ul, li);
    }
}


let url = `https://newsapi.org/v2/top-headlines?category=general&country=us&sortBy=publishedAt&apiKey=0672e1602aad4dc9aa61e122190937d7`,
    req = new Request(url);

fetch(req)
    .then((response) => response.json())
    .then((data) => data.articles.map(news => {
        let newsArticle = new News(news);
        return newsArticle.createNewsArticle();
    }))
    .catch(function(error) {
        console.log(error);
    });


for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function() {
        let searchCategory = this.nextElementSibling.innerHTML;
        let url = `https://newsapi.org/v2/top-headlines?category=${searchCategory}&country=us&sortBy=publishedAt&apiKey=0672e1602aad4dc9aa61e122190937d7`,
            req = new Request(url);

        ul.innerHTML = "";

        fetch(req)
            .then((response) => response.json())
            .then((data) => data.articles.map(news => {
                let newsArticle = new News(news);
                return newsArticle.createNewsArticle();
            }))
            .catch(function(error) {
                console.log(error);
            });
    });
}


