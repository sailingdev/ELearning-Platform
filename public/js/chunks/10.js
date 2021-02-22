(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Register',
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Register.vue?vue&type=template&id=835f8a44&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Register.vue?vue&type=template&id=835f8a44& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                    _c("h4", [_vm._v("Create your free account")]),
                    _vm._v(" "),
                    _c(
                      "p",
                      [
                        _vm._v("Already have an account?"),
                        _c(
                          "router-link",
                          {
                            staticClass: "ml-2",
                            attrs: { to: { name: "Login" } }
                          },
                          [_vm._v("Log In")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3)
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
    return _c("div", [
      _c(
        "div",
        {
          staticClass: "wow fadeInUp breadcrumb-title",
          attrs: { "data-wow-delay": "200ms", "data-wow-duration": "1000ms" }
        },
        [_c("h1", [_vm._v("Register")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6" }, [
      _c("div", { staticClass: "register-thumbnail mb-50" }, [
        _c("img", { attrs: { src: "frontend/img/bg-img/1.png", alt: "" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "register-form my-5" }, [
      _c("form", { attrs: { action: "#", method: "post" } }, [
        _c("div", { staticClass: "form-group mb-3" }, [
          _c("input", {
            staticClass: "form-control rounded-0",
            attrs: { type: "email", placeholder: "Email Address", required: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group mb-3" }, [
          _c("input", {
            staticClass: "form-control rounded-0",
            attrs: { type: "text", placeholder: "Full Name", required: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group mb-3" }, [
          _c(
            "label",
            { staticClass: "label-psswd", attrs: { for: "registerPassword" } },
            [
              _c("span", { staticClass: "hide" }, [_vm._v("HIDE")]),
              _c("span", { staticClass: "show" }, [_vm._v("SHOW")])
            ]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass: "input-psswd form-control rounded-0",
            attrs: {
              id: "registerPassword",
              type: "password",
              placeholder: "Password",
              "psswd-shown": "false",
              required: ""
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn saasbox-btn white-btn w-100",
            attrs: { type: "submit" }
          },
          [_vm._v("Register Now")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "signin-via-others" }, [
      _c("p", { staticClass: "mb-0" }, [_vm._v("Or Sign in with")]),
      _c(
        "a",
        {
          staticClass: "btn saasbox-btn btn-sm mt-3 mr-3",
          attrs: { href: "#" }
        },
        [_c("i", { staticClass: "fa fa-facebook mr-2" }), _vm._v("Facebook")]
      ),
      _c(
        "a",
        {
          staticClass: "btn saasbox-btn btn-sm mt-3 mr-3",
          attrs: { href: "#" }
        },
        [_c("i", { staticClass: "fa fa-twitter mr-2" }), _vm._v("Twitter")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/src/views/Register.vue":
/*!******************************************************!*\
  !*** ./resources/js/frontend/src/views/Register.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_835f8a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=835f8a44& */ "./resources/js/frontend/src/views/Register.vue?vue&type=template&id=835f8a44&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_835f8a44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_835f8a44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/Register.vue?vue&type=template&id=835f8a44&":
/*!*************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Register.vue?vue&type=template&id=835f8a44& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_835f8a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=835f8a44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Register.vue?vue&type=template&id=835f8a44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_835f8a44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_835f8a44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);