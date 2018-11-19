"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  var radios = document.querySelectorAll(".news-radio");
  var ul = document.querySelector(".news-wrapper");
  var url = "https://newsapi.org/v2/top-headlines?category=general&country=us&sortBy=publishedAt&apiKey=0672e1602aad4dc9aa61e122190937d7";
  var req = new Request(url);
  var PLACEHOLDER_IMAGE = "http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png";

  var News =
  /*#__PURE__*/
  function () {
    function News(_ref) {
      var title = _ref.title,
          description = _ref.description,
          author = _ref.author,
          url = _ref.url,
          urlToImage = _ref.urlToImage;

      _classCallCheck(this, News);

      this.title = title;
      this.description = description;
      this.url = url;
      this.urlToImage = PLACEHOLDER_IMAGE;
      if (urlToImage !== null) this.urlToImage = urlToImage;
    }

    _createClass(News, [{
      key: "createNewsArticle",
      value: function createNewsArticle() {
        var li = document.createElement("li");
        var article = document.createElement("article");
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var img = document.createElement("img");
        var a = document.createElement("a");
        var span = document.createElement("span");
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
    }]);

    return News;
  }();

  var fetchRequest = function fetchRequest(req) {
    var getData =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req) {
        var response, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(req);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getData(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    getData(req).then(function (data) {
      return data.articles.map(function (news) {
        return new News(news).createNewsArticle();
      });
    }).catch(function (error) {
      return console.log(error);
    });
  };

  fetchRequest(req);

  _toConsumableArray(radios).forEach(function (radio) {
    radio.addEventListener("click", function () {
      var searchCategory = radio.nextElementSibling.innerHTML;
      var url = "https://newsapi.org/v2/top-headlines?category=".concat(searchCategory, "&country=us&sortBy=publishedAt&apiKey=0672e1602aad4dc9aa61e122190937d7");
      var req = new Request(url);
      ul.innerHTML = "";
      fetchRequest(req);
    });
  });
})();
