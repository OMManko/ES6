(function() {
    const radios = document.querySelectorAll(".news-radio");
    const ul = document.querySelector(".news-wrapper");
    const url = `https://newsapi.org/v2/top-headlines?category=general&country=us&sortBy=publishedAt&apiKey=0672e1602aad4dc9aa61e122190937d7`;
    const req = new Request(url);

    class News {
        constructor({title, description, author, source, url, urlToImage}) {
            this.title = title;
            this.description = description;
            this.author = author;
            this.source = source.name;
            this.url = url;
            this.urlToImage = "https://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png";
            if (urlToImage !== null) this.urlToImage = urlToImage;
        }

        createNewsArticle() {
            let li = document.createElement("li"),
                article = document.createElement("article"),
                div = document.createElement("div"),
                div2 = document.createElement("div"),
                img = document.createElement("img"),
                a = document.createElement("a"),
                span = document.createElement("span");

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

    function fetchRequest(req) {
        return fetch(req)
            .then(response => response.json())
            .then(data => data.articles.map(news => new News(news).createNewsArticle()))
            .catch(function(error) {
                console.log(error)
            });
    }

    fetchRequest(req);

    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("click", function() {
            let searchCategory = this.nextElementSibling.innerHTML;
            const url = `https://newsapi.org/v2/top-headlines?category=${searchCategory}&country=us&sortBy=publishedAt&apiKey=0672e1602aad4dc9aa61e122190937d7`;
            const req = new Request(url);

            ul.innerHTML = "";

            fetchRequest(req);
        });
    }
})();




