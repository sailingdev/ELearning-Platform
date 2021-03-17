(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheLessonListModal',
  props: {
    display: Boolean
  },
  data: function data() {
    return {
      lesson_type_list: ['Speak Words', 'Tic-tac-toe', 'Matching game', 'Concentration game'],
      style_lesson_full_name: {
        'padding-left': '21px',
        'padding-right': '10px'
      }
    };
  },
  computed: {
    isShown: function isShown() {
      return this.display;
    },
    header: function header() {
      return "Meeting Someone";
    }
  },
  methods: {
    onCloseModal: function onCloseModal() {
      this.$emit('isClosed', true);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Lesson.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Lesson.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheContactModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TheContactModal */ "./resources/js/frontend/src/components/TheContactModal.vue");
/* harmony import */ var _components_TheLessonListModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TheLessonListModal */ "./resources/js/frontend/src/components/TheLessonListModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Lesson',
  components: {
    TheLessonListModal: _components_TheLessonListModal__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheContactModal: _components_TheContactModal__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      language: 'Afrikaans',
      lesson_num: 1,
      selected_type: 'Vocabulary',
      lesson_type_list: ['Speak Words', 'Tic-tac-toe', 'Matching game', 'Concentration game'],
      style_lesson_full_name: {
        'padding-left': '21px',
        'padding-right': '10px'
      },
      display: false
    };
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
    selectLesson: function selectLesson() {
      this.display = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh4[data-v-bff72196] {\n    color: gray;\n}\n@media only screen and (min-width: 1400px) {\n.cust-lesson-list-modal-content[data-v-bff72196] {\n        max-width: 1015px;\n}\n}\n@media only screen and (min-width: 1200px) and (max-width: 1399px) {\n.cust-lesson-list-modal-content[data-v-bff72196] {\n        max-width: 1130px;\n}\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n.cust-lesson-list-modal-content[data-v-bff72196] {\n        max-width: 950px;\n}\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n.cust-lesson-list-modal-content[data-v-bff72196] {\n        max-width: 700px;\n}\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n.cust-lesson-list-modal-content[data-v-bff72196] {\n        max-width: 530px;\n}\n}\na[data-v-bff72196] {\n    color: #00000099;\n}\na[data-v-bff72196]:hover {\n    color: black;\n}\nh5[data-v-bff72196] {\n    color: unset;\n}\nh6[data-v-bff72196] {\n    color: unset;\n}\na >.text-black-50[data-v-bff72196]:hover {\n    color: black !important;\n}\n.feature-card i[data-v-bff72196] {\n    color: #00000099;\n    background-color: #0b075700;\n}\n.feature-card.active i[data-v-bff72196], .feature-card:hover i[data-v-bff72196], .feature-card:focus i[data-v-bff72196] {\n    box-shadow: 0 2px 38px rgb(255 255 255 / 40%);\n    color: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.let-us-know[data-v-c804589a] {\n    font-weight: 600;\n}\n.feature-card.active[data-v-c804589a], .feature-card[data-v-c804589a]:hover, .feature-card[data-v-c804589a]:focus {\n    border-color: unset;\n    background-color: unset;\n    box-shadow: 0 18px 56px rgb(255 255 255 / 18%);\n    color: white;\n}\n.feature-card i[data-v-c804589a] {\n    color: #00000099;\n    background-color: #0b075700;\n}\n.feature-card.active i[data-v-c804589a], .feature-card:hover i[data-v-c804589a], .feature-card:focus i[data-v-c804589a] {\n    box-shadow: 0 2px 38px rgb(255 255 255 / 40%);\n    color: white;\n}\na[data-v-c804589a] {\n    color: #00000099;\n}\na[data-v-c804589a]:hover {\n    color: black;\n}\nh5[data-v-c804589a] {\n    color: unset;\n}\nh6[data-v-c804589a] {\n    color: unset;\n}\n.selected-type[data-v-c804589a] {\n    border-radius: 50%;\n    width: 45px;\n}\n\n/*@media only screen and (min-width: 1400px) {*/\n/*    .lesson-page {*/\n/*        max-width: 665px;*/\n/*    }*/\n/*}*/\n/*@media only screen and (min-width: 1200px) and (max-width: 1399px) {*/\n/*    .container, .container-lg, .container-md, .container-sm, .container-xl {*/\n/*        max-width: 1140px;*/\n/*    }*/\n/*}*/\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n}\n@media only screen and (min-width: 992px) {\n.lesson-page[data-v-c804589a] {\n        max-width: 785px;\n}\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=template&id=bff72196&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=template&id=bff72196&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      {
        staticClass: "cust-modal",
        style: _vm.isShown ? "display: block" : "display: none",
        attrs: { id: "myModal" }
      },
      [
        _c("div", { staticClass: "cust-lesson-list-modal-content" }, [
          _c(
            "div",
            {
              staticClass: "cust-modal-header",
              style: _vm.style_lesson_full_name
            },
            [
              _c(
                "span",
                { staticClass: "cust-close", on: { click: _vm.onCloseModal } },
                [_vm._v("×")]
              ),
              _vm._v(" "),
              _c(
                "h6",
                {
                  staticClass: "text-black-50",
                  staticStyle: { "font-size": "20px" }
                },
                [_vm._v(_vm._s(_vm.header))]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "cust-modal-body mt-4 mb-3" }, [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.lesson_type_list, function(n) {
                return _c("div", { staticClass: "col-12 col-sm-6 col-lg-4" }, [
                  _c("a", { staticClass: "cursor-on" }, [
                    _c("img", {
                      staticClass: "lessong-type",
                      attrs: {
                        src: "frontend/img/lesson-type/" + n + ".svg",
                        width: "62px"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "i",
                      {
                        staticClass: "text-black-50",
                        staticStyle: { "font-size": "1.2em" }
                      },
                      [_vm._v(_vm._s(n))]
                    )
                  ])
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row g-3 mt-5" },
              [
                _c(
                  "div",
                  { style: _vm.style_lesson_full_name },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "cursor-on d-flex",
                        attrs: { to: { name: "category" } }
                      },
                      [
                        _c("h5", { staticClass: "mt-3" }, [
                          _vm._v("More Afrikaans lesson    "),
                          _c("i", { staticClass: "lni-arrow-right" })
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._l(20, function(n) {
                  return _c(
                    "div",
                    {
                      staticClass: "col-12 col-sm-6 col-lg-6",
                      on: { click: _vm.onCloseModal }
                    },
                    [
                      _c("router-link", { attrs: { to: { name: "lesson" } } }, [
                        _c("div", { staticClass: "card feature-card" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "card-body d-flex align-items-center row"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "fea-text col-10 col-sm-10 col-lg-10"
                                },
                                [
                                  _c("h6", [_vm._v("Lesson " + _vm._s(n + 1))]),
                                  _c("span", [_vm._v("Meeting someone")])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: " col-2 col-sm-2 col-lg-2" },
                                [
                                  _c("i", {
                                    staticClass:
                                      "lni-arrow-right-circle lesson-arrow"
                                  })
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ],
                    1
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { style: _vm.style_lesson_full_name },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "cursor-on d-flex",
                    attrs: { to: { name: "category" } }
                  },
                  [
                    _c("h5", { staticClass: "mt-3" }, [
                      _vm._v("More Afrikaans lesson    "),
                      _c("i", { staticClass: "lni-arrow-right" })
                    ])
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "cust-modal-footer align-content-center mb-4" },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-primary",
                  on: { click: _vm.onCloseModal }
                },
                [_vm._v(" Close ")]
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Lesson.vue?vue&type=template&id=c804589a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Lesson.vue?vue&type=template&id=c804589a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "shop--area shop-fullwidth section-padding-120" },
    [
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("the-lesson-list-modal", {
            attrs: { display: _vm.isShown },
            on: { isClosed: _vm.closeModal }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "lesson-page" }, [
            _c(
              "div",
              {
                staticClass: "wow fadeInUp",
                attrs: {
                  "data-wow-delay": "100ms",
                  "data-wow-duration": "1000ms"
                }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "text-left cursor-on",
                    on: { click: _vm.selectLesson }
                  },
                  [
                    _c("i", { staticClass: "dropdown-toggle" }, [
                      _vm._v(
                        "Learn " +
                          _vm._s(_vm.language) +
                          " :: Lesson " +
                          _vm._s(_vm.lesson_num) +
                          "   "
                      )
                    ]),
                    _vm._v(" "),
                    _c("h5", [_vm._v("Meeting Someone")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "text-left cursor-on mt-5",
                    on: { click: _vm.selectLesson }
                  },
                  [
                    _c("img", {
                      staticClass: "selected-type",
                      attrs: {
                        src:
                          "frontend/img/lesson-type/" +
                          _vm.selected_type +
                          ".svg",
                        width: "30px"
                      }
                    }),
                    _vm._v(" "),
                    _c("i", { staticClass: "dropdown-toggle" }, [
                      _vm._v(_vm._s(_vm.selected_type) + " Lessons")
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-center mt-2 mb-5" },
                  _vm._l(_vm.lesson_type_list, function(n) {
                    return _c("a", { staticClass: "cursor-on" }, [
                      _c("img", {
                        staticClass: "lessong-type",
                        attrs: {
                          src: "frontend/img/lesson-type/" + n + ".svg",
                          width: "62px"
                        }
                      })
                    ])
                  }),
                  0
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { style: _vm.style_lesson_full_name }, [
              _c(
                "h5",
                {
                  staticClass: "wow fadeInUp mt-3",
                  attrs: {
                    "data-wow-delay": "200ms",
                    "data-wow-duration": "1000ms"
                  }
                },
                [_vm._v("Afrikaans vocabulary :: Meeting someone")]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "row align-items-center justify-content-center wow fadeInUp",
                attrs: {
                  "data-wow-delay": "400ms",
                  "data-wow-duration": "1000ms"
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "row g-3" },
                  [
                    _vm._l(35, function(n) {
                      return _c(
                        "div",
                        { staticClass: "col-12 col-sm-6 col-lg-6" },
                        [_vm._m(1, true)]
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { style: _vm.style_lesson_full_name },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "cursor-on d-flex",
                            attrs: { to: { name: "lesson-list" } }
                          },
                          [
                            _c(
                              "h5",
                              {
                                staticClass: "wow fadeInUp mt-3",
                                attrs: {
                                  "data-wow-delay": "200ms",
                                  "data-wow-duration": "1000ms"
                                }
                              },
                              [
                                _vm._v("More Afrikaans lesson    "),
                                _c("i", { staticClass: "lni-arrow-right" })
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("the-contact-modal"),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "row align-items-center justify-content-center wow fadeInUp",
                        attrs: {
                          "data-wow-delay": "100ms",
                          "data-wow-duration": "1000ms"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "row g-3" },
                          _vm._l(35, function(n) {
                            return _c(
                              "div",
                              { staticClass: "col-12 col-sm-6 col-lg-6" },
                              [
                                _c(
                                  "router-link",
                                  { attrs: { to: { name: "lesson" } } },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card feature-card" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "card-body d-flex align-items-center row"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "fea-text col-9 col-sm-9 col-lg-9"
                                              },
                                              [
                                                _c("h6", [
                                                  _vm._v(
                                                    "Lesson " + _vm._s(n + 1)
                                                  )
                                                ]),
                                                _c("span", [
                                                  _vm._v("Meeting someone")
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  " col-3 col-sm-3 col-lg-3"
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "lni-arrow-right-circle lesson-arrow"
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          }),
                          0
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { style: _vm.style_lesson_full_name },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "cursor-on d-flex",
                            attrs: { to: { name: "lesson-list" } }
                          },
                          [
                            _c(
                              "h5",
                              {
                                staticClass: "wow fadeInUp mt-3",
                                attrs: {
                                  "data-wow-delay": "200ms",
                                  "data-wow-duration": "1000ms"
                                }
                              },
                              [
                                _vm._v("More Afrikaans lesson    "),
                                _c("i", { staticClass: "lni-arrow-right" })
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("the-contact-modal")
                  ],
                  2
                )
              ]
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-3 text-center" }, [
      _c("iframe", {
        attrs: {
          src: "https://h5p.org/h5p/embed/119355",
          width: "600",
          height: "300",
          frameborder: "0",
          allowfullscreen: "allowfullscreen",
          allow:
            "geolocation *; microphone *; camera *; midi *; encrypted-media *"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "cursor-on" }, [
      _c("div", { staticClass: "card feature-card" }, [
        _c("div", { staticClass: "card-body d-flex align-items-center row" }, [
          _c("div", { staticClass: "fea-text col-10 col-sm-10 col-lg-10" }, [
            _c("span", [_vm._v("Meeting someone")]),
            _c("br"),
            _c("span", { staticClass: "mt-2" }, [_vm._v("Meeting someone")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: " col-2 col-sm-2 col-lg-2" }, [
            _c("i", { staticClass: "lni-play lesson-arrow" })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/src/components/TheLessonListModal.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/frontend/src/components/TheLessonListModal.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheLessonListModal_vue_vue_type_template_id_bff72196_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheLessonListModal.vue?vue&type=template&id=bff72196&scoped=true& */ "./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=template&id=bff72196&scoped=true&");
/* harmony import */ var _TheLessonListModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheLessonListModal.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheLessonListModal_vue_vue_type_style_index_0_id_bff72196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css& */ "./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheLessonListModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheLessonListModal_vue_vue_type_template_id_bff72196_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheLessonListModal_vue_vue_type_template_id_bff72196_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bff72196",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/components/TheLessonListModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheLessonListModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_style_index_0_id_bff72196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_style_index_0_id_bff72196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_style_index_0_id_bff72196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_style_index_0_id_bff72196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_style_index_0_id_bff72196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=template&id=bff72196&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=template&id=bff72196&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_template_id_bff72196_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheLessonListModal.vue?vue&type=template&id=bff72196&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=template&id=bff72196&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_template_id_bff72196_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_template_id_bff72196_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/views/Lesson.vue":
/*!****************************************************!*\
  !*** ./resources/js/frontend/src/views/Lesson.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lesson_vue_vue_type_template_id_c804589a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lesson.vue?vue&type=template&id=c804589a&scoped=true& */ "./resources/js/frontend/src/views/Lesson.vue?vue&type=template&id=c804589a&scoped=true&");
/* harmony import */ var _Lesson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lesson.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/Lesson.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Lesson_vue_vue_type_style_index_0_id_c804589a_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true& */ "./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Lesson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Lesson_vue_vue_type_template_id_c804589a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Lesson_vue_vue_type_template_id_c804589a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c804589a",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/Lesson.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/Lesson.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Lesson.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Lesson.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Lesson.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_style_index_0_id_c804589a_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_style_index_0_id_c804589a_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_style_index_0_id_c804589a_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_style_index_0_id_c804589a_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_style_index_0_id_c804589a_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/frontend/src/views/Lesson.vue?vue&type=template&id=c804589a&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/Lesson.vue?vue&type=template&id=c804589a&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_template_id_c804589a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Lesson.vue?vue&type=template&id=c804589a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Lesson.vue?vue&type=template&id=c804589a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_template_id_c804589a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_template_id_c804589a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
