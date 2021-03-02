(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/blog-management/BlogDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheSocialButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/TheSocialButton.vue */ "./resources/js/frontend/src/components/TheSocialButton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/blog-management/BlogDetails.vue?vue&type=template&id=36fa2364& ***!
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
  return _c("div", { staticClass: "saasbox--blog-management--area section-padding-120" }, [
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
              _c("span", [_vm._v("267 " + _vm._s(_vm.$t("blog-management.heart")))]),
              _vm._v(" "),
              _c("the-social-button")
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(2)
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
    return _c("div", { staticClass: "col-12 col-sm-10 col-md-8" }, [
      _c("div", { staticClass: "single-blog-management-details-area" }, [
        _c("img", {
          staticClass: "post-thumbnail mb-5",
          attrs: { src: "frontend/img/bg-img/blog20.jpg", alt: "" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "post-date mb-2" }, [_vm._v("Oct 1, 2019")]),
        _vm._v(" "),
        _c("h2", { staticClass: "mb-3" }, [
          _vm._v("Seven ways agency can improve your business")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "post-meta mb-5" }, [
          _c("a", { staticClass: "post-author", attrs: { href: "#" } }, [
            _vm._v("By Nazrul")
          ]),
          _c("a", { staticClass: "post-tutorial", attrs: { href: "#" } }, [
            _vm._v("Creative Agency")
          ])
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, animi, numquam. Nam suscipit iste enim deleniti vitae facere earum doloribus, tempora alias quas voluptatibus aut, voluptates qui nihil, quisquam quos."
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quibusdam, nam porro cupiditate itaque doloribus commodi aut mollitia repellendus. Cum consequuntur nihil, itaque numquam aspernatur nisi quo soluta tempora rem?"
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet tempore officia, ab, pariatur harum quae cupiditate quia nisi atque qui tempora quis neque, molestiae doloribus repudiandae excepturi cum vero similique, aliquid laboriosam. Tempore vitae, quod rem architecto eum a dolores eveniet dolor aperiam hic alias suscipit, animi."
          )
        ]),
        _vm._v(" "),
        _c("h4", { staticClass: "mb-3" }, [
          _vm._v("The reason why everyone love business.")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente enim eligendi natus ratione, quia, illo reiciendis voluptas nostrum expedita eum libero. Officiis sapiente non, totam numquam dolor. Dolores qui impedit voluptatem accusamus odio modi mollitia reiciendis quod tenetur accusantium optio soluta excepturi adipisci quidem nobis, totam reprehenderit consectetur omnis, nemo ea voluptatum."
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aliquam mollitia accusantium debitis dolore soluta temporibus, laborum, fuga tempora adipisci molestias. Nobis similique nulla eveniet incidunt reprehenderit nam, accusantium asperiores iure. Quas voluptatem, facere facilis repellat!"
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis asperiores, quo suscipit quaerat deserunt ullam et ab, dolor, architecto totam culpa temporibus. Quo, quidem. Molestiae, deserunt impedit neque."
          )
        ])
      ]),
      _vm._v(" "),
      _c(
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
              _c("li", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("business")])
              ]),
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
    ])
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
  !*** ./resources/js/frontend/src/views/blog-management/BlogDetails.vue ***!
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
component.options.__file = "resources/js/frontend/src/views/blog-management/BlogDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/blog/BlogDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/blog-management/BlogDetails.vue?vue&type=script&lang=js& ***!
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
  !*** ./resources/js/frontend/src/views/blog-management/BlogDetails.vue?vue&type=template&id=36fa2364& ***!
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
