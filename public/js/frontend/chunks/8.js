(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Contact.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Contact.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Contact'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Contact.vue?vue&type=template&id=7d0e1996&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Contact.vue?vue&type=template&id=7d0e1996& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { "data-scopeId": "" } }, [
    _c(
      "div",
      {
        staticClass: "saasbox-contact-us-area section-padding-120-40 banner-mt"
      },
      [
        _c("div", { staticClass: "container " }, [
          _c(
            "div",
            {
              staticClass: "wow fadeInUp  breadcrumb-title",
              attrs: {
                "data-wow-delay": "200ms",
                "data-wow-duration": "1000ms"
              }
            },
            [_c("h1", [_vm._v(_vm._s(_vm.$t("Contact.title")))])]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "row justify-content-between mt-5 wow fadeInUp",
              attrs: {
                "data-wow-delay": "300ms",
                "data-wow-duration": "1000ms"
              }
            },
            [
              _c("div", { staticClass: "col-12 col-lg-5 col-xl-4" }, [
                _c("div", { staticClass: "contact-side-info mb-80" }, [
                  _c("h2", { staticClass: "mb-3" }, [
                    _vm._v(_vm._s(_vm.$t("Contact.subtitle")))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-4" }, [
                    _vm._v(_vm._s(_vm.$t("Contact.description")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "contact-mini-card-wrapper" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "contact-mini-card" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.$t("Contact.timescale")))])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-lg-7" }, [
                _c("div", { staticClass: "contact-form mb-80" }, [
                  _c(
                    "form",
                    {
                      attrs: {
                        id: "main_contact_form",
                        action: "php/mail.php",
                        method: "POST"
                      }
                    },
                    [
                      _c("div", { attrs: { id: "success_fail_info" } }),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12 col-lg-6" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v(_vm._s(_vm.$t("Contact.full_name")))
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control mb-30",
                            attrs: {
                              id: "name",
                              type: "text",
                              placeholder: "Meng Lang",
                              value: "",
                              name: "name",
                              required: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-lg-6" }, [
                          _c("label", { attrs: { for: "email" } }, [
                            _vm._v(_vm._s(_vm.$t("Contact.email")))
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control mb-30",
                            attrs: {
                              id: "email",
                              type: "email",
                              placeholder: "care.designingworld@gmail.com",
                              name: "email",
                              value: "",
                              required: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("label", { attrs: { for: "subject" } }, [
                            _vm._v(_vm._s(_vm.$t("Contact.topics")))
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control mb-30",
                            attrs: {
                              id: "topics",
                              type: "text",
                              placeholder: "Presale Questions",
                              name: "topics",
                              value: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("label", { attrs: { for: "message" } }, [
                            _vm._v(_vm._s(_vm.$t("Contact.message")))
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
                            staticClass: "form-control mb-30",
                            attrs: {
                              id: "message",
                              name: "message",
                              placeholder: _vm.$t("Contact.content")
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 text-center" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn saasbox-btn w-100",
                              attrs: { type: "submit" }
                            },
                            [_vm._v(_vm._s(_vm.$t("Contact.btn_send")))]
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(3)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "contact-mini-card" }, [
      _c("div", { staticClass: "contact-mini-card-icon" }, [
        _c("i", { staticClass: "lni lni-envelope" })
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("example@domain.com")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "contact-mini-card" }, [
      _c("div", { staticClass: "contact-mini-card-icon" }, [
        _c("i", { staticClass: "lni lni-headphone-alt" })
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("(+880) 145 2635896")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "contact-mini-card-icon" }, [
      _c("i", { staticClass: "lni lni-tag" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "google-maps-wrapper" }, [
      _c("iframe", {
        attrs: {
          src:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14047.882048906753!2d-0.14268817855593444!3d51.50701170390822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1570696571917!5m2!1sen!2sbd",
          allowfullscreen: ""
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/src/views/Contact.vue":
/*!*****************************************************!*\
  !*** ./resources/js/frontend/src/views/Contact.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_7d0e1996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=7d0e1996& */ "./resources/js/frontend/src/views/Contact.vue?vue&type=template&id=7d0e1996&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_7d0e1996___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_7d0e1996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/Contact.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Contact.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/Contact.vue?vue&type=template&id=7d0e1996&":
/*!************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Contact.vue?vue&type=template&id=7d0e1996& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_7d0e1996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=7d0e1996& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Contact.vue?vue&type=template&id=7d0e1996&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_7d0e1996___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_7d0e1996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);