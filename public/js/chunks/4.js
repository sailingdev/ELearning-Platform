(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/Logo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/Logo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Logo'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Footer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/layouts/Footer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheLanguageModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TheLanguageModal */ "./resources/js/frontend/src/components/TheLanguageModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Footer',
  data: function data() {
    return {
      display: false,
      modal: 1
    };
  },
  components: {
    TheLanguageModal: _components_TheLanguageModal__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    isShown: function isShown() {
      return this.display;
    }
  },
  methods: {
    closeModal: function closeModal() {
      this.display = false;
    },
    selectLang: function selectLang() {
      this.display = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Header.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/layouts/Header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheLanguageModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TheLanguageModal */ "./resources/js/frontend/src/components/TheLanguageModal.vue");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Logo */ "./resources/js/frontend/src/components/Logo.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Header',
  data: function data() {
    return {
      windowWidth: window.innerWidth,
      menuClass: false,
      modal: 2,
      display: false
    };
  },
  components: {
    TheLanguageModal: _components_TheLanguageModal__WEBPACK_IMPORTED_MODULE_0__["default"],
    Logo: _components_Logo__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    breakpoint: function breakpoint() {
      return this.windowWidth <= 991 ? 'classy-nav-container breakpoint-on' : 'classy-nav-container breakpoint-off';
    },
    menu: function menu() {
      return {
        'classy-menu': true,
        'menu-on': this.menuClass
      };
    },
    isShown: function isShown() {
      return this.display;
    },
    isLoggedIn: function isLoggedIn() {
      var isLoggedIn = this.$store.state.auth.isLoggedIn;
      return isLoggedIn;
    }
  },
  methods: {
    setMenuOn: function setMenuOn() {
      this.menuClass = !this.menuClass;
    },
    closeModal: function closeModal() {
      this.display = false;
    },
    showModal: function showModal() {
      this.display = true;
    },
    logout: function logout() {
      var _this = this;

      this.$store.dispatch('auth/logout').then(function (res) {
        _this.$router.push(_this.$router.currentRoute.query.to || '/').then()["catch"](function (err) {});
      });
    }
  },
  mounted: function mounted() {
    this.$store.commit('auth/SET_LOGGEDIN', !!localStorage.getItem('tortu_accessToken'));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Main.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/layouts/Main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue */ "./resources/js/frontend/src/layouts/Header.vue");
/* harmony import */ var _Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue */ "./resources/js/frontend/src/layouts/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Header: _Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  computed: {
    current_name: function current_name() {
      return this.$route.name;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/Logo.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/Logo.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tspan {\n  white-space: pre\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@media only screen and (min-width: 1400px) {*/\n\n/*}*/\n\n/*@media only screen and (min-width: 1200px) and (max-width: 1399px) {*/\n\n/*}*/\n\n/*@media only screen and (min-width: 992px) and (max-width: 1199px) {*/\n\n/*}*/\n@media only screen and (max-width: 991px) {\n.btn-full[data-v-7c5e1f0d] {\n    width: 100%;\n}\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/Logo.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/Logo.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/Logo.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/Logo.vue?vue&type=template&id=63b990fa&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/Logo.vue?vue&type=template&id=63b990fa& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 150 25",
        width: "150",
        height: "25"
      }
    },
    [
      _c("defs", [
        _c("image", {
          attrs: {
            width: "148",
            height: "25",
            id: "img1",
            href:
              "data:image/png;base64,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"
          }
        })
      ]),
      _vm._v(" "),
      _c("use", { attrs: { id: "Background", href: "#img1", x: "1", y: "0" } })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Footer.vue?vue&type=template&id=5b2bbb1b&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/layouts/Footer.vue?vue&type=template&id=5b2bbb1b&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("the-language-modal", {
        attrs: { display: _vm.isShown, type: _vm.modal },
        on: { isClosed: _vm.closeModal }
      }),
      _vm._v(" "),
      _c("footer", { staticClass: "footer-area footer2 section-padding-120" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-between" }, [
            _c("div", { staticClass: "col-12 col-sm-10 col-lg-3" }, [
              _c("div", { staticClass: "footer-widget-area mb-70" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.$t("SignUpForEmails")))]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.$t("SignUpForEmailsContent")))]),
                _vm._v(" "),
                _c("div", { staticClass: "newsletter-form" }, [
                  _c("form", { attrs: { action: "#" } }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "email",
                        placeholder: _vm.$t("EnterEmail")
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "btn d-none", attrs: { type: "submit" } },
                      [_vm._v("Go")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(2)
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" },
              [
                _c("div", { staticClass: "footer-widget-area mb-70" }, [
                  _c("ul", [
                    _c("h5", [_vm._v(" ")]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#", target: "_blank" } }, [
                        _vm._v(_vm._s(_vm.$t("TermsConditions.name")))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#", target: "_blank" } }, [
                        _vm._v(_vm._s(_vm.$t("Contact.name")))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#", target: "_blank" } }, [
                        _vm._v(_vm._s(_vm.$t("AboutUs.name")))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#", target: "_blank" } }, [
                        _vm._v(_vm._s(_vm.$t("FAQ.name")))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c("router-link", { attrs: { to: { name: "home" } } }, [
                          _vm._v(_vm._s(_vm.$t("Home.name")))
                        ])
                      ],
                      1
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" },
              [
                _c("div", { staticClass: "footer-widget-area mb-70" }, [
                  _c("h5", [_vm._v(" ")]),
                  _vm._v(" "),
                  _c("ul", [
                    _c("li", [
                      _c("a", { attrs: { href: "#", target: "_blank" } }, [
                        _vm._v(_vm._s(_vm.$t("SiteMap.name")))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#", target: "_blank" } }, [
                        _vm._v(_vm._s(_vm.$t("Pricing.name")))
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(3)
                  ])
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row align-items-center" }, [
            _c("div", { staticClass: "col-12 col-md-6 col-lg-5" }, [
              _c("div", { staticClass: "footer--content-text" }, [
                _c("p", { staticClass: "mb-0" }, [
                  _vm._v(_vm._s(_vm.$t("AllRightReservedBy")) + " "),
                  _c("a", { attrs: { href: "#", target: "_blank" } }, [
                    _vm._v(_vm._s(_vm.$t("AllRightReservedByName")))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-md-6 col-lg-5" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-2" }, [
              _c(
                "div",
                {
                  staticClass:
                    "language-dropdown text-center text-lg-right mt-4 mt-lg-0"
                },
                [
                  _c("div", { staticClass: "btn-group" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn saasbox-btn-2 dropdown-toggle text-white",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.selectLang()
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("Language")))]
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "border-top" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "d-block mb-4", attrs: { href: "index.html" } },
      [_c("img", { attrs: { src: "img/core-img/logo-white.png", alt: "" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "footer-social-icon d-flex align-items-center" },
      [
        _c(
          "a",
          {
            attrs: {
              href: "#",
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Facbook"
            }
          },
          [_c("i", { staticClass: "fa fa-facebook" })]
        ),
        _c(
          "a",
          {
            attrs: {
              href: "#",
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Twitter"
            }
          },
          [_c("i", { staticClass: "fa fa-twitter" })]
        ),
        _c(
          "a",
          {
            attrs: {
              href: "#",
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Instagram"
            }
          },
          [_c("i", { staticClass: "fa fa-instagram" })]
        ),
        _c(
          "a",
          {
            attrs: {
              href: "#",
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Linkedin"
            }
          },
          [_c("i", { staticClass: "fa fa-linkedin" })]
        ),
        _c(
          "a",
          {
            attrs: {
              href: "#",
              "data-toggle": "tooltip",
              "data-placement": "top",
              title: "Youtube"
            }
          },
          [_c("i", { staticClass: "fa fa-youtube" })]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("a", { attrs: { href: "#", target: "_blank" } })])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Header.vue?vue&type=template&id=7c5e1f0d&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/layouts/Header.vue?vue&type=template&id=7c5e1f0d&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header", { staticClass: "header-area header2" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { class: _vm.breakpoint }, [
            _c(
              "nav",
              {
                staticClass: "classy-navbar navbar2 justify-content-between",
                attrs: { id: "saasboxNav" }
              },
              [
                _c(
                  "router-link",
                  { staticClass: "nav-brand mr-5", attrs: { to: "/" } },
                  [_c("Logo")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "classy-navbar-toggler",
                    on: {
                      click: function($event) {
                        return _vm.setMenuOn()
                      }
                    }
                  },
                  [_vm._m(0)]
                ),
                _vm._v(" "),
                _c("div", { class: _vm.menu }, [
                  _c(
                    "div",
                    {
                      staticClass: "classycloseIcon",
                      on: {
                        click: function($event) {
                          return _vm.setMenuOn()
                        }
                      }
                    },
                    [_vm._m(1)]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "classynav" }, [
                    _c("ul", { attrs: { id: "corenav" } }, [
                      _c(
                        "li",
                        {
                          staticClass: "cursor-on",
                          on: {
                            click: function($event) {
                              return _vm.setMenuOn()
                            }
                          }
                        },
                        [
                          _c("a", { on: { click: _vm.showModal } }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.$t("LearnAfrikaans")) +
                                " "
                            ),
                            _c("i", {
                              staticClass: "lni lni-chevron-down-circle",
                              staticStyle: { "font-weight": "bold" }
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          on: {
                            click: function($event) {
                              return _vm.setMenuOn()
                            }
                          }
                        },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "contact" } } },
                            [_vm._v(_vm._s(_vm.$t("Contact.name")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          on: {
                            click: function($event) {
                              return _vm.setMenuOn()
                            }
                          }
                        },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "pricing" } } },
                            [_vm._v(_vm._s(_vm.$t("Pricing.name")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          on: {
                            click: function($event) {
                              return _vm.setMenuOn()
                            }
                          }
                        },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "blog" } } },
                            [_vm._v(_vm._s(_vm.$t("Blog.name")))]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    !_vm.isLoggedIn
                      ? _c(
                          "div",
                          {
                            staticClass: "login-btn-area ml-4 mt-4 mt-lg-0",
                            on: {
                              click: function($event) {
                                return _vm.setMenuOn()
                              }
                            }
                          },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn saasbox-btn btn-sm  btn-full",
                                attrs: { to: { name: "login" } }
                              },
                              [_vm._v(_vm._s(_vm.$t("Login.name")))]
                            )
                          ],
                          1
                        )
                      : _c(
                          "div",
                          {
                            staticClass: "login-btn-area ml-4 mt-4 mt-lg-0",
                            on: {
                              click: function($event) {
                                return _vm.setMenuOn()
                              }
                            }
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "btn saasbox-btn btn-sm  btn-full",
                                on: {
                                  click: function($event) {
                                    return _vm.logout()
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.$t("Logout")))]
                            )
                          ]
                        )
                  ])
                ])
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("the-language-modal", {
        attrs: { display: _vm.isShown, type: _vm.modal },
        on: { isClosed: _vm.closeModal }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "navbarToggler" }, [
      _c("span"),
      _c("span"),
      _c("span"),
      _c("span")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cross-wrap" }, [
      _c("span", { staticClass: "top" }),
      _c("span", { staticClass: "bottom" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Main.vue?vue&type=template&id=2299c639&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/layouts/Main.vue?vue&type=template&id=2299c639& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("Header"), _vm._v(" "), _c("router-view"), _vm._v(" "), _c("Footer")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/src/components/Logo.vue":
/*!*******************************************************!*\
  !*** ./resources/js/frontend/src/components/Logo.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_63b990fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=63b990fa& */ "./resources/js/frontend/src/components/Logo.vue?vue&type=template&id=63b990fa&");
/* harmony import */ var _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/frontend/src/components/Logo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logo_vue_vue_type_template_id_63b990fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_63b990fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/components/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/components/Logo.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/frontend/src/components/Logo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/components/Logo.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/frontend/src/components/Logo.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/Logo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/frontend/src/components/Logo.vue?vue&type=template&id=63b990fa&":
/*!**************************************************************************************!*\
  !*** ./resources/js/frontend/src/components/Logo.vue?vue&type=template&id=63b990fa& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_63b990fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=63b990fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/Logo.vue?vue&type=template&id=63b990fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_63b990fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_63b990fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/layouts/Footer.vue":
/*!******************************************************!*\
  !*** ./resources/js/frontend/src/layouts/Footer.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_5b2bbb1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=5b2bbb1b&scoped=true& */ "./resources/js/frontend/src/layouts/Footer.vue?vue&type=template&id=5b2bbb1b&scoped=true&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/layouts/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_5b2bbb1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_5b2bbb1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b2bbb1b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/layouts/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/layouts/Footer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/frontend/src/layouts/Footer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/layouts/Footer.vue?vue&type=template&id=5b2bbb1b&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/frontend/src/layouts/Footer.vue?vue&type=template&id=5b2bbb1b&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_5b2bbb1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=5b2bbb1b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Footer.vue?vue&type=template&id=5b2bbb1b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_5b2bbb1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_5b2bbb1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/layouts/Header.vue":
/*!******************************************************!*\
  !*** ./resources/js/frontend/src/layouts/Header.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_7c5e1f0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=7c5e1f0d&scoped=true& */ "./resources/js/frontend/src/layouts/Header.vue?vue&type=template&id=7c5e1f0d&scoped=true&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/layouts/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Header_vue_vue_type_style_index_0_id_7c5e1f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css& */ "./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_7c5e1f0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_7c5e1f0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c5e1f0d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/layouts/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/layouts/Header.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/frontend/src/layouts/Header.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_7c5e1f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_7c5e1f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_7c5e1f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_7c5e1f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_7c5e1f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/frontend/src/layouts/Header.vue?vue&type=template&id=7c5e1f0d&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/frontend/src/layouts/Header.vue?vue&type=template&id=7c5e1f0d&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_7c5e1f0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=7c5e1f0d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Header.vue?vue&type=template&id=7c5e1f0d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_7c5e1f0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_7c5e1f0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/layouts/Main.vue":
/*!****************************************************!*\
  !*** ./resources/js/frontend/src/layouts/Main.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_2299c639___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=2299c639& */ "./resources/js/frontend/src/layouts/Main.vue?vue&type=template&id=2299c639&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/layouts/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_2299c639___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_2299c639___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/layouts/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/layouts/Main.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/frontend/src/layouts/Main.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/layouts/Main.vue?vue&type=template&id=2299c639&":
/*!***********************************************************************************!*\
  !*** ./resources/js/frontend/src/layouts/Main.vue?vue&type=template&id=2299c639& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_2299c639___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=2299c639& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Main.vue?vue&type=template&id=2299c639&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_2299c639___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_2299c639___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);