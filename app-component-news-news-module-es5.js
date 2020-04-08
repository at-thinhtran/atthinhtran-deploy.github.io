function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-component-news-news-module"], {
  /***/
  "./src/app/component/news/news-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/component/news/news-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: NewsRoutingModule */

  /***/
  function srcAppComponentNewsNewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function () {
      return NewsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./news.component */
    "./src/app/component/news/news.component.ts");

    var routes = [{
      path: '',
      component: _news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"]
    }];

    var NewsRoutingModule = function NewsRoutingModule() {
      _classCallCheck(this, NewsRoutingModule);
    };

    NewsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NewsRoutingModule
    });
    NewsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NewsRoutingModule_Factory(t) {
        return new (t || NewsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/news/news.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/component/news/news.module.ts ***!
    \***********************************************/

  /*! exports provided: NewsModule */

  /***/
  function srcAppComponentNewsNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsModule", function () {
      return NewsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _news_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./news-routing.module */
    "./src/app/component/news/news-routing.module.ts");
    /* harmony import */


    var _news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./news.component */
    "./src/app/component/news/news.component.ts");

    var NewsModule = function NewsModule() {
      _classCallCheck(this, NewsModule);
    };

    NewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NewsModule,
      bootstrap: [_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"]]
    });
    NewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NewsModule_Factory(t) {
        return new (t || NewsModule)();
      },
      providers: [],
      imports: [[_news_routing_module__WEBPACK_IMPORTED_MODULE_1__["NewsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewsModule, {
        declarations: [_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"]],
        imports: [_news_routing_module__WEBPACK_IMPORTED_MODULE_1__["NewsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"]],
          imports: [_news_routing_module__WEBPACK_IMPORTED_MODULE_1__["NewsRoutingModule"]],
          providers: [],
          bootstrap: [_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=app-component-news-news-module-es5.js.map