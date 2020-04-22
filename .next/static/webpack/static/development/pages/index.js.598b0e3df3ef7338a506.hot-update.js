webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/searchCache.ts":
/*!******************************!*\
  !*** ./utils/searchCache.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GIT_SEARCH_CACHE = "gitSearchCache";
/* harmony default export */ __webpack_exports__["default"] = ({
  writeTo: function writeTo(searchRequest) {
    if (localStorage) {
      var store = new Set(JSON.parse(localStorage[GIT_SEARCH_CACHE]));
      store.add(searchRequest);
      localStorage[GIT_SEARCH_CACHE] = JSON.stringify(Array.from(store));
    }
  },
  searchIn: function searchIn(searchRequest) {
    if (localStorage) {
      if (!localStorage[GIT_SEARCH_CACHE]) localStorage[GIT_SEARCH_CACHE] = "";
      var store = new Set(JSON.parse(localStorage[GIT_SEARCH_CACHE]));
      var result = Array.from(store).filter(function (item) {
        return item.search(searchRequest) !== -1;
      });
      return result;
    }
  }
});

/***/ })

})
//# sourceMappingURL=index.js.598b0e3df3ef7338a506.hot-update.js.map