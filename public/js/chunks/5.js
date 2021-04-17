(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheSocialButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/TheSocialButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheSocialButton',
  data: function data() {
    return {
      status: false
    };
  },
  computed: {
    isOpened: function isOpened() {
      return this.status === false ? 'none' : 'block';
    },
    isColored: function isColored() {
      return this.status ? '#0811fb' : '#fff';
    }
  },
  methods: {
    btn_open: function btn_open() {
      this.status = !this.status;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheSocialButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/TheSocialButton.vue */ "./resources/js/frontend/src/components/TheSocialButton.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'BlogDetails',
  components: {
    TheSocialButton: _components_TheSocialButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      id: null,
      idReady: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['currentPost'])),
  mounted: function mounted() {
    this.id = this.$route.params.id;
    this.$store.dispatch('showPost', this.id);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheSocialButton.vue?vue&type=template&id=e7b3b7de&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/TheSocialButton.vue?vue&type=template&id=e7b3b7de&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "mt-2 social-group center",
      style: { "background-color": _vm.isColored }
    },
    [
      _c(
        "a",
        {
          staticClass: "cursor-on item-3",
          style: { color: _vm.status ? "#fff" : "#0811fb" },
          on: { click: _vm.btn_open }
        },
        [
          _c("i", {
            class: {
              fa: true,
              "fa-share-alt": !_vm.status,
              "fa-close": _vm.status
            }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "item-1 cursor-on", style: { display: _vm.isOpened } },
        [_c("i", { staticClass: "lni-facebook-filled" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "item-2 cursor-on", style: { display: _vm.isOpened } },
        [_c("i", { staticClass: "lni-twitter-filled" })]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=template&id=36fa2364&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=template&id=36fa2364& ***!
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
  return _c("div", { staticClass: "saasbox--blog--area section-padding-120" }, [
    _c("div", { staticClass: "container" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "row justify-content-center wow fadeInUp",
          attrs: { "data-wow-delay": "300ms", "data-wow-duration": "1000ms" }
        },
        [
          _c(
            "div",
            { staticClass: "post--like-post" },
            [
              _vm._m(1),
              _c("span", [_vm._v("267")]),
              _vm._v(" "),
              _c("the-social-button")
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-sm-10 col-md-8" }, [
            _c("div", { staticClass: "single-blog-details-area" }, [
              _c("img", {
                staticClass: "post-thumbnail mb-5",
                attrs: { src: _vm.currentPost.cover_image, alt: "" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "post-date mb-2" }, [
                _vm._v(
                  _vm._s(
                    _vm.moment(_vm.currentPost.updated_at).format("MMM Do YY")
                  )
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "mb-3" }, [
                _vm._v(_vm._s(_vm.currentPost.title))
              ]),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("div", {
                domProps: { innerHTML: _vm._s(_vm.currentPost.content) }
              })
            ]),
            _vm._v(" "),
            _vm._m(3)
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-12 col-md-9 col-lg-7 col-xxl-6" }, [
        _c("div", { staticClass: "section-heading text-center" }, [_c("h2")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("i", { staticClass: "lni-heart" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "post-meta mb-5" }, [
      _c("a", { staticClass: "post-author", attrs: { href: "#" } }, [
        _vm._v("By Nazrul")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "post-tag-share-button d-sm-flex align-items-center justify-content-between my-5"
      },
      [
        _c("div", { staticClass: "post-tag pb-5" }, [
          _c("ul", { staticClass: "d-flex align-items-center pl-0" }, [
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("agency")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("business")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("studio")])])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "share-button pb-5" }, [
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "fa fa-facebook" })
          ]),
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "fa fa-twitter" })
          ]),
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "fa fa-pinterest" })
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/src/components/TheSocialButton.vue":
/*!******************************************************************!*\
  !*** ./resources/js/frontend/src/components/TheSocialButton.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheSocialButton_vue_vue_type_template_id_e7b3b7de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSocialButton.vue?vue&type=template&id=e7b3b7de&scoped=true& */ "./resources/js/frontend/src/components/TheSocialButton.vue?vue&type=template&id=e7b3b7de&scoped=true&");
/* harmony import */ var _TheSocialButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheSocialButton.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/components/TheSocialButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheSocialButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheSocialButton_vue_vue_type_template_id_e7b3b7de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheSocialButton_vue_vue_type_template_id_e7b3b7de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e7b3b7de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/components/TheSocialButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/components/TheSocialButton.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/frontend/src/components/TheSocialButton.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSocialButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSocialButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheSocialButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSocialButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/components/TheSocialButton.vue?vue&type=template&id=e7b3b7de&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/components/TheSocialButton.vue?vue&type=template&id=e7b3b7de&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSocialButton_vue_vue_type_template_id_e7b3b7de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSocialButton.vue?vue&type=template&id=e7b3b7de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheSocialButton.vue?vue&type=template&id=e7b3b7de&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSocialButton_vue_vue_type_template_id_e7b3b7de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSocialButton_vue_vue_type_template_id_e7b3b7de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/views/blog/BlogDetails.vue":
/*!**************************************************************!*\
  !*** ./resources/js/frontend/src/views/blog/BlogDetails.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogDetails_vue_vue_type_template_id_36fa2364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogDetails.vue?vue&type=template&id=36fa2364& */ "./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=template&id=36fa2364&");
/* harmony import */ var _BlogDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogDetails.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogDetails_vue_vue_type_template_id_36fa2364___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogDetails_vue_vue_type_template_id_36fa2364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/blog/BlogDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=template&id=36fa2364&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=template&id=36fa2364& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_template_id_36fa2364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogDetails.vue?vue&type=template&id=36fa2364& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=template&id=36fa2364&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_template_id_36fa2364___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_template_id_36fa2364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);