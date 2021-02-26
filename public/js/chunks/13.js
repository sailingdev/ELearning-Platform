(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/auth/ForgotPassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/auth/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ForgetPassword',
  data: function data() {
    return {
      email: null
    };
  },
  methods: {
    reset_pass: function reset_pass() {
      $('form').submit(false);
      var payload = {
        email: this.email
      };
      this.$store.dispatch('auth/forgot_password', payload);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/auth/ForgotPassword.vue?vue&type=template&id=5705b90c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/auth/ForgotPassword.vue?vue&type=template&id=5705b90c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
        _c(
          "div",
          {
            staticClass: "wow fadeInUp breadcrumb-title",
            attrs: { "data-wow-delay": "200ms", "data-wow-duration": "1000ms" }
          },
          [_c("h1", [_vm._v(_vm._s(_vm.$t("ForgotPassword.title")))])]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "row align-items-center justify-content-between wow fadeInUp",
            attrs: { "data-wow-delay": "300ms", "data-wow-duration": "1000ms" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-6" }, [
              _c(
                "div",
                { staticClass: "card register-card bg-gray p-1 p-sm-4 mb-50" },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h4", [_vm._v(_vm._s(_vm.$t("ForgotPassword.title")))]),
                    _vm._v(" "),
                    _c(
                      "p",
                      [
                        _vm._v(_vm._s(_vm.$t("ForgotPassword.subtitle"))),
                        _c(
                          "router-link",
                          {
                            staticClass: "ml-2",
                            attrs: { to: { name: "login" } }
                          },
                          [_vm._v(_vm._s(_vm.$t("Login.name")))]
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
                              placeholder: _vm.$t("Email"),
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
                        _c(
                          "button",
                          {
                            staticClass: "btn saasbox-btn white-btn w-100",
                            on: { click: _vm.reset_pass }
                          },
                          [
                            _c("i", { staticClass: "lni-lock mr-2" }),
                            _vm._v(_vm._s(_vm.$t("ForgotPassword.btn_reset")))
                          ]
                        )
                      ])
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
    return _c("div", { staticClass: "col-12 col-lg-6" }, [
      _c("div", { staticClass: "register-thumbnail mb-50" }, [
        _c("img", { attrs: { src: "frontend/img/bg-img/hero-3.png", alt: "" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/src/views/auth/ForgotPassword.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/frontend/src/views/auth/ForgotPassword.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_5705b90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=5705b90c&scoped=true& */ "./resources/js/frontend/src/views/auth/ForgotPassword.vue?vue&type=template&id=5705b90c&scoped=true&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/auth/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_5705b90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForgotPassword_vue_vue_type_template_id_5705b90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5705b90c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/auth/ForgotPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/auth/ForgotPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/auth/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/auth/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/auth/ForgotPassword.vue?vue&type=template&id=5705b90c&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/auth/ForgotPassword.vue?vue&type=template&id=5705b90c&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_5705b90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=5705b90c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/auth/ForgotPassword.vue?vue&type=template&id=5705b90c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_5705b90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_5705b90c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);