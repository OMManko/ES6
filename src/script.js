(function() {
    const radios = document.querySelectorAll(".news-radio");
    const ul = document.querySelector(".news-wrapper");
    const url = `https://newsapi.org/v2/top-headlines?category=general&country=us&sortBy=publishedAt&apiKey=0672e1602aad4dc9aa61e122190937d7`;
    const req = new Request(url);
    const PLACEHOLDER_IMAGE = "http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png";

    class News {
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

    const fetchRequest = (req) => {
        const getData = async (req) => {
            const response = await fetch(req);
            const data = await response.json();
            return data;
        };

        getData(req)
            .then(data => data.articles.map(news => new News(news).createNewsArticle()))
            .catch(error => console.log(error))
    };


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

})();




