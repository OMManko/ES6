import News from "./News";

export default (req) => {
    const getData = async (req) => {
        const response = await fetch(req);
        const data = await response.json();
        return data;
    };

    getData(req)
        .then(data => data.articles.map(news => new News(news).createNewsArticle()))
        .catch(error => console.log(error))
};




