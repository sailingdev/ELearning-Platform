<template>
    <div class="html-lesson-content">
                <div id="slide-view">
                    <div id="slide-header">
                        <div class="slide-header-text"></div>
                        <div class="slide-header-sample">SLIDE HEADER<br>HERE</div>
                    </div>
                    <div id="lesson-carousel" style="" class="slick-initialized slick-slider">
                        <button class="slick-prev slick-arrow lni-arrow-left lni-bold" aria-label="Previous"
                                type="button" aria-disabled="true" :style="{display: previousBtn}" @click="direction(0)"
                        >
                        </button>
                        <div class="slick-list draggable" style="padding: 0px 20px; max-height: 340px;">
                            <div class="slick-track"
                                 :style="{opacity: 1, width: '12200px', transform: translate3d, transition: 'transform 500ms ease 0s'}">
                                <div v-for="(item, index) in this.dataList" :key="index" :class="{'slick-slide':true, 'slick-current slick-center': index === currentSlide}"
                                     data-slick-index="11" aria-hidden="true" >
                                    <div>
                                        <div class="lesson-slide"
                                             style="width: 100%; display: inline-block;">
                                            <div id="view25" class="border-slide game">
                                                <div class="inner-slide size-slide listen-game"
                                                     style="min-height: 200px;">
                                                    <div
                                                        class="multi-choice-question-area card-background">
                                                        <div class="listening-slide-number">
                                                            {{index +1}}/{{dataList.length}}
                                                        </div>
                                                        <div class="listening-careful-area">
                                                            Listen carefully
                                                        </div>
                                                        <audio ref="audio" @ended="onEnded" ></audio>
                                                        <div
                                                            class="slide-button listening-replay-button cursor-on" @click="playAudio(index)">
                                                            <i class="lni-play"></i>
                                                            <div style="clear:both"></div>
                                                        </div>
                                                    </div>
                                                    <div class="multi-choice-container">
                                                        <div class="multi-choice-answer-area">
                                                            <div class="click-answer-text text-left">
                                                                Type an answer
                                                            </div>
                                                            <div class="row" style="padding-top: 30px">
                                                                <div class="col-9 col-md-9" style="text-align: right">
                                                                        <input type="text" name="`fillTheBlank_${index}`" :id="`fillTheBlank_${index}`" style="width: 80%" v-model="inputtedText" />
                                                                </div>
                                                                <div class="col-2 col-md-2">
                                                                    <div class="slide-button yes"
                                                                         data-value="1" >
                                                                        <div class="text-area">
                                                                            <span :class="{'confirmTextBtn cursor-on':true, normal:confirmTextBtn === null, correct:confirmTextBtn === 1, incorrect:confirmTextBtn ===0  }" @click.stop="review">
                                                                                <i :class="{'lni-spell-check': confirmTextBtn === null, 'lni-check-mark-circle': confirmTextBtn === 1, 'lni-close': confirmTextBtn === 0}"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <the-review :scoreList="scoreList" :active="active" @playAgain="playAgain" />
                            </div>
                        </div>
                        <button class="slick-next slick-arrow lni-arrow-right lni-bold" :disabled="isNextDisabled" aria-label="Previous"
                                type="button" aria-disabled="true" :style="{display:nextBtn}" @click="direction(1)"
                        >
                        </button>
                    </div>
                    <div id="slide-footer">
                        <div class="slide-footer-text">12/19</div>
                        <div class="slide-header-sample">FOOTER</div>
                    </div>
                </div>
                <div class="start-overlay" :style="{display: startOverlayBtn}">
                    <button class="  btn saasbox-btn btn-sm" aria-label="Click here" @click="startOverlay" >
                        <i class="lni-play"></i>
                    </button>
                </div>
            </div>
</template>

<script>
  import TheReview from './TheReview'

  export default {
    name: 'TheFillTheBlanks',
      data(){
          return this.initialData()
      },
      components:{
          TheReview
      },
      methods: {
          startOverlay(){
              this.isStartOverlay = false
          },
          direction(isNext){
              let currentSlide = this.currentSlide
              if(this.audio) {
                  this.audio.pause()
                  this.audio.currentTime = 0
              }
              this.isRight = null
              this.inputtedText = ''
              if(isNext === 1) this.next(currentSlide)
              if (isNext === 0) this.previous(currentSlide)
              if (isNext === 2) this.continue(currentSlide)
          },
          next(val){
              this.scoreList.push(2)
              this.currentSlide = val >= this.dataList.length ?  this.dataList.length : val + 1
          },
          previous(val){
              this.scoreList.pop()
              this.currentSlide = val <= 0 ?  0 : val - 1
          },
          continue(val){
              this.currentSlide = val >= this.dataList.length ?  this.dataList.length : val + 1
          },
          playAudio(index){
              let audio = this.$refs.audio[index]
              audio.src = this.dataList[index].src
              audio.play()
          },
          onEnded(){
              if(this.isRight !== null){
                  this.direction(true)
              }
          },
          review(){
              let realText = this.dataList[this.currentSlide].title
              this.isRight = realText === this.inputtedText ? 1 : 0
              this.isRight === 1 ? this.scoreList.push(1) : this.scoreList.push(0)
              setTimeout(()=>{
                  this.direction(2)
              }, 400)
          },
          playAgain(){
              Object.assign(this.$data, this.initialData())
          },
          initialData(){
              return {
                  dataList: this.$store.state.lesson.dataList,
                  currentSlide: 0,
                  selectedId: null,
                  isStartOverlay: true,
                  isRight: null,
                  audio: null,
                  inputtedText: '',
                  scoreList: []    //    0:wrong, 1:right, 2:skipped
              }
          },
      },
      computed: {
          translate3d () {
              let width = window.innerWidth
              let val = 0
              switch (true) {
              case (width >= 768):
                  val = -610 * this.currentSlide
                  break
              case (374 > width && width >= 360):
                  val = -300 * this.currentSlide
                  break
              case (410 > width && width >= 375):
                  val = -311 * this.currentSlide
                  break
              case (479 > width && width >= 411):
                  val = -352 * this.currentSlide
                  break
              case (767 > width && width >= 480):
                  val = -480 * this.currentSlide
              }
              return `translate3d(${val}px, 0px, 0px)`
          },
          previousBtn(){
              return this.currentSlide === 0 ? 'none' : 'block'
          },
          nextBtn(){
              if(this.isStartOverlay) return 'none'
              return this.currentSlide ===this.dataList.length ? 'none' : 'block'
          },
          startOverlayBtn(){
              return this.isStartOverlay ? 'block' : 'none'
          },
          confirmTextBtn(){
              return this.isRight
          },
          active(){
              return this.currentSlide === this.dataList.length
          },
          isNextDisabled(){
              return this.selectedId !== null
          }
      },
  }
</script>

<style scoped>

</style>
