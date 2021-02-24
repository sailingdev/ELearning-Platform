(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Category.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Category.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Category',
  data: function data() {
    return {
      category: [{
        title: 'Vocabulary',
        subtitle: 'Its crafted with the latest trend of design.',
        icon: 'book'
      }, {
        title: 'Grammar',
        subtitle: 'Its crafted with the latest trend of design.',
        icon: 'graduation'
      }, {
        title: 'Dialogues',
        subtitle: 'Its crafted with the latest trend of design.',
        icon: 'support'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Category.vue?vue&type=template&id=3d8223b9&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Category.vue?vue&type=template&id=3d8223b9&scoped=true& ***!
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
    "section",
    {
      staticClass: "service-area section-padding-120 bg-gray",
      staticStyle: { "padding-bottom": "345px" }
    },
    [
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row justify-content-center g-5" },
          _vm._l(_vm.category, function(item, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: "col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4"
              },
              [
                _c("router-link", { attrs: { to: { name: "lesson-list" } } }, [
                  _c(
                    "div",
                    {
                      staticClass: "card service-card wow fadeInUp",
                      attrs: {
                        "data-wow-delay": 400 + 100 * index + "ms",
                        "data-wow-duration": "1000ms"
                      }
                    },
                    [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "icon" }, [
                          _c("i", { class: "lni lni-" + item.icon })
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v(_vm._s(item.title))]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(item.subtitle))])
                      ])
                    ]
                  )
                ])
              ],
              1
            )
          }),
          0
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
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-12 col-md-9 col-lg-7 col-xxl-6" }, [
        _c("div", { staticClass: "section-heading text-center" }, [
          _c("h2", [_vm._v("What lesson do you want to learn?")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/src/views/Category.vue":
/*!******************************************************!*\
  !*** ./resources/js/frontend/src/views/Category.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_3d8223b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=3d8223b9&scoped=true& */ "./resources/js/frontend/src/views/Category.vue?vue&type=template&id=3d8223b9&scoped=true&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_3d8223b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_3d8223b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d8223b9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/Category.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Category.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/Category.vue?vue&type=template&id=3d8223b9&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Category.vue?vue&type=template&id=3d8223b9&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_3d8223b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=3d8223b9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Category.vue?vue&type=template&id=3d8223b9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_3d8223b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_3d8223b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);