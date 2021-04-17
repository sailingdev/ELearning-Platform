(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheLanguageModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TheLanguageModal.vue */ "./resources/js/frontend/src/components/TheLanguageModal.vue");
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
  name: 'Home',
  components: {
    TheLanguageModal: _components_TheLanguageModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      display: false,
      modal: 0
    };
  },
  computed: {
    isShown: function isShown() {
      return this.display;
    }
  },
  methods: {
    closeModal: function closeModal(val) {
      this.display = !val;
    },
    selectLang: function selectLang(val) {
      this.modal = val;
      this.display = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Home.vue?vue&type=style&index=0&id=1f86e6cc&lang=css&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Home.vue?vue&type=style&index=0&id=1f86e6cc&lang=css&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shop-card .product-img-wrap .love-product[data-v-1f86e6cc] {\n  width: 21px;\n  height: 21px;\n}\n.shop-card .product-img-wrap .love-product i[data-v-1f86e6cc] {\n  line-height: 1px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Home.vue?vue&type=style&index=0&id=1f86e6cc&lang=css&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Home.vue?vue&type=style&index=0&id=1f86e6cc&lang=css&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=1f86e6cc&lang=css&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Home.vue?vue&type=style&index=0&id=1f86e6cc&lang=css&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Home.vue?vue&type=template&id=1f86e6cc&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Home.vue?vue&type=template&id=1f86e6cc&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "shop--area shop-fullwidth section-padding-120" },
      [
        _c(
          "div",
          { staticClass: "container" },
          [
            _c("the-language-modal", {
              attrs: { display: _vm.isShown, type: _vm.modal },
              on: { isClosed: _vm.closeModal }
            }),
            _vm._v(" "),
            _c(
              "h2",
              {
                staticClass: "wow fadeInUp mt-3",
                attrs: {
                  "data-wow-delay": "200ms",
                  "data-wow-duration": "1000ms"
                }
              },
              [_vm._v(_vm._s(_vm.$t("Home.title")))]
            ),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "mb-3 wow fadeInUp mt-5",
                attrs: {
                  "data-wow-delay": "300ms",
                  "data-wow-duration": "1000ms"
                }
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("Home.subtitle")) +
                    "\n            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row wow fadeInUp",
                attrs: {
                  "data-wow-delay": "400ms",
                  "data-wow-duration": "1000ms"
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "col-xs-12 col-sm-5 col-md-5 col-lg-4 mt-1" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn-border",
                        on: {
                          click: function($event) {
                            return _vm.selectLang(1)
                          }
                        }
                      },
                      [
                        _vm._v(" " + _vm._s(_vm.$t("Home.speakLang")) + " "),
                        _c("i", { staticClass: "lni-arrow-down" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xs-12 col-sm-5 col-md-5 col-lg-4 mt-1" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn-border",
                        on: {
                          click: function($event) {
                            return _vm.selectLang(2)
                          }
                        }
                      },
                      [
                        _vm._v(" " + _vm._s(_vm.$t("Home.learnLang")) + " "),
                        _c("i", { staticClass: "lni-arrow-down" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xs-12 col-sm-2 col-md-2 col-lg-2 mt-1" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-pink h-100",
                        on: {
                          click: function($event) {
                            return _vm.selectLang(2)
                          }
                        }
                      },
                      [_c("i", { staticClass: "lni-chevron-right" })]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "wow fadeInUp row g-4 mt-5",
                attrs: {
                  "data-wow-delay": "500ms",
                  "data-wow-duration": "1000ms"
                }
              },
              _vm._l(6, function(n) {
                return _c(
                  "div",
                  { key: n, staticClass: "col-6 col-sm-6 col-lg-4" },
                  [
                    _c(
                      "div",
                      { staticClass: "card shop-card" },
                      [
                        _c(
                          "router-link",
                          { attrs: { to: { name: "category" } } },
                          [
                            _c("div", { staticClass: "product-img-wrap" }, [
                              _c("img", {
                                staticClass: "card-img-top",
                                attrs: {
                                  src: "frontend/img/language.jpg",
                                  alt: ""
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  class:
                                    n === 3
                                      ? "love-product active"
                                      : "love-product",
                                  attrs: {
                                    href: "#",
                                    "data-toggle": "tooltip",
                                    "data-placement": "right",
                                    title: "Liked"
                                  }
                                },
                                [_c("i", { staticClass: "lni-heart" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "product-meta d-flex align-items-center justify-content-between p-4"
                              },
                              [
                                _c("div", { staticClass: "product-name" }, [
                                  _c("h6", [
                                    _vm._v(_vm._s(_vm.$t("LearnAfrikaans")))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "product-add-to-cart" },
                                  [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c("i", { staticClass: "lni-play" })
                                    ])
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]
                )
              }),
              0
            )
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "saasbox-pagination-area section-padding-0-120" },
      [
        _c("nav", { attrs: { "aria-label": "Page navigation example" } }, [
          _c("ul", { staticClass: "pagination justify-content-center" }, [
            _c("li", { staticClass: "page-item active" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("1")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("2")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("3")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("4")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("...")
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("9")
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/src/views/Home.vue":
/*!**************************************************!*\
  !*** ./resources/js/frontend/src/views/Home.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_1f86e6cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=1f86e6cc&scoped=true& */ "./resources/js/frontend/src/views/Home.vue?vue&type=template&id=1f86e6cc&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_1f86e6cc_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=1f86e6cc&lang=css&scoped=true& */ "./resources/js/frontend/src/views/Home.vue?vue&type=style&index=0&id=1f86e6cc&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_1f86e6cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_1f86e6cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f86e6cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/Home.vue?vue&type=style&index=0&id=1f86e6cc&lang=css&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Home.vue?vue&type=style&index=0&id=1f86e6cc&lang=css&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1f86e6cc_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=1f86e6cc&lang=css&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Home.vue?vue&type=style&index=0&id=1f86e6cc&lang=css&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1f86e6cc_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1f86e6cc_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1f86e6cc_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1f86e6cc_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/frontend/src/views/Home.vue?vue&type=template&id=1f86e6cc&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Home.vue?vue&type=template&id=1f86e6cc&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1f86e6cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=1f86e6cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Home.vue?vue&type=template&id=1f86e6cc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1f86e6cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1f86e6cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);