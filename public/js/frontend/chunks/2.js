(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
    TheLanguageModal: _components_TheLanguageModal__WEBPACK_IMPORTED_MODULE_0__["default"]
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
    }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*@media only screen and (min-width: 1400px) {*/\n/*}*/\n/*@media only screen and (min-width: 1200px) and (max-width: 1399px) {*/\n/*}*/\n/*@media only screen and (min-width: 992px) and (max-width: 1199px) {*/\n/*}*/\n@media only screen and (max-width: 991px) {\n.btn-full[data-v-7c5e1f0d] {\n        width: 100%;\n}\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css&");

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
                  {
                    staticClass: "nav-brand mr-5",
                    attrs: { to: { name: "home" } }
                  },
                  [
                    _c("img", {
                      attrs: { src: "images/logo/logo.png", alt: "" }
                    })
                  ]
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
                            [_vm._v(_vm._s(_vm.$t("blog-management.name")))]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
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
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_7c5e1f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/layouts/Header.vue?vue&type=style&index=0&id=7c5e1f0d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_7c5e1f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_7c5e1f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_7c5e1f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_7c5e1f0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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
