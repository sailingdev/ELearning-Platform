(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Pricing.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Pricing.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Pricing',
  data: function data() {
    return {
      plan: {
        amounts: {
          m: [19, 29, 49],
          y: [100, 200, 400]
        },
        percentage: 20
      },
      monthly: true,
      price_icon: ['lni-pizza', 'lni-offer', 'lni-burger']
    };
  },
  computed: {
    savedCount: function savedCount() {
      return this.plan.percentage;
    },
    amount: function amount() {
      return this.plan.amounts;
    },
    isMonthly: function isMonthly() {
      return this.monthly;
    }
  },
  methods: {
    setMonthly: function setMonthly(val) {
      this.monthly = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Pricing.vue?vue&type=template&id=1be82bdb&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Pricing.vue?vue&type=template&id=1be82bdb&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "section",
    {
      staticClass:
        "saasbox-pricing-plan-area price2 section-padding-120 bg-gray"
    },
    [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          {
            staticClass: "row justify-content-center wow fadeInUp",
            attrs: { "data-wow-delay": "200ms", "data-wow-duration": "1000ms" }
          },
          [
            _c("div", { staticClass: "col-12 col-md-9 col-lg-7 col-xxl-6" }, [
              _c("div", { staticClass: "section-heading text-center" }, [
                _c("h2", [_vm._v(_vm._s(_vm.$t("Pricing.title")))])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "row wow fadeInUp",
            attrs: { "data-wow-delay": "300ms", "data-wow-duration": "1000ms" }
          },
          [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "pricing-table-switch mb-100" }, [
                _c(
                  "ul",
                  {
                    staticClass:
                      "nav nav-tabs border-bottom-0 justify-content-center",
                    attrs: { id: "priceTab", role: "tablist" }
                  },
                  [
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          class: {
                            "nav-link": true,
                            "cursor-on": true,
                            active: _vm.isMonthly
                          },
                          attrs: {
                            id: "month--tab",
                            "data-toggle": "tab",
                            "aria-controls": "monthly",
                            "aria-selected": "true"
                          },
                          on: {
                            click: function($event) {
                              return _vm.setMonthly(true)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$tc("Pricing.type", 1)))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          class: {
                            "nav-link": true,
                            "cursor-on": true,
                            active: !_vm.isMonthly
                          },
                          attrs: {
                            id: "yearly--tab",
                            "data-toggle": "tab",
                            "aria-controls": "profile",
                            "aria-selected": "false"
                          },
                          on: {
                            click: function($event) {
                              return _vm.setMonthly(false)
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "popular-badge" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$tc("Pricing.save", 1, {
                                  count: _vm.savedCount
                                })
                              )
                            )
                          ]),
                          _vm._v(_vm._s(_vm.$tc("Pricing.type", 2)))
                        ]
                      )
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                {
                  staticClass: "tab-content",
                  attrs: { id: "priceTabContent" }
                },
                [
                  _c(
                    "div",
                    {
                      class: {
                        "tab-pane wow fadeInUp": true,
                        "show active": _vm.isMonthly
                      },
                      attrs: {
                        "data-wow-delay": "30ms",
                        "data-wow-duration": "1000ms",
                        id: "monthly",
                        role: "tabpanel",
                        "aria-labelledby": "month--tab"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "row g-0 justify-content-center" },
                        _vm._l(3, function(n) {
                          return _c(
                            "div",
                            {
                              key: n,
                              staticClass: "col-12 col-sm-8 col-md-7 col-lg-4"
                            },
                            [
                              _c(
                                "div",
                                {
                                  class: {
                                    "card pricing-card mb-30": true,
                                    active: n === 2
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "pricing-heading d-flex align-items-center"
                                    },
                                    [
                                      _c("div", { staticClass: "price-icon" }, [
                                        _c("i", {
                                          class: _vm.price_icon[n - 1]
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "price" }, [
                                        _c("h5", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$tc("Pricing.level", n - 1)
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("h2", [
                                          _vm._v(
                                            "$" + _vm._s(_vm.amount["m"][n - 1])
                                          )
                                        ]),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$tc("Pricing.per_type", 1)
                                            )
                                          )
                                        ])
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "pricing-desc" }, [
                                    _c("ul", { staticClass: "pl-0" }, [
                                      _c("li", [
                                        _vm._v(
                                          _vm._s(_vm.$t("Pricing.functions[0]"))
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v(
                                          _vm._s(_vm.$t("Pricing.functions[1]"))
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { class: { times: n === 1 } }, [
                                        _vm._v(
                                          _vm._s(_vm.$t("Pricing.functions[2]"))
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { class: { times: n != 3 } }, [
                                        _vm._v(
                                          _vm._s(_vm.$t("Pricing.functions[3]"))
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { class: { times: n != 3 } }, [
                                        _vm._v(
                                          _vm._s(_vm.$t("Pricing.functions[4]"))
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "pricing-btn" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "btn saasbox-btn",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("Pricing.btn_choose"))
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      class: {
                        "tab-pane  wow fadeInUp": true,
                        "show active": !_vm.isMonthly
                      },
                      attrs: {
                        "data-wow-delay": "30ms",
                        "data-wow-duration": "1000ms",
                        id: "profile",
                        role: "tabpanel",
                        "aria-labelledby": "yearly--tab"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "row g-0 justify-content-center" },
                        _vm._l(3, function(n) {
                          return _c(
                            "div",
                            {
                              key: n,
                              staticClass: "col-12 col-sm-8 col-md-7 col-lg-4"
                            },
                            [
                              _c(
                                "div",
                                {
                                  class: {
                                    "card pricing-card mb-30": true,
                                    active: n === 2
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "pricing-heading d-flex align-items-center"
                                    },
                                    [
                                      _c("div", { staticClass: "price-icon" }, [
                                        _c("i", {
                                          class: _vm.price_icon[n - 1]
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "price" }, [
                                        _c("h5", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$tc("Pricing.level", n - 1)
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("h2", [
                                          _vm._v(
                                            "$" + _vm._s(_vm.amount["y"][n - 1])
                                          )
                                        ]),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$tc("Pricing.per_type", 2)
                                            )
                                          )
                                        ])
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "pricing-desc" }, [
                                    _c("ul", { staticClass: "pl-0" }, [
                                      _c("li", [
                                        _vm._v(
                                          _vm._s(_vm.$t("Pricing.functions[0]"))
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v(
                                          _vm._s(_vm.$t("Pricing.functions[1]"))
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { class: { times: n === 1 } }, [
                                        _vm._v(
                                          _vm._s(_vm.$t("Pricing.functions[2]"))
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { class: { times: n != 3 } }, [
                                        _vm._v(
                                          _vm._s(_vm.$t("Pricing.functions[3]"))
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("li", { class: { times: n != 3 } }, [
                                        _vm._v(
                                          _vm._s(_vm.$t("Pricing.functions[4]"))
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "pricing-btn" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "btn saasbox-btn",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("Pricing.btn_choose"))
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/src/views/Pricing.vue":
/*!*****************************************************!*\
  !*** ./resources/js/frontend/src/views/Pricing.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pricing_vue_vue_type_template_id_1be82bdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pricing.vue?vue&type=template&id=1be82bdb&scoped=true& */ "./resources/js/frontend/src/views/Pricing.vue?vue&type=template&id=1be82bdb&scoped=true&");
/* harmony import */ var _Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pricing.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/Pricing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pricing_vue_vue_type_template_id_1be82bdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pricing_vue_vue_type_template_id_1be82bdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1be82bdb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/Pricing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/Pricing.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Pricing.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pricing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Pricing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/Pricing.vue?vue&type=template&id=1be82bdb&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Pricing.vue?vue&type=template&id=1be82bdb&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_1be82bdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pricing.vue?vue&type=template&id=1be82bdb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Pricing.vue?vue&type=template&id=1be82bdb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_1be82bdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_1be82bdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);