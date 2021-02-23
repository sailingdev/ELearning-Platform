(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Login',
  data: function data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    login: function login() {
      var payload = {
        email: this.email,
        password: this.password
      };
      $('form').submit(false);
      this.$store.dispatch('auth/login', payload);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/login.vue?vue&type=template&id=84706544&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/login.vue?vue&type=template&id=84706544& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "register-area section-padding-120-70 banner-mt" },
    [
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "row align-items-center justify-content-between wow fadeInUp",
            attrs: { "data-wow-delay": "300ms", "data-wow-duration": "1000ms" }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-6" }, [
              _c(
                "div",
                { staticClass: "card register-card bg-gray p-1 p-sm-4 mb-50" },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h4", [_vm._v("Welcome Back!")]),
                    _vm._v(" "),
                    _c(
                      "p",
                      [
                        _vm._v("Didn't have an account? "),
                        _c(
                          "router-link",
                          {
                            staticClass: "ml-2",
                            attrs: { to: { name: "Register" } }
                          },
                          [_vm._v("Sign Up")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "register-form my-5" }, [
                      _c("form", [
                        _c("div", { staticClass: "form-group mb-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.email,
                                expression: "email"
                              }
                            ],
                            staticClass: "form-control rounded-0",
                            attrs: {
                              type: "email",
                              placeholder: "Email Address",
                              required: ""
                            },
                            domProps: { value: _vm.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.email = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group mb-3" }, [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.password,
                                expression: "password"
                              }
                            ],
                            staticClass: "input-psswd form-control rounded-0",
                            attrs: {
                              id: "password",
                              type: "password",
                              placeholder: "Password",
                              "psswd-shown": "false",
                              required: ""
                            },
                            domProps: { value: _vm.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.password = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn saasbox-btn white-btn w-100",
                            on: { click: _vm.login }
                          },
                          [
                            _c("i", { staticClass: "lni-unlock mr-2" }),
                            _vm._v("Login")
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(3)
                    ])
                  ])
                ]
              )
            ])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "wow fadeInUp breadcrumb-title",
        attrs: { "data-wow-delay": "200ms", "data-wow-duration": "1000ms" }
      },
      [_c("h1", [_vm._v("Login")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6" }, [
      _c("div", { staticClass: "register-thumbnail mb-50" }, [
        _c("img", { attrs: { src: "frontend/img/bg-img/hero-3.png", alt: "" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "label-psswd", attrs: { for: "password" } },
      [
        _c("span", { staticClass: "hide" }, [_vm._v("HIDE")]),
        _c("span", { staticClass: "show" }, [_vm._v("SHOW")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "login-meta-data d-flex align-items-center justify-content-between"
      },
      [
        _c("div", { staticClass: "form-check mt-3" }, [
          _c("input", {
            staticClass: "form-check-input",
            attrs: {
              id: "rememberMe",
              type: "checkbox",
              value: "",
              checked: ""
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "form-check-label", attrs: { for: "rememberMe" } },
            [_vm._v("Keep me logged in")]
          )
        ]),
        _c(
          "a",
          {
            staticClass: "forgot-password mt-3",
            attrs: { href: "forget-password.html" }
          },
          [_vm._v("Forgot Password?")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/src/views/login.vue":
/*!***************************************************!*\
  !*** ./resources/js/frontend/src/views/login.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_84706544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=84706544& */ "./resources/js/frontend/src/views/login.vue?vue&type=template&id=84706544&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_84706544___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_84706544___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/login.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/frontend/src/views/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/login.vue?vue&type=template&id=84706544&":
/*!**********************************************************************************!*\
  !*** ./resources/js/frontend/src/views/login.vue?vue&type=template&id=84706544& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_84706544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=84706544& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/login.vue?vue&type=template&id=84706544&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_84706544___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_84706544___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);