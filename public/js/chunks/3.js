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
    display: Boolean,
    selected_type: String
  },
  data: function data() {
    return {
      lesson_type_list: ['Vocabulary lesson', 'Speak Words', 'Listening game', 'Matching game', 'Fill the blank'],
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
    },
    setQuiz: function setQuiz(type) {
      this.$emit('setQuiz', type);
      this.onCloseModal();
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
/* harmony import */ var _lesson_TheListeningGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lesson/TheListeningGame */ "./resources/js/frontend/src/views/lesson/TheListeningGame.vue");
/* harmony import */ var _lesson_TheMatchingGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lesson/TheMatchingGame */ "./resources/js/frontend/src/views/lesson/TheMatchingGame.vue");
/* harmony import */ var _lesson_TheFillTheBlanks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lesson/TheFillTheBlanks */ "./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue");
/* harmony import */ var _lesson_TheVocabularyLesson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lesson/TheVocabularyLesson */ "./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue");
/* harmony import */ var _lesson_TheSpeakWordsSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lesson/TheSpeakWordsSet */ "./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TheVocabularyLesson: _lesson_TheVocabularyLesson__WEBPACK_IMPORTED_MODULE_5__["default"],
    TheListeningGame: _lesson_TheListeningGame__WEBPACK_IMPORTED_MODULE_2__["default"],
    TheLessonListModal: _components_TheLessonListModal__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheContactModal: _components_TheContactModal__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheMatchingGame: _lesson_TheMatchingGame__WEBPACK_IMPORTED_MODULE_3__["default"],
    TheFillTheBlanks: _lesson_TheFillTheBlanks__WEBPACK_IMPORTED_MODULE_4__["default"],
    TheSpeakWordsSet: _lesson_TheSpeakWordsSet__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      language: 'Afrikaans',
      lesson_num: 1,
      selected_type: 'Vocabulary lesson',
      lesson_type_list: ['Vocabulary lesson', 'Speak Words', 'Listening game', 'Matching game', 'Fill the blank'],
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
    },
    setQuiz: function setQuiz(type) {
      this.selected_type = type;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheReview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheReview */ "./resources/js/frontend/src/views/lesson/TheReview.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'TheFillTheBlanks',
  data: function data() {
    return this.initialData();
  },
  components: {
    TheReview: _TheReview__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    startOverlay: function startOverlay() {
      this.isStartOverlay = false;
    },
    direction: function direction(isNext) {
      var currentSlide = this.currentSlide;

      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
      }

      this.isRight = null;
      this.inputtedText = '';
      if (isNext === 1) this.next(currentSlide);
      if (isNext === 0) this.previous(currentSlide);
      if (isNext === 2) this["continue"](currentSlide);
    },
    next: function next(val) {
      this.scoreList.push(2);
      this.currentSlide = val >= this.dataList.length ? this.dataList.length : val + 1;
    },
    previous: function previous(val) {
      this.scoreList.pop();
      this.currentSlide = val <= 0 ? 0 : val - 1;
    },
    "continue": function _continue(val) {
      this.currentSlide = val >= this.dataList.length ? this.dataList.length : val + 1;
    },
    playAudio: function playAudio(index) {
      var audio = this.$refs.audio[index];
      audio.src = this.dataList[index].src;
      audio.play();
    },
    onEnded: function onEnded() {
      if (this.isRight !== null) {
        this.direction(true);
      }
    },
    review: function review() {
      var _this = this;

      var realText = this.dataList[this.currentSlide].title;
      this.isRight = realText === this.inputtedText ? 1 : 0;
      this.isRight === 1 ? this.scoreList.push(1) : this.scoreList.push(0);
      setTimeout(function () {
        _this.direction(2);
      }, 400);
    },
    playAgain: function playAgain() {
      Object.assign(this.$data, this.initialData());
    },
    initialData: function initialData() {
      return {
        dataList: this.$store.state.lesson.dataList,
        currentSlide: 0,
        selectedId: null,
        isStartOverlay: true,
        isRight: null,
        audio: null,
        inputtedText: '',
        scoreList: [] //    0:wrong, 1:right, 2:skipped

      };
    }
  },
  computed: {
    translate3d: function translate3d() {
      var width = window.innerWidth;
      var val = 0;

      switch (true) {
        case width >= 768:
          val = -610 * this.currentSlide;
          break;

        case 374 > width && width >= 360:
          val = -300 * this.currentSlide;
          break;

        case 410 > width && width >= 375:
          val = -311 * this.currentSlide;
          break;

        case 479 > width && width >= 411:
          val = -352 * this.currentSlide;
          break;

        case 767 > width && width >= 480:
          val = -480 * this.currentSlide;
      }

      return "translate3d(".concat(val, "px, 0px, 0px)");
    },
    previousBtn: function previousBtn() {
      return this.currentSlide === 0 ? 'none' : 'block';
    },
    nextBtn: function nextBtn() {
      if (this.isStartOverlay) return 'none';
      return this.currentSlide === this.dataList.length ? 'none' : 'block';
    },
    startOverlayBtn: function startOverlayBtn() {
      return this.isStartOverlay ? 'block' : 'none';
    },
    confirmTextBtn: function confirmTextBtn() {
      return this.isRight;
    },
    active: function active() {
      return this.currentSlide === this.dataList.length;
    },
    isNextDisabled: function isNextDisabled() {
      return this.selectedId !== null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheListeningGame.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheListeningGame.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheReview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheReview */ "./resources/js/frontend/src/views/lesson/TheReview.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'TheListeningGame',
  data: function data() {
    return this.initialData();
  },
  components: {
    TheReview: _TheReview__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    startOverlay: function startOverlay() {
      this.isStartOverlay = false;
    },
    direction: function direction(isNext) {
      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
      }

      this.isRight = null;
      if (isNext === 1) this.next(this.currentSlide);
      if (isNext === 0) this.previous(this.currentSlide);
      if (isNext === 2) this["continue"](this.currentSlide);
    },
    next: function next(val) {
      this.scoreList.push(2);
      this.currentSlide = val >= this.dataList.length ? this.dataList.length : val + 1;
    },
    previous: function previous(val) {
      this.scoreList.pop();
      this.currentSlide = val <= 0 ? 0 : val - 1;
    },
    "continue": function _continue(val) {
      this.currentSlide = val >= this.dataList.length ? this.dataList.length : val + 1;
    },
    playAudio: function playAudio(index) {
      var audio = this.$refs.audio[index];
      audio.src = this.dataList[index].src;
      audio.play();
    },
    onEnded: function onEnded() {
      if (this.isRight !== null) {
        this.direction(2);
        this.selectedId = null;
      }
    },
    review: function review(id) {
      var realId = this.dataList[this.currentSlide].id;
      this.selectedId = id;
      this.realId = realId;
      this.isRight = id === realId ? 1 : 0;
      id === realId ? this.scoreList.push(1) : this.scoreList.push(0);
      this.playAudio(this.currentSlide);
    },
    playAgain: function playAgain() {
      Object.assign(this.$data, this.initialData());
    },
    initialData: function initialData() {
      return {
        dataList: this.$store.state.lesson.dataList,
        currentSlide: 0,
        selectedId: null,
        isStartOverlay: true,
        isRight: null,
        audio: null,
        scoreList: [] //    0:wrong, 1:right, 2:skipped

      };
    }
  },
  computed: {
    translate3d: function translate3d() {
      var width = window.innerWidth;
      var val = 0;

      switch (true) {
        case width >= 768:
          val = -610 * this.currentSlide;
          break;

        case 374 > width && width >= 360:
          val = -300 * this.currentSlide;
          break;

        case 410 > width && width >= 375:
          val = -311 * this.currentSlide;
          break;

        case 479 > width && width >= 411:
          val = -352 * this.currentSlide;
          break;

        case 767 > width && width >= 480:
          val = -480 * this.currentSlide;
      }

      return "translate3d(".concat(val, "px, 0px, 0px)");
    },
    previousBtn: function previousBtn() {
      return this.currentSlide === 0 ? 'none' : 'block';
    },
    nextBtn: function nextBtn() {
      if (this.isStartOverlay) return 'none';
      return this.currentSlide === this.dataList.length ? 'none' : 'block';
    },
    startOverlayBtn: function startOverlayBtn() {
      return this.isStartOverlay ? 'block' : 'none';
    },
    getDataList: function getDataList() {
      return this.currentSlide < this.dataList.length && this.$store.getters['lesson/getListeningList'](this.currentSlide);
    },
    activeColor: function activeColor() {
      var _this = this;

      return function (id) {
        if (_this.isRight === null) return '';
        if (_this.selectedId === id && _this.isRight === 0) return 'wrong';
        if (_this.realId === id && _this.isRight === 0) return 'right';
        if (_this.selectedId === id && _this.isRight === 1) return 'right';
      };
    },
    pointerEvents: function pointerEvents() {
      return this.isRight === null ? 'unset' : 'none';
    },
    isActive: function isActive() {
      return this.currentSlide === this.dataList.length;
    },
    isNextDisabled: function isNextDisabled() {
      return this.selectedId !== null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheMatchingGame.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheMatchingGame.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheMatchingReview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheMatchingReview */ "./resources/js/frontend/src/views/lesson/TheMatchingReview.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'TheMatchingGame',
  data: function data() {
    return this.initialData();
  },
  components: {
    TheMatchingReview: _TheMatchingReview__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    initialData: function initialData() {
      return {
        dataList: this.$store.state.lesson.dataList,
        currentSlide: 0,
        isTrue: false,
        isRotatable: false,
        matchingScore: {
          score: 0,
          right: 0,
          wrong: 0
        },
        answer: 0
      };
    },
    review: function review(isYes) {
      var _this = this;

      this.isRotatable = true;

      if (isYes === this.isTrue) {
        this.matchingScore.right += 1;
      } else {
        this.matchingScore.wrong += 1;
      }

      this.matchingScore.score = Math.round(this.matchingScore.right * 100 / this.dataList.length);

      if (isYes) {
        this.answer = this.isTrue ? 1 : 2;
      } else this.answer = this.isTrue ? 4 : 3;

      setTimeout(function () {
        _this.next();

        _this.answer = 0;
      }, 500);
    },
    next: function next() {
      var _this2 = this;

      var maxVal = this.dataList.length;
      this.currentSlide = this.currentSlide >= maxVal ? maxVal : this.currentSlide + 1;
      setTimeout(function () {
        _this2.isRotatable = false;
      }, 3);
    },
    playAgain: function playAgain() {
      var _this3 = this;

      this.isRotatable = true;
      setTimeout(function () {
        Object.assign(_this3.$data, _this3.initialData());
      }, 3);
    }
  },
  computed: {
    translateWidth: function translateWidth() {
      var width = window.innerWidth;
      var val = 0;

      switch (true) {
        case width >= 768:
          val = 610;
          break;

        case 374 > width && width >= 360:
          val = 300;
          break;

        case 410 > width && width >= 375:
          val = 311;
          break;

        case 479 > width && width >= 411:
          val = 351;
          break;

        case 767 > width && width >= 480:
          val = 480;
      }

      return val;
    },
    getRandomData: function getRandomData() {
      var randomData = this.$store.getters['lesson/getRandomData'](this.currentSlide);
      var index = this.currentSlide;
      index >= this.dataList.length ? index -= 1 : index;
      this.isTrue = randomData.id === this.dataList[index].id;
      return randomData;
    },
    rotateVertCenter: function rotateVertCenter() {
      return !this.isRotatable;
    },
    answerClass: function answerClass() {
      return this.answer;
    },
    isHiddenAnswer: function isHiddenAnswer() {
      return this.dataList.length === this.currentSlide ? 'none' : '';
    },
    active: function active() {
      return this.currentSlide === this.dataList.length;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheMatchingReview.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheMatchingReview.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheMatchingReview',
  props: {
    matchingScore: Object,
    active: Boolean
  },
  methods: {
    playAgain: function playAgain() {
      this.$emit('playAgain');
    }
  },
  computed: {
    score: function score() {
      return this.matchingScore.score;
    },
    right: function right() {
      return this.matchingScore.right;
    },
    wrong: function wrong() {
      return this.matchingScore.wrong;
    },
    isActive: function isActive() {
      return this.active;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheReview.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheReview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
  name: 'TheReview',
  props: {
    scoreList: Array,
    active: Boolean
  },
  methods: {
    playAgain: function playAgain() {
      this.$emit('playAgain');
    },
    getCount: function getCount(val) {
      var list = [];
      var array = this.scoreList;
      array.forEach(function (x) {
        x === val && list.push(x);
      });
      return list.length;
    }
  },
  computed: {
    score: function score() {
      return Math.round(this.right * 100 / this.scoreList.length);
    },
    right: function right() {
      return this.getCount(1);
    },
    wrong: function wrong() {
      return this.getCount(0);
    },
    skipped: function skipped() {
      return this.getCount(2);
    },
    isActive: function isActive() {
      return this.active;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheReview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheReview */ "./resources/js/frontend/src/views/lesson/TheReview.vue");
/* harmony import */ var _TheSpeechToText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheSpeechToText */ "./resources/js/frontend/src/views/lesson/TheSpeechToText.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'TheSpeakWordsSet',
  data: function data() {
    return this.initialData();
  },
  components: {
    TheReview: _TheReview__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheSpeechToText: _TheSpeechToText__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    startOverlay: function startOverlay() {
      this.isStartOverlay = false;
    },
    direction: function direction(isNext) {
      var currentSlide = this.currentSlide;

      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
      }

      this.isRight = null;
      this.inputtedText = '';
      if (isNext === 1) this.next(currentSlide);
      if (isNext === 0) this.previous(currentSlide);
      if (isNext === 2) this["continue"](currentSlide);
    },
    next: function next(val) {
      this.scoreList.push(2);
      this.currentSlide = val >= this.dataList.length ? this.dataList.length : val + 1;
    },
    previous: function previous(val) {
      this.scoreList.pop();
      this.currentSlide = val <= 0 ? 0 : val - 1;
    },
    playAgain: function playAgain() {
      Object.assign(this.$data, this.initialData());
    },
    initialData: function initialData() {
      return {
        dataList: this.$store.state.lesson.dataList,
        currentSlide: 0,
        selectedId: null,
        isStartOverlay: true,
        isRight: null,
        scoreList: [] //    0:wrong, 1:right, 2:skipped

      };
    }
  },
  computed: {
    translate3d: function translate3d() {
      var width = window.innerWidth;
      var val = 0;

      switch (true) {
        case width >= 768:
          val = -610 * this.currentSlide;
          break;

        case 374 > width && width >= 360:
          val = -300 * this.currentSlide;
          break;

        case 410 > width && width >= 375:
          val = -311 * this.currentSlide;
          break;

        case 479 > width && width >= 411:
          val = -352 * this.currentSlide;
          break;

        case 767 > width && width >= 480:
          val = -480 * this.currentSlide;
      }

      return "translate3d(".concat(val, "px, 0px, 0px)");
    },
    previousBtn: function previousBtn() {
      return this.currentSlide === 0 ? 'none' : 'block';
    },
    nextBtn: function nextBtn() {
      if (this.isStartOverlay) return 'none';
      return this.currentSlide === this.dataList.length - 1 ? 'none' : 'block';
    },
    startOverlayBtn: function startOverlayBtn() {
      return this.isStartOverlay ? 'block' : 'none';
    },
    isNextDisabled: function isNextDisabled() {
      return this.selectedId !== null;
    },
    active: function active() {
      return this.currentSlide === this.dataList.length;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheSpeechToText.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheSpeechToText.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheSpeechToText',
  props: {
    answer: String,
    lang_: {
      type: String,
      "default": 'en-US'
    }
  },
  data: function data() {
    return {
      runtimeTranscription_: "",
      transcription_: [],
      recording: false,
      isTrue: null
    };
  },
  methods: {
    startSpeechToTxt: function startSpeechToTxt() {
      var _this = this;

      // initialisation of voicereco
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      var recognition = new window.SpeechRecognition();
      recognition.lang = this.lang_;
      recognition.interimResults = true; // event current voice reco word

      recognition.addEventListener("result", function (event) {
        var text = Array.from(event.results).map(function (result) {
          return result[0];
        }).map(function (result) {
          return result.transcript;
        }).join("");
        _this.runtimeTranscription_ = text;
      }); // end of transcription

      recognition.addEventListener("end", function () {
        _this.transcription_ = _this.runtimeTranscription_;
        _this.runtimeTranscription_ = "";
        recognition.stop();
        _this.recording = false;

        _this.review();
      });

      if (!this.recording) {
        this.recording = true;
        recognition.start();
      }
    },
    review: function review() {
      // console.log(this.answer.toLowerCase())
      // console.log(this.answer.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').trim())
      // console.log(this.transcription_.toLowerCase().trim())
      this.isTrue = this.answer.toLowerCase().replace(/[^a-zA-Z1-9' ]/, "").trim() === this.transcription_.toLowerCase().trim();
    }
  },
  computed: {
    isRecording: function isRecording() {
      return this.recording;
    },
    textContent: function textContent() {
      if (this.isTrue === null) {
        return this.recording ? 'Listening...' : 'Push to speak';
      } else return this.recording ? 'Listening...' : 'Try Again';
    },
    getResult: function getResult() {
      return this.isTrue;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheVocabularyLessonQuizCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheVocabularyLessonQuizCategory */ "./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'TheVocabularyLesson',
  components: {
    TheVocabularyLessonQuizCategory: _TheVocabularyLessonQuizCategory__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dataList: this.$store.state.lesson.dataList,
      currentSlide: 0,
      currentAudio: null,
      isPlayable: false,
      isPlayable_temp: true,
      // for play button class
      isDirection: true,
      isStartOverlay: true,
      isNextStatus: 0
    };
  },
  methods: {
    startOverlay: function startOverlay() {
      this.isStartOverlay = false;
      this.isNextStatus += 1;
      this.directPlay(false);
    },
    directionPlay: function directionPlay(isNext) {
      this.isNextStatus = 0;
      this.isDirection = true;
      var audios = this.$refs.audio;
      var currentSlide = this.currentSlide;
      audios[currentSlide] && this.audioStop(currentSlide);
      isNext ? this.next(currentSlide) : this.previous(currentSlide);
      this.timeDelay() && this.timeDelay();
    },
    directPlay: function directPlay(isOnce) {
      if (isOnce) this.isDirection = false;
      this.isPlayable_temp = !this.isPlayable_temp;
      this.isPlayable = !this.isPlayable;
      this.audioControl();
    },
    previous: function previous(val) {
      this.currentSlide = val <= 0 ? 0 : val - 1;
    },
    next: function next(val) {
      this.currentSlide = val >= this.dataList.length ? this.dataList.length : val + 1;
    },
    timeDelay: function timeDelay() {
      var _this = this;

      this.isPlayable_temp = false;
      this.isNextStatus += 1;
      setTimeout(function () {
        _this.isPlayable = true;

        _this.audioControl();
      }, 2500);
    },
    audioControl: function audioControl() {
      var audio = this.$refs.audio[this.currentSlide];

      if (audio) {
        if (this.isPlayable && !this.isPlayable_temp) audio.play();else {
          audio.pause();
          audio.currentTime = 0;
        }
      }

      this.isPlayable = !this.isPlayable;
    },
    audioStop: function audioStop(oldIndex) {
      var oldAudio = this.$refs.audio[oldIndex];
      oldAudio.pause();
      oldAudio.currentTime = 0;
    },
    onEnded: function onEnded() {
      if (!this.isDirection) {
        this.isPlayable_temp = true;
        this.isPlayable = true;
        this.isDirection = true;
      } else if (this.isNextStatus === 2) {
        this.directionPlay(true);
      } else if (!this.isPlayable_temp) {
        this.timeDelay();
      }
    },
    setQuiz: function setQuiz(type) {
      this.$emit('setQuiz', type);
    }
  },
  computed: {
    translate3d: function translate3d() {
      var width = window.innerWidth;
      var val = 0;

      switch (true) {
        case width >= 768:
          val = -610 * this.currentSlide;
          break;

        case 374 > width && width >= 360:
          val = -300 * this.currentSlide;
          break;

        case 410 > width && width >= 375:
          val = -311 * this.currentSlide;
          break;

        case 479 > width && width >= 411:
          val = -352 * this.currentSlide;
          break;

        case 767 > width && width >= 480:
          val = -480 * this.currentSlide;
      }

      return "translate3d(".concat(val, "px, 0px, 0px)");
    },
    audioBtnClass: function audioBtnClass() {
      return this.isPlayable_temp === true ? 'lni-play' : 'lni-pause';
    },
    previousBtn: function previousBtn() {
      return this.currentSlide === 0 ? 'none' : 'block';
    },
    nextBtn: function nextBtn() {
      if (this.isStartOverlay) {
        return 'none';
      } else return this.currentSlide === this.dataList.length ? 'none' : 'block';
    },
    startOverlayBtn: function startOverlayBtn() {
      return this.isStartOverlay ? 'block' : 'none';
    },
    repeat: function repeat() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TheVocabularyLessonQuizCategory',
  data: function data() {
    return {
      lesson_type_list: ['Speak Words', 'Listening game', 'Matching game', 'Fill the blank']
    };
  },
  methods: {
    setQuiz: function setQuiz(type) {
      this.$emit('setQuiz', type);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4[data-v-bff72196] {\n  color: gray;\n}\n@media only screen and (min-width: 1400px) {\n.cust-lesson-list-modal-content[data-v-bff72196] {\n    max-width: 1015px;\n}\n}\n@media only screen and (min-width: 1200px) and (max-width: 1399px) {\n.cust-lesson-list-modal-content[data-v-bff72196] {\n    max-width: 1130px;\n}\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n.cust-lesson-list-modal-content[data-v-bff72196] {\n    max-width: 950px;\n}\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n.cust-lesson-list-modal-content[data-v-bff72196] {\n    max-width: 700px;\n}\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n.cust-lesson-list-modal-content[data-v-bff72196] {\n    max-width: 530px;\n}\n}\na[data-v-bff72196] {\n  color: #00000099;\n}\na[data-v-bff72196]:hover {\n  color: black;\n}\nh5[data-v-bff72196] {\n  color: unset;\n}\nh6[data-v-bff72196] {\n  color: unset;\n}\na >.text-black-50[data-v-bff72196]:hover {\n  color: black !important;\n}\n.feature-card i[data-v-bff72196] {\n  color: #00000099;\n}\n[dir] .feature-card i[data-v-bff72196] {\n  background-color: #0b075700;\n}\n.feature-card.active i[data-v-bff72196], .feature-card:hover i[data-v-bff72196], .feature-card:focus i[data-v-bff72196] {\n  color: white;\n}\n[dir] .feature-card.active i[data-v-bff72196], [dir] .feature-card:hover i[data-v-bff72196], [dir] .feature-card:focus i[data-v-bff72196] {\n  box-shadow: 0 2px 38px rgb(255 255 255 / 40%);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".let-us-know[data-v-c804589a] {\n  font-weight: 600;\n}\n.feature-card.active[data-v-c804589a], .feature-card[data-v-c804589a]:hover, .feature-card[data-v-c804589a]:focus {\n  color: white;\n}\n[dir] .feature-card.active[data-v-c804589a], [dir] .feature-card[data-v-c804589a]:hover, [dir] .feature-card[data-v-c804589a]:focus {\n  border-color: unset;\n  background-color: unset;\n  box-shadow: 0 18px 56px rgb(255 255 255 / 18%);\n}\n.feature-card i[data-v-c804589a] {\n  color: #00000099;\n}\n[dir] .feature-card i[data-v-c804589a] {\n  background-color: #0b075700;\n}\n.feature-card.active i[data-v-c804589a], .feature-card:hover i[data-v-c804589a], .feature-card:focus i[data-v-c804589a] {\n  color: white;\n}\n[dir] .feature-card.active i[data-v-c804589a], [dir] .feature-card:hover i[data-v-c804589a], [dir] .feature-card:focus i[data-v-c804589a] {\n  box-shadow: 0 2px 38px rgb(255 255 255 / 40%);\n}\na[data-v-c804589a] {\n  color: #00000099;\n}\na[data-v-c804589a]:hover {\n  color: black;\n}\nh5[data-v-c804589a] {\n  color: unset;\n}\nh6[data-v-c804589a] {\n  color: unset;\n}\n.selected-type[data-v-c804589a] {\n  width: 45px;\n}\n[dir] .selected-type[data-v-c804589a] {\n  border-radius: 50%;\n}\n\n/*@media only screen and (min-width: 1400px) {*/\n\n/*    .lesson-page {*/\n\n/*        max-width: 665px;*/\n\n/*    }*/\n\n/*}*/\n\n/*@media only screen and (min-width: 1200px) and (max-width: 1399px) {*/\n\n/*    .container, .container-lg, .container-md, .container-sm, .container-xl {*/\n\n/*        max-width: 1140px;*/\n\n/*    }*/\n\n/*}*/\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n}\n@media only screen and (min-width: 992px) {\n.lesson-page[data-v-c804589a] {\n    max-width: 785px;\n}\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n}\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../assets/frontend/css/lht-pure--CB20210215.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/assets/frontend/css/lht-pure--CB20210215.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/assets/frontend/css/lht-pure--CB20210215.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/assets/frontend/css/lht-pure--CB20210215.css ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.flag, audio, canvas, video {*/\n/*    display: inline-block*/\n/*}*/\n\n/*.label, audio, canvas, sup, video {*/\n/*    vertical-align: baseline*/\n/*}*/\n\n/*.btn, .btn-group, .caret, .input-group-btn, img {*/\n/*    vertical-align: middle*/\n/*}*/\n\n/*hr, img {*/\n/*    border: 0*/\n/*}*/\n.slick-slider, html {\n    -webkit-tap-highlight-color: transparent\n}\n\n\n/*[class*=\" icon-\"], [class^=icon-] {*/\n/*    speak: none;*/\n/*    font-style: normal;*/\n/*    font-weight: 400;*/\n/*    font-variant: normal;*/\n/*    text-transform: none;*/\n/*    line-height: 1;*/\n/*    -webkit-font-smoothing: antialiased;*/\n/*    -moz-osx-font-smoothing: grayscale*/\n/*}*/\n\n/*.icon-help:before {*/\n/*    content: \"\\f128\"*/\n/*}*/\n\n/*.icon-circle-thin:before {*/\n/*    content: \"\\f10c\"*/\n/*}*/\n\n/*.icon-instagram:before {*/\n/*    content: \"\\f16d\"*/\n/*}*/\n\n/*.icon-youtube:before {*/\n/*    content: \"\\e900\"*/\n/*}*/\n\n/*.icon-memory .path1:before {*/\n/*    content: \"\\e901\";*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-memory .path2:before {*/\n/*    content: \"\\e902\";*/\n/*    margin-left: -1em;*/\n/*    color: #00bcd4*/\n/*}*/\n\n/*.icon-memory .path3:before {*/\n/*    content: \"\\e903\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-memory .path4:before {*/\n/*    content: \"\\e904\";*/\n/*    margin-left: -1em;*/\n/*    color: #9c27b0*/\n/*}*/\n\n/*.icon-memory .path5:before {*/\n/*    content: \"\\e905\";*/\n/*    margin-left: -1em;*/\n/*    color: #9c27b0*/\n/*}*/\n\n/*.icon-memory .path6:before {*/\n/*    content: \"\\e906\";*/\n/*    margin-left: -1em;*/\n/*    color: #00bcd4*/\n/*}*/\n\n/*.icon-memory .path7:before {*/\n/*    content: \"\\e907\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-flashcards .path1:before {*/\n/*    content: \"\\e908\";*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-flashcards .path2:before {*/\n/*    content: \"\\e909\";*/\n/*    margin-left: -1em;*/\n/*    color: #00bcd4*/\n/*}*/\n\n/*.icon-flashcards .path3:before {*/\n/*    content: \"\\e90a\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-flashcards .path4:before {*/\n/*    content: \"\\e90b\";*/\n/*    margin-left: -1em;*/\n/*    color: #781fa2*/\n/*}*/\n\n/*.icon-flashcards .path5:before {*/\n/*    content: \"\\e90c\";*/\n/*    margin-left: -1em;*/\n/*    color: #9c27b0*/\n/*}*/\n\n/*.icon-flashcards .path6:before {*/\n/*    content: \"\\e90d\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-flashcards .path7:before {*/\n/*    content: \"\\e90e\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-listening .path1:before {*/\n/*    content: \"\\e90f\";*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-listening .path2:before {*/\n/*    content: \"\\e910\";*/\n/*    margin-left: -1em;*/\n/*    color: #00bcd4*/\n/*}*/\n\n/*.icon-listening .path3:before {*/\n/*    content: \"\\e911\";*/\n/*    margin-left: -1em;*/\n/*    color: #9c27b0*/\n/*}*/\n\n/*.icon-listening .path4:before {*/\n/*    content: \"\\e912\";*/\n/*    margin-left: -1em;*/\n/*    color: #00bcd4*/\n/*}*/\n\n/*.icon-listening .path5:before {*/\n/*    content: \"\\e913\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-listening .path6:before {*/\n/*    content: \"\\e914\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-listening .path7:before {*/\n/*    content: \"\\e915\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-listening .path8:before {*/\n/*    content: \"\\e916\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-matching .path1:before {*/\n/*    content: \"\\e917\";*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-matching .path2:before {*/\n/*    content: \"\\e918\";*/\n/*    margin-left: -1em;*/\n/*    color: #9c27b0*/\n/*}*/\n\n/*.icon-matching .path3:before {*/\n/*    content: \"\\e919\";*/\n/*    margin-left: -1em;*/\n/*    color: #00bcd4*/\n/*}*/\n\n/*.icon-matching .path4:before {*/\n/*    content: \"\\e91a\";*/\n/*    margin-left: -1em;*/\n/*    color: #484849*/\n/*}*/\n\n/*.icon-matching .path5:before {*/\n/*    content: \"\\e91b\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-matching .path6:before {*/\n/*    content: \"\\e91c\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-matching .path7:before {*/\n/*    content: \"\\e91d\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-matching .path8:before {*/\n/*    content: \"\\e91e\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-matching .path9:before {*/\n/*    content: \"\\e91f\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-matching .path10:before {*/\n/*    content: \"\\e920\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-pronunciation .path1:before {*/\n/*    content: \"\\e921\";*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-pronunciation .path2:before {*/\n/*    content: \"\\e922\";*/\n/*    margin-left: -1em;*/\n/*    color: #00bcd4*/\n/*}*/\n\n/*.icon-pronunciation .path3:before {*/\n/*    content: \"\\e923\";*/\n/*    margin-left: -1em;*/\n/*    color: #9c27b0*/\n/*}*/\n\n/*.icon-pronunciation .path4:before {*/\n/*    content: \"\\e924\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-pronunciation .path5:before {*/\n/*    content: \"\\e925\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-pronunciation .path6:before {*/\n/*    content: \"\\e926\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-tic-tac-toe .path1:before {*/\n/*    content: \"\\e927\";*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-tic-tac-toe .path2:before {*/\n/*    content: \"\\e928\";*/\n/*    margin-left: -1em;*/\n/*    color: #00bcd4*/\n/*}*/\n\n/*.icon-tic-tac-toe .path3:before {*/\n/*    content: \"\\e929\";*/\n/*    margin-left: -1em;*/\n/*    color: #9c27b0*/\n/*}*/\n\n/*.icon-tic-tac-toe .path4:before {*/\n/*    content: \"\\e92a\";*/\n/*    margin-left: -1em;*/\n/*    color: #9c27b0*/\n/*}*/\n\n/*.icon-tic-tac-toe .path5:before {*/\n/*    content: \"\\e92b\";*/\n/*    margin-left: -1em;*/\n/*    color: #9c27b0*/\n/*}*/\n\n/*.icon-tic-tac-toe .path6:before {*/\n/*    content: \"\\e92c\";*/\n/*    margin-left: -1em;*/\n/*    color: #00bcd4*/\n/*}*/\n\n/*.icon-tic-tac-toe .path7:before {*/\n/*    content: \"\\e92d\";*/\n/*    margin-left: -1em;*/\n/*    color: #484849*/\n/*}*/\n\n/*.icon-tic-tac-toe .path8:before {*/\n/*    content: \"\\e92e\";*/\n/*    margin-left: -1em;*/\n/*    color: #484849*/\n/*}*/\n\n/*.icon-tic-tac-toe .path9:before {*/\n/*    content: \"\\e92f\";*/\n/*    margin-left: -1em;*/\n/*    color: #9c27b0*/\n/*}*/\n\n/*.icon-tic-tac-toe .path10:before {*/\n/*    content: \"\\e930\";*/\n/*    margin-left: -1em;*/\n/*    color: #00bcd4*/\n/*}*/\n\n/*.icon-tic-tac-toe .path11:before {*/\n/*    content: \"\\e931\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-tic-tac-toe .path12:before {*/\n/*    content: \"\\e932\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-tic-tac-toe .path13:before {*/\n/*    content: \"\\e933\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-tic-tac-toe .path14:before {*/\n/*    content: \"\\e934\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-tic-tac-toe .path15:before {*/\n/*    content: \"\\e935\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-vocabulary .path1:before {*/\n/*    content: \"\\e936\";*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-vocabulary .path2:before {*/\n/*    content: \"\\e937\";*/\n/*    margin-left: -1em;*/\n/*    color: #00bcd4*/\n/*}*/\n\n/*.icon-vocabulary .path3:before {*/\n/*    content: \"\\e938\";*/\n/*    margin-left: -1em;*/\n/*    color: #9c27b0*/\n/*}*/\n\n/*.icon-vocabulary .path4:before {*/\n/*    content: \"\\e939\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-vocabulary .path5:before {*/\n/*    content: \"\\e93a\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-vocabulary .path6:before {*/\n/*    content: \"\\e93b\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-vocabulary .path7:before {*/\n/*    content: \"\\e93c\";*/\n/*    margin-left: -1em;*/\n/*    color: #fff*/\n/*}*/\n\n/*.icon-mail-alt:before {*/\n/*    content: \"\\e945\"*/\n/*}*/\n\n/*.icon-cw:before {*/\n/*    content: \"\\e984\"*/\n/*}*/\n\n/*.icon-attention:before {*/\n/*    content: \"\\ea07\"*/\n/*}*/\n\n/*.icon-cancel:before {*/\n/*    content: \"\\ea0f\"*/\n/*}*/\n\n/*.icon-ok:before {*/\n/*    content: \"\\ea10\"*/\n/*}*/\n\n/*.icon-play-circled2:before {*/\n/*    content: \"\\ea15\"*/\n/*}*/\n\n/*.icon-play:before {*/\n/*    content: \"\\ea1c\"*/\n/*}*/\n\n/*.icon-pause:before {*/\n/*    content: \"\\ea1d\"*/\n/*}*/\n\n/*.icon-volume-up:before {*/\n/*    content: \"\\ea26\"*/\n/*}*/\n\n/*.icon-volume-off:before {*/\n/*    content: \"\\ea2a\"*/\n/*}*/\n\n/*.icon-loop:before {*/\n/*    content: \"\\ea2d\"*/\n/*}*/\n\n/*.icon-right:before {*/\n/*    content: \"\\ea3c\"*/\n/*}*/\n\n/*.icon-left:before {*/\n/*    content: \"\\ea40\"*/\n/*}*/\n\n/*.icon-share:before {*/\n/*    content: \"\\ea82\"*/\n/*}*/\n\n/*.icon-facebook:before {*/\n/*    content: \"\\ea90\"*/\n/*}*/\n\n/*.flag {*/\n/*    width: 16px;*/\n/*    height: 11px;*/\n/*    !*background: url(../../html/lht/lht-all-in-one-min.png) no-repeat*!*/\n/*}*/\n\n/*a, pre code, table {*/\n/*    background-color: transparent*/\n/*}*/\n\n/*.flag.flag-mk {*/\n/*    background-position: -160px -88px*/\n/*}*/\n\n/*.flag.flag-ir {*/\n/*    background-position: -112px -66px*/\n/*}*/\n\n/*.flag.flag-no {*/\n/*    background-position: -256px -99px*/\n/*}*/\n\n/*.flag.flag-me {*/\n/*    background-position: -112px -88px*/\n/*}*/\n\n/*.flag.flag-ng {*/\n/*    background-position: -208px -99px*/\n/*}*/\n\n/*.flag.flag-is {*/\n/*    background-position: -128px -66px*/\n/*}*/\n\n/*.flag.flag-tr {*/\n/*    background-position: -144px -143px*/\n/*}*/\n\n/*.flag.flag-it {*/\n/*    background-position: -144px -66px*/\n/*}*/\n\n/*.flag.flag-fi {*/\n/*    background-position: 0 -44px*/\n/*}*/\n\n/*.flag.flag-rs {*/\n/*    background-position: -80px -121px*/\n/*}*/\n\n/*.flag.flag-sm {*/\n/*    background-position: -48px -132px*/\n/*}*/\n\n/*.flag.flag-af {*/\n/*    background-position: -32px 0*/\n/*}*/\n\n/*.flag.flag-za {*/\n/*    background-position: -256px -154px*/\n/*}*/\n\n/*.flag.flag-ph {*/\n/*    background-position: -144px -110px*/\n/*}*/\n\n/*.flag.flag-ma {*/\n/*    background-position: -64px -88px*/\n/*}*/\n\n/*.flag.flag-bd {*/\n/*    background-position: -16px -11px*/\n/*}*/\n\n/*.flag.flag-eu {*/\n/*    background-position: -256px -33px*/\n/*}*/\n\n/*.flag.flag-catalonia {*/\n/*    background-position: -32px -22px*/\n/*}*/\n\n/*.flag.flag-at {*/\n/*    background-position: -176px 0*/\n/*}*/\n\n/*.flag.flag-bb {*/\n/*    background-position: 0 -11px*/\n/*}*/\n\n/*.flag.flag-se {*/\n/*    background-position: -208px -121px*/\n/*}*/\n\n/*.flag.flag-cw {*/\n/*    background-position: -256px -22px*/\n/*}*/\n\n/*.flag.flag-cn {*/\n/*    background-position: -176px -22px*/\n/*}*/\n\n/*.flag.flag-to {*/\n/*    background-position: -128px -143px*/\n/*}*/\n\n/*.flag.flag-kr {*/\n/*    background-position: -80px -77px*/\n/*}*/\n\n/*.flag.flag-ga {*/\n/*    background-position: -96px -44px*/\n/*}*/\n\n/*.flag.flag-nl {*/\n/*    background-position: -240px -99px*/\n/*}*/\n\n/*.flag.flag-bf {*/\n/*    background-position: -48px -11px*/\n/*}*/\n\n/*.flag.flag-es {*/\n/*    background-position: -224px -33px*/\n/*}*/\n\n/*.flag.flag-ee {*/\n/*    background-position: -144px -33px*/\n/*}*/\n\n/*.flag.flag-in {*/\n/*    background-position: -64px -66px*/\n/*}*/\n\n/*.flag.flag-dk {*/\n/*    background-position: -64px -33px*/\n/*}*/\n\n/*.flag.flag-de {*/\n/*    background-position: -32px -33px*/\n/*}*/\n\n/*.flag.flag-id {*/\n/*    background-position: -256px -55px*/\n/*}*/\n\n/*.flag.flag-ms {*/\n/*    background-position: -16px -99px*/\n/*}*/\n\n/*.flag.flag-ru {*/\n/*    background-position: -96px -121px*/\n/*}*/\n\n/*.flag.flag-mr {*/\n/*    background-position: 0 -99px*/\n/*}*/\n\n/*.flag.flag-hr {*/\n/*    background-position: -192px -55px*/\n/*}*/\n\n/*.flag.flag-am {*/\n/*    background-position: -96px 0*/\n/*}*/\n\n/*.flag.flag-al {*/\n/*    background-position: -80px 0*/\n/*}*/\n\n/*.flag.flag-my {*/\n/*    background-position: -112px -99px*/\n/*}*/\n\n/*.flag.flag-us {*/\n/*    background-position: 0 -154px*/\n/*}*/\n\n/*.flag.flag-pa {*/\n/*    background-position: -80px -110px*/\n/*}*/\n\n/*.flag.flag-si {*/\n/*    background-position: -256px -121px*/\n/*}*/\n\n/*.flag.flag-by {*/\n/*    background-position: -256px -11px*/\n/*}*/\n\n/*.flag.flag-lt {*/\n/*    background-position: 0 -88px*/\n/*}*/\n\n/*.flag.flag-bi {*/\n/*    background-position: -96px -11px*/\n/*}*/\n\n/*.flag.flag-do {*/\n/*    background-position: -96px -33px*/\n/*}*/\n\n/*.flag.flag-as {*/\n/*    background-position: -160px 0*/\n/*}*/\n\n/*.flag.flag-be {*/\n/*    background-position: -32px -11px*/\n/*}*/\n\n/*.flag.flag-th {*/\n/*    background-position: -16px -143px*/\n/*}*/\n\n/*.flag.flag-gt {*/\n/*    background-position: -80px -55px*/\n/*}*/\n\n/*.flag.flag-nc {*/\n/*    background-position: -160px -99px*/\n/*}*/\n\n/*.flag.flag-ge {*/\n/*    background-position: -144px -44px*/\n/*}*/\n\n/*.flag.flag-il {*/\n/*    background-position: -16px -66px*/\n/*}*/\n\n/*.flag.flag-bg {*/\n/*    background-position: -64px -11px*/\n/*}*/\n\n/*.flag.flag-pt {*/\n/*    background-position: -256px -110px*/\n/*}*/\n\n/*.flag.flag-an {*/\n/*    background-position: -112px 0*/\n/*}*/\n\n/*.flag.flag-mp {*/\n/*    background-position: -240px -88px*/\n/*}*/\n\n/*.flag.flag-mx {*/\n/*    background-position: -96px -99px*/\n/*}*/\n\n/*.flag.flag-je {*/\n/*    background-position: -176px -66px*/\n/*}*/\n\n/*.flag.flag-fr {*/\n/*    background-position: -80px -44px*/\n/*}*/\n\n/*.flag.flag-pk {*/\n/*    background-position: -160px -110px*/\n/*}*/\n\n/*.flag.flag-mo {*/\n/*    background-position: -224px -88px*/\n/*}*/\n\n/*.flag.flag-ba {*/\n/*    background-position: -256px 0*/\n/*}*/\n\n/*.flag.flag-sv {*/\n/*    background-position: -160px -132px*/\n/*}*/\n\n/*.flag.flag-ua {*/\n/*    background-position: -224px -143px*/\n/*}*/\n\n/*.flag.flag-ie {*/\n/*    background-position: 0 -66px*/\n/*}*/\n\n/*.flag.flag-cz {*/\n/*    background-position: -16px -33px*/\n/*}*/\n\n/*.flag.flag-tz {*/\n/*    background-position: -208px -143px*/\n/*}*/\n\n/*.flag.flag-ad {*/\n/*    background-position: 0 0*/\n/*}*/\n\n/*.flag.flag-et {*/\n/*    background-position: -240px -33px*/\n/*}*/\n\n/*.flag.flag-gr {*/\n/*    background-position: -48px -55px*/\n/*}*/\n\n/*.flag.flag-sl {*/\n/*    background-position: -32px -132px*/\n/*}*/\n\n/*.flag.flag-ar {*/\n/*    background-position: -144px 0*/\n/*}*/\n\n/*.flag.flag-gl {*/\n/*    background-position: -240px -44px*/\n/*}*/\n\n/*.flag.flag-md {*/\n/*    background-position: -96px -88px*/\n/*}*/\n\n/*.flag.flag-li {*/\n/*    background-position: -208px -77px*/\n/*}*/\n\n/*.flag.flag-br {*/\n/*    background-position: -176px -11px*/\n/*}*/\n\n/*.flag.flag-jp {*/\n/*    background-position: -224px -66px*/\n/*}*/\n\n/*.flag.flag-hu {*/\n/*    background-position: -224px -55px*/\n/*}*/\n\n/*.flag.flag-ro {*/\n/*    background-position: -64px -121px*/\n/*}*/\n\n/*.flag.flag-vi {*/\n/*    background-position: -112px -154px*/\n/*}*/\n\n/*.flag.flag-tl {*/\n/*    background-position: -80px -143px*/\n/*}*/\n\n/*.flag.flag-re {*/\n/*    background-position: -48px -121px*/\n/*}*/\n\n/*.flag.flag-lv {*/\n/*    background-position: -32px -88px*/\n/*}*/\n\n/*.flag.flag-pl {*/\n/*    background-position: -176px -110px*/\n/*}*/\n\n/*.flag.flag-ve {*/\n/*    background-position: -80px -154px*/\n/*}*/\n\n/*.flag.flag-sk {*/\n/*    background-position: -16px -132px*/\n/*}*/\n\n/*.flag.flag-bt {*/\n/*    background-position: -208px -11px*/\n/*}*/\n\n/*.flag.flag-sr {*/\n/*    background-position: -112px -132px*/\n/*}*/\n\n/*.flag.flag-bo {*/\n/*    background-position: -160px -11px*/\n/*}*/\n\n/*.flag.flag-vn {*/\n/*    background-position: -128px -154px*/\n/*}*/\n\n/*.flag.flag-ca {*/\n/*    background-position: -16px -22px*/\n/*}*/\n\n/*.flag.flag-gal {*/\n/*    background-position: -48px -165px*/\n/*}*/\n\n/*.flag.flag-arl {*/\n/*    background-position: -64px -165px*/\n/*}*/\n\n/*html {*/\n/*    font-family: sans-serif;*/\n/*    -ms-text-size-adjust: 100%;*/\n/*    -webkit-text-size-adjust: 100%*/\n/*}*/\n\n/*article, figcaption, figure, footer, header, main, menu, nav, section, summary {*/\n/*    display: block*/\n/*}*/\naudio:not([controls]) {\n    display: none;\n    height: 0\n}\n[hidden], template {\n    display: none\n}\n\n/*a:active, a:hover {*/\n/*    outline: 0*/\n/*}*/\n\n/*b, strong {*/\n/*    font-weight: 700*/\n/*}*/\n\n/*h1 {*/\n/*    margin: .67em 0*/\n/*}*/\n\n/*mark {*/\n/*    background: #ff0;*/\n/*    color: #000*/\n/*}*/\n\n/*sup {*/\n/*    font-size: 75%;*/\n/*    line-height: 0;*/\n/*    position: relative*/\n/*}*/\n\n/*sup {*/\n/*    top: -.5em*/\n/*}*/\n\n/*svg:not(:root) {*/\n/*    overflow: hidden*/\n/*}*/\n\n/*hr {*/\n/*    -webkit-box-sizing: content-box;*/\n/*    -moz-box-sizing: content-box;*/\n/*    box-sizing: content-box;*/\n/*    height: 0*/\n/*}*/\n\n/*pre, textarea {*/\n/*    overflow: auto*/\n/*}*/\n\n/*code, pre {*/\n/*    font-size: 1em*/\n/*}*/\n\n/*button, input, select, textarea {*/\n/*    color: inherit;*/\n/*    font: inherit;*/\n/*    margin: 0*/\n/*}*/\n\n/*button {*/\n/*    overflow: visible*/\n/*}*/\n\n/*button, select {*/\n/*    text-transform: none*/\n/*}*/\n\n/*button, html input[type=button], input[type=reset], input[type=submit] {*/\n/*    -webkit-appearance: button;*/\n/*    cursor: pointer*/\n/*}*/\n\n/*button[disabled], html input[disabled] {*/\n/*    cursor: default*/\n/*}*/\n\n/*button::-moz-focus-inner, input::-moz-focus-inner {*/\n/*    border: 0;*/\n/*    padding: 0*/\n/*}*/\n\n/*input[type=checkbox], input[type=radio] {*/\n/*    -webkit-box-sizing: border-box;*/\n/*    -moz-box-sizing: border-box;*/\n/*    box-sizing: border-box;*/\n/*    padding: 0*/\n/*}*/\n\n/*input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {*/\n/*    height: auto*/\n/*}*/\n\n/*input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {*/\n/*    -webkit-appearance: none*/\n/*}*/\n\n/*table {*/\n/*    border-collapse: collapse;*/\n/*    border-spacing: 0*/\n/*}*/\n\n/*th {*/\n/*    padding: 0*/\n/*}*/\n\n/*@media print {*/\n/*    img, pre, tr {*/\n/*        page-break-inside: avoid*/\n/*    }*/\n\n/*    *, :after, :before {*/\n/*        background: 0 0 !important;*/\n/*        color: #000 !important;*/\n/*        -webkit-box-shadow: none !important;*/\n/*        box-shadow: none !important;*/\n/*        text-shadow: none !important*/\n/*    }*/\n\n/*    !*a, a:visited {*!*/\n/*    !*    text-decoration: underline*!*/\n/*    !*}*!*/\n\n/*    !*a[href]:after {*!*/\n/*    !*    content: \" (\" attr(href) \")\"*!*/\n/*    !*}*!*/\n\n/*    !*a[href^=\"#\"]:after, a[href^=\"javascript:\"]:after {*!*/\n/*    !*    content: \"\"*!*/\n/*    !*}*!*/\n\n/*    pre {*/\n/*        border: 1px solid #999*/\n/*    }*/\n\n/*    img {*/\n/*        max-width: 100% !important*/\n/*    }*/\n\n/*    h2, h3, p {*/\n/*        orphans: 3;*/\n/*        widows: 3*/\n/*    }*/\n\n/*    h2, h3 {*/\n/*        page-break-after: avoid*/\n/*    }*/\n\n/*    .btn > .caret {*/\n/*        border-top-color: #000 !important*/\n/*    }*/\n\n/*    .label {*/\n/*        border: 1px solid #000*/\n/*    }*/\n\n/*    .table {*/\n/*        border-collapse: collapse !important*/\n/*    }*/\n\n/*    .table th {*/\n/*        background-color: #fff !important*/\n/*    }*/\n/*}*/\n\n/*body {*/\n/*    background-color: #fff*/\n/*}*/\n*, :after, :before {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\n/*html {*/\n/*    font-size: 10px*/\n/*}*/\n\n/*body {*/\n/*    margin: 0;*/\n/*    color: #333*/\n/*}*/\n\n/*button, input, select, textarea {*/\n/*    font-family: inherit;*/\n/*    font-size: inherit;*/\n/*    line-height: inherit*/\n/*}*/\n\n/*a {*/\n/*    color: #337ab7;*/\n/*    text-decoration: none*/\n/*}*/\n\n/*a:focus, a:hover {*/\n/*    color: #23527c;*/\n/*    text-decoration: underline*/\n/*}*/\n\n/*figure {*/\n/*    margin: 0*/\n/*}*/\n.img-responsive {\n    display: block;\n    max-width: 100%;\n    height: auto\n}\n.img-rounded {\n    border-radius: 6px\n}\n.img-circle {\n    border-radius: 50%\n}\nhr {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    border-top: 1px solid #eee\n}\n.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0\n}\n[role=button] {\n    cursor: pointer\n}\n\n/*.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {*/\n/*    font-family: inherit;*/\n/*    font-weight: 500;*/\n/*    line-height: 1.1;*/\n/*    color: inherit*/\n/*}*/\n\n/*.h1 .small, .h1 small, .h2 .small, .h2 small, .h3 .small, .h3 small, .h4 .small, .h4 small, .h5 .small, .h5 small, .h6 .small, .h6 small, h1 .small, h1 small, h2 .small, h2 small, h3 .small, h3 small, h4 .small, h4 small, h5 .small, h5 small, h6 .small, h6 small {*/\n/*    font-weight: 400;*/\n/*    line-height: 1;*/\n/*    color: #777*/\n/*}*/\n\n/*.h1, .h2, .h3, h1, h2, h3 {*/\n/*    margin-top: 20px;*/\n/*    margin-bottom: 10px*/\n/*}*/\n\n/*.h1 .small, .h1 small, .h2 .small, .h2 small, .h3 .small, .h3 small, h1 .small, h1 small, h2 .small, h2 small, h3 .small, h3 small {*/\n/*    font-size: 65%*/\n/*}*/\n\n/*.h4 .small, .h4 small, .h5 .small, .h5 small, .h6 .small, .h6 small, .label, h4 .small, h4 small, h5 .small, h5 small, h6 .small, h6 small {*/\n/*    font-size: 75%*/\n/*}*/\n\n/*.h4, .h5, .h6, h4, h5, h6 {*/\n/*    margin-top: 10px;*/\n/*    margin-bottom: 10px*/\n/*}*/\n\n/*.h1, h1 {*/\n/*    font-size: 36px*/\n/*}*/\n\n/*.h2, h2 {*/\n/*    font-size: 30px*/\n/*}*/\n\n/*.h3, h3 {*/\n/*    font-size: 24px*/\n/*}*/\n\n/*.h4, h4 {*/\n/*    font-size: 18px*/\n/*}*/\n\n/*.h5, h5 {*/\n/*    font-size: 14px*/\n/*}*/\n\n/*.h6, h6 {*/\n/*    font-size: 12px*/\n/*}*/\n\n/*p {*/\n/*    margin: 0 0 10px*/\n/*}*/\n\n/*.lead {*/\n/*    margin-bottom: 20px;*/\n/*    font-size: 16px;*/\n/*    font-weight: 300;*/\n/*    line-height: 1.4*/\n/*}*/\n\n/*label {*/\n/*    font-weight: 700*/\n/*}*/\n\n/*@media (min-width: 768px) {*/\n/*    .lead {*/\n/*        font-size: 21px*/\n/*    }*/\n/*}*/\n\n/*.small, small {*/\n/*    font-size: 85%*/\n/*}*/\n\n/*.mark, mark {*/\n/*    background-color: #fcf8e3;*/\n/*    padding: .2em*/\n/*}*/\n\n/*.list-inline {*/\n/*    padding-left: 0;*/\n/*    list-style: none*/\n/*}*/\n\n/*.text-left {*/\n/*    text-align: left*/\n/*}*/\n\n/*.text-right {*/\n/*    text-align: right*/\n/*}*/\n\n/*.text-center {*/\n/*    text-align: center*/\n/*}*/\n\n/*.text-uppercase {*/\n/*    text-transform: uppercase*/\n/*}*/\n\n/*.text-primary {*/\n/*    color: #337ab7*/\n/*}*/\n\n/*a.text-primary:focus, a.text-primary:hover {*/\n/*    color: #286090*/\n/*}*/\n\n/*.text-danger {*/\n/*    color: #a94442*/\n/*}*/\n\n/*a.text-danger:focus, a.text-danger:hover {*/\n/*    color: #843534*/\n/*}*/\n\n/*.bg-primary {*/\n/*    color: #fff;*/\n/*    background-color: #337ab7*/\n/*}*/\n\n/*a.bg-primary:focus, a.bg-primary:hover {*/\n/*    background-color: #286090*/\n/*}*/\n\n/*.bg-danger {*/\n/*    background-color: #f2dede*/\n/*}*/\n\n/*a.bg-danger:focus, a.bg-danger:hover {*/\n/*    background-color: #e4b9b9*/\n/*}*/\n\n/*.page-header {*/\n/*    padding-bottom: 9px;*/\n/*    margin: 40px 0 20px;*/\n/*    border-bottom: 1px solid #eee*/\n/*}*/\n\n/*ol, ul {*/\n/*    margin-top: 0*/\n/*}*/\n\n/*ol ol, ol ul, ul ol, ul ul {*/\n/*    margin-bottom: 0*/\n/*}*/\n\n/*ol, ul {*/\n/*    margin-bottom: 10px*/\n/*}*/\n\n/*.list-inline {*/\n/*    margin-left: -5px*/\n/*}*/\n\n/*.list-inline > li {*/\n/*    display: inline-block;*/\n/*    padding-left: 5px;*/\n/*    padding-right: 5px*/\n/*}*/\n\n/*@media (min-width: 768px) {*/\n/*    .container {*/\n/*        width: 750px*/\n/*    }*/\n/*}*/\n\n/*pre {*/\n/*    color: #333*/\n/*}*/\n\n/*code {*/\n/*    padding: 2px 4px;*/\n/*    font-size: 90%*/\n/*}*/\n\n/*.dropdown-menu, th {*/\n/*    text-align: left*/\n/*}*/\n\n/*address {*/\n/*    margin-bottom: 20px;*/\n/*    font-style: normal;*/\n/*    line-height: 1.42857143*/\n/*}*/\n\n/*code, pre {*/\n/*    font-family: Menlo, Monaco, Consolas, courier new, monospace*/\n/*}*/\n\n/*code {*/\n/*    color: #c7254e;*/\n/*    background-color: #f9f2f4;*/\n/*    border-radius: 4px*/\n/*}*/\n\n/*.form-control {*/\n/*    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075)*/\n/*}*/\n\n/*pre {*/\n/*    display: block;*/\n/*    padding: 9.5px;*/\n/*    margin: 0 0 10px;*/\n/*    font-size: 13px;*/\n/*    line-height: 1.42857143;*/\n/*    word-break: break-all;*/\n/*    word-wrap: break-word;*/\n/*    background-color: #f5f5f5;*/\n/*    border: 1px solid #ccc;*/\n/*    border-radius: 4px*/\n/*}*/\n\n/*.container, .container-fluid {*/\n/*    margin-right: auto;*/\n/*    margin-left: auto*/\n/*}*/\n\n/*.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn, .btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle), .btn-link, pre code {*/\n/*    border-radius: 0*/\n/*}*/\n\n/*pre code {*/\n/*    padding: 0;*/\n/*    font-size: inherit;*/\n/*    color: inherit;*/\n/*    white-space: pre-wrap*/\n/*}*/\n\n/*.close {*/\n/*    font-size: 21px*/\n/*}*/\n\n/*.container {*/\n/*    padding-left: 15px;*/\n/*    padding-right: 15px*/\n/*}*/\n\n/*@media (min-width: 768px) {*/\n/*    .container {*/\n/*        width: 768px*/\n/*    }*/\n/*}*/\n\n/*@media (min-width: 1054px) {*/\n/*    .container {*/\n/*        width: 1024px*/\n/*    }*/\n/*}*/\n\n/*.container-fluid {*/\n/*    padding-left: 15px;*/\n/*    padding-right: 15px*/\n/*}*/\n\n/*.row {*/\n/*    margin-left: -15px;*/\n/*    margin-right: -15px*/\n/*}*/\n\n/*.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {*/\n/*    position: relative;*/\n/*    min-height: 1px;*/\n/*    padding-left: 15px;*/\n/*    padding-right: 15px*/\n/*}*/\n\n/*.col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {*/\n/*    float: left*/\n/*}*/\n\n/*.col-xs-12 {*/\n/*    width: 100%*/\n/*}*/\n\n/*.col-xs-11 {*/\n/*    width: 91.66666667%*/\n/*}*/\n\n/*.col-xs-10 {*/\n/*    width: 83.33333333%*/\n/*}*/\n\n/*.col-xs-9 {*/\n/*    width: 75%*/\n/*}*/\n\n/*.col-xs-8 {*/\n/*    width: 66.66666667%*/\n/*}*/\n\n/*.col-xs-7 {*/\n/*    width: 58.33333333%*/\n/*}*/\n\n/*.col-xs-6 {*/\n/*    width: 50%*/\n/*}*/\n\n/*.col-xs-5 {*/\n/*    width: 41.66666667%*/\n/*}*/\n\n/*.col-xs-4 {*/\n/*    width: 33.33333333%*/\n/*}*/\n\n/*.col-xs-3 {*/\n/*    width: 25%*/\n/*}*/\n\n/*.col-xs-2 {*/\n/*    width: 16.66666667%*/\n/*}*/\n\n/*.col-xs-1 {*/\n/*    width: 8.33333333%*/\n/*}*/\n\n/*.col-xs-pull-12 {*/\n/*    right: 100%*/\n/*}*/\n\n/*.col-xs-pull-11 {*/\n/*    right: 91.66666667%*/\n/*}*/\n\n/*.col-xs-pull-10 {*/\n/*    right: 83.33333333%*/\n/*}*/\n\n/*.col-xs-pull-9 {*/\n/*    right: 75%*/\n/*}*/\n\n/*.col-xs-pull-8 {*/\n/*    right: 66.66666667%*/\n/*}*/\n\n/*.col-xs-pull-7 {*/\n/*    right: 58.33333333%*/\n/*}*/\n\n/*.col-xs-pull-6 {*/\n/*    right: 50%*/\n/*}*/\n\n/*.col-xs-pull-5 {*/\n/*    right: 41.66666667%*/\n/*}*/\n\n/*.col-xs-pull-4 {*/\n/*    right: 33.33333333%*/\n/*}*/\n\n/*.col-xs-pull-3 {*/\n/*    right: 25%*/\n/*}*/\n\n/*.col-xs-pull-2 {*/\n/*    right: 16.66666667%*/\n/*}*/\n\n/*.col-xs-pull-1 {*/\n/*    right: 8.33333333%*/\n/*}*/\n\n/*.col-xs-pull-0 {*/\n/*    right: auto*/\n/*}*/\n\n/*.col-xs-push-12 {*/\n/*    left: 100%*/\n/*}*/\n\n/*.col-xs-push-11 {*/\n/*    left: 91.66666667%*/\n/*}*/\n\n/*.col-xs-push-10 {*/\n/*    left: 83.33333333%*/\n/*}*/\n\n/*.col-xs-push-9 {*/\n/*    left: 75%*/\n/*}*/\n\n/*.col-xs-push-8 {*/\n/*    left: 66.66666667%*/\n/*}*/\n\n/*.col-xs-push-7 {*/\n/*    left: 58.33333333%*/\n/*}*/\n\n/*.col-xs-push-6 {*/\n/*    left: 50%*/\n/*}*/\n\n/*.col-xs-push-5 {*/\n/*    left: 41.66666667%*/\n/*}*/\n\n/*.col-xs-push-4 {*/\n/*    left: 33.33333333%*/\n/*}*/\n\n/*.col-xs-push-3 {*/\n/*    left: 25%*/\n/*}*/\n\n/*.col-xs-push-2 {*/\n/*    left: 16.66666667%*/\n/*}*/\n\n/*.col-xs-push-1 {*/\n/*    left: 8.33333333%*/\n/*}*/\n\n/*.col-xs-push-0 {*/\n/*    left: auto*/\n/*}*/\n\n/*.col-xs-offset-12 {*/\n/*    margin-left: 100%*/\n/*}*/\n\n/*.col-xs-offset-11 {*/\n/*    margin-left: 91.66666667%*/\n/*}*/\n\n/*.col-xs-offset-10 {*/\n/*    margin-left: 83.33333333%*/\n/*}*/\n\n/*.col-xs-offset-9 {*/\n/*    margin-left: 75%*/\n/*}*/\n\n/*.col-xs-offset-8 {*/\n/*    margin-left: 66.66666667%*/\n/*}*/\n\n/*.col-xs-offset-7 {*/\n/*    margin-left: 58.33333333%*/\n/*}*/\n\n/*.col-xs-offset-6 {*/\n/*    margin-left: 50%*/\n/*}*/\n\n/*.col-xs-offset-5 {*/\n/*    margin-left: 41.66666667%*/\n/*}*/\n\n/*.col-xs-offset-4 {*/\n/*    margin-left: 33.33333333%*/\n/*}*/\n\n/*.col-xs-offset-3 {*/\n/*    margin-left: 25%*/\n/*}*/\n\n/*.col-xs-offset-2 {*/\n/*    margin-left: 16.66666667%*/\n/*}*/\n\n/*.col-xs-offset-1 {*/\n/*    margin-left: 8.33333333%*/\n/*}*/\n\n/*.col-xs-offset-0 {*/\n/*    margin-left: 0*/\n/*}*/\n\n/*@media (min-width: 768px) {*/\n/*    .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9 {*/\n/*        float: left*/\n/*    }*/\n\n/*    .col-sm-12 {*/\n/*        width: 100%*/\n/*    }*/\n\n/*    .col-sm-11 {*/\n/*        width: 91.66666667%*/\n/*    }*/\n\n/*    .col-sm-10 {*/\n/*        width: 83.33333333%*/\n/*    }*/\n\n/*    .col-sm-9 {*/\n/*        width: 75%*/\n/*    }*/\n\n/*    .col-sm-8 {*/\n/*        width: 66.66666667%*/\n/*    }*/\n\n/*    .col-sm-7 {*/\n/*        width: 58.33333333%*/\n/*    }*/\n\n/*    .col-sm-6 {*/\n/*        width: 50%*/\n/*    }*/\n\n/*    .col-sm-5 {*/\n/*        width: 41.66666667%*/\n/*    }*/\n\n/*    .col-sm-4 {*/\n/*        width: 33.33333333%*/\n/*    }*/\n\n/*    .col-sm-3 {*/\n/*        width: 25%*/\n/*    }*/\n\n/*    .col-sm-2 {*/\n/*        width: 16.66666667%*/\n/*    }*/\n\n/*    .col-sm-1 {*/\n/*        width: 8.33333333%*/\n/*    }*/\n\n/*    .col-sm-pull-12 {*/\n/*        right: 100%*/\n/*    }*/\n\n/*    .col-sm-pull-11 {*/\n/*        right: 91.66666667%*/\n/*    }*/\n\n/*    .col-sm-pull-10 {*/\n/*        right: 83.33333333%*/\n/*    }*/\n\n/*    .col-sm-pull-9 {*/\n/*        right: 75%*/\n/*    }*/\n\n/*    .col-sm-pull-8 {*/\n/*        right: 66.66666667%*/\n/*    }*/\n\n/*    .col-sm-pull-7 {*/\n/*        right: 58.33333333%*/\n/*    }*/\n\n/*    .col-sm-pull-6 {*/\n/*        right: 50%*/\n/*    }*/\n\n/*    .col-sm-pull-5 {*/\n/*        right: 41.66666667%*/\n/*    }*/\n\n/*    .col-sm-pull-4 {*/\n/*        right: 33.33333333%*/\n/*    }*/\n\n/*    .col-sm-pull-3 {*/\n/*        right: 25%*/\n/*    }*/\n\n/*    .col-sm-pull-2 {*/\n/*        right: 16.66666667%*/\n/*    }*/\n\n/*    .col-sm-pull-1 {*/\n/*        right: 8.33333333%*/\n/*    }*/\n\n/*    .col-sm-pull-0 {*/\n/*        right: auto*/\n/*    }*/\n\n/*    .col-sm-push-12 {*/\n/*        left: 100%*/\n/*    }*/\n\n/*    .col-sm-push-11 {*/\n/*        left: 91.66666667%*/\n/*    }*/\n\n/*    .col-sm-push-10 {*/\n/*        left: 83.33333333%*/\n/*    }*/\n\n/*    .col-sm-push-9 {*/\n/*        left: 75%*/\n/*    }*/\n\n/*    .col-sm-push-8 {*/\n/*        left: 66.66666667%*/\n/*    }*/\n\n/*    .col-sm-push-7 {*/\n/*        left: 58.33333333%*/\n/*    }*/\n\n/*    .col-sm-push-6 {*/\n/*        left: 50%*/\n/*    }*/\n\n/*    .col-sm-push-5 {*/\n/*        left: 41.66666667%*/\n/*    }*/\n\n/*    .col-sm-push-4 {*/\n/*        left: 33.33333333%*/\n/*    }*/\n\n/*    .col-sm-push-3 {*/\n/*        left: 25%*/\n/*    }*/\n\n/*    .col-sm-push-2 {*/\n/*        left: 16.66666667%*/\n/*    }*/\n\n/*    .col-sm-push-1 {*/\n/*        left: 8.33333333%*/\n/*    }*/\n\n/*    .col-sm-push-0 {*/\n/*        left: auto*/\n/*    }*/\n\n/*    .col-sm-offset-12 {*/\n/*        margin-left: 100%*/\n/*    }*/\n\n/*    .col-sm-offset-11 {*/\n/*        margin-left: 91.66666667%*/\n/*    }*/\n\n/*    .col-sm-offset-10 {*/\n/*        margin-left: 83.33333333%*/\n/*    }*/\n\n/*    .col-sm-offset-9 {*/\n/*        margin-left: 75%*/\n/*    }*/\n\n/*    .col-sm-offset-8 {*/\n/*        margin-left: 66.66666667%*/\n/*    }*/\n\n/*    .col-sm-offset-7 {*/\n/*        margin-left: 58.33333333%*/\n/*    }*/\n\n/*    .col-sm-offset-6 {*/\n/*        margin-left: 50%*/\n/*    }*/\n\n/*    .col-sm-offset-5 {*/\n/*        margin-left: 41.66666667%*/\n/*    }*/\n\n/*    .col-sm-offset-4 {*/\n/*        margin-left: 33.33333333%*/\n/*    }*/\n\n/*    .col-sm-offset-3 {*/\n/*        margin-left: 25%*/\n/*    }*/\n\n/*    .col-sm-offset-2 {*/\n/*        margin-left: 16.66666667%*/\n/*    }*/\n\n/*    .col-sm-offset-1 {*/\n/*        margin-left: 8.33333333%*/\n/*    }*/\n\n/*    .col-sm-offset-0 {*/\n/*        margin-left: 0*/\n/*    }*/\n\n/*    .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9 {*/\n/*        float: left*/\n/*    }*/\n\n/*    .col-md-12 {*/\n/*        width: 100%*/\n/*    }*/\n\n/*    .col-md-11 {*/\n/*        width: 91.66666667%*/\n/*    }*/\n\n/*    .col-md-10 {*/\n/*        width: 83.33333333%*/\n/*    }*/\n\n/*    .col-md-9 {*/\n/*        width: 75%*/\n/*    }*/\n\n/*    .col-md-8 {*/\n/*        width: 66.66666667%*/\n/*    }*/\n\n/*    .col-md-7 {*/\n/*        width: 58.33333333%*/\n/*    }*/\n\n/*    .col-md-6 {*/\n/*        width: 50%*/\n/*    }*/\n\n/*    .col-md-5 {*/\n/*        width: 41.66666667%*/\n/*    }*/\n\n/*    .col-md-4 {*/\n/*        width: 33.33333333%*/\n/*    }*/\n\n/*    .col-md-3 {*/\n/*        width: 25%*/\n/*    }*/\n\n/*    .col-md-2 {*/\n/*        width: 16.66666667%*/\n/*    }*/\n\n/*    .col-md-1 {*/\n/*        width: 8.33333333%*/\n/*    }*/\n\n/*    .col-md-pull-12 {*/\n/*        right: 100%*/\n/*    }*/\n\n/*    .col-md-pull-11 {*/\n/*        right: 91.66666667%*/\n/*    }*/\n\n/*    .col-md-pull-10 {*/\n/*        right: 83.33333333%*/\n/*    }*/\n\n/*    .col-md-pull-9 {*/\n/*        right: 75%*/\n/*    }*/\n\n/*    .col-md-pull-8 {*/\n/*        right: 66.66666667%*/\n/*    }*/\n\n/*    .col-md-pull-7 {*/\n/*        right: 58.33333333%*/\n/*    }*/\n\n/*    .col-md-pull-6 {*/\n/*        right: 50%*/\n/*    }*/\n\n/*    .col-md-pull-5 {*/\n/*        right: 41.66666667%*/\n/*    }*/\n\n/*    .col-md-pull-4 {*/\n/*        right: 33.33333333%*/\n/*    }*/\n\n/*    .col-md-pull-3 {*/\n/*        right: 25%*/\n/*    }*/\n\n/*    .col-md-pull-2 {*/\n/*        right: 16.66666667%*/\n/*    }*/\n\n/*    .col-md-pull-1 {*/\n/*        right: 8.33333333%*/\n/*    }*/\n\n/*    .col-md-pull-0 {*/\n/*        right: auto*/\n/*    }*/\n\n/*    .col-md-push-12 {*/\n/*        left: 100%*/\n/*    }*/\n\n/*    .col-md-push-11 {*/\n/*        left: 91.66666667%*/\n/*    }*/\n\n/*    .col-md-push-10 {*/\n/*        left: 83.33333333%*/\n/*    }*/\n\n/*    .col-md-push-9 {*/\n/*        left: 75%*/\n/*    }*/\n\n/*    .col-md-push-8 {*/\n/*        left: 66.66666667%*/\n/*    }*/\n\n/*    .col-md-push-7 {*/\n/*        left: 58.33333333%*/\n/*    }*/\n\n/*    .col-md-push-6 {*/\n/*        left: 50%*/\n/*    }*/\n\n/*    .col-md-push-5 {*/\n/*        left: 41.66666667%*/\n/*    }*/\n\n/*    .col-md-push-4 {*/\n/*        left: 33.33333333%*/\n/*    }*/\n\n/*    .col-md-push-3 {*/\n/*        left: 25%*/\n/*    }*/\n\n/*    .col-md-push-2 {*/\n/*        left: 16.66666667%*/\n/*    }*/\n\n/*    .col-md-push-1 {*/\n/*        left: 8.33333333%*/\n/*    }*/\n\n/*    .col-md-push-0 {*/\n/*        left: auto*/\n/*    }*/\n\n/*    .col-md-offset-12 {*/\n/*        margin-left: 100%*/\n/*    }*/\n\n/*    .col-md-offset-11 {*/\n/*        margin-left: 91.66666667%*/\n/*    }*/\n\n/*    .col-md-offset-10 {*/\n/*        margin-left: 83.33333333%*/\n/*    }*/\n\n/*    .col-md-offset-9 {*/\n/*        margin-left: 75%*/\n/*    }*/\n\n/*    .col-md-offset-8 {*/\n/*        margin-left: 66.66666667%*/\n/*    }*/\n\n/*    .col-md-offset-7 {*/\n/*        margin-left: 58.33333333%*/\n/*    }*/\n\n/*    .col-md-offset-6 {*/\n/*        margin-left: 50%*/\n/*    }*/\n\n/*    .col-md-offset-5 {*/\n/*        margin-left: 41.66666667%*/\n/*    }*/\n\n/*    .col-md-offset-4 {*/\n/*        margin-left: 33.33333333%*/\n/*    }*/\n\n/*    .col-md-offset-3 {*/\n/*        margin-left: 25%*/\n/*    }*/\n\n/*    .col-md-offset-2 {*/\n/*        margin-left: 16.66666667%*/\n/*    }*/\n\n/*    .col-md-offset-1 {*/\n/*        margin-left: 8.33333333%*/\n/*    }*/\n\n/*    .col-md-offset-0 {*/\n/*        margin-left: 0*/\n/*    }*/\n/*}*/\n\n/*@media (min-width: 1054px) {*/\n/*    .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9 {*/\n/*        float: left*/\n/*    }*/\n\n/*    .col-lg-12 {*/\n/*        width: 100%*/\n/*    }*/\n\n/*    .col-lg-11 {*/\n/*        width: 91.66666667%*/\n/*    }*/\n\n/*    .col-lg-10 {*/\n/*        width: 83.33333333%*/\n/*    }*/\n\n/*    .col-lg-9 {*/\n/*        width: 75%*/\n/*    }*/\n\n/*    .col-lg-8 {*/\n/*        width: 66.66666667%*/\n/*    }*/\n\n/*    .col-lg-7 {*/\n/*        width: 58.33333333%*/\n/*    }*/\n\n/*    .col-lg-6 {*/\n/*        width: 50%*/\n/*    }*/\n\n/*    .col-lg-5 {*/\n/*        width: 41.66666667%*/\n/*    }*/\n\n/*    .col-lg-4 {*/\n/*        width: 33.33333333%*/\n/*    }*/\n\n/*    .col-lg-3 {*/\n/*        width: 25%*/\n/*    }*/\n\n/*    .col-lg-2 {*/\n/*        width: 16.66666667%*/\n/*    }*/\n\n/*    .col-lg-1 {*/\n/*        width: 8.33333333%*/\n/*    }*/\n\n/*    .col-lg-pull-12 {*/\n/*        right: 100%*/\n/*    }*/\n\n/*    .col-lg-pull-11 {*/\n/*        right: 91.66666667%*/\n/*    }*/\n\n/*    .col-lg-pull-10 {*/\n/*        right: 83.33333333%*/\n/*    }*/\n\n/*    .col-lg-pull-9 {*/\n/*        right: 75%*/\n/*    }*/\n\n/*    .col-lg-pull-8 {*/\n/*        right: 66.66666667%*/\n/*    }*/\n\n/*    .col-lg-pull-7 {*/\n/*        right: 58.33333333%*/\n/*    }*/\n\n/*    .col-lg-pull-6 {*/\n/*        right: 50%*/\n/*    }*/\n\n/*    .col-lg-pull-5 {*/\n/*        right: 41.66666667%*/\n/*    }*/\n\n/*    .col-lg-pull-4 {*/\n/*        right: 33.33333333%*/\n/*    }*/\n\n/*    .col-lg-pull-3 {*/\n/*        right: 25%*/\n/*    }*/\n\n/*    .col-lg-pull-2 {*/\n/*        right: 16.66666667%*/\n/*    }*/\n\n/*    .col-lg-pull-1 {*/\n/*        right: 8.33333333%*/\n/*    }*/\n\n/*    .col-lg-pull-0 {*/\n/*        right: auto*/\n/*    }*/\n\n/*    .col-lg-push-12 {*/\n/*        left: 100%*/\n/*    }*/\n\n/*    .col-lg-push-11 {*/\n/*        left: 91.66666667%*/\n/*    }*/\n\n/*    .col-lg-push-10 {*/\n/*        left: 83.33333333%*/\n/*    }*/\n\n/*    .col-lg-push-9 {*/\n/*        left: 75%*/\n/*    }*/\n\n/*    .col-lg-push-8 {*/\n/*        left: 66.66666667%*/\n/*    }*/\n\n/*    .col-lg-push-7 {*/\n/*        left: 58.33333333%*/\n/*    }*/\n\n/*    .col-lg-push-6 {*/\n/*        left: 50%*/\n/*    }*/\n\n/*    .col-lg-push-5 {*/\n/*        left: 41.66666667%*/\n/*    }*/\n\n/*    .col-lg-push-4 {*/\n/*        left: 33.33333333%*/\n/*    }*/\n\n/*    .col-lg-push-3 {*/\n/*        left: 25%*/\n/*    }*/\n\n/*    .col-lg-push-2 {*/\n/*        left: 16.66666667%*/\n/*    }*/\n\n/*    .col-lg-push-1 {*/\n/*        left: 8.33333333%*/\n/*    }*/\n\n/*    .col-lg-push-0 {*/\n/*        left: auto*/\n/*    }*/\n\n/*    .col-lg-offset-12 {*/\n/*        margin-left: 100%*/\n/*    }*/\n\n/*    .col-lg-offset-11 {*/\n/*        margin-left: 91.66666667%*/\n/*    }*/\n\n/*    .col-lg-offset-10 {*/\n/*        margin-left: 83.33333333%*/\n/*    }*/\n\n/*    .col-lg-offset-9 {*/\n/*        margin-left: 75%*/\n/*    }*/\n\n/*    .col-lg-offset-8 {*/\n/*        margin-left: 66.66666667%*/\n/*    }*/\n\n/*    .col-lg-offset-7 {*/\n/*        margin-left: 58.33333333%*/\n/*    }*/\n\n/*    .col-lg-offset-6 {*/\n/*        margin-left: 50%*/\n/*    }*/\n\n/*    .col-lg-offset-5 {*/\n/*        margin-left: 41.66666667%*/\n/*    }*/\n\n/*    .col-lg-offset-4 {*/\n/*        margin-left: 33.33333333%*/\n/*    }*/\n\n/*    .col-lg-offset-3 {*/\n/*        margin-left: 25%*/\n/*    }*/\n\n/*    .col-lg-offset-2 {*/\n/*        margin-left: 16.66666667%*/\n/*    }*/\n\n/*    .col-lg-offset-1 {*/\n/*        margin-left: 8.33333333%*/\n/*    }*/\n\n/*    .col-lg-offset-0 {*/\n/*        margin-left: 0*/\n/*    }*/\n/*}*/\n\n/*.table {*/\n/*    width: 100%;*/\n/*    max-width: 100%;*/\n/*    margin-bottom: 20px*/\n/*}*/\n\n/*.table .table {*/\n/*    background-color: #fff*/\n/*}*/\n\n/*table col[class*=col-] {*/\n/*    position: static;*/\n/*    float: none;*/\n/*    display: table-column*/\n/*}*/\n\n/*table th[class*=col-] {*/\n/*    position: static;*/\n/*    float: none;*/\n/*    display: table-cell*/\n/*}*/\n\n/*.table-responsive {*/\n/*    overflow-x: auto;*/\n/*    min-height: .01%*/\n/*}*/\n\n/*.well {*/\n/*    min-height: 20px*/\n/*}*/\n\n/*@media screen and (max-width: 767px) {*/\n/*    .table-responsive {*/\n/*        width: 100%;*/\n/*        margin-bottom: 15px;*/\n/*        overflow-y: hidden;*/\n/*        -ms-overflow-style: -ms-autohiding-scrollbar;*/\n/*        border: 1px solid #ddd*/\n/*    }*/\n\n/*    .table-responsive > .table {*/\n/*        margin-bottom: 0*/\n/*    }*/\n/*}*/\n\n/*label {*/\n/*    display: inline-block;*/\n/*    max-width: 100%;*/\n/*    margin-bottom: 5px*/\n/*}*/\n\n/*input[type=search] {*/\n/*    -webkit-box-sizing: border-box;*/\n/*    -moz-box-sizing: border-box;*/\n/*    box-sizing: border-box;*/\n/*    -webkit-appearance: none*/\n/*}*/\n\n/*input[type=checkbox], input[type=radio] {*/\n/*    margin: 4px 0 0;*/\n/*    line-height: normal*/\n/*}*/\n\n/*.form-control {*/\n/*    font-size: 14px;*/\n/*    line-height: 1.42857143;*/\n/*    display: block;*/\n/*    color: #555*/\n/*}*/\n\n/*input[type=file] {*/\n/*    display: block*/\n/*}*/\n\n/*input[type=range] {*/\n/*    display: block;*/\n/*    width: 100%*/\n/*}*/\n\n/*select[multiple], select[size] {*/\n/*    height: auto*/\n/*}*/\n\n/*input[type=checkbox]:focus, input[type=file]:focus, input[type=radio]:focus {*/\n/*    outline: -webkit-focus-ring-color auto 5px;*/\n/*    outline-offset: -2px*/\n/*}*/\n\n/*.form-control {*/\n/*    width: 100%;*/\n/*    height: 34px;*/\n/*    padding: 6px 12px;*/\n/*    background-color: #fff;*/\n/*    background-image: none;*/\n/*    border: 1px solid #ccc;*/\n/*    border-radius: 4px;*/\n/*    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);*/\n/*    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;*/\n/*    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;*/\n/*    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s*/\n/*}*/\n\n/*.form-control:focus {*/\n/*    border-color: #66afe9;*/\n/*    outline: 0;*/\n/*    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);*/\n/*    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)*/\n/*}*/\n\n/*.form-control::-moz-placeholder {*/\n/*    color: #999;*/\n/*    opacity: 1*/\n/*}*/\n\n/*.form-control:-ms-input-placeholder {*/\n/*    color: #999*/\n/*}*/\n\n/*.form-control::-webkit-input-placeholder {*/\n/*    color: #999*/\n/*}*/\n\n/*.form-control::-ms-expand {*/\n/*    border: 0;*/\n/*    background-color: transparent*/\n/*}*/\n\n/*.form-control[disabled], .form-control[readonly] {*/\n/*    background-color: #eee;*/\n/*    opacity: 1*/\n/*}*/\n\n/*.form-control[disabled] {*/\n/*    cursor: not-allowed*/\n/*}*/\n\n/*textarea.form-control {*/\n/*    height: auto*/\n/*}*/\n\n/*@media screen and (-webkit-min-device-pixel-ratio: 0) {*/\n/*    input[type=date].form-control, input[type=datetime-local].form-control, input[type=month].form-control, input[type=time].form-control {*/\n/*        line-height: 34px*/\n/*    }*/\n\n/*    .input-group-sm input[type=date], .input-group-sm input[type=datetime-local], .input-group-sm input[type=month], .input-group-sm input[type=time], input[type=date].input-sm, input[type=datetime-local].input-sm, input[type=month].input-sm, input[type=time].input-sm {*/\n/*        line-height: 30px*/\n/*    }*/\n\n/*    .input-group-lg input[type=date], .input-group-lg input[type=datetime-local], .input-group-lg input[type=month], .input-group-lg input[type=time], input[type=date].input-lg, input[type=datetime-local].input-lg, input[type=month].input-lg, input[type=time].input-lg {*/\n/*        line-height: 46px*/\n/*    }*/\n/*}*/\n\n/*.form-group {*/\n/*    margin-bottom: 15px*/\n/*}*/\n\n/*.dropdown, .has-feedback {*/\n/*    position: relative*/\n/*}*/\n\n/*.btn-block + .btn-block, .help-block {*/\n/*    margin-top: 5px*/\n/*}*/\n\n/*input[type=checkbox].disabled, input[type=checkbox][disabled], input[type=radio].disabled, input[type=radio][disabled] {*/\n/*    cursor: not-allowed*/\n/*}*/\n\n/*.form-control-static {*/\n/*    padding-top: 7px;*/\n/*    padding-bottom: 7px;*/\n/*    margin-bottom: 0;*/\n/*    min-height: 34px*/\n/*}*/\n\n/*.form-control-static.input-lg, .form-control-static.input-sm {*/\n/*    padding-left: 0;*/\n/*    padding-right: 0*/\n/*}*/\n\n/*.form-group-sm .form-control, .input-sm {*/\n/*    padding: 5px 10px;*/\n/*    border-radius: 3px;*/\n/*    font-size: 12px*/\n/*}*/\n\n/*.input-sm {*/\n/*    height: 30px;*/\n/*    line-height: 1.5*/\n/*}*/\n\n/*select.input-sm {*/\n/*    height: 30px;*/\n/*    line-height: 30px*/\n/*}*/\n\n/*select[multiple].input-sm, textarea.input-sm {*/\n/*    height: auto*/\n/*}*/\n\n/*.form-group-sm .form-control {*/\n/*    height: 30px;*/\n/*    line-height: 1.5*/\n/*}*/\n\n/*.form-group-sm select.form-control {*/\n/*    height: 30px;*/\n/*    line-height: 30px*/\n/*}*/\n\n/*.form-group-sm select[multiple].form-control, .form-group-sm textarea.form-control {*/\n/*    height: auto*/\n/*}*/\n\n/*.form-group-sm .form-control-static {*/\n/*    height: 30px;*/\n/*    min-height: 32px;*/\n/*    padding: 6px 10px;*/\n/*    font-size: 12px;*/\n/*    line-height: 1.5*/\n/*}*/\n\n/*.btn-group-lg > .btn, .btn-lg, .form-group-lg .form-control, .input-lg {*/\n/*    padding: 10px 16px;*/\n/*    font-size: 18px*/\n/*}*/\n\n/*.input-lg {*/\n/*    height: 46px;*/\n/*    line-height: 1.3333333;*/\n/*    border-radius: 6px*/\n/*}*/\n\n/*select.input-lg {*/\n/*    height: 46px;*/\n/*    line-height: 46px*/\n/*}*/\n\n/*select[multiple].input-lg, textarea.input-lg {*/\n/*    height: auto*/\n/*}*/\n\n/*.form-group-lg .form-control {*/\n/*    height: 46px;*/\n/*    line-height: 1.3333333;*/\n/*    border-radius: 6px*/\n/*}*/\n\n/*.form-group-lg select.form-control {*/\n/*    height: 46px;*/\n/*    line-height: 46px*/\n/*}*/\n\n/*.form-group-lg select[multiple].form-control, .form-group-lg textarea.form-control {*/\n/*    height: auto*/\n/*}*/\n\n/*.form-group-lg .form-control-static {*/\n/*    height: 46px;*/\n/*    min-height: 38px;*/\n/*    padding: 11px 16px;*/\n/*    font-size: 18px;*/\n/*    line-height: 1.3333333*/\n/*}*/\n\n/*.has-feedback .form-control {*/\n/*    padding-right: 42.5px*/\n/*}*/\n\n/*.form-control-feedback {*/\n/*    position: absolute;*/\n/*    top: 0;*/\n/*    right: 0;*/\n/*    z-index: 2;*/\n/*    display: block;*/\n/*    width: 34px;*/\n/*    height: 34px;*/\n/*    line-height: 34px;*/\n/*    text-align: center;*/\n/*    pointer-events: none*/\n/*}*/\n\n/*.form-group-lg .form-control + .form-control-feedback, .input-group-lg + .form-control-feedback, .input-lg + .form-control-feedback {*/\n/*    width: 46px;*/\n/*    height: 46px;*/\n/*    line-height: 46px*/\n/*}*/\n\n/*.form-group-sm .form-control + .form-control-feedback, .input-group-sm + .form-control-feedback, .input-sm + .form-control-feedback {*/\n/*    width: 30px;*/\n/*    height: 30px;*/\n/*    line-height: 30px*/\n/*}*/\n\n/*.has-error .control-label, .has-error .help-block {*/\n/*    color: #a94442*/\n/*}*/\n\n/*.has-error .form-control {*/\n/*    border-color: #a94442;*/\n/*    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);*/\n/*    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075)*/\n/*}*/\n\n/*.has-error .form-control:focus {*/\n/*    border-color: #843534;*/\n/*    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;*/\n/*    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483*/\n/*}*/\n\n/*.has-error .form-control-feedback {*/\n/*    color: #a94442*/\n/*}*/\n\n/*.has-feedback label ~ .form-control-feedback {*/\n/*    top: 25px*/\n/*}*/\n\n/*.has-feedback label.sr-only ~ .form-control-feedback {*/\n/*    top: 0*/\n/*}*/\n\n/*.help-block {*/\n/*    display: block;*/\n/*    margin-bottom: 10px;*/\n/*    color: #737373*/\n/*}*/\n\n/*@media (min-width: 768px) {*/\n/*    .form-inline .form-control, .form-inline .form-control-static, .form-inline .form-group {*/\n/*        display: inline-block*/\n/*    }*/\n\n/*    .form-inline .control-label, .form-inline .form-group {*/\n/*        margin-bottom: 0;*/\n/*        vertical-align: middle*/\n/*    }*/\n\n/*    .form-inline .form-control {*/\n/*        width: auto;*/\n/*        vertical-align: middle*/\n/*    }*/\n\n/*    .form-inline .input-group {*/\n/*        display: inline-table;*/\n/*        vertical-align: middle*/\n/*    }*/\n\n/*    .form-inline .input-group .form-control, .form-inline .input-group .input-group-btn {*/\n/*        width: auto*/\n/*    }*/\n\n/*    .form-inline .input-group > .form-control {*/\n/*        width: 100%*/\n/*    }*/\n\n/*    .form-inline .has-feedback .form-control-feedback {*/\n/*        top: 0*/\n/*    }*/\n\n/*    .form-horizontal .control-label {*/\n/*        text-align: right;*/\n/*        margin-bottom: 0;*/\n/*        padding-top: 7px*/\n/*    }*/\n/*}*/\n\n/*.form-horizontal .form-group {*/\n/*    margin-left: -15px;*/\n/*    margin-right: -15px*/\n/*}*/\n\n/*.form-horizontal .has-feedback .form-control-feedback {*/\n/*    right: 15px*/\n/*}*/\n\n/*@media (min-width: 768px) {*/\n/*    .form-horizontal .form-group-lg .control-label {*/\n/*        padding-top: 11px;*/\n/*        font-size: 18px*/\n/*    }*/\n\n/*    .form-horizontal .form-group-sm .control-label {*/\n/*        padding-top: 6px;*/\n/*        font-size: 12px*/\n/*    }*/\n/*}*/\n\n/*.btn {*/\n/*    padding: 6px 12px;*/\n/*    font-weight: 400;*/\n/*    text-align: center*/\n/*}*/\n\n/*.btn {*/\n/*    display: inline-block;*/\n/*    margin-bottom: 0;*/\n/*    -ms-touch-action: manipulation;*/\n/*    touch-action: manipulation;*/\n/*    cursor: pointer;*/\n/*    background-image: none;*/\n/*    border: 1px solid transparent;*/\n/*    white-space: nowrap;*/\n/*    font-size: 14px;*/\n/*    line-height: 1.42857143;*/\n/*    border-radius: 4px;*/\n/*    -webkit-user-select: none;*/\n/*    -moz-user-select: none;*/\n/*    -ms-user-select: none;*/\n/*    user-select: none*/\n/*}*/\n\n/*.btn.active:focus, .btn:active:focus, .btn:focus {*/\n/*    outline: -webkit-focus-ring-color auto 5px;*/\n/*    outline-offset: -2px*/\n/*}*/\n\n/*.btn:focus, .btn:hover {*/\n/*    color: #333;*/\n/*    text-decoration: none*/\n/*}*/\n\n/*.btn.active, .btn:active {*/\n/*    outline: 0;*/\n/*    background-image: none;*/\n/*    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);*/\n/*    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125)*/\n/*}*/\n\n/*.btn.disabled, .btn[disabled] {*/\n/*    cursor: not-allowed;*/\n/*    opacity: .65;*/\n/*    -webkit-box-shadow: none;*/\n/*    box-shadow: none*/\n/*}*/\n\n/*a.btn.disabled {*/\n/*    pointer-events: none*/\n/*}*/\n\n/*.btn-default {*/\n/*    color: #333;*/\n/*    background-color: #fff;*/\n/*    border-color: #ccc*/\n/*}*/\n\n/*.btn-default:focus {*/\n/*    color: #333;*/\n/*    background-color: #e6e6e6;*/\n/*    border-color: #8c8c8c*/\n/*}*/\n\n/*.btn-default.active, .btn-default:active, .btn-default:hover, .open > .dropdown-toggle.btn-default {*/\n/*    color: #333;*/\n/*    background-color: #e6e6e6;*/\n/*    border-color: #adadad*/\n/*}*/\n\n/*.btn-default.active:focus, .btn-default.active:hover, .btn-default:active:focus, .btn-default:active:hover, .open > .dropdown-toggle.btn-default:focus, .open > .dropdown-toggle.btn-default:hover {*/\n/*    color: #333;*/\n/*    background-color: #d4d4d4;*/\n/*    border-color: #8c8c8c*/\n/*}*/\n\n/*.btn-default.active, .btn-default:active, .open > .dropdown-toggle.btn-default {*/\n/*    background-image: none*/\n/*}*/\n\n/*.btn-default.disabled:focus, .btn-default.disabled:hover, .btn-default[disabled]:focus, .btn-default[disabled]:hover {*/\n/*    background-color: #fff;*/\n/*    border-color: #ccc*/\n/*}*/\n\n/*.btn-primary {*/\n/*    color: #fff;*/\n/*    background-color: #337ab7;*/\n/*    border-color: #2e6da4*/\n/*}*/\n\n/*.btn-primary:focus {*/\n/*    color: #fff;*/\n/*    background-color: #286090;*/\n/*    border-color: #122b40*/\n/*}*/\n\n/*.btn-primary.active, .btn-primary:active, .btn-primary:hover, .open > .dropdown-toggle.btn-primary {*/\n/*    color: #fff;*/\n/*    background-color: #286090;*/\n/*    border-color: #204d74*/\n/*}*/\n\n/*.btn-primary.active:focus, .btn-primary.active:hover, .btn-primary:active:focus, .btn-primary:active:hover, .open > .dropdown-toggle.btn-primary:focus, .open > .dropdown-toggle.btn-primary:hover {*/\n/*    color: #fff;*/\n/*    background-color: #204d74;*/\n/*    border-color: #122b40*/\n/*}*/\n\n/*.btn-primary.active, .btn-primary:active, .open > .dropdown-toggle.btn-primary {*/\n/*    background-image: none*/\n/*}*/\n\n/*.btn-primary.disabled:focus, .btn-primary.disabled:hover, .btn-primary[disabled]:focus, .btn-primary[disabled]:hover {*/\n/*    background-color: #337ab7;*/\n/*    border-color: #2e6da4*/\n/*}*/\n\n/*.btn-danger {*/\n/*    color: #fff;*/\n/*    background-color: #d9534f;*/\n/*    border-color: #d43f3a*/\n/*}*/\n\n/*.btn-danger:focus {*/\n/*    color: #fff;*/\n/*    background-color: #c9302c;*/\n/*    border-color: #761c19*/\n/*}*/\n\n/*.btn-danger.active, .btn-danger:active, .btn-danger:hover, .open > .dropdown-toggle.btn-danger {*/\n/*    color: #fff;*/\n/*    background-color: #c9302c;*/\n/*    border-color: #ac2925*/\n/*}*/\n\n/*.btn-danger.active:focus, .btn-danger.active:hover, .btn-danger:active:focus, .btn-danger:active:hover, .open > .dropdown-toggle.btn-danger:focus, .open > .dropdown-toggle.btn-danger:hover {*/\n/*    color: #fff;*/\n/*    background-color: #ac2925;*/\n/*    border-color: #761c19*/\n/*}*/\n\n/*.btn-danger.active, .btn-danger:active, .open > .dropdown-toggle.btn-danger {*/\n/*    background-image: none*/\n/*}*/\n\n/*.btn-danger.disabled:focus, .btn-danger.disabled:hover, .btn-danger[disabled]:focus, .btn-danger[disabled]:hover {*/\n/*    background-color: #d9534f;*/\n/*    border-color: #d43f3a*/\n/*}*/\n\n/*.btn-link {*/\n/*    color: #337ab7;*/\n/*    font-weight: 400*/\n/*}*/\n\n/*.btn-link, .btn-link.active, .btn-link:active, .btn-link[disabled] {*/\n/*    background-color: transparent;*/\n/*    -webkit-box-shadow: none;*/\n/*    box-shadow: none*/\n/*}*/\n\n/*.btn-link, .btn-link:active, .btn-link:focus, .btn-link:hover {*/\n/*    border-color: transparent*/\n/*}*/\n\n/*.btn-link:focus, .btn-link:hover {*/\n/*    color: #23527c;*/\n/*    text-decoration: underline;*/\n/*    background-color: transparent*/\n/*}*/\n\n/*.btn-link[disabled]:focus, .btn-link[disabled]:hover {*/\n/*    color: #777;*/\n/*    text-decoration: none*/\n/*}*/\n\n/*.btn-group-lg > .btn, .btn-lg {*/\n/*    line-height: 1.3333333;*/\n/*    border-radius: 6px*/\n/*}*/\n\n/*.btn-group-sm > .btn, .btn-sm {*/\n/*    padding: 5px 10px;*/\n/*    font-size: 12px;*/\n/*    line-height: 1.5;*/\n/*    border-radius: 3px*/\n/*}*/\n\n/*.btn-group-xs > .btn, .btn-xs {*/\n/*    padding: 1px 5px;*/\n/*    font-size: 12px;*/\n/*    line-height: 1.5;*/\n/*    border-radius: 3px*/\n/*}*/\n\n/*.btn-block {*/\n/*    display: block;*/\n/*    width: 100%*/\n/*}*/\n\n/*input[type=button].btn-block, input[type=reset].btn-block, input[type=submit].btn-block {*/\n/*    width: 100%*/\n/*}*/\n\n/*.caret {*/\n/*    display: inline-block;*/\n/*    width: 0;*/\n/*    height: 0;*/\n/*    margin-left: 2px*/\n/*}*/\n\n/*.dropdown-menu {*/\n/*    position: absolute;*/\n/*    top: 100%;*/\n/*    left: 0;*/\n/*    z-index: 1000;*/\n/*    display: none;*/\n/*    float: left;*/\n/*    min-width: 160px;*/\n/*    padding: 5px 0;*/\n/*    margin: 2px 0 0;*/\n/*    list-style: none;*/\n/*    background-color: #fff;*/\n/*    border: 1px solid #ccc;*/\n/*    border: 1px solid rgba(0, 0, 0, .15);*/\n/*    border-radius: 4px;*/\n/*    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);*/\n/*    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);*/\n/*    -webkit-background-clip: padding-box;*/\n/*    background-clip: padding-box*/\n/*}*/\n\n/*.dropdown-menu-right, .dropdown-menu.pull-right {*/\n/*    left: auto;*/\n/*    right: 0*/\n/*}*/\n\n/*.dropdown-header, .dropdown-menu > li > a {*/\n/*    display: block;*/\n/*    padding: 3px 20px;*/\n/*    line-height: 1.42857143;*/\n/*    white-space: nowrap*/\n/*}*/\n\n/*.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child, .btn-group > .btn:last-child:not(:first-child), .btn-group > .dropdown-toggle:not(:first-child) {*/\n/*    border-top-left-radius: 0;*/\n/*    border-bottom-left-radius: 0*/\n/*}*/\n\n/*.dropdown-menu > li > a {*/\n/*    clear: both;*/\n/*    font-weight: 400;*/\n/*    color: #333*/\n/*}*/\n\n/*.dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover {*/\n/*    text-decoration: none;*/\n/*    color: #262626;*/\n/*    background-color: #f5f5f5*/\n/*}*/\n\n/*.dropdown-menu > .active > a, .dropdown-menu > .active > a:focus, .dropdown-menu > .active > a:hover {*/\n/*    color: #fff;*/\n/*    text-decoration: none;*/\n/*    outline: 0;*/\n/*    background-color: #337ab7*/\n/*}*/\n\n/*.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:focus, .dropdown-menu > .disabled > a:hover {*/\n/*    color: #777*/\n/*}*/\n\n/*.dropdown-menu > .disabled > a:focus, .dropdown-menu > .disabled > a:hover {*/\n/*    text-decoration: none;*/\n/*    background-color: transparent;*/\n/*    background-image: none;*/\n/*    cursor: not-allowed*/\n/*}*/\n\n/*.open > .dropdown-menu {*/\n/*    display: block*/\n/*}*/\n\n/*.open > a {*/\n/*    outline: 0*/\n/*}*/\n\n/*.dropdown-menu-left {*/\n/*    left: 0;*/\n/*    right: auto*/\n/*}*/\n\n/*.dropdown-header {*/\n/*    font-size: 12px;*/\n/*    color: #777*/\n/*}*/\n\n/*.pull-right > .dropdown-menu {*/\n/*    right: 0;*/\n/*    left: auto*/\n/*}*/\n\n/*.btn-group {*/\n/*    position: relative;*/\n/*    display: inline-block*/\n/*}*/\n\n/*.btn-group > .btn {*/\n/*    position: relative;*/\n/*    float: left*/\n/*}*/\n\n/*.btn-group > .btn.active, .btn-group > .btn:active, .btn-group > .btn:focus, .btn-group > .btn:hover {*/\n/*    z-index: 2*/\n/*}*/\n\n/*.btn-group .btn + .btn, .btn-group .btn + .btn-group, .btn-group .btn-group + .btn, .btn-group .btn-group + .btn-group {*/\n/*    margin-left: -1px*/\n/*}*/\n\n/*.btn-toolbar {*/\n/*    margin-left: -5px*/\n/*}*/\n\n/*.btn-toolbar .btn, .btn-toolbar .btn-group, .btn-toolbar .input-group {*/\n/*    float: left*/\n/*}*/\n\n/*.btn-toolbar > .btn, .btn-toolbar > .btn-group, .btn-toolbar > .input-group {*/\n/*    margin-left: 5px*/\n/*}*/\n\n/*.btn-group > .btn:first-child {*/\n/*    margin-left: 0*/\n/*}*/\n\n/*.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {*/\n/*    border-bottom-right-radius: 0;*/\n/*    border-top-right-radius: 0*/\n/*}*/\n\n/*.btn-group > .btn-group {*/\n/*    float: left*/\n/*}*/\n\n/*.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child, .btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {*/\n/*    border-bottom-right-radius: 0;*/\n/*    border-top-right-radius: 0*/\n/*}*/\n\n/*.btn-group .dropdown-toggle:active, .btn-group.open .dropdown-toggle {*/\n/*    outline: 0*/\n/*}*/\n\n/*.btn-group > .btn + .dropdown-toggle {*/\n/*    padding-left: 8px;*/\n/*    padding-right: 8px*/\n/*}*/\n\n/*.btn-group > .btn-lg + .dropdown-toggle {*/\n/*    padding-left: 12px;*/\n/*    padding-right: 12px*/\n/*}*/\n\n/*.btn-group.open .dropdown-toggle {*/\n/*    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);*/\n/*    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125)*/\n/*}*/\n\n/*.btn-group.open .dropdown-toggle.btn-link {*/\n/*    -webkit-box-shadow: none;*/\n/*    box-shadow: none*/\n/*}*/\n\n/*.btn .caret {*/\n/*    margin-left: 0*/\n/*}*/\n\n/*.btn-lg .caret {*/\n/*    border-width: 5px 5px 0;*/\n/*    border-bottom-width: 0*/\n/*}*/\n\n/*[data-toggle=buttons] > .btn input[type=checkbox], [data-toggle=buttons] > .btn input[type=radio], [data-toggle=buttons] > .btn-group > .btn input[type=checkbox], [data-toggle=buttons] > .btn-group > .btn input[type=radio] {*/\n/*    position: absolute;*/\n/*    clip: rect(0, 0, 0, 0);*/\n/*    pointer-events: none*/\n/*}*/\n\n/*.input-group, .input-group .form-control, .input-group-btn, .input-group-btn > .btn, .nav > li, .nav > li > a {*/\n/*    position: relative*/\n/*}*/\n\n/*.input-group {*/\n/*    display: table;*/\n/*    border-collapse: separate*/\n/*}*/\n\n/*.input-group[class*=col-] {*/\n/*    float: none;*/\n/*    padding-left: 0;*/\n/*    padding-right: 0*/\n/*}*/\n\n/*.input-group .form-control {*/\n/*    z-index: 2;*/\n/*    float: left;*/\n/*    width: 100%;*/\n/*    margin-bottom: 0*/\n/*}*/\n\n/*.input-group .form-control:focus {*/\n/*    z-index: 3*/\n/*}*/\n\n/*.input-group-lg > .form-control, .input-group-lg > .input-group-btn > .btn {*/\n/*    height: 46px;*/\n/*    padding: 10px 16px;*/\n/*    font-size: 18px;*/\n/*    line-height: 1.3333333;*/\n/*    border-radius: 6px*/\n/*}*/\n\n/*select.input-group-lg > .form-control, select.input-group-lg > .input-group-btn > .btn {*/\n/*    height: 46px;*/\n/*    line-height: 46px*/\n/*}*/\n\n/*select[multiple].input-group-lg > .form-control, select[multiple].input-group-lg > .input-group-btn > .btn, textarea.input-group-lg > .form-control, textarea.input-group-lg > .input-group-btn > .btn {*/\n/*    height: auto*/\n/*}*/\n\n/*.input-group-sm > .form-control, .input-group-sm > .input-group-btn > .btn {*/\n/*    height: 30px;*/\n/*    padding: 5px 10px;*/\n/*    font-size: 12px;*/\n/*    line-height: 1.5;*/\n/*    border-radius: 3px*/\n/*}*/\n\n/*select.input-group-sm > .form-control, select.input-group-sm > .input-group-btn > .btn {*/\n/*    height: 30px;*/\n/*    line-height: 30px*/\n/*}*/\n\n/*select[multiple].input-group-sm > .form-control, select[multiple].input-group-sm > .input-group-btn > .btn, textarea.input-group-sm > .form-control, textarea.input-group-sm > .input-group-btn > .btn {*/\n/*    height: auto*/\n/*}*/\n\n/*.input-group .form-control, .input-group-btn {*/\n/*    display: table-cell*/\n/*}*/\n\n/*.input-group .form-control:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child) {*/\n/*    border-radius: 0*/\n/*}*/\n\n/*.input-group-btn {*/\n/*    width: 1%;*/\n/*    white-space: nowrap*/\n/*}*/\n\n/*.input-group .form-control:first-child, .input-group-btn:first-child > .btn, .input-group-btn:first-child > .btn-group > .btn, .input-group-btn:first-child > .dropdown-toggle, .input-group-btn:last-child > .btn-group:not(:last-child) > .btn, .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {*/\n/*    border-bottom-right-radius: 0;*/\n/*    border-top-right-radius: 0*/\n/*}*/\n\n/*.input-group .form-control:last-child, .input-group-btn:first-child > .btn-group:not(:first-child) > .btn, .input-group-btn:first-child > .btn:not(:first-child), .input-group-btn:last-child > .btn, .input-group-btn:last-child > .btn-group > .btn, .input-group-btn:last-child > .dropdown-toggle {*/\n/*    border-bottom-left-radius: 0;*/\n/*    border-top-left-radius: 0*/\n/*}*/\n\n/*.input-group-btn {*/\n/*    font-size: 0;*/\n/*    white-space: nowrap*/\n/*}*/\n\n/*.input-group-btn > .btn + .btn {*/\n/*    margin-left: -1px*/\n/*}*/\n\n/*.input-group-btn > .btn:active, .input-group-btn > .btn:focus, .input-group-btn > .btn:hover {*/\n/*    z-index: 2*/\n/*}*/\n\n/*.input-group-btn:first-child > .btn, .input-group-btn:first-child > .btn-group {*/\n/*    margin-right: -1px*/\n/*}*/\n\n/*.input-group-btn:last-child > .btn, .input-group-btn:last-child > .btn-group {*/\n/*    z-index: 2;*/\n/*    margin-left: -1px*/\n/*}*/\n\n/*.nav {*/\n/*    margin-bottom: 0;*/\n/*    padding-left: 0;*/\n/*    list-style: none*/\n/*}*/\n\n/*.nav > li {*/\n/*    display: block*/\n/*}*/\n\n/*.nav > li > a {*/\n/*    display: block;*/\n/*    padding: 10px 15px*/\n/*}*/\n\n/*.nav > li > a:focus, .nav > li > a:hover {*/\n/*    text-decoration: none*/\n/*}*/\n\n/*.nav > li.disabled > a {*/\n/*    color: #777*/\n/*}*/\n\n/*.nav > li.disabled > a:focus, .nav > li.disabled > a:hover {*/\n/*    color: #777;*/\n/*    text-decoration: none;*/\n/*    background-color: transparent;*/\n/*    cursor: not-allowed*/\n/*}*/\n\n/*.nav .open > a, .nav .open > a:focus, .nav .open > a:hover {*/\n/*    background-color: #eee*/\n/*}*/\n\n/*.nav > li > a > img {*/\n/*    max-width: none*/\n/*}*/\n\n/*.close {*/\n/*    float: right*/\n/*}*/\n\n/*.label {*/\n/*    font-weight: 700;*/\n/*    line-height: 1;*/\n/*    white-space: nowrap*/\n/*}*/\n\n/*.label {*/\n/*    display: inline;*/\n/*    padding: .2em .6em .3em;*/\n/*    color: #fff;*/\n/*    text-align: center;*/\n/*    border-radius: .25em*/\n/*}*/\n\n/*a.label:focus, a.label:hover {*/\n/*    color: #fff;*/\n/*    text-decoration: none;*/\n/*    cursor: pointer*/\n/*}*/\n\n/*.label:empty {*/\n/*    display: none*/\n/*}*/\n\n/*.btn .label {*/\n/*    position: relative;*/\n/*    top: -1px*/\n/*}*/\n\n/*.label-default {*/\n/*    background-color: #777*/\n/*}*/\n\n/*.label-default[href]:focus, .label-default[href]:hover {*/\n/*    background-color: #5e5e5e*/\n/*}*/\n\n/*.label-primary {*/\n/*    background-color: #337ab7*/\n/*}*/\n\n/*.label-primary[href]:focus, .label-primary[href]:hover {*/\n/*    background-color: #286090*/\n/*}*/\n\n/*.label-danger {*/\n/*    background-color: #d9534f*/\n/*}*/\n\n/*.label-danger[href]:focus, .label-danger[href]:hover {*/\n/*    background-color: #c9302c*/\n/*}*/\n\n/*.media-object {*/\n/*    display: block*/\n/*}*/\n\n/*.center-block {*/\n/*    margin-left: auto;*/\n/*    margin-right: auto*/\n/*}*/\n\n/*.alert {*/\n/*    margin-bottom: 20px*/\n/*}*/\n\n/*.list-group-item {*/\n/*    background-color: #fff;*/\n/*    border: 1px solid #ddd*/\n/*}*/\n\n/*.alert {*/\n/*    padding: 15px*/\n/*}*/\n\n/*.alert {*/\n/*    border: 1px solid transparent;*/\n/*    border-radius: 4px*/\n/*}*/\n\n/*.alert h4 {*/\n/*    margin-top: 0;*/\n/*    color: inherit*/\n/*}*/\n\n/*.alert > p + p {*/\n/*    margin-top: 5px*/\n/*}*/\n\n/*.alert .alert-link {*/\n/*    font-weight: 700*/\n/*}*/\n\n/*.alert > p, .alert > ul {*/\n/*    margin-bottom: 0*/\n/*}*/\n\n/*.alert-danger {*/\n/*    background-color: #f2dede;*/\n/*    border-color: #ebccd1;*/\n/*    color: #a94442*/\n/*}*/\n\n/*.alert-danger hr {*/\n/*    border-top-color: #e4b9c0*/\n/*}*/\n\n/*.alert-danger .alert-link {*/\n/*    color: #843534*/\n/*}*/\n\n/*@-webkit-keyframes progress-bar-stripes {*/\n/*    from {*/\n/*        background-position: 40px 0*/\n/*    }*/\n/*    to {*/\n/*        background-position: 0 0*/\n/*    }*/\n/*}*/\n\n/*@-o-keyframes progress-bar-stripes {*/\n/*    from {*/\n/*        background-position: 40px 0*/\n/*    }*/\n/*    to {*/\n/*        background-position: 0 0*/\n/*    }*/\n/*}*/\n\n/*@keyframes progress-bar-stripes {*/\n/*    from {*/\n/*        background-position: 40px 0*/\n/*    }*/\n/*    to {*/\n/*        background-position: 0 0*/\n/*    }*/\n/*}*/\n\n/*.media {*/\n/*    margin-top: 15px*/\n/*}*/\n\n/*.media:first-child {*/\n/*    margin-top: 0*/\n/*}*/\n\n/*.media, .media-body {*/\n/*    zoom: 1;*/\n/*    overflow: hidden*/\n/*}*/\n\n/*.media-body {*/\n/*    width: 10000px*/\n/*}*/\n\n/*.media-right, .media > .pull-right {*/\n/*    padding-left: 10px*/\n/*}*/\n\n/*.media-left, .media > .pull-left {*/\n/*    padding-right: 10px*/\n/*}*/\n\n/*.media-body, .media-left, .media-right {*/\n/*    display: table-cell;*/\n/*    vertical-align: top*/\n/*}*/\n\n/*.media-middle {*/\n/*    vertical-align: middle*/\n/*}*/\n\n/*.media-bottom {*/\n/*    vertical-align: bottom*/\n/*}*/\n\n/*.media-list {*/\n/*    padding-left: 0;*/\n/*    list-style: none*/\n/*}*/\n\n/*.list-group {*/\n/*    margin-bottom: 20px;*/\n/*    padding-left: 0*/\n/*}*/\n\n/*.list-group-item {*/\n/*    position: relative;*/\n/*    display: block;*/\n/*    padding: 10px 15px;*/\n/*    margin-bottom: -1px*/\n/*}*/\n\n/*.list-group-item:first-child {*/\n/*    border-top-right-radius: 4px;*/\n/*    border-top-left-radius: 4px*/\n/*}*/\n\n/*.list-group-item:last-child {*/\n/*    margin-bottom: 0;*/\n/*    border-bottom-right-radius: 4px;*/\n/*    border-bottom-left-radius: 4px*/\n/*}*/\n\n/*a.list-group-item, button.list-group-item {*/\n/*    color: #555*/\n/*}*/\n\n/*a.list-group-item:focus, a.list-group-item:hover, button.list-group-item:focus, button.list-group-item:hover {*/\n/*    text-decoration: none;*/\n/*    color: #555;*/\n/*    background-color: #f5f5f5*/\n/*}*/\n\n/*button.list-group-item {*/\n/*    width: 100%;*/\n/*    text-align: left*/\n/*}*/\n\n/*.list-group-item.disabled, .list-group-item.disabled:focus, .list-group-item.disabled:hover {*/\n/*    background-color: #eee;*/\n/*    color: #777;*/\n/*    cursor: not-allowed*/\n/*}*/\n\n/*.list-group-item.disabled .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text {*/\n/*    color: #777*/\n/*}*/\n\n/*.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {*/\n/*    z-index: 2;*/\n/*    color: #fff;*/\n/*    background-color: #337ab7;*/\n/*    border-color: #337ab7*/\n/*}*/\n\n/*.list-group-item.active .list-group-item-text, .list-group-item.active:focus .list-group-item-text, .list-group-item.active:hover .list-group-item-text {*/\n/*    color: #c7ddef*/\n/*}*/\n\n/*.list-group-item-danger {*/\n/*    color: #a94442;*/\n/*    background-color: #f2dede*/\n/*}*/\n\n/*a.list-group-item-danger, button.list-group-item-danger {*/\n/*    color: #a94442*/\n/*}*/\n\n/*a.list-group-item-danger:focus, a.list-group-item-danger:hover, button.list-group-item-danger:focus, button.list-group-item-danger:hover {*/\n/*    color: #a94442;*/\n/*    background-color: #ebcccc*/\n/*}*/\n\n/*a.list-group-item-danger.active, a.list-group-item-danger.active:focus, a.list-group-item-danger.active:hover, button.list-group-item-danger.active, button.list-group-item-danger.active:focus, button.list-group-item-danger.active:hover {*/\n/*    color: #fff;*/\n/*    background-color: #a94442;*/\n/*    border-color: #a94442*/\n/*}*/\n\n/*.list-group-item-text {*/\n/*    margin-bottom: 0;*/\n/*    line-height: 1.3*/\n/*}*/\n\n/*.embed-responsive {*/\n/*    position: relative;*/\n/*    display: block;*/\n/*    height: 0;*/\n/*    padding: 0;*/\n/*    overflow: hidden*/\n/*}*/\n\n/*.embed-responsive .embed-responsive-item, .embed-responsive embed, .embed-responsive iframe, .embed-responsive object, .embed-responsive video {*/\n/*    position: absolute;*/\n/*    top: 0;*/\n/*    left: 0;*/\n/*    bottom: 0;*/\n/*    height: 100%;*/\n/*    width: 100%;*/\n/*    border: 0*/\n/*}*/\n\n/*.embed-responsive-16by9 {*/\n/*    padding-bottom: 56.25%*/\n/*}*/\n\n/*.embed-responsive-4by3 {*/\n/*    padding-bottom: 75%*/\n/*}*/\n\n/*.well {*/\n/*    padding: 19px;*/\n/*    margin-bottom: 20px;*/\n/*    background-color: #f5f5f5;*/\n/*    border: 1px solid #e3e3e3;*/\n/*    border-radius: 4px;*/\n/*    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);*/\n/*    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05)*/\n/*}*/\n\n/*.well-lg {*/\n/*    padding: 24px;*/\n/*    border-radius: 6px*/\n/*}*/\n\n/*.well-sm {*/\n/*    padding: 9px;*/\n/*    border-radius: 3px*/\n/*}*/\n\n/*.close {*/\n/*    font-weight: 700;*/\n/*    line-height: 1;*/\n/*    color: #000;*/\n/*    text-shadow: 0 1px 0 #fff;*/\n/*    opacity: .2*/\n/*}*/\n\n/*.close:focus, .close:hover {*/\n/*    color: #000;*/\n/*    text-decoration: none;*/\n/*    cursor: pointer;*/\n/*    opacity: .5*/\n/*}*/\n\n/*button.close {*/\n/*    padding: 0;*/\n/*    cursor: pointer;*/\n/*    background: 0 0;*/\n/*    border: 0;*/\n/*    -webkit-appearance: none*/\n/*}*/\n\n/*.btn-toolbar:after, .btn-toolbar:before, .clearfix:after, .clearfix:before, .container-fluid:after, .container-fluid:before, .container:after, .container:before, .form-horizontal .form-group:after, .form-horizontal .form-group:before, .nav:after, .nav:before, .row:after, .row:before {*/\n/*    content: \" \";*/\n/*    display: table*/\n/*}*/\n\n/*.logo:before, .mobile-home:before, .slick-track:after, .slick-track:before {*/\n/*    content: ''*/\n/*}*/\n\n/*.btn-toolbar:after, .clearfix:after, .container-fluid:after, .container:after, .form-horizontal .form-group:after, .nav:after, .row:after {*/\n/*    clear: both*/\n/*}*/\n\n/*.center-block {*/\n/*    display: block*/\n/*}*/\n\n/*.pull-right {*/\n/*    float: right !important*/\n/*}*/\n\n/*.pull-left {*/\n/*    float: left !important*/\n/*}*/\n\n/*.show {*/\n/*    display: block !important*/\n/*}*/\n\n/*.hidden, .visible-lg, .visible-lg-block, .visible-lg-inline, .visible-lg-inline-block, .visible-md, .visible-md-block, .visible-md-inline, .visible-md-inline-block, .visible-sm, .visible-sm-block, .visible-sm-inline, .visible-sm-inline-block, .visible-xs, .visible-xs-block, .visible-xs-inline, .visible-xs-inline-block {*/\n/*    display: none !important*/\n/*}*/\n\n/*@-ms-viewport {*/\n/*    width: device-width*/\n/*}*/\n\n/*@media (max-width: 767px) {*/\n/*    .visible-xs {*/\n/*        display: block !important*/\n/*    }*/\n\n/*    table.visible-xs {*/\n/*        display: table !important*/\n/*    }*/\n\n/*    tr.visible-xs {*/\n/*        display: table-row !important*/\n/*    }*/\n\n/*    th.visible-xs {*/\n/*        display: table-cell !important*/\n/*    }*/\n\n/*    .visible-xs-block {*/\n/*        display: block !important*/\n/*    }*/\n\n/*    .visible-xs-inline {*/\n/*        display: inline !important*/\n/*    }*/\n\n/*    .visible-xs-inline-block {*/\n/*        display: inline-block !important*/\n/*    }*/\n/*}*/\n\n/*@media (min-width: 768px) and (max-width: 767px) {*/\n/*    .visible-sm {*/\n/*        display: block !important*/\n/*    }*/\n\n/*    table.visible-sm {*/\n/*        display: table !important*/\n/*    }*/\n\n/*    tr.visible-sm {*/\n/*        display: table-row !important*/\n/*    }*/\n\n/*    th.visible-sm {*/\n/*        display: table-cell !important*/\n/*    }*/\n\n/*    .visible-sm-block {*/\n/*        display: block !important*/\n/*    }*/\n\n/*    .visible-sm-inline {*/\n/*        display: inline !important*/\n/*    }*/\n\n/*    .visible-sm-inline-block {*/\n/*        display: inline-block !important*/\n/*    }*/\n/*}*/\n\n/*@media (min-width: 768px) and (max-width: 1053px) {*/\n/*    .visible-md {*/\n/*        display: block !important*/\n/*    }*/\n\n/*    table.visible-md {*/\n/*        display: table !important*/\n/*    }*/\n\n/*    tr.visible-md {*/\n/*        display: table-row !important*/\n/*    }*/\n\n/*    th.visible-md {*/\n/*        display: table-cell !important*/\n/*    }*/\n\n/*    .visible-md-block {*/\n/*        display: block !important*/\n/*    }*/\n\n/*    .visible-md-inline {*/\n/*        display: inline !important*/\n/*    }*/\n\n/*    .visible-md-inline-block {*/\n/*        display: inline-block !important*/\n/*    }*/\n/*}*/\n\n/*@media (min-width: 1054px) {*/\n/*    .visible-lg {*/\n/*        display: block !important*/\n/*    }*/\n\n/*    table.visible-lg {*/\n/*        display: table !important*/\n/*    }*/\n\n/*    tr.visible-lg {*/\n/*        display: table-row !important*/\n/*    }*/\n\n/*    th.visible-lg {*/\n/*        display: table-cell !important*/\n/*    }*/\n\n/*    .visible-lg-block {*/\n/*        display: block !important*/\n/*    }*/\n\n/*    .visible-lg-inline {*/\n/*        display: inline !important*/\n/*    }*/\n\n/*    .visible-lg-inline-block {*/\n/*        display: inline-block !important*/\n/*    }*/\n\n/*    .hidden-lg {*/\n/*        display: none !important*/\n/*    }*/\n/*}*/\n\n/*@media (max-width: 767px) {*/\n/*    .hidden-xs {*/\n/*        display: none !important*/\n/*    }*/\n/*}*/\n\n/*@media (min-width: 768px) and (max-width: 767px) {*/\n/*    .hidden-sm {*/\n/*        display: none !important*/\n/*    }*/\n/*}*/\n\n/*@media (min-width: 768px) and (max-width: 1053px) {*/\n/*    .hidden-md {*/\n/*        display: none !important*/\n/*    }*/\n/*}*/\n\n/*.visible-print {*/\n/*    display: none !important*/\n/*}*/\n\n/*@media print {*/\n/*    .visible-print {*/\n/*        display: block !important*/\n/*    }*/\n\n/*    table.visible-print {*/\n/*        display: table !important*/\n/*    }*/\n\n/*    tr.visible-print {*/\n/*        display: table-row !important*/\n/*    }*/\n\n/*    th.visible-print {*/\n/*        display: table-cell !important*/\n/*    }*/\n/*}*/\n\n/*.visible-print-block {*/\n/*    display: none !important*/\n/*}*/\n\n/*@media print {*/\n/*    .visible-print-block {*/\n/*        display: block !important*/\n/*    }*/\n/*}*/\n\n/*.visible-print-inline {*/\n/*    display: none !important*/\n/*}*/\n\n/*@media print {*/\n/*    .visible-print-inline {*/\n/*        display: inline !important*/\n/*    }*/\n/*}*/\n\n/*.visible-print-inline-block {*/\n/*    display: none !important*/\n/*}*/\n\n/*@media print {*/\n/*    .visible-print-inline-block {*/\n/*        display: inline-block !important*/\n/*    }*/\n\n/*    .hidden-print {*/\n/*        display: none !important*/\n/*    }*/\n/*}*/\n.slick-list, .slick-slider, .slick-track {\n    position: relative;\n    display: block\n}\n.slick-slider {\n    box-sizing: border-box;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y\n}\n.slick-list {\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n    z-index: 1\n}\n.slick-list:focus {\n    outline: 0\n}\n.slick-list.dragging {\n    cursor: pointer;\n    cursor: hand\n}\n.slick-slider .slick-list, .slick-slider .slick-track {\n    transform: translate3d(0, 0, 0)\n}\n.slick-track {\n    top: 0;\n    left: 0;\n    margin-left: auto;\n    margin-right: auto\n}\n.slick-track:after, .slick-track:before {\n    display: table\n}\n.slick-track:after {\n    clear: both\n}\n.slick-loading .slick-track {\n    visibility: hidden\n}\n.slick-slide {\n    display: none;\n    float: left;\n    height: 100%;\n    min-height: 1px;\n}\n[dir=rtl] .slick-slide {\n    float: right\n}\n.slick-slide img {\n    display: block\n}\n.slick-slide.slick-loading img {\n    display: none\n}\n.slick-slide.dragging img {\n    pointer-events: none\n}\n.slick-initialized .slick-slide {\n    display: block\n}\n.slick-loading .slick-slide {\n    visibility: hidden\n}\n.slick-vertical .slick-slide {\n    display: block;\n    height: auto;\n    border: 1px solid transparent\n}\n.slick-arrow.slick-hidden {\n    display: none\n}\n.rotate-vert-center {\n    animation: rotate-vert-center .5s cubic-bezier(.455, .03, .515, .955) both\n}\n@keyframes rotate-vert-center {\n0% {\n        transform: rotateY(0)\n}\n100% {\n        transform: rotateY(360deg)\n}\n}\n.animista-slide-in-top {\n    animation: slide-in-top .5s cubic-bezier(.25, .46, .45, .94) both\n}\n@keyframes flip-in-hor-bottom {\n0% {\n        transform: rotateX(80deg);\n        opacity: 0\n}\n100% {\n        transform: rotateX(0);\n        opacity: 1\n}\n}\n@keyframes puff-in-center {\n0% {\n        transform: scale(2);\n        filter: blur(2px);\n        opacity: 0\n}\n100% {\n        transform: scale(1);\n        filter: blur(0);\n        opacity: 1\n}\n}\n.slick-next, .slick-prev {\n    font-size: 0;\n    line-height: 0;\n    position: absolute;\n    top: 90px;\n    display: block;\n    width: 56px;\n    height: 62px;\n    margin-top: -10px;\n    padding: 0 0 10px;\n    cursor: pointer;\n    color: transparent;\n    border: none;\n    outline: 0;\n    background: 0 0;\n    z-index: 2\n}\n.slick-next:focus, .slick-next:hover, .slick-prev:focus, .slick-prev:hover {\n    color: transparent;\n    background: 0 0;\n    outline: 0\n}\n.slick-next:focus:before, .slick-next:hover:before, .slick-prev:focus:before, .slick-prev:hover:before {\n    opacity: 1\n}\n.slick-next.slick-disabled:before, .slick-prev.slick-disabled:before {\n    opacity: .1\n}\n.slick-next:before, .slick-prev:before {\n    font-size: 20px;\n    line-height: 1;\n    color: #fff;\n    padding: 16px;\n    border-radius: 50%;\n    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, .2);\n    transition: opacity .5s ease\n}\n.html-lesson-content .slick-arrow:before {\n    background-color: #0b0757;\n}\n.slick-prev {\n    left: 0\n}\n[dir=rtl] .slick-prev {\n    right: 0;\n    left: auto\n}\n\n/*.slick-next:before, [dir=rtl] .slick-prev:before {*/\n/*    content: \"\\ea3c\"*/\n/*}*/\n.slick-next {\n    right: 0\n}\n[dir=rtl] .slick-next {\n    right: auto;\n    left: 0\n}\n\n/*[dir=rtl] .slick-next:before {*/\n/*    content: \"\\ea40\"*/\n/*}*/\n.min-height-container {\n    position: relative;\n    min-height: 250px\n}\n#loading-view-overlay, .start-overlay {\n    position: absolute;\n    text-align: center;\n    cursor: pointer;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0\n}\n#loading-view-overlay {\n    font-size: 28px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -ms-flex-pack: center;\n    justify-content: center;\n    color: rgba(0, 0, 0, .54)\n}\n.flash-card-mute, .flash-card-slide-number, .intro-mute, .intro-slide-number, .listening-slide-number, .sidebyside-slide-number, .slide-footer-text, .slide-header-sample, .slide-header-text {\n    display: none\n}\n#loading-view-overlay i {\n    background-color: transparent;\n    font-size: 90px\n}\n#loading-view-overlay > div {\n    margin: 12px 0;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center\n}\n.start-overlay {\n    padding-top: 100px;\n    z-index: 3;\n    background-color: rgba(255, 255, 255, .5)\n}\n.start-icon-wrapper {\n    padding: 6px 12px;\n    font-size: 36px;\n    background-color: #0b0757;\n    border-radius: 5%;\n    color: #fff;\n    border: none;\n    cursor: pointer;\n    outline: inherit;\n    line-height: 0\n}\n.start-icon-wrapper:focus, .start-icon-wrapper:hover {\n    background-color: #fdd76e;\n    color: rgba(0, 0, 0, .87);\n    outline: none;\n}\n.next-slide {\n    min-height: 230px\n}\n.lesson-slide {\n    outline: 0\n}\n.border-slide {\n    margin: 4px\n}\n.card-background {\n    border-radius: 2px;\n    background-color: #fff;\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .2)\n}\n.english-text {\n    color: rgba(0, 0, 0, .87);\n    font-family: Georgia, serif\n}\n.spalan-text {\n    color: #7b1fa2;\n    font-family: Georgia, serif\n}\n.start-slide {\n    text-align: center\n}\n.start-slide > i.icon-play-circled2 {\n    font-size: 126px;\n    color: rgba(0, 0, 0, .54)\n}\n.intro-slide {\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .2)\n}\n.intro-section {\n    min-height: 200px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -ms-flex-pack: center;\n    justify-content: center;\n    padding: 20px 30px 16px\n}\n.intro-slide, .multi-choice-question-area {\n    position: relative;\n    padding-bottom: 1px\n}\n.flash-card-slide-number, .intro-slide-number, .listening-slide-number, .sidebyside-slide-number {\n    position: absolute;\n    top: 12px;\n    left: 12px;\n    font-size: 12px;\n    color: rgba(0, 0, 0, .54);\n    line-height: normal\n}\n.intro-e-text, .intro-s-text {\n    font-size: 20px;\n    line-height: 24px;\n    text-align: center\n}\n.intro-text {\n    display: inline;\n    padding: 4px\n}\n.intro-e-text {\n    margin-bottom: 16px\n}\n.intro-s-text {\n    cursor: pointer;\n    margin-top: 16px\n}\n.intro-lht-watermark {\n    text-align: center;\n    color: rgba(0, 0, 0, .38);\n    font-size: 12px\n}\n.flash-card-repeat-area, .intro-repeat-area {\n    border-top: none;\n    text-align: left;\n    position: relative;\n    color: rgba(0, 0, 0, .87);\n    text-transform: uppercase;\n    font-size: 16px;\n    line-height: 20px\n}\n.flash-card-repeat-area {\n    bottom: 0;\n    width: 100%;\n    margin-left: -30px;\n    position: absolute\n}\n.slick-current .flash-card-repeat-area, .slick-current .intro-repeat-area {\n    border-top: 1px solid rgba(0, 0, 0, .09)\n}\n.slick-current .flash-card-slide-number, .slick-current .intro-slide-number, .slick-current .listening-slide-number, .slick-current .sidebyside-slide-number {\n    display: inherit\n}\n.slick-current .flash-card-mute, .slick-current .intro-mute, .slick-current .memory-mute {\n    position: absolute;\n    top: 1px;\n    right: 2px;\n    color: rgba(0, 0, 0, .38);\n    display: inherit\n}\n.slick-current .flash-card-mute {\n    top: 6px;\n    right: -22px\n}\n.slick-current .memory-mute {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n    justify-content: center\n}\n.slick-current .game-over .memory-mute {\n    text-align: center;\n    position: static;\n    padding-top: 20px\n}\n.slick-current .multi-choice-mute {\n    display: inherit;\n    position: static;\n    text-align: right;\n    color: rgba(0, 0, 0, .38)\n}\n.slick-current .icon-volume-off, .slick-current .icon-volume-up, .slick-current .intro-mute .icon-pause, .slick-current .intro-mute .icon-play {\n    cursor: pointer;\n    padding: 12px;\n    font-size: 26px;\n    color: rgba(0, 0, 0, .54);\n    display: none\n}\n.dropdown-area, .slick-current .sound-volume-0 .icon-play, .slick-current .sound-volume-0 .icon-volume-off, .slick-current .sound-volume-1 .icon-pause, .slick-current .sound-volume-1 .icon-volume-up {\n    display: inline-block\n}\n.slick-current .game-over .memory-game .icon-volume-off, .slick-current .game-over .memory-game .icon-volume-up {\n    display: none\n}\n.intro-repeat-self-text, .intro-repeat-teacher-text {\n    visibility: hidden;\n    font-weight: 700;\n    padding: 16px;\n    width: calc(100% - 60px);\n    opacity: .1;\n    transition: opacity .25s ease-in-out\n}\n.repeat .intro-repeat-self-text, .repeat-with-teacher .intro-repeat-teacher-text {\n    visibility: inherit;\n    opacity: 1\n}\n.flash-card-game .flash-card-square {\n    display: none;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center;\n    text-align: center;\n    font-size: 20px;\n    line-height: 24px\n}\n.flash-card-section, .sidebyside-section {\n    min-height: 200px;\n    -ms-flex-direction: column\n}\n.flash-card-game .card-showing-ve .flash-card-square.english, .flash-card-game .card-showing-vs .flash-card-square.spalan {\n    display: inherit\n}\n.flash-card-section {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    flex-direction: column;\n    -ms-flex-pack: center;\n    justify-content: center;\n    padding: 20px 30px 70px\n}\n.flash-card-game .select-card {\n    display: none\n}\n.card-button {\n    min-width: 200px;\n    border-radius: 2px;\n    background-color: #00bcd4;\n    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, .2);\n    color: rgba(0, 0, 0, .87);\n    line-height: 60px;\n    padding: 0 12px;\n    margin: 24px 12px 0;\n    border: none;\n    outline: 0\n}\n.switch-card {\n    min-width: 48px\n}\n.dropdown-area {\n    position: relative\n}\n.switch-card-menu {\n    position: absolute;\n    bottom: 10px;\n    left: -80px;\n    display: none;\n    background-color: #fff;\n    list-style: none;\n    padding: 6px 16px;\n    margin: 0;\n    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, .2);\n    color: rgba(0, 0, 0, .87);\n    font-size: 20px;\n    line-height: 24px\n}\n.switch-card-menu.open {\n    display: block\n}\n.switch-card-menu li {\n    padding: 6px 0;\n    text-align: left\n}\n.language-select-ve .selection-ve:before, .language-select-vs .selection-vs:before {\n    content: \"\\EA10\";\n    padding-right: 10px\n}\n.flash-card-control-area {\n    display: none;\n    text-align: center\n}\n.slick-current .flash-card-control-area {\n    display: block\n}\n.sidebyside-section {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    flex-direction: column;\n    -ms-flex-pack: center;\n    justify-content: center;\n    padding: 20px 30px\n}\n.sidebyside-section .sidebyside-question {\n    display: none\n}\n.sidebyside-section .sidebyside-question.active {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -ms-flex-pack: start;\n    justify-content: flex-start\n}\n.sidebyside-section .click-answer-text {\n    margin-bottom: 32px;\n    color: rgba(0, 0, 0, .87);\n    font-size: 22px;\n    line-height: normal;\n    font-weight: 300;\n    display: inline-block;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center\n}\n.sidebyside-section .sidebyside-square {\n    font-size: 20px;\n    line-height: 26px;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center;\n    margin-bottom: 24px;\n    text-align: center\n}\n.sidebyside-game.game-on .sidebyside-game-over, .sidebyside-game.game-over .sidebyside-game-on {\n    display: none\n}\n.sidebyside-game.game-on .sidebyside-game-on, .sidebyside-game.game-over .sidebyside-game-over {\n    display: inherit\n}\n.sidebyside-answer-area .click-yes-or-no-text {\n    display: none\n}\n.sidebyside-answer-area .sidebyside-answers {\n    margin-top: 20px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n    justify-content: center\n}\n.sidebyside-answer-area .slide-button {\n    line-height: 48px;\n    width: 150px;\n    border-radius: 2px;\n    background-color: #0b0757;\n    color: #fff;\n    text-transform: uppercase;\n    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, .2);\n    margin: 4px;\n    text-align: center;\n    cursor: pointer\n}\n.sidebyside-answer-area .slide-button .iconarea i {\n    display: none\n}\n.sidebyside-answer-area.yes-correct .slide-button.yes {\n    background-color: #65c100\n}\n.sidebyside-answer-area.yes-incorrect .slide-button.yes {\n    background-color: #ff3f5f\n}\n.sidebyside-answer-area.no-correct .slide-button.no {\n    background-color: #65c100\n}\n.sidebyside-answer-area.no-incorrect .slide-button.no {\n    background-color: #ff3f5f\n}\n.sidebyside-answer-area.no-correct .slide-button.no .iconarea > .icon-ok, .sidebyside-answer-area.no-incorrect .slide-button.no .iconarea > .icon-cancel, .sidebyside-answer-area.yes-correct .slide-button.yes .iconarea > .icon-ok, .sidebyside-answer-area.yes-incorrect .slide-button.yes .iconarea > .icon-cancel {\n    display: inherit\n}\n.sidebyside-answer-area.no-correct .slide-button.no .text-area, .sidebyside-answer-area.no-incorrect .slide-button.no .text-area, .sidebyside-answer-area.yes-correct .slide-button.yes .text-area, .sidebyside-answer-area.yes-incorrect .slide-button.yes .text-area, .tictactoe-loser-message, .tictactoe-try-again-button.slide-button, .tictactoe-winner-message {\n    display: none\n}\n.sidebyside-answer-area.no-correct .slide-button, .sidebyside-answer-area.no-incorrect .slide-button, .sidebyside-answer-area.yes-correct .slide-button, .sidebyside-answer-area.yes-incorrect .slide-button {\n    cursor: auto;\n    box-shadow: 0 6px 6px 0 transparent\n}\n.sidebyside-section .score-text {\n    margin-bottom: 24px;\n    color: rgba(0, 0, 0, .54);\n    font-size: 24px;\n    line-height: normal;\n    font-weight: 300;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center\n}\n.right-text, .skipped-text, .wrong-text {\n    margin-bottom: 12px;\n    color: rgba(0, 0, 0, .54);\n    font-size: 18px;\n    line-height: normal;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center\n}\n.memory-try-again-button.slide-button, .multi-choice-try-again-button.slide-button, .sidebyside-game-over .slide-button, .tictactoe-try-again-button.slide-button {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 13px 12px;\n    color: #fff;\n    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, .2);\n    cursor: pointer;\n    background-color: #00bcd4;\n    border-radius: 2px;\n    text-transform: uppercase\n}\n.memory-number, .sidebyside-game-over .slide-button {\n    -ms-flex-item-align: center;\n    text-align: center;\n    -ms-grid-row-align: center;\n    align-self: center\n}\n.sidebyside-game-over .slide-button {\n    margin: 12px 4px\n}\n.tictactoe-squares-area {\n    text-align: center\n}\n.memory-try-again-button.slide-button, .multi-choice-try-again-button.slide-button, .tictactoe-try-again-button.slide-button {\n    margin: 32px auto 0;\n    text-align: center;\n    max-width: 280px\n}\n.memory-try-again-button.slide-button {\n    margin: 12px auto 0\n}\n.loser .tictactoe-try-again-button.slide-button, .winner .tictactoe-try-again-button.slide-button {\n    display: inherit\n}\n.memory-squares, .tictactoe-row {\n    display: -ms-flexbox;\n    -ms-flex-pack: center\n}\n.tictactoe-select-text {\n    text-align: center;\n    color: rgba(0, 0, 0, .54);\n    font-size: 22px;\n    margin-bottom: 24px\n}\n.tictactoe-row {\n    display: flex;\n    justify-content: center\n}\n.tictactoe-squares {\n    display: inline-block;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    position: relative\n}\n.tictactoe-square {\n    line-height: 80px;\n    height: 80px;\n    width: 80px;\n    border-radius: 2px;\n    background-color: #fff;\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .2);\n    margin: 4px;\n    cursor: pointer;\n    text-align: center;\n    color: #fff;\n    font-size: 20px\n}\n.tictactoe-square.answering, .tictactoe-square.right, .tictactoe-square.wrong, .tictactoe-squares.game-over .tictactoe-square {\n    cursor: auto;\n    box-shadow: 0 3px 3px 0 transparent\n}\n.tictactoe-square i {\n    display: none\n}\n.tictactoe-square.answering {\n    background-color: rgba(0, 0, 0, .09)\n}\n.tictactoe-square.wrong {\n    background-color: #ff3f5f\n}\n.tictactoe-square.right {\n    background-color: #65c100\n}\n.link-to-us-cta textarea, .multi-choice-container .answer-area {\n    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, .2)\n}\n.tictactoe-square.right i.icon-circle-thin, .tictactoe-square.wrong i.icon-cancel {\n    display: inherit\n}\n.tictactoe-square.answering i.icon-help {\n    color: rgba(0, 0, 0, .87);\n    display: inherit\n}\n.multi-choice-answer-area, .multi-choice-container .question-number-text {\n    display: none\n}\n.tictactoe-square [class^=icon-] {\n    line-height: 80px\n}\n#tictactoe-canvas {\n    z-index: -10;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0\n}\n.memory-time-area, .menu-language {\n    position: relative\n}\n.listening-careful-area {\n    padding: 32px 16px 0;\n    color: rgba(0, 0, 0, .87);\n    font-size: 24px;\n    text-align: center\n}\n.question-text-area {\n    padding: 16px;\n    color: rgba(0, 0, 0, .87);\n    font-size: 20px;\n    line-height: 26px;\n    text-align: center\n}\n.multi-choice-container .click-answer-text {\n    color: rgba(0, 0, 0, .54);\n    font-size: 20px;\n    margin-top: 20px;\n    margin-bottom: 8px\n}\n.multi-choice-container .answer-area {\n    padding: 12px 16px;\n    border-radius: 2px;\n    background-color: #0b0757;\n    line-height: 24px;\n    color: #fff;\n    font-size: 18px;\n    font-weight: 500;\n    text-align: center;\n    margin: 8px 0;\n    cursor: pointer\n}\n.multi-choice-container .answer-area.right {\n    cursor: auto;\n    background-color: #65c100\n}\n.multi-choice-container .answer-area.wrong {\n    cursor: auto;\n    background-color: #ff3f5f\n}\n.arrow-go, .home-learn-link, .lesson-activity, .lht-modal-exit .icon-cancel, .listening-replay-button, .memory-square, .menu-language-control, .nobutton-style, .outer-icon, .share-closed, h1.lesson-index-link {\n    cursor: pointer\n}\n.slick-current .multi-choice-answer-area {\n    display: inherit\n}\n.memory-sound, .multi-choice-sound {\n    font-size: 20px\n}\n.memory-square-1-text, .memory-square-2-text {\n    color: rgba(0, 0, 0, .87);\n    font-size: 24px;\n    line-height: 30px;\n    text-align: center;\n    margin-bottom: 16px;\n    display: none\n}\n.memory-active-square-0 .memory-square-1-text, .memory-active-square-1 .memory-square-2-text, .memory-active-square-2 .memory-square-1-text {\n    display: inherit\n}\n.memory-squares {\n    display: flex;\n    justify-content: center;\n    -ms-flex-direction: column;\n    flex-direction: column\n}\n.memory-row {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-item-align: center;\n    align-self: center\n}\n.memory-square {\n    height: 56px;\n    width: 56px;\n    line-height: 56px;\n    border-radius: 2px;\n    background-color: #fff;\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .2);\n    font-size: 20px;\n    color: #fff;\n    margin: 8px;\n    text-align: center\n}\n.memory-square [class^=icon-] {\n    line-height: 56px\n}\n.memory-square .display-one, .memory-square .display-two {\n    background-color: #ff3f5f\n}\n.memory-square .icon-ok {\n    background-color: #65c100;\n    cursor: auto;\n    box-shadow: 0 3px 3px 0 transparent\n}\n.memory-square .display-one, .memory-square .display-two, .memory-square .icon-ok {\n    display: none\n}\n.memory-square.one .display-one, .memory-square.right .icon-ok, .memory-square.two .display-two {\n    display: inherit\n}\n.memory-choices {\n    padding-top: 12px;\n    max-width: 450px;\n    margin: auto\n}\n.memory-active-square-0 .memory-choices {\n    display: none\n}\n.memory-choice-1, .memory-choice-2 {\n    padding: 4px 0;\n    display: none\n}\n.memory-active-square-1 .memory-choice-1, .memory-active-square-2 .memory-choice-1, .memory-active-square-2 .memory-choice-2 {\n    display: inherit\n}\n.memory-choice-1 > div, .memory-choice-2 > div {\n    border-radius: 2px;\n    line-height: 24px;\n    font-size: 18px;\n    font-weight: 500;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    background-color: rgba(0, 0, 0, .04)\n}\n.memory-number {\n    width: 35px;\n    color: rgba(0, 0, 0, .54)\n}\n.memory-answer-1, .memory-answer-2 {\n    padding: 8px 40px 8px 8px;\n    text-align: center;\n    width: 100%;\n    border-left: 1px solid rgba(0, 0, 0, .09)\n}\n.memory-time-area {\n    height: 48px;\n    text-align: left;\n    color: rgba(0, 0, 0, .54)\n}\n.memory-time {\n    font-size: 18px;\n    text-align: center;\n    display: inline-block;\n    -ms-flex-item-align: center;\n    -ms-grid-row-align: center;\n    align-self: center\n}\n.body-base-modal-open:not(.mobile-menu-open) .lht-nav-bar, .flash-lesson-footer, .mobile-menu-open .nav-bar-right {\n    display: none\n}\n.listening-replay-button {\n    line-height: 64px;\n    border: 2px solid #9c27b0;\n    border-radius: 50%;\n    text-align: center;\n    height: 64px;\n    width: 64px;\n    font-size: 36px;\n    margin: 12px auto;\n    padding-left: 10px\n}\n.browser-support-message {\n    margin-top: 12px\n}\n.display-rtl .click-answer-text, .display-rtl .memory-ltr, .display-rtl .multi-choice-question-area, .display-rtl .sidebyside-square.left {\n    direction: rtl\n}\n.logo, .nav-bar-right, .nav-bar-right > li {\n    display: inline-block\n}\n@media (min-width: 768px) {\n.html-lesson-content {\n        max-width: 650px;\n        margin: 0 auto\n}\n}\n@media (min-width: 375px) {\n.tictactoe-square {\n        line-height: 92px;\n        height: 92px;\n        width: 92px\n}\n.tictactoe-square [class^=icon-] {\n        line-height: 92px\n}\n}\nfigure {\n    -webkit-margin-before: 0;\n    margin-block-start: 0;\n    -webkit-margin-after: 0;\n    margin-block-end: 0;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n    -webkit-margin-end: 0;\n    margin-inline-end: 0;\n    all: unset\n}\n.slide-in-left {\n    animation-name: slide-in-left;\n    animation-duration: .5s;\n    animation-fill-mode: both\n}\n@keyframes slide-in-left {\n0% {\n        transform: translateX(-100%);\n        visibility: visible\n}\n100% {\n        transform: translateX(0)\n}\n}\n.slide-in-top {\n    animation: slide-in-top .5s cubic-bezier(.25, .46, .45, .94) both\n}\n@keyframes slide-in-top {\n0% {\n        transform: translateY(-1000px);\n        opacity: 0\n}\n100% {\n        transform: translateY(0);\n        opacity: 1\n}\n}\n\n/*.dropdown-toggle:focus {*/\n/*    outline: -webkit-focus-ring-color auto 5px*/\n/*}*/\n\n/*a:focus, button:focus {*/\n/*    outline: #00f solid 2px;*/\n/*    outline-offset: -2px*/\n/*}*/\n\n/*.nobutton-style, .vocab-box {*/\n/*    color: inherit;*/\n/*    outline: inherit*/\n/*}*/\n\n/*.nobutton-style {*/\n/*    background: 0 0;*/\n/*    border: none;*/\n/*    font: inherit;*/\n/*    padding: 0;*/\n/*    -webkit-appearance: none;*/\n/*    text-align: left*/\n/*}*/\n\n/*.outer-icon {*/\n/*    border: 2px solid #9c27b0;*/\n/*    border-radius: 50%;*/\n/*    font-size: 48px;*/\n/*    margin-right: 16px;*/\n/*    direction: ltr;*/\n/*    line-height: normal*/\n/*}*/\n\n/*.outer-icon.svg-icon {*/\n/*    line-height: 0*/\n/*}*/\n\n/*.display-rtl .outer-icon {*/\n/*    margin-right: 0;*/\n/*    margin-left: 16px;*/\n/*    float: right*/\n/*}*/\n\n/*.iconarea, .iconarea [class^=icon-] {*/\n/*    line-height: 48px*/\n/*}*/\n\n/*body {*/\n/*    line-height: normal;*/\n/*    color: rgba(0, 0, 0, .87);*/\n/*    font-family: Helvetica, Arial, sans-serif;*/\n/*    margin-top: 76px;*/\n/*    -webkit-text-size-adjust: none;*/\n/*    -ms-text-size-adjust: none;*/\n/*    text-size-adjust: none*/\n/*}*/\n\n/*.page-esl {*/\n/*    margin-top: 24px*/\n/*}*/\n\n/*.lht-nav-bar {*/\n/*    background-color: #fff;*/\n/*    border-bottom: #7b1fa2 2px solid;*/\n/*    padding: 0;*/\n/*    margin: 0 auto;*/\n/*    min-height: 72px;*/\n/*    width: 100%;*/\n/*    overflow: hidden;*/\n/*    position: fixed;*/\n/*    top: 0;*/\n/*    left: 0;*/\n/*    right: 0;*/\n/*    font-size: 16px;*/\n/*    z-index: 1030*/\n/*}*/\n\n/*@media (min-width: 768px) {*/\n/*    .lht-nav-bar {*/\n/*        width: 768px*/\n/*    }*/\n/*}*/\n\n/*@media (min-width: 1024px) {*/\n/*    .lht-nav-bar {*/\n/*        width: 1024px*/\n/*    }*/\n/*}*/\n\n/*.logo {*/\n/*    padding: 25px 15px 24px;*/\n/*    min-width: 134px;*/\n/*    font-size: 12px*/\n/*}*/\n\n/*.logo:before {*/\n/*    !*background: url(../../html/lht/lht-all-in-one-min.png) no-repeat;*!*/\n/*    background-position: 0 -177px;*/\n/*    height: 23px;*/\n/*    width: 104px;*/\n/*    position: absolute*/\n/*}*/\n\n/*.mobile-home {*/\n/*    padding: 10px 10px 12px 14px;*/\n/*    height: 46px*/\n/*}*/\n\n/*.mobile-home:before {*/\n/*    !*background: url(../../html/lht/lht-all-in-one-min.png) no-repeat;*!*/\n/*    background-position: -105px -177px;*/\n/*    height: 22px;*/\n/*    width: 38px;*/\n/*    position: absolute*/\n/*}*/\n\n/*.mobile-home .caret {*/\n/*    margin-left: 48px*/\n/*}*/\n\n/*.lht-nav-bar .flag {*/\n/*    transform: scale(1.2)*/\n/*}*/\n\n/*.nav-bar-right {*/\n/*    float: right;*/\n/*    text-transform: uppercase;*/\n/*    margin: 0;*/\n/*    padding: 0;*/\n/*    list-style: none;*/\n/*    max-width: calc(100% - 140px)*/\n/*}*/\n\n/*.nav-bar-right > li {*/\n/*    margin: 0 4px*/\n/*}*/\n\n/*.nav-bar-right li:last-child {*/\n/*    border-left: 1px solid rgba(0, 0, 0, .09);*/\n/*    margin-right: 0*/\n/*}*/\n\n/*.nav-bar-right a, .nav-bar-right button {*/\n/*    padding: 28px 8px 24px;*/\n/*    border: none;*/\n/*    line-height: normal;*/\n/*    color: rgba(0, 0, 0, .87)*/\n/*}*/\n\n/*.nav-bar-right li:last-child button {*/\n/*    padding-left: 20px;*/\n/*    padding-right: 20px;*/\n/*    line-height: 0*/\n/*}*/\n\n/*@media screen and (max-width: 767px) {*/\n/*    body {*/\n/*        margin-top: 48px*/\n/*    }*/\n\n/*    .lht-nav-bar {*/\n/*        height: 48px;*/\n/*        min-height: 48px*/\n/*    }*/\n/*}*/\n\n/*.body-base-modal-open {*/\n/*    margin-top: 0;*/\n/*    overflow: hidden*/\n/*}*/\n\n/*.anchor-style, a {*/\n/*    color: rgba(0, 0, 0, .54)*/\n/*}*/\n\n/*.anchor-style:hover, a:hover {*/\n/*    text-decoration: none;*/\n/*    color: rgba(0, 0, 0, .87)*/\n/*}*/\n\n/*h1 {*/\n/*    line-height: normal;*/\n/*    font-weight: 300;*/\n/*    margin-top: 38px;*/\n/*    margin-bottom: 32px*/\n/*}*/\n\n/*h2 {*/\n/*    margin-top: 10px;*/\n/*    font-size: 24px;*/\n/*    font-weight: 300*/\n/*}*/\n\n/*h3 {*/\n/*    font-size: 22px;*/\n/*    font-weight: 200*/\n/*}*/\n\n/*body {*/\n/*    font-size: 16px;*/\n/*    background-color: rgba(0, 0, 0, .02)*/\n/*}*/\n\n/*#ajaxResponseArea {*/\n/*    padding-bottom: 20px*/\n/*}*/\n\n/*.lesson-list-container {*/\n/*    clear: both*/\n/*}*/\n\n/*.bottom-bot-al-container {*/\n/*    padding-bottom: 12px*/\n/*}*/\n\n/*.dropdown-menu {*/\n/*    font-size: 16px*/\n/*}*/\n\n/*.input-error {*/\n/*    border: 2px solid red;*/\n/*    background-color: #ffc5c5*/\n/*}*/\n\n/*.menu-link {*/\n/*    margin-bottom: 4px*/\n/*}*/\n\n/*.dropdown-menu > li > a, .menu-link:hover, .nav > li > a {*/\n/*    color: rgba(0, 0, 0, .87)*/\n/*}*/\n\n/*.activity-nav, .menu-language-control, .menu-link a {*/\n/*    font-size: 24px;*/\n/*    line-height: 32px;*/\n/*    padding: 12px 15px;*/\n/*    display: block;*/\n/*    color: rgba(0, 0, 0, .54)*/\n/*}*/\n\n/*.activity-container {*/\n/*    clear: both;*/\n/*    display: -ms-flexbox;*/\n/*    display: flex;*/\n/*    -ms-flex-pack: distribute;*/\n/*    justify-content: space-around;*/\n/*    -ms-flex-wrap: wrap;*/\n/*    flex-wrap: wrap;*/\n/*    padding-top: 12px*/\n/*}*/\n\n/*@media (max-width: 767px) {*/\n/*    .activity-container {*/\n/*        padding-left: 2px;*/\n/*        padding-right: 2px*/\n/*    }*/\n/*}*/\n\n/*.lesson-slide .activity-container {*/\n/*    padding: 12px*/\n/*}*/\n\n/*.activity-container .outer-icon {*/\n/*    margin: 0*/\n/*}*/\n\n/*.menu-language-control:hover, .nav > li > a:focus, .nav > li > a:hover {*/\n/*    color: rgba(0, 0, 0, .87);*/\n/*    background-color: inherit*/\n/*}*/\n\n/*.common-menu-link, .common-menu-link a {*/\n/*    color: rgba(0, 0, 0, .54)*/\n/*}*/\n\n/*.common-menu-link a:hover, .common-menu-link:hover {*/\n/*    color: rgba(0, 0, 0, .87);*/\n/*    background-color: transparent*/\n/*}*/\n\n/*.nav .open > a, .nav .open > a:focus, .nav .open > a:hover {*/\n/*    background-color: rgba(0, 0, 0, .09);*/\n/*    border-color: transparent*/\n/*}*/\n\n/*.lht-footer a:focus, .lht-footer button:focus {*/\n/*    outline-color: #fff*/\n/*}*/\n\n/*@media (max-width: 767px) {*/\n/*    .nav-bar-right {*/\n/*        max-width: calc(100% - 85px)*/\n/*    }*/\n\n/*    .nav-bar-right > li > button {*/\n/*        font-size: 22px;*/\n/*        padding: 11px 12px 9px*/\n/*    }*/\n\n/*    .nav-bar-right li:last-child {*/\n/*        border: none;*/\n/*        vertical-align: top*/\n/*    }*/\n\n/*    .nav-bar-right li:last-child > button {*/\n/*        height: 46px*/\n/*    }*/\n/*}*/\n\n/*.mobile-nav-outer-menu {*/\n/*    overflow: hidden;*/\n/*    display: none*/\n/*}*/\n\n/*.mobile-menu-open .mobile-nav-outer-menu {*/\n/*    display: inherit*/\n/*}*/\n\n/*.min-height-container {*/\n/*    margin: 4px 0*/\n/*}*/\n\n/*.menu-header {*/\n/*    font-size: 24px;*/\n/*    font-weight: 700;*/\n/*    line-height: 24px;*/\n/*    padding: 12px 0;*/\n/*    margin-top: 12px;*/\n/*    display: block*/\n/*}*/\n\n/*.base-modal.esl-modal .current-learning-language, .menu-language-exit, .social-media-share {*/\n/*    display: none*/\n/*}*/\n\n/*.caret {*/\n/*    border-top: 7px dashed;*/\n/*    border-right: 5px solid transparent;*/\n/*    border-left: 5px solid transparent*/\n/*}*/\n\n/*.caret-up .caret, body.mobile-language-list-open .menu-language-control .caret, body.mobile-menu-open .mobile-home .caret {*/\n/*    border-top: inherit;*/\n/*    border-bottom: 7px dashed*/\n/*}*/\n\n/*.home-page-image {*/\n/*    width: 300px*/\n/*}*/\n\n/*.home-header {*/\n/*    padding-bottom: 30px*/\n/*}*/\n\n/*.arrow-go {*/\n/*    background-color: #00bcd4;*/\n/*    color: #fff;*/\n/*    width: 58px;*/\n/*    line-height: 58px;*/\n/*    font-size: 24px;*/\n/*    text-align: center*/\n/*}*/\n\n/*.base-modal {*/\n/*    position: fixed;*/\n/*    height: 100vh;*/\n/*    overflow-y: scroll;*/\n/*    -webkit-overflow-scrolling: touch;*/\n/*    top: 0;*/\n/*    width: 100%;*/\n/*    z-index: 10;*/\n/*    background-color: #fff;*/\n/*    padding: 16px*/\n/*}*/\n\n/*@media (min-width: 768px) {*/\n/*    .base-modal {*/\n/*        padding: 24px 32px 50px*/\n/*    }*/\n/*}*/\n\n/*@media (min-width: 1054px) {*/\n/*    .base-modal {*/\n/*        padding: 36px 42px 50px;*/\n/*        background-color: rgba(0, 0, 0, .54)*/\n/*    }*/\n/*}*/\n\n/*.lht-modal-nav {*/\n/*    margin-bottom: 16px;*/\n/*    font-size: 24px;*/\n/*    line-height: 28px;*/\n/*    padding-left: 0;*/\n/*    padding-right: 0;*/\n/*    color: rgba(0, 0, 0, .54)*/\n/*}*/\n\n/*.lht-modal-header {*/\n/*    float: left;*/\n/*    width: calc(100% - 40px)*/\n/*}*/\n\n/*a.lht-modal-header {*/\n/*    font-weight: 700*/\n/*}*/\n\n/*.lht-modal-exit {*/\n/*    float: right;*/\n/*    color: rgba(0, 0, 0, .38)*/\n/*}*/\n\n/*.lht-modal-content {*/\n/*    width: 100%*/\n/*}*/\n\n/*.lht-modal-content .flag {*/\n/*    margin-right: 12px;*/\n/*    transform: scale(1.2)*/\n/*}*/\n\n/*.lht-modal-exit:hover {*/\n/*    color: rgba(0, 0, 0, .54)*/\n/*}*/\n\n/*.nobutton-style.lht-modal-exit, .nobutton-style.mobile-home {*/\n/*    width: auto*/\n/*}*/\n\n/*.lht-modal-scroll-area {*/\n/*    width: 100%*/\n/*}*/\n\n/*.lht-mobile-nav .lht-modal-content {*/\n/*    padding-top: 50px*/\n/*}*/\n\n/*.lesson-contact-modal-container {*/\n/*    position: relative*/\n/*}*/\n\n/*.lesson-contact-thank-you {*/\n/*    position: absolute;*/\n/*    height: 100%;*/\n/*    width: 100%;*/\n/*    display: -ms-flexbox;*/\n/*    display: flex;*/\n/*    -ms-flex-pack: center;*/\n/*    justify-content: center;*/\n/*    -ms-flex-align: center;*/\n/*    align-items: center;*/\n/*    top: 0;*/\n/*    background: #fff;*/\n/*    font-size: 24px;*/\n/*    font-weight: 700;*/\n/*    padding: 24px*/\n/*}*/\n\n/*.icon-attention {*/\n/*    color: orange*/\n/*}*/\n\n/*@media (min-width: 1024px) {*/\n/*    .lht-modal-content {*/\n/*        width: 994px;*/\n/*        margin-left: auto;*/\n/*        margin-right: auto;*/\n/*        background-color: #fff;*/\n/*        padding: 24px;*/\n/*        border-radius: 10px*/\n/*    }*/\n/*}*/\n\n/*@media (min-width: 768px) {*/\n/*    .lesson-list-modal .lht-modal-nav {*/\n/*        padding-left: 15px;*/\n/*        padding-right: 15px*/\n/*    }*/\n/*}*/\n\n/*.modal-link {*/\n/*    margin: 2px 0 4px;*/\n/*    display: block;*/\n/*    font-size: 20px;*/\n/*    line-height: 24px;*/\n/*    padding: 12px 0;*/\n/*    color: rgba(0, 0, 0, .54)*/\n/*}*/\n\n/*.modal-link:focus {*/\n/*    text-decoration: underline*/\n/*}*/\n\n/*.modal-link:hover {*/\n/*    color: rgba(0, 0, 0, .87)*/\n/*}*/\n\n/*.modal-exit-container {*/\n/*    text-align: center;*/\n/*    clear: both;*/\n/*    padding-top: 24px;*/\n/*    padding-bottom: 120px*/\n/*}*/\n\n/*.modal-close-button {*/\n/*    background-color: #00bcd4;*/\n/*    color: #fff;*/\n/*    font-size: 18px;*/\n/*    text-transform: uppercase*/\n/*}*/\n\n/*.activities-dropdown-list {*/\n/*    margin-left: 24px;*/\n/*    margin-right: 24px;*/\n/*    clear: both;*/\n/*    background-color: rgba(0, 0, 0, .02);*/\n/*    font-size: 20px*/\n/*}*/\n\n/*.home-page-selection {*/\n/*    border: 1px solid rgba(0, 0, 0, .09);*/\n/*    width: 100%;*/\n/*    padding: 16px 24px;*/\n/*    border-radius: 4px;*/\n/*    position: relative;*/\n/*    display: block;*/\n/*    font-size: 18px;*/\n/*    line-height: 24px;*/\n/*    text-align: left*/\n/*}*/\n\n/*.home-page-selection:focus, .home-page-selection:hover {*/\n/*    text-decoration: none;*/\n/*    color: rgba(0, 0, 0, .87)*/\n/*}*/\n\n/*.home-page-selection .caret {*/\n/*    position: absolute;*/\n/*    right: 12px;*/\n/*    top: 24px*/\n/*}*/\n\n/*.home-picture-box {*/\n/*    margin-top: 5px;*/\n/*    margin-bottom: 5px*/\n/*}*/\n\n/*.home-learn-link {*/\n/*    display: inline-block*/\n/*}*/\n\n/*.base-form-title {*/\n/*    margin-bottom: 10px*/\n/*}*/\n\n/*.home-learn-header {*/\n/*    padding-top: 24px*/\n/*}*/\n\n/*.home-image-link {*/\n/*    padding-top: 16px;*/\n/*    line-height: 20px;*/\n/*    min-height: 56px;*/\n/*    display: -ms-flexbox;*/\n/*    display: flex*/\n/*}*/\n\n/*.home-image-link i {*/\n/*    font-size: 20px;*/\n/*    padding-right: 6px*/\n/*}*/\n\n/*.next-lesson-link {*/\n/*    color: rgba(0, 0, 0, .54);*/\n/*    font-size: 18px;*/\n/*    padding: 12px;*/\n/*    text-align: center*/\n/*}*/\n\n/*.lesson-link .lesson-index-link, .lesson-slide-link .lesson-index-link {*/\n/*    border-top: 1px solid rgba(0, 0, 0, .09);*/\n/*    min-height: 0;*/\n/*    color: rgba(0, 0, 0, .54);*/\n/*    padding: 6px 0 8px;*/\n/*    position: relative*/\n/*}*/\n\n/*.display-rtl .home-learn-header, .display-rtl .lesson-link .lesson-index-link, .display-rtl .lesson-slide-link .lesson-index-link {*/\n/*    text-align: right*/\n/*}*/\n\n/*.lesson-link .lesson-index-link:hover, .lesson-slide-link .lesson-index-link:hover {*/\n/*    color: rgba(0, 0, 0, .87)*/\n/*}*/\n\n/*.lesson-link:not(.current-page-link) .lesson-index-link::after, .lesson-slide-link .lesson-index-link:after, .menu-header:after {*/\n/*    content: '\\ea3c';*/\n/*    font-style: normal;*/\n/*    font-weight: 400;*/\n/*    padding-left: 8px*/\n/*}*/\n\n/*.display-rtl .lesson-link:not(.current-page-link) .lesson-index-link::after, .display-rtl .lesson-slide-link .lesson-index-link:after, .display-rtl .menu-header:after {*/\n/*    content: '\\ea40';*/\n/*    padding-right: 8px;*/\n/*    padding-left: 0*/\n/*}*/\n\n/*.lesson-link .lesson-index-link::after, .lesson-slide-link .lesson-index-link:after {*/\n/*    position: absolute;*/\n/*    top: 15px;*/\n/*    right: 6px;*/\n/*    font-size: 16px*/\n/*}*/\n\n/*.game-links {*/\n/*    margin-bottom: 6px*/\n/*}*/\n\n/*.game-button {*/\n/*    display: -ms-flexbox;*/\n/*    display: flex;*/\n/*    -ms-flex-align: center;*/\n/*    align-items: center;*/\n/*    color: rgba(0, 0, 0, .54);*/\n/*    font-size: 20px;*/\n/*    margin: 5px*/\n/*}*/\n\n/*.game-button:hover {*/\n/*    color: rgba(0, 0, 0, .87)*/\n/*}*/\n\n/*.display-rtl .lesson-slide .game-button {*/\n/*    width: auto*/\n/*}*/\n\n/*.background-hover-link {*/\n/*    display: block*/\n/*}*/\n\n/*.link-to-us-cta {*/\n/*    background-color: rgba(0, 0, 0, .04);*/\n/*    margin-bottom: 24px;*/\n/*    padding-top: 24px*/\n/*}*/\n\n/*.share-closed, .share-open {*/\n/*    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, .2)*/\n/*}*/\n\n/*.link-to-us-logo {*/\n/*    padding: 24px 0*/\n/*}*/\n\n/*.faq-problem {*/\n/*    font-size: 24px;*/\n/*    line-height: 30px;*/\n/*    margin: 0 0 16px*/\n/*}*/\n\n/*.faq-solution {*/\n/*    font-size: 20px;*/\n/*    line-height: 26px;*/\n/*    margin: 0 0 12px*/\n/*}*/\n\n/*.display-rtl .lesson-link .lesson-index-link::after, .display-rtl .lesson-slide-link .lesson-index-link::after {*/\n/*    content: '\\ea40';*/\n/*    right: auto;*/\n/*    left: 6px*/\n/*}*/\n\n/*.lesson-link .lesson-index-link .lesson-number, .lesson-slide-link .lesson-index-link .lesson-number {*/\n/*    font-size: 16px;*/\n/*    line-height: 16px;*/\n/*    padding-right: 30px;*/\n/*    padding-bottom: 4px;*/\n/*    display: block*/\n/*}*/\n\n/*.lesson-link .lesson-index-link .lesson-name, .lesson-slide-link .lesson-index-link .lesson-name {*/\n/*    font-size: 16px;*/\n/*    line-height: 20px;*/\n/*    padding-right: 30px;*/\n/*    display: block*/\n/*}*/\n\n/*.display-rtl .lesson-link .lesson-index-link .lesson-name, .display-rtl .lesson-link .lesson-index-link .lesson-number, .display-rtl .lesson-slide-link .lesson-index-link .lesson-name, .display-rtl .lesson-slide-link .lesson-index-link .lesson-number {*/\n/*    padding-right: 0;*/\n/*    padding-left: 30px*/\n/*}*/\n\n/*.lesson-page-lesson-component {*/\n/*    width: 100%*/\n/*}*/\n\n/*.lesson-page-lesson-name {*/\n/*    width: 100%;*/\n/*    text-align: left;*/\n/*    margin-bottom: 12px;*/\n/*    margin-top: 16px;*/\n/*    padding-left: 15px;*/\n/*    padding-right: 15px*/\n/*}*/\n\n/*.lesson-page-lesson-name .lesson-number {*/\n/*    display: block;*/\n/*    line-height: normal;*/\n/*    font-size: 16px*/\n/*}*/\n\n/*.lesson-page-lesson-name .lesson-name {*/\n/*    display: block;*/\n/*    margin-top: 4px;*/\n/*    margin-bottom: 0;*/\n/*    font-size: 24px;*/\n/*    line-height: normal;*/\n/*    font-weight: 300*/\n/*}*/\n\n/*h1.lesson-index-link {*/\n/*    margin: 0;*/\n/*    color: rgba(0, 0, 0, .54)*/\n/*}*/\n\n/*.lesson-activity {*/\n/*    display: -ms-flexbox;*/\n/*    display: flex;*/\n/*    -ms-flex-align: center;*/\n/*    align-items: center;*/\n/*    color: rgba(0, 0, 0, .54);*/\n/*    margin-top: 6px;*/\n/*    margin-bottom: 6px;*/\n/*    font-size: 20px*/\n/*}*/\n\n/*.lesson-activity .caret {*/\n/*    margin-left: 6px*/\n/*}*/\n\n/*.lesson-activity .outer-icon {*/\n/*    font-size: 30px;*/\n/*    margin-right: 12px*/\n/*}*/\n\n/*.lesson-activity .svg-icon svg {*/\n/*    width: 30px*/\n/*}*/\n\n/*.display-rtl .lesson-activity .outer-icon {*/\n/*    margin-right: 0;*/\n/*    margin-left: 12px*/\n/*}*/\n\n/*.display-rtl .game-button {*/\n/*    width: 100%;*/\n/*    direction: rtl*/\n/*}*/\n\n/*.display-rtl .activity-container .game-button {*/\n/*    width: auto*/\n/*}*/\n\n/*.lesson-activity .game-button {*/\n/*    font-size: 18px;*/\n/*    font-style: normal*/\n/*}*/\n\n/*.lesson-activity:hover, h1.lesson-index-link:hover {*/\n/*    color: rgba(0, 0, 0, .87)*/\n/*}*/\n\n/*h2.lesson-name, h2.lesson-name2 {*/\n/*    margin-bottom: 15px;*/\n/*    font-size: 24px;*/\n/*    font-weight: 300;*/\n/*    color: rgba(0, 0, 0, .54)*/\n/*}*/\n\n/*.lesson-list-header {*/\n/*    padding: 10px 15px*/\n/*}*/\n\n/*h2.lesson-name {*/\n/*    margin-top: 40px*/\n/*}*/\n\n/*h2.lesson-name2 {*/\n/*    margin-top: 24px*/\n/*}*/\n\n/*.social-media {*/\n/*    text-align: center;*/\n/*    font-size: 36px;*/\n/*    margin-bottom: 36px;*/\n/*    margin-top: 16px*/\n/*}*/\n\n/*.social-media button {*/\n/*    padding: 12px 16px*/\n/*}*/\n\n/*.social-media-share {*/\n/*    position: fixed;*/\n/*    color: #fff;*/\n/*    line-height: 56px;*/\n/*    text-align: center;*/\n/*    bottom: 56px;*/\n/*    right: 24px;*/\n/*    z-index: 15*/\n/*}*/\n\n/*.share-open > div, .social-media-share .share-closed {*/\n/*    display: inline-block*/\n/*}*/\n\n/*.share-cancel, .share-closed {*/\n/*    border-radius: 28px;*/\n/*    background-color: #7b1fa2;*/\n/*    width: 56px*/\n/*}*/\n\n/*.share-open {*/\n/*    background-color: #9c27b0;*/\n/*    border-radius: 28px;*/\n/*    cursor: pointer*/\n/*}*/\n\n/*.vocab-box, .vocab-box-spalan {*/\n/*    background: 0 0;*/\n/*    border: none;*/\n/*    padding: 0;*/\n/*    cursor: pointer*/\n/*}*/\n\n/*.share-open > div {*/\n/*    width: 56px*/\n/*}*/\n\n/*.social-media-share .share-open {*/\n/*    display: none*/\n/*}*/\n\n/*.social-media-share.sm-open .share-open {*/\n/*    display: inline-block*/\n/*}*/\n\n/*.social-media-share.sm-open .share-closed {*/\n/*    display: none*/\n/*}*/\n\n/*.show-social-media:not(.body-base-modal-open) .social-media-share {*/\n/*    display: inline-block*/\n/*}*/\n\n/*body:not(.body-base-modal-open).show-social-media-lesson:not(.show-social-media) .social-media-share {*/\n/*    display: inline-block;*/\n/*    position: absolute;*/\n/*    top: 34px;*/\n/*    height: 56px;*/\n/*    right: 0;*/\n/*    z-index: 15*/\n/*}*/\n\n/*.vocab-box {*/\n/*    border-top: 1px solid rgba(0, 0, 0, .09);*/\n/*    min-height: 74px;*/\n/*    position: relative;*/\n/*    width: 100%;*/\n/*    text-align: left;*/\n/*    display: block;*/\n/*    font: inherit;*/\n/*    -webkit-text-size-adjust: none;*/\n/*    -ms-text-size-adjust: none;*/\n/*    text-size-adjust: none*/\n/*}*/\n\n/*.vocab-box-english {*/\n/*    padding: 12px 0;*/\n/*    color: rgba(0, 0, 0, .87);*/\n/*    font-family: Georgia, serif;*/\n/*    font-size: 16px;*/\n/*    line-height: 22px;*/\n/*    margin-right: 40px;*/\n/*    display: block*/\n/*}*/\n\n/*.vocab-box-spalan {*/\n/*    font: inherit;*/\n/*    font-family: Georgia, serif;*/\n/*    color: #7b1fa2;*/\n/*    font-size: 18px;*/\n/*    line-height: 24px;*/\n/*    margin-right: 48px;*/\n/*    margin-bottom: 8px;*/\n/*    display: block*/\n/*}*/\n\n/*.vocab-box:after {*/\n/*    content: '\\ea15';*/\n/*    color: rgba(0, 0, 0, .54);*/\n/*    font-style: normal;*/\n/*    font-weight: 400;*/\n/*    position: absolute;*/\n/*    top: 24px;*/\n/*    right: 6px;*/\n/*    font-size: 30px*/\n/*}*/\n\n/*.click-for-error {*/\n/*    text-align: center;*/\n/*    margin: 12px 0*/\n/*}*/\n\n/*.click-for-error button {*/\n/*    font-weight: 700;*/\n/*    font-size: 16px;*/\n/*    line-height: 24px;*/\n/*    padding: 12px;*/\n/*    color: rgba(0, 0, 0, .54)*/\n/*}*/\n\n/*.click-for-error button:hover {*/\n/*    color: rgba(0, 0, 0, .87)*/\n/*}*/\n\n/*.para-about, .para-index {*/\n/*    margin: 6px 0 18px;*/\n/*    color: rgba(0, 0, 0, .87);*/\n/*    font-size: 18px;*/\n/*    line-height: 28px*/\n/*}*/\n\n/*.about-contact a, .contact-submit {*/\n/*    border-radius: 2px;*/\n/*    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, .2);*/\n/*    color: #fff*/\n/*}*/\n\n/*.display-rtl .para-index {*/\n/*    text-align: right*/\n/*}*/\n\n/*.contact-submit {*/\n/*    line-height: 60px;*/\n/*    padding: 0 24px;*/\n/*    background-color: #00bcd4;*/\n/*    font-size: 18px;*/\n/*    margin: 24px 0;*/\n/*    text-transform: uppercase*/\n/*}*/\n\n/*.about-cta-content h2, .about-cta-text {*/\n/*    line-height: 28px;*/\n/*    font-size: 18px*/\n/*}*/\n\n/*.contact-submit-group.contact-submitted .contact-submit, .contact-submit-spinner {*/\n/*    display: none*/\n/*}*/\n\n/*.about-contact a, .contact-submit-group.contact-submitted .contact-submit-spinner {*/\n/*    display: inline-block*/\n/*}*/\n\n/*.about-hero-section {*/\n/*    height: 170px*/\n/*}*/\n\n/*.about-hero-inner {*/\n/*    !*background-image: url(../../html/lht-about/hero-s-min.png);*!*/\n/*    background-position: center;*/\n/*    background-size: cover;*/\n/*    background-repeat: no-repeat;*/\n/*    height: 100%*/\n/*}*/\n\n/*.about-section {*/\n/*    padding-top: 24px*/\n/*}*/\n\n/*.about-section:last-of-type {*/\n/*    padding-bottom: 24px*/\n/*}*/\n\n/*.about-section h2 {*/\n/*    margin-bottom: 4px*/\n/*}*/\n\n/*.about-section h2, .about-section h3 {*/\n/*    margin-top: 0*/\n/*}*/\n\n/*.about-cta-section {*/\n/*    !*background: url(../../html/lht-about/expand-min.png) center center no-repeat fixed;*!*/\n/*    background-size: cover*/\n/*}*/\n\n/*.about-cta-container {*/\n/*    padding: 100px 0*/\n/*}*/\n\n/*.about-cta-content {*/\n/*    width: 90%;*/\n/*    max-width: 640px;*/\n/*    background-color: #fff;*/\n/*    margin: 0 auto;*/\n/*    padding: 24px 36px*/\n/*}*/\n\n/*.about-cta-content h2 {*/\n/*    padding: 14px 0*/\n/*}*/\n\n/*.about-contact {*/\n/*    text-align: center;*/\n/*    line-height: 60px;*/\n/*    font-size: 18px;*/\n/*    font-weight: 500;*/\n/*    padding: 24px 0;*/\n/*    text-transform: uppercase*/\n/*}*/\n\n/*.about-contact a {*/\n/*    padding: 0 24px;*/\n/*    background-color: #00bcd4*/\n/*}*/\n\n/*.display-rtl .vocab-box::after {*/\n/*    content: '\\ea15';*/\n/*    right: auto;*/\n/*    left: 6px*/\n/*}*/\n\n/*.lht-footer {*/\n/*    background-color: #9c27b0;*/\n/*    padding-top: 32px*/\n/*}*/\n\n/*.lht-footer a {*/\n/*    color: #fff*/\n/*}*/\n\n/*.footer-box, a.media-box {*/\n/*    border: 1px solid rgba(255, 255, 255, .7);*/\n/*    line-height: 48px;*/\n/*    text-align: center;*/\n/*    font-size: 14px;*/\n/*    margin-bottom: 18px;*/\n/*    text-transform: uppercase;*/\n/*    display: block;*/\n/*    cursor: pointer*/\n/*}*/\n\n/*.footer-box {*/\n/*    width: 100%;*/\n/*    color: #fff*/\n/*}*/\n\n/*a.media-box {*/\n/*    color: rgba(0, 0, 0, .87);*/\n/*    border: 1px solid rgba(0, 0, 0, .87);*/\n/*    margin-top: 24px;*/\n/*    max-width: 157px*/\n/*}*/\n\n/*.footer-link-row {*/\n/*    padding-top: 18px;*/\n/*    padding-bottom: 12px;*/\n/*    text-transform: lowercase*/\n/*}*/\n\n/*.footer-link {*/\n/*    float: left;*/\n/*    margin-right: 32px;*/\n/*    margin-bottom: 16px*/\n/*}*/\n\n/*.site-name {*/\n/*    font-size: 32px;*/\n/*    font-weight: 800;*/\n/*    color: #fff*/\n/*}*/\n\n/*.copyright-footer {*/\n/*    padding-bottom: 50px;*/\n/*    background-color: #781fa2;*/\n/*    color: rgba(255, 255, 255, .7)*/\n/*}*/\n\n/*.copyright {*/\n/*    padding: 12px 0;*/\n/*    font-size: 12px*/\n/*}*/\n\n/*.site-index-page a {*/\n/*    display: block;*/\n/*    line-height: 18px;*/\n/*    padding: 15px 0*/\n/*}*/\n\n/*#parent-div {*/\n/*    position: relative*/\n/*}*/\n\n/*.al-padding {*/\n/*    padding: 2px 0;*/\n/*    margin: 0*/\n/*}*/\n\n/*.al-board, .al-board > div {*/\n/*    margin: auto;*/\n/*    padding-left: 0;*/\n/*    padding-right: 0*/\n/*}*/\n\n/*.al-right-lesson-page {*/\n/*    float: left;*/\n/*    width: 300px;*/\n/*    padding-top: 24px*/\n/*}*/\n\n/*.display-rtl .footer-link, .display-rtl .lesson-link {*/\n/*    float: right*/\n/*}*/\n\n/*.al-2nd-right-ad {*/\n/*    padding-top: 24px*/\n/*}*/\n\n/*.al-sticky-container {*/\n/*    position: fixed;*/\n/*    top: 72px*/\n/*}*/\n\n/*.al-sticky-container-bottom {*/\n/*    position: absolute;*/\n/*    bottom: 50px*/\n/*}*/\n\n/*.al-mob-sticky-container {*/\n/*    position: fixed;*/\n/*    bottom: 0;*/\n/*    width: 100%;*/\n/*    z-index: 4*/\n/*}*/\n\n/*.promote-your-brand {*/\n/*    padding: 12px;*/\n/*    background-color: #00bcd4;*/\n/*    text-align: center*/\n/*}*/\n\n/*.display-rtl .home-language-links, .display-rtl .home-page-selection, .display-rtl .lesson_anchor, .display-rtl .menu-item, .display-rtl .modal-link, .display-rtl .site-name, .display-rtl .vocab-box-english, .display-rtl h1.lesson-index-link, .learn-rtl .vocab-box-spalan {*/\n/*    text-align: right*/\n/*}*/\n\n/*.display-rtl .english, .display-rtl .footer-link-row, .display-rtl .home-page-selection, .display-rtl .home-page-text, .display-rtl .intro-e-text, .display-rtl .lesson-page-lesson-name, .display-rtl .listen-game .spalan-text, .display-rtl .memory-square-1-text, .display-rtl .menu-header, .display-rtl .modal-link, .display-rtl .multi-choice-game .spalan-text, .display-rtl .para-index, .display-rtl .tictactoe-select-text, .display-rtl .vocab-box-english, .display-rtl a.lht-lesson-index, .display-rtl:not(.page-about):not(.page-legalStuff):not(.page-siteMap):not(.page-faq):not(.page-linkToUs) h1, .display-rtl:not(.page-about):not(.page-legalStuff):not(.page-siteMap):not(.page-faq):not(.page-linkToUs) h2, .display-rtl:not(.page-about):not(.page-legalStuff):not(.page-siteMap):not(.page-faq):not(.page-linkToUs) h3, .learn-rtl .intro-s-text, .learn-rtl .tictactoe-multi-choice .spalan-text, .learn-rtl .vocab-box-spalan {*/\n/*    direction: rtl*/\n/*}*/\n\n/*.display-rtl .lht-modal-content .flag {*/\n/*    margin-left: 12px;*/\n/*    margin-right: 0*/\n/*}*/\n\n/*.display-rtl .vocab-box-english, .display-rtl .vocab-box-spalan {*/\n/*    margin-right: 0;*/\n/*    margin-left: 48px*/\n/*}*/\n\n/*.display-rtl .home-page-selection .caret {*/\n/*    left: 12px;*/\n/*    right: auto*/\n/*}*/\n\n/*#all-error-messages {*/\n/*    font-size: 22px;*/\n/*    line-height: 28px;*/\n/*    margin-top: 24px*/\n/*}*/\n\n/*#all-error-messages .attention, .lesson-contact-error-messages > div {*/\n/*    color: red*/\n/*}*/\n\n/*#all-error-messages .ok {*/\n/*    color: rgba(0, 0, 0, .37)*/\n/*}*/\n\n/*.lesson-contact-error-messages > div {*/\n/*    font-size: 18px;*/\n/*    font-weight: 700;*/\n/*    line-height: 20px;*/\n/*    margin-top: 4px*/\n/*}*/\n\n/*.lesson-contact-error-messages > div:last-child {*/\n/*    margin-bottom: 12px*/\n/*}*/\n@media (max-width: 767px) {\n    /*h1 {*/\n    /*    font-size: 24px;*/\n    /*    margin-top: 22px;*/\n    /*    margin-bottom: 20px*/\n    /*}*/\n\n    /*h2, h3 {*/\n    /*    font-size: 18px;*/\n    /*    font-weight: 700*/\n    /*}*/\n\n    /*h2 {*/\n    /*    margin-bottom: 16px*/\n    /*}*/\n\n    /*.about-section h2 {*/\n    /*    margin-top: 24px*/\n    /*}*/\n\n    /*.home-page-selection {*/\n    /*    margin-bottom: 8px;*/\n    /*    font-size: 16px*/\n    /*}*/\n\n    /*.arrow-go {*/\n    /*    float: right*/\n    /*}*/\n\n    /*.dropdown-menu > li > a {*/\n    /*    line-height: 28px*/\n    /*}*/\n\n    /*a.media-box {*/\n    /*    margin-left: auto;*/\n    /*    margin-right: auto*/\n    /*}*/\n.lesson-index-link {\n        min-height: 0\n}\n.lesson-list-modal .lesson-list-modal-container .lesson-link, .modal-nopad {\n        padding-left: 0;\n        padding-right: 0\n}\n.copyright-filler {\n        height: 50px\n}\n}\n\n/*@media (min-width: 768px) {*/\n/*    .lesson-page-lesson-component {*/\n/*        width: 750px;*/\n/*        margin: 0 auto*/\n/*    }*/\n\n/*    .menu-language-control, .menu-link a {*/\n/*        font-size: 18px;*/\n/*        line-height: 42px*/\n/*    }*/\n\n/*    .lesson-link .lesson-index-link {*/\n/*        min-height: 79px;*/\n/*        margin: 0*/\n/*    }*/\n\n/*    .slideout-lesson-link {*/\n/*        width: 48%;*/\n/*        float: left*/\n/*    }*/\n\n/*    .about-hero-section {*/\n/*        height: 300px*/\n/*    }*/\n\n/*    .about-hero-inner {*/\n/*        !*background-image: url(../../html/lht-about/hero-l-min.png)*!*/\n/*    }*/\n\n/*    .about-section {*/\n/*        padding-top: 36px*/\n/*    }*/\n\n/*    .about-section:last-child {*/\n/*        padding-bottom: 36px*/\n/*    }*/\n\n/*    .about-image {*/\n/*        float: right;*/\n/*        width: 30%;*/\n/*        padding: 0 20px*/\n/*    }*/\n\n/*    .about-image-left {*/\n/*        float: left*/\n/*    }*/\n\n/*    .site-index-page a {*/\n/*        line-height: 18px;*/\n/*        padding: 3px 0*/\n/*    }*/\n/*}*/\n\n/*@media (min-width: 1054px) {*/\n/*    .lesson-page-lesson-component {*/\n/*        float: left;*/\n/*        width: 664px;*/\n/*        margin-right: 24px*/\n/*    }*/\n\n/*    .menu-language-control, .menu-link a {*/\n/*        font-size: 16px;*/\n/*        line-height: 36px*/\n/*    }*/\n\n/*    .about-section {*/\n/*        padding-top: 48px*/\n/*    }*/\n\n/*    .about-section:last-child {*/\n/*        padding-bottom: 48px*/\n/*    }*/\n\n/*    .show-social-media .social-media-share {*/\n/*        bottom: 39px;*/\n/*        top: inherit;*/\n/*        right: 40%*/\n/*    }*/\n/*}*/\n.confirmTextBtn{\n    padding: 1px 22px;\n    color: white;\n}\n.normal {\n    background-color: #00bcd4;\n}\n.correct {\n    background-color: #65c100\n}\n.incorrect {\n    background-color: #ff3f5f\n}\n.speech-to-text {\n    border-radius: 20px;\n    padding: 5px 18px;\n    color: white;\n    box-shadow: 0 6px 6px 0 rgb(0 0 0 / 20%);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css&");

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
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheVocabularyLesson.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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
                return n !== _vm.selected_type
                  ? _c("div", { staticClass: "col-12 col-sm-6 col-lg-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "cursor-on",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.setQuiz(n)
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "lessong-type",
                            attrs: {
                              title: n,
                              src: "frontend/img/lesson-type/" + n + ".svg",
                              width: "62px"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "i",
                            {
                              staticClass: "text-black-50",
                              staticStyle: {
                                "font-style": "inherit",
                                "font-size": "1.2em"
                              }
                            },
                            [_vm._v(_vm._s(n))]
                          )
                        ]
                      )
                    ])
                  : _vm._e()
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
                          _vm._v("More Afrikaans lessons    "),
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
                      _vm._v("More Afrikaans lessons    "),
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
            attrs: { display: _vm.isShown, selected_type: _vm.selected_type },
            on: { setQuiz: _vm.setQuiz, isClosed: _vm.closeModal }
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
                    _c(
                      "i",
                      {
                        staticClass: "dropdown-toggle",
                        staticStyle: { "font-style": "inherit" }
                      },
                      [
                        _vm._v(
                          "Learn " +
                            _vm._s(_vm.language) +
                            " :: Lesson " +
                            _vm._s(_vm.lesson_num) +
                            "   "
                        )
                      ]
                    ),
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
                    _c(
                      "i",
                      {
                        staticClass: "dropdown-toggle",
                        staticStyle: { "font-style": "inherit" }
                      },
                      [_vm._v(_vm._s(_vm.selected_type))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "mt-3 text-center" }, [
                  _c(
                    "div",
                    { staticClass: "min-height-container lesson-position" },
                    [
                      _c("div", { attrs: { id: "modal-lesson-area" } }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { attrs: { id: "slide-modal-body" } },
                        [
                          _vm.selected_type === "Vocabulary lesson"
                            ? _c("the-vocabulary-lesson", {
                                on: { setQuiz: _vm.setQuiz }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.selected_type === "Listening game"
                            ? _c("the-listening-game")
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.selected_type === "Matching game"
                            ? _c("the-matching-game")
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.selected_type === "Fill the blank"
                            ? _c("the-fill-the-blanks")
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.selected_type === "Speak Words"
                            ? _c("the-speak-words-set")
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-center mt-2 mb-5" },
                  _vm._l(_vm.lesson_type_list, function(n) {
                    return n !== _vm.selected_type
                      ? _c(
                          "a",
                          {
                            staticClass: "cursor-on",
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.setQuiz(n)
                              }
                            }
                          },
                          [
                            _c("img", {
                              staticClass: "lesson-type",
                              attrs: {
                                title: n,
                                src: "frontend/img/lesson-type/" + n + ".svg",
                                width: "62px"
                              }
                            })
                          ]
                        )
                      : _vm._e()
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
                        [_vm._m(0, true)]
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
                                _vm._v("More Afrikaans lessons    "),
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
                                _vm._v("More Afrikaans lessons    "),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue?vue&type=template&id=3174f608&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue?vue&type=template&id=3174f608&scoped=true& ***!
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
  return _c("div", { staticClass: "html-lesson-content" }, [
    _c("div", { attrs: { id: "slide-view" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "slick-initialized slick-slider",
          attrs: { id: "lesson-carousel" }
        },
        [
          _c("button", {
            staticClass: "slick-prev slick-arrow lni-arrow-left lni-bold",
            style: { display: _vm.previousBtn },
            attrs: {
              "aria-label": "Previous",
              type: "button",
              "aria-disabled": "true"
            },
            on: {
              click: function($event) {
                return _vm.direction(0)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "slick-list draggable",
              staticStyle: { padding: "0px 20px", "max-height": "340px" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "slick-track",
                  style: {
                    opacity: 1,
                    width: "12200px",
                    transform: _vm.translate3d,
                    transition: "transform 500ms ease 0s"
                  }
                },
                [
                  _vm._l(this.dataList, function(item, index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        class: {
                          "slick-slide": true,
                          "slick-current slick-center":
                            index === _vm.currentSlide
                        },
                        attrs: {
                          "data-slick-index": "11",
                          "aria-hidden": "true"
                        }
                      },
                      [
                        _c("div", [
                          _c(
                            "div",
                            {
                              staticClass: "lesson-slide",
                              staticStyle: {
                                width: "100%",
                                display: "inline-block"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "border-slide game",
                                  attrs: { id: "view25" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "inner-slide size-slide listen-game",
                                      staticStyle: { "min-height": "200px" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "multi-choice-question-area card-background"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "listening-slide-number"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                        " +
                                                  _vm._s(index + 1) +
                                                  "/" +
                                                  _vm._s(_vm.dataList.length) +
                                                  "\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "listening-careful-area"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                        Listen carefully\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("audio", {
                                            ref: "audio",
                                            refInFor: true,
                                            on: { ended: _vm.onEnded }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "slide-button listening-replay-button cursor-on",
                                              on: {
                                                click: function($event) {
                                                  return _vm.playAudio(index)
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "lni-play"
                                              }),
                                              _vm._v(" "),
                                              _c("div", {
                                                staticStyle: { clear: "both" }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "multi-choice-container"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "multi-choice-answer-area"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "click-answer-text text-left"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                            Type an answer\n                                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "row",
                                                  staticStyle: {
                                                    "padding-top": "30px"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "col-9 col-md-9",
                                                      staticStyle: {
                                                        "text-align": "right"
                                                      }
                                                    },
                                                    [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.inputtedText,
                                                            expression:
                                                              "inputtedText"
                                                          }
                                                        ],
                                                        staticStyle: {
                                                          width: "80%"
                                                        },
                                                        attrs: {
                                                          type: "text",
                                                          name:
                                                            "`fillTheBlank_${index}`",
                                                          id:
                                                            "fillTheBlank_" +
                                                            index
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.inputtedText
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.inputtedText =
                                                              $event.target.value
                                                          }
                                                        }
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "col-2 col-md-2"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "slide-button yes",
                                                          attrs: {
                                                            "data-value": "1"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "text-area"
                                                            },
                                                            [
                                                              _c(
                                                                "span",
                                                                {
                                                                  class: {
                                                                    "confirmTextBtn cursor-on": true,
                                                                    normal:
                                                                      _vm.confirmTextBtn ===
                                                                      null,
                                                                    correct:
                                                                      _vm.confirmTextBtn ===
                                                                      1,
                                                                    incorrect:
                                                                      _vm.confirmTextBtn ===
                                                                      0
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      $event.stopPropagation()
                                                                      return _vm.review(
                                                                        $event
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    class: {
                                                                      "lni-spell-check":
                                                                        _vm.confirmTextBtn ===
                                                                        null,
                                                                      "lni-check-mark-circle":
                                                                        _vm.confirmTextBtn ===
                                                                        1,
                                                                      "lni-close":
                                                                        _vm.confirmTextBtn ===
                                                                        0
                                                                    }
                                                                  })
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("the-review", {
                    attrs: { scoreList: _vm.scoreList, active: _vm.active },
                    on: { playAgain: _vm.playAgain }
                  })
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c("button", {
            staticClass: "slick-next slick-arrow lni-arrow-right lni-bold",
            style: { display: _vm.nextBtn },
            attrs: {
              disabled: _vm.isNextDisabled,
              "aria-label": "Previous",
              type: "button",
              "aria-disabled": "true"
            },
            on: {
              click: function($event) {
                return _vm.direction(1)
              }
            }
          })
        ]
      ),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "start-overlay", style: { display: _vm.startOverlayBtn } },
      [
        _c(
          "button",
          {
            staticClass: "  btn saasbox-btn btn-sm",
            attrs: { "aria-label": "Click here" },
            on: { click: _vm.startOverlay }
          },
          [_c("i", { staticClass: "lni-play" })]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "slide-header" } }, [
      _c("div", { staticClass: "slide-header-text" }),
      _vm._v(" "),
      _c("div", { staticClass: "slide-header-sample" }, [
        _vm._v("SLIDE HEADER"),
        _c("br"),
        _vm._v("HERE")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "slide-footer" } }, [
      _c("div", { staticClass: "slide-footer-text" }, [_vm._v("12/19")]),
      _vm._v(" "),
      _c("div", { staticClass: "slide-header-sample" }, [_vm._v("FOOTER")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheListeningGame.vue?vue&type=template&id=61a6d3b0&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheListeningGame.vue?vue&type=template&id=61a6d3b0&scoped=true& ***!
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
  return _c("div", { staticClass: "html-lesson-content" }, [
    _c("div", { attrs: { id: "slide-view" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "slick-initialized slick-slider",
          attrs: { id: "lesson-carousel" }
        },
        [
          _c("button", {
            staticClass: "slick-prev slick-arrow lni-arrow-left lni-bold",
            style: { display: _vm.previousBtn },
            attrs: {
              "aria-label": "Previous",
              type: "button",
              "aria-disabled": "true"
            },
            on: {
              click: function($event) {
                return _vm.direction(0)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "slick-list draggable",
              staticStyle: { padding: "0px 20px" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "slick-track",
                  style: {
                    opacity: 1,
                    width: "12200px",
                    transform: _vm.translate3d,
                    transition: "transform 500ms ease 0s"
                  }
                },
                [
                  _vm._l(this.dataList, function(item, index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        class: {
                          "slick-slide": true,
                          "slick-current slick-center":
                            index === _vm.currentSlide
                        },
                        attrs: {
                          "data-slick-index": "11",
                          "aria-hidden": "true"
                        }
                      },
                      [
                        _c("div", [
                          _c(
                            "div",
                            {
                              staticClass: "lesson-slide",
                              staticStyle: {
                                width: "100%",
                                display: "inline-block"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "border-slide game",
                                  attrs: { id: "view25" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "inner-slide size-slide listen-game",
                                      staticStyle: { "min-height": "472px" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "multi-choice-question-area card-background"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "listening-slide-number"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                        " +
                                                  _vm._s(index + 1) +
                                                  "/" +
                                                  _vm._s(_vm.dataList.length) +
                                                  "\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "listening-careful-area"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                        Listen carefully\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("audio", {
                                            ref: "audio",
                                            refInFor: true,
                                            on: { ended: _vm.onEnded }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "slide-button listening-replay-button cursor-on",
                                              on: {
                                                click: function($event) {
                                                  return _vm.playAudio(index)
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "lni-play"
                                              }),
                                              _vm._v(" "),
                                              _c("div", {
                                                staticStyle: { clear: "both" }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "multi-choice-container"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "multi-choice-answer-area"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "click-answer-text text-left"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                            Select an answer\n                                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm._l(_vm.getDataList, function(
                                                val,
                                                i
                                              ) {
                                                return _c(
                                                  "div",
                                                  {
                                                    key: i,
                                                    ref: "item_" + val.id,
                                                    refInFor: true,
                                                    class:
                                                      "slick-disabled spalan-text answer-area " +
                                                      _vm.activeColor(val.id),
                                                    style: {
                                                      "pointer-events":
                                                        _vm.pointerEvents
                                                    },
                                                    attrs: {
                                                      "aria-disabled": true
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.review(
                                                          val.id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            " +
                                                        _vm._s(val.title) +
                                                        "\n                                                        "
                                                    )
                                                  ]
                                                )
                                              })
                                            ],
                                            2
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("the-review", {
                    attrs: { scoreList: _vm.scoreList, active: _vm.isActive },
                    on: { playAgain: _vm.playAgain }
                  })
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c("button", {
            staticClass: "slick-next slick-arrow lni-arrow-right lni-bold ",
            style: { display: _vm.nextBtn },
            attrs: {
              disabled: _vm.isNextDisabled,
              "aria-label": "Previous",
              type: "button",
              "aria-disabled": "true"
            },
            on: {
              click: function($event) {
                return _vm.direction(1)
              }
            }
          })
        ]
      ),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "start-overlay", style: { display: _vm.startOverlayBtn } },
      [
        _c(
          "button",
          {
            staticClass: " btn saasbox-btn btn-sm",
            attrs: { "aria-label": "Click here" },
            on: { click: _vm.startOverlay }
          },
          [_c("i", { staticClass: "lni-play" })]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "slide-header" } }, [
      _c("div", { staticClass: "slide-header-text" }),
      _vm._v(" "),
      _c("div", { staticClass: "slide-header-sample" }, [
        _vm._v("SLIDE HEADER"),
        _c("br"),
        _vm._v("HERE")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "slide-footer" } }, [
      _c("div", { staticClass: "slide-footer-text" }, [_vm._v("12/19")]),
      _vm._v(" "),
      _c("div", { staticClass: "slide-header-sample" }, [_vm._v("FOOTER")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheMatchingGame.vue?vue&type=template&id=27148d84&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheMatchingGame.vue?vue&type=template&id=27148d84&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "html-lesson-content" }, [
      _c("div", { attrs: { id: "slide-view" } }, [
        _c(
          "div",
          {
            staticClass: "slick-initialized slick-slider",
            attrs: { id: "lesson-carousel" }
          },
          [
            _c(
              "div",
              {
                staticClass: "slick-list draggable",
                staticStyle: { padding: "0px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "slick-track ",
                    style: {
                      opacity: 1,
                      width: _vm.translateWidth + "px",
                      transform: "translate3d(0px, 0px, 0px)"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "slick-slide slick-current slick-center",
                        attrs: {
                          "data-slick-index": "0",
                          "aria-hidden": "true"
                        }
                      },
                      [
                        _c("div", [
                          _c(
                            "div",
                            {
                              staticClass: "lesson-slide",
                              staticStyle: {
                                width: "100%",
                                display: "inline-block"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "border-slide",
                                  attrs: { id: "view12" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "inner-slide size-slide",
                                      staticStyle: { "min-height": "276px" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "sidebyside-game game-on"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "sidebyside-game-on"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  class: {
                                                    "sidebyside-section card-background": true,
                                                    "rotate-vert-center":
                                                      _vm.rotateVertCenter
                                                  }
                                                },
                                                [
                                                  _vm._l(_vm.dataList, function(
                                                    item,
                                                    index
                                                  ) {
                                                    return _c(
                                                      "div",
                                                      {
                                                        class: {
                                                          "sidebyside-question": true,
                                                          active:
                                                            index ===
                                                            _vm.currentSlide
                                                        },
                                                        attrs: {
                                                          "data-answer": "1"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "sidebyside-slide-number"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                                " +
                                                                _vm._s(
                                                                  index + 1
                                                                ) +
                                                                "/" +
                                                                _vm._s(
                                                                  _vm.dataList
                                                                    .length
                                                                ) +
                                                                "\n                                                            "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "click-answer-text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                                Do these match?\n                                                            "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "sidebyside-square left english-text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                                " +
                                                                _vm._s(
                                                                  item.title
                                                                ) +
                                                                "\n                                                            "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "sidebyside-square right spalan-text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                                " +
                                                                _vm._s(
                                                                  _vm
                                                                    .getRandomData
                                                                    .subtitle
                                                                ) +
                                                                "\n                                                            "
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  }),
                                                  _vm._v(" "),
                                                  _c("the-matching-review", {
                                                    attrs: {
                                                      "matching-score":
                                                        _vm.matchingScore,
                                                      active: _vm.active
                                                    },
                                                    on: {
                                                      playAgain: _vm.playAgain
                                                    }
                                                  })
                                                ],
                                                2
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  class: {
                                                    "sidebyside-answer-area": true,
                                                    "yes-correct":
                                                      _vm.answerClass === 1,
                                                    "yes-incorrect":
                                                      _vm.answerClass === 2,
                                                    "no-correct":
                                                      _vm.answerClass === 3,
                                                    "no-incorrect":
                                                      _vm.answerClass === 4
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "sidebyside-answers",
                                                      style: {
                                                        display:
                                                          _vm.isHiddenAnswer
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "slide-button yes",
                                                          attrs: {
                                                            "data-value": "1"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.stopPropagation()
                                                              return _vm.review(
                                                                true
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("div", [
                                                            _c("i", {
                                                              class: {
                                                                "lni-check-mark-circle":
                                                                  _vm.answerClass ===
                                                                  1,
                                                                "lni-close":
                                                                  _vm.answerClass ===
                                                                  2
                                                              }
                                                            })
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "text-area"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                    Yes\n                                                                "
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "slide-button no",
                                                          attrs: {
                                                            "data-value": "0"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.stopPropagation()
                                                              return _vm.review(
                                                                false
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("div", [
                                                            _c("i", {
                                                              class: {
                                                                "lni-check-mark-circle":
                                                                  _vm.answerClass ===
                                                                  3,
                                                                "lni-close":
                                                                  _vm.answerClass ===
                                                                  4
                                                              }
                                                            })
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "text-area"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                    No\n                                                                "
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "slide-footer" } }, [
      _c("div", { staticClass: "slide-footer-text" }),
      _vm._v(" "),
      _c("div", { staticClass: "slide-header-sample" }, [_vm._v("FOOTER")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "start-overlay", staticStyle: { display: "none" } },
      [
        _c(
          "button",
          {
            staticClass: " btn saasbox-btn btn-sm",
            attrs: { "aria-label": "Click here" }
          },
          [_c("i", { staticClass: "icon-play" })]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheMatchingReview.vue?vue&type=template&id=5cacff6a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheMatchingReview.vue?vue&type=template&id=5cacff6a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    { class: { "sidebyside-question": true, active: _vm.isActive } },
    [
      _c("div", { staticClass: "score-text" }, [
        _vm._v("\n        Score: "),
        _c("span", { staticClass: "score-number" }, [
          _vm._v(_vm._s(_vm.score))
        ]),
        _vm._v("%\n    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "right-text" }, [
        _vm._v("\n        Right: "),
        _c("span", { staticClass: "right-number" }, [_vm._v(_vm._s(_vm.right))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "wrong-text" }, [
        _vm._v("\n        Wrong: "),
        _c("span", { staticClass: "wrong-number" }, [_vm._v(_vm._s(_vm.wrong))])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "slide-button multi-choice-try-again-button mb-2",
          on: {
            click: function($event) {
              $event.stopPropagation()
              return _vm.playAgain($event)
            }
          }
        },
        [
          _c("i", { staticClass: "lni-reload" }),
          _vm._v("\n        Play again\n    ")
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheReview.vue?vue&type=template&id=2d3906e6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheReview.vue?vue&type=template&id=2d3906e6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      class: {
        "slick-slide": true,
        "slick-current slick-center": _vm.isActive
      },
      attrs: { "data-slick-index": "0", "aria-hidden": "true" }
    },
    [
      _c("div", [
        _c(
          "div",
          {
            staticClass: "lesson-slide",
            staticStyle: { width: "100%", display: "inline-block" }
          },
          [
            _c(
              "div",
              { staticClass: "border-slide game", attrs: { id: "view25" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "inner-slide size-slide listen-game",
                    staticStyle: { "min-height": "472px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "multi-choice-question-area card-background"
                      },
                      [
                        _c("div", { staticClass: "listening-slide-number" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "listening-careful-area text-black-50"
                          },
                          [
                            _vm._v(
                              "\n                            Score: " +
                                _vm._s(_vm.score) +
                                "%\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", [
                          _c("h4"),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-black-50" }, [
                            _vm._v("Right: " + _vm._s(_vm.right))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-black-50" }, [
                            _vm._v("Wrong: " + _vm._s(_vm.wrong))
                          ]),
                          _vm._v(" "),
                          _vm.skipped > 0
                            ? _c("p", { staticClass: "text-black-50" }, [
                                _vm._v("Skipped: " + _vm._s(_vm.skipped))
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "slide-button multi-choice-try-again-button mb-5",
                            on: { click: _vm.playAgain }
                          },
                          [
                            _c("i", { staticClass: "lni-reload" }),
                            _vm._v(
                              "\n                            Play again\n                        "
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue?vue&type=template&id=3b1a0a74&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue?vue&type=template&id=3b1a0a74&scoped=true& ***!
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
  return _c("div", { staticClass: "html-lesson-content" }, [
    _c("div", { attrs: { id: "slide-view" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "slick-initialized slick-slider",
          attrs: { id: "lesson-carousel" }
        },
        [
          _c("button", {
            staticClass: "slick-prev slick-arrow lni-arrow-left lni-bold",
            style: { display: _vm.previousBtn },
            attrs: {
              "aria-label": "Previous",
              type: "button",
              "aria-disabled": "true"
            },
            on: {
              click: function($event) {
                return _vm.direction(0)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "slick-list draggable",
              staticStyle: { padding: "0px 20px", "max-height": "340px" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "slick-track",
                  style: {
                    opacity: 1,
                    width: "12200px",
                    transform: _vm.translate3d,
                    transition: "transform 500ms ease 0s"
                  }
                },
                _vm._l(this.dataList, function(item, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      class: {
                        "slick-slide": true,
                        "slick-current slick-center": index === _vm.currentSlide
                      },
                      attrs: { "data-slick-index": "11", "aria-hidden": "true" }
                    },
                    [
                      _c("div", [
                        _c(
                          "div",
                          {
                            staticClass: "lesson-slide",
                            staticStyle: {
                              width: "100%",
                              display: "inline-block"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "border-slide game",
                                attrs: { id: "view25" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "inner-slide size-slide listen-game"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "multi-choice-question-area card-background",
                                        staticStyle: { "min-height": "200px" }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "listening-slide-number"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                            " +
                                                _vm._s(index + 1) +
                                                "/" +
                                                _vm._s(_vm.dataList.length) +
                                                "\n                                                        "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "listening-careful-area"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                            " +
                                                _vm._s(item.title) +
                                                "\n                                                        "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("the-speech-to-text", {
                                          attrs: {
                                            lang_: "en-US",
                                            answer: item.title
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ]
                  )
                }),
                0
              )
            ]
          ),
          _vm._v(" "),
          _c("button", {
            staticClass: "slick-next slick-arrow lni-arrow-right lni-bold",
            style: { display: _vm.nextBtn },
            attrs: {
              disabled: _vm.isNextDisabled,
              "aria-label": "Previous",
              type: "button",
              "aria-disabled": "true"
            },
            on: {
              click: function($event) {
                return _vm.direction(1)
              }
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("div", { attrs: { id: "slide-footer" } })
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "start-overlay", style: { display: _vm.startOverlayBtn } },
      [
        _c(
          "button",
          {
            staticClass: " btn saasbox-btn btn-sm",
            attrs: { "aria-label": "Click here" },
            on: { click: _vm.startOverlay }
          },
          [_c("i", { staticClass: "lni-play" })]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "slide-header" } }, [
      _c("div", { staticClass: "slide-header-text" }),
      _vm._v(" "),
      _c("div", { staticClass: "slide-header-sample" }, [
        _vm._v("SLIDE HEADER"),
        _c("br"),
        _vm._v("HERE")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheSpeechToText.vue?vue&type=template&id=cb57af82&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheSpeechToText.vue?vue&type=template&id=cb57af82& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mt-3" }, [
    _c("p", [
      _c(
        "span",
        {
          style: {
            "font-size": "27px",
            color: _vm.getResult ? "yellow" : "#d2d2d2"
          }
        },
        [
          _vm.getResult !== null
            ? _c("i", { staticClass: "lni-star-filled" })
            : _vm._e()
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "cursor-on speech-to-text",
        style: { "background-color": _vm.isRecording ? "#ff3f5f" : "#9D21B2" },
        on: {
          click: function($event) {
            $event.stopPropagation()
            return _vm.startSpeechToTxt($event)
          }
        }
      },
      [
        _c("i", { staticClass: "lni-mic" }),
        _vm._v("\n        " + _vm._s(_vm.textContent) + "\n    ")
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=template&id=af01b09a&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=template&id=af01b09a& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "html-lesson-content" }, [
    _c("div", { attrs: { id: "slide-view" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "slick-initialized slick-slider",
          attrs: { id: "lesson-carousel" }
        },
        [
          _c("button", {
            staticClass: "slick-prev slick-arrow lni-arrow-left lni-bold",
            style: { display: _vm.previousBtn },
            attrs: {
              "aria-label": "Previous",
              type: "button",
              "aria-disabled": "true"
            },
            on: {
              click: function($event) {
                return _vm.directionPlay(false)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "slick-list draggable",
              staticStyle: { padding: "0px 20px" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "slick-track",
                  style: {
                    opacity: 1,
                    width: "9760px",
                    transform: _vm.translate3d,
                    transition: "transform 500ms ease 0s"
                  }
                },
                [
                  _vm._l(_vm.dataList, function(item, index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        class: {
                          "slick-slide": true,
                          "slick-current slick-center":
                            index === _vm.currentSlide
                        },
                        attrs: {
                          "data-slick-index": "1",
                          "aria-hidden": "true",
                          tabindex: "-1"
                        }
                      },
                      [
                        _c("div", [
                          _c(
                            "div",
                            {
                              staticClass: "lesson-slide",
                              staticStyle: {
                                width: "100%",
                                display: "inline-block"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "border-slide",
                                  attrs: { id: "view17" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "inner-slide size-slide",
                                      staticStyle: { "min-height": "254px" }
                                    },
                                    [
                                      _c("div", {
                                        staticClass: "slide-counter"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card-background intro-slide"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "intro-slide-number"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                        " +
                                                  _vm._s(item.id) +
                                                  "/" +
                                                  _vm._s(_vm.dataList.length) +
                                                  "\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "intro-section" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "intro-e-text "
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "intro-text english-text"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                                " +
                                                          _vm._s(item.title) +
                                                          "\n                                                            "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "intro-lht-watermark",
                                                  attrs: {
                                                    "aria-hidden": "true"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                            © Copyright LingoFeen.com 771363\n                                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "intro-s-text",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.directPlay(
                                                        true
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "intro-text spalan-text"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                                " +
                                                          _vm._s(
                                                            item.subtitle
                                                          ) +
                                                          "\n                                                            "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              class: {
                                                "intro-repeat-area": true,
                                                repeat: _vm.repeat
                                              }
                                            },
                                            [
                                              _c(
                                                "audio",
                                                {
                                                  ref: "audio",
                                                  refInFor: true,
                                                  on: { ended: _vm.onEnded }
                                                },
                                                [
                                                  _c("source", {
                                                    attrs: {
                                                      src: item.src,
                                                      type: "audio/mp3"
                                                    }
                                                  })
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "intro-repeat-self-text"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                            Repeat out loud\n                                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "intro-mute sound-volume-1",
                                                  staticStyle: { top: "14px" }
                                                },
                                                [
                                                  _c("i", {
                                                    class: _vm.audioBtnClass,
                                                    staticStyle: {
                                                      cursor: "pointer",
                                                      padding: "12px",
                                                      "font-size": "26px",
                                                      color: "rgba(0,0,0,.54)"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.directPlay(
                                                          false
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("the-vocabulary-lesson-quiz-category", {
                    on: { setQuiz: _vm.setQuiz }
                  })
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c("button", {
            staticClass: "slick-next slick-arrow lni-arrow-right lni-bold",
            style: { display: _vm.nextBtn },
            attrs: {
              "aria-label": "Next",
              type: "button",
              "aria-disabled": "false"
            },
            on: {
              click: function($event) {
                return _vm.directionPlay(true)
              }
            }
          })
        ]
      ),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "start-overlay", style: { display: _vm.startOverlayBtn } },
      [
        _c(
          "button",
          {
            staticClass: " btn saasbox-btn btn-sm",
            attrs: { "aria-label": "Click here" },
            on: { click: _vm.startOverlay }
          },
          [_c("i", { staticClass: "lni-play" })]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "slide-header" } }, [
      _c("div", { staticClass: "slide-header-text" }),
      _vm._v(" "),
      _c("div", { staticClass: "slide-header-sample" }, [
        _vm._v("SLIDE HEADER"),
        _c("br"),
        _vm._v("HERE")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "slide-footer" } }, [
      _c("div", { staticClass: "slide-footer-text" }),
      _vm._v(" "),
      _c("div", { staticClass: "slide-header-sample" }, [_vm._v("FOOTER")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue?vue&type=template&id=382c4846&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue?vue&type=template&id=382c4846&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "slick-slide slick-current slick-center",
      attrs: { "data-slick-index": "0", "aria-hidden": "true" }
    },
    [
      _c("div", [
        _c(
          "div",
          {
            staticClass: "lesson-slide",
            staticStyle: { width: "100%", display: "inline-block" }
          },
          [
            _c(
              "div",
              { staticClass: "border-slide", attrs: { id: "view16" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "inner-slide size-slide",
                    staticStyle: { "min-height": "254px" }
                  },
                  [
                    _c("div", { staticClass: "slide-counter" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-background intro-slide" }, [
                      _c("div", { staticClass: "intro-slide-number" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "intro-section" }, [
                        _c(
                          "div",
                          { staticClass: "row" },
                          _vm._l(_vm.lesson_type_list, function(item) {
                            return _c(
                              "div",
                              {
                                staticClass: "col-3 col-md-3",
                                staticStyle: { "text-align": "-webkit-center" }
                              },
                              [
                                _c("img", {
                                  staticClass: "cursor-on",
                                  attrs: {
                                    width: "62px",
                                    title: item,
                                    src:
                                      "frontend/img/lesson-type/" +
                                      item +
                                      ".svg"
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.setQuiz(item)
                                    }
                                  }
                                })
                              ]
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mt-5 cursor-on" }, [
                          _vm._v("Lesson 2: Meeting Someone")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "intro-repeat-area" })
                    ])
                  ]
                )
              ]
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
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
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_style_index_0_id_bff72196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/components/TheLessonListModal.vue?vue&type=style&index=0&id=bff72196&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_style_index_0_id_bff72196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_style_index_0_id_bff72196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_style_index_0_id_bff72196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheLessonListModal_vue_vue_type_style_index_0_id_bff72196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_style_index_0_id_c804589a_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/Lesson.vue?vue&type=style&index=0&id=c804589a&lang=css&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_style_index_0_id_c804589a_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_style_index_0_id_c804589a_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_style_index_0_id_c804589a_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lesson_vue_vue_type_style_index_0_id_c804589a_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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



/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheFillTheBlanks_vue_vue_type_template_id_3174f608_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFillTheBlanks.vue?vue&type=template&id=3174f608&scoped=true& */ "./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue?vue&type=template&id=3174f608&scoped=true&");
/* harmony import */ var _TheFillTheBlanks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFillTheBlanks.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFillTheBlanks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFillTheBlanks_vue_vue_type_template_id_3174f608_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheFillTheBlanks_vue_vue_type_template_id_3174f608_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3174f608",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFillTheBlanks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFillTheBlanks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFillTheBlanks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue?vue&type=template&id=3174f608&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue?vue&type=template&id=3174f608&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFillTheBlanks_vue_vue_type_template_id_3174f608_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFillTheBlanks.vue?vue&type=template&id=3174f608&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheFillTheBlanks.vue?vue&type=template&id=3174f608&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFillTheBlanks_vue_vue_type_template_id_3174f608_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFillTheBlanks_vue_vue_type_template_id_3174f608_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheListeningGame.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheListeningGame.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheListeningGame_vue_vue_type_template_id_61a6d3b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheListeningGame.vue?vue&type=template&id=61a6d3b0&scoped=true& */ "./resources/js/frontend/src/views/lesson/TheListeningGame.vue?vue&type=template&id=61a6d3b0&scoped=true&");
/* harmony import */ var _TheListeningGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheListeningGame.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/lesson/TheListeningGame.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheListeningGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheListeningGame_vue_vue_type_template_id_61a6d3b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheListeningGame_vue_vue_type_template_id_61a6d3b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "61a6d3b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/lesson/TheListeningGame.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheListeningGame.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheListeningGame.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheListeningGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheListeningGame.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheListeningGame.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheListeningGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheListeningGame.vue?vue&type=template&id=61a6d3b0&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheListeningGame.vue?vue&type=template&id=61a6d3b0&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheListeningGame_vue_vue_type_template_id_61a6d3b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheListeningGame.vue?vue&type=template&id=61a6d3b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheListeningGame.vue?vue&type=template&id=61a6d3b0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheListeningGame_vue_vue_type_template_id_61a6d3b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheListeningGame_vue_vue_type_template_id_61a6d3b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheMatchingGame.vue":
/*!********************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheMatchingGame.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheMatchingGame_vue_vue_type_template_id_27148d84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheMatchingGame.vue?vue&type=template&id=27148d84&scoped=true& */ "./resources/js/frontend/src/views/lesson/TheMatchingGame.vue?vue&type=template&id=27148d84&scoped=true&");
/* harmony import */ var _TheMatchingGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheMatchingGame.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/lesson/TheMatchingGame.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheMatchingGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheMatchingGame_vue_vue_type_template_id_27148d84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheMatchingGame_vue_vue_type_template_id_27148d84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "27148d84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/lesson/TheMatchingGame.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheMatchingGame.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheMatchingGame.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMatchingGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheMatchingGame.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheMatchingGame.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMatchingGame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheMatchingGame.vue?vue&type=template&id=27148d84&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheMatchingGame.vue?vue&type=template&id=27148d84&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMatchingGame_vue_vue_type_template_id_27148d84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheMatchingGame.vue?vue&type=template&id=27148d84&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheMatchingGame.vue?vue&type=template&id=27148d84&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMatchingGame_vue_vue_type_template_id_27148d84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMatchingGame_vue_vue_type_template_id_27148d84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheMatchingReview.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheMatchingReview.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheMatchingReview_vue_vue_type_template_id_5cacff6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheMatchingReview.vue?vue&type=template&id=5cacff6a&scoped=true& */ "./resources/js/frontend/src/views/lesson/TheMatchingReview.vue?vue&type=template&id=5cacff6a&scoped=true&");
/* harmony import */ var _TheMatchingReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheMatchingReview.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/lesson/TheMatchingReview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheMatchingReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheMatchingReview_vue_vue_type_template_id_5cacff6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheMatchingReview_vue_vue_type_template_id_5cacff6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5cacff6a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/lesson/TheMatchingReview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheMatchingReview.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheMatchingReview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMatchingReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheMatchingReview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheMatchingReview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMatchingReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheMatchingReview.vue?vue&type=template&id=5cacff6a&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheMatchingReview.vue?vue&type=template&id=5cacff6a&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMatchingReview_vue_vue_type_template_id_5cacff6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheMatchingReview.vue?vue&type=template&id=5cacff6a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheMatchingReview.vue?vue&type=template&id=5cacff6a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMatchingReview_vue_vue_type_template_id_5cacff6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheMatchingReview_vue_vue_type_template_id_5cacff6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheReview.vue":
/*!**************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheReview.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheReview_vue_vue_type_template_id_2d3906e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheReview.vue?vue&type=template&id=2d3906e6&scoped=true& */ "./resources/js/frontend/src/views/lesson/TheReview.vue?vue&type=template&id=2d3906e6&scoped=true&");
/* harmony import */ var _TheReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheReview.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/lesson/TheReview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheReview_vue_vue_type_template_id_2d3906e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheReview_vue_vue_type_template_id_2d3906e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d3906e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/lesson/TheReview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheReview.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheReview.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheReview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheReview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheReview.vue?vue&type=template&id=2d3906e6&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheReview.vue?vue&type=template&id=2d3906e6&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheReview_vue_vue_type_template_id_2d3906e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheReview.vue?vue&type=template&id=2d3906e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheReview.vue?vue&type=template&id=2d3906e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheReview_vue_vue_type_template_id_2d3906e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheReview_vue_vue_type_template_id_2d3906e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheSpeakWordsSet_vue_vue_type_template_id_3b1a0a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSpeakWordsSet.vue?vue&type=template&id=3b1a0a74&scoped=true& */ "./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue?vue&type=template&id=3b1a0a74&scoped=true&");
/* harmony import */ var _TheSpeakWordsSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheSpeakWordsSet.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheSpeakWordsSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheSpeakWordsSet_vue_vue_type_template_id_3b1a0a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheSpeakWordsSet_vue_vue_type_template_id_3b1a0a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b1a0a74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSpeakWordsSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSpeakWordsSet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSpeakWordsSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue?vue&type=template&id=3b1a0a74&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue?vue&type=template&id=3b1a0a74&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSpeakWordsSet_vue_vue_type_template_id_3b1a0a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSpeakWordsSet.vue?vue&type=template&id=3b1a0a74&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheSpeakWordsSet.vue?vue&type=template&id=3b1a0a74&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSpeakWordsSet_vue_vue_type_template_id_3b1a0a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSpeakWordsSet_vue_vue_type_template_id_3b1a0a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheSpeechToText.vue":
/*!********************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheSpeechToText.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheSpeechToText_vue_vue_type_template_id_cb57af82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSpeechToText.vue?vue&type=template&id=cb57af82& */ "./resources/js/frontend/src/views/lesson/TheSpeechToText.vue?vue&type=template&id=cb57af82&");
/* harmony import */ var _TheSpeechToText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheSpeechToText.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/lesson/TheSpeechToText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheSpeechToText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheSpeechToText_vue_vue_type_template_id_cb57af82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheSpeechToText_vue_vue_type_template_id_cb57af82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/lesson/TheSpeechToText.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheSpeechToText.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheSpeechToText.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSpeechToText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSpeechToText.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheSpeechToText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSpeechToText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheSpeechToText.vue?vue&type=template&id=cb57af82&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheSpeechToText.vue?vue&type=template&id=cb57af82& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSpeechToText_vue_vue_type_template_id_cb57af82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSpeechToText.vue?vue&type=template&id=cb57af82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheSpeechToText.vue?vue&type=template&id=cb57af82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSpeechToText_vue_vue_type_template_id_cb57af82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSpeechToText_vue_vue_type_template_id_cb57af82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue":
/*!************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheVocabularyLesson_vue_vue_type_template_id_af01b09a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheVocabularyLesson.vue?vue&type=template&id=af01b09a& */ "./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=template&id=af01b09a&");
/* harmony import */ var _TheVocabularyLesson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheVocabularyLesson.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheVocabularyLesson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheVocabularyLesson.vue?vue&type=style&index=0&lang=css& */ "./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheVocabularyLesson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheVocabularyLesson_vue_vue_type_template_id_af01b09a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheVocabularyLesson_vue_vue_type_template_id_af01b09a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLesson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheVocabularyLesson.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLesson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLesson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheVocabularyLesson.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLesson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLesson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLesson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLesson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=template&id=af01b09a&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=template&id=af01b09a& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLesson_vue_vue_type_template_id_af01b09a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheVocabularyLesson.vue?vue&type=template&id=af01b09a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheVocabularyLesson.vue?vue&type=template&id=af01b09a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLesson_vue_vue_type_template_id_af01b09a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLesson_vue_vue_type_template_id_af01b09a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheVocabularyLessonQuizCategory_vue_vue_type_template_id_382c4846_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheVocabularyLessonQuizCategory.vue?vue&type=template&id=382c4846&scoped=true& */ "./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue?vue&type=template&id=382c4846&scoped=true&");
/* harmony import */ var _TheVocabularyLessonQuizCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheVocabularyLessonQuizCategory.vue?vue&type=script&lang=js& */ "./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheVocabularyLessonQuizCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheVocabularyLessonQuizCategory_vue_vue_type_template_id_382c4846_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheVocabularyLessonQuizCategory_vue_vue_type_template_id_382c4846_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "382c4846",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLessonQuizCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheVocabularyLessonQuizCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLessonQuizCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue?vue&type=template&id=382c4846&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue?vue&type=template&id=382c4846&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLessonQuizCategory_vue_vue_type_template_id_382c4846_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheVocabularyLessonQuizCategory.vue?vue&type=template&id=382c4846&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/src/views/lesson/TheVocabularyLessonQuizCategory.vue?vue&type=template&id=382c4846&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLessonQuizCategory_vue_vue_type_template_id_382c4846_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheVocabularyLessonQuizCategory_vue_vue_type_template_id_382c4846_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);