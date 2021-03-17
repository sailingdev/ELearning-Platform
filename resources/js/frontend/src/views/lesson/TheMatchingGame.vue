<template>
   <div>
       <div class="html-lesson-content">
           <div id="slide-view">
               <div id="lesson-carousel" style="" class="slick-initialized slick-slider">
                   <div class="slick-list draggable" style="padding: 0px;">
                       <div class="slick-track "
                            :style="{opacity: 1, width: `${translateWidth}px`, transform:  'translate3d(0px, 0px, 0px)'}">
                           <div class="slick-slide slick-current slick-center"
                                data-slick-index="0" aria-hidden="true">
                               <div>
                                   <div class="lesson-slide"
                                        style="width: 100%; display: inline-block;">
                                       <div id="view12" class="border-slide">
                                           <div class="inner-slide size-slide"
                                                style="min-height: 276px;">
                                               <div class="sidebyside-game game-on">
                                                   <div class="sidebyside-game-on">
                                                       <div
                                                           :class="{'sidebyside-section card-background' : true, 'rotate-vert-center': rotateVertCenter}">
                                                           <!--                                                                <div :class="{'sidebyside-question':true, question-2 active}"-->
                                                           <div v-for="(item, index) in dataList" :class="{'sidebyside-question': true, active:index === currentSlide}"
                                                                data-answer="1">
                                                               <div
                                                                   class="sidebyside-slide-number">
                                                                   {{index +1}}/{{dataList.length}}
                                                               </div>
                                                               <div class="click-answer-text">
                                                                   Do these match?
                                                               </div>
                                                               <div
                                                                   class="sidebyside-square left english-text">
                                                                   {{item.title}}
                                                               </div>
                                                               <div
                                                                   class="sidebyside-square right spalan-text">
                                                                   {{getRandomData.subtitle}}
                                                               </div>
                                                           </div>

                                                           <the-matching-review :matching-score="matchingScore" :active="active" @playAgain="playAgain"/>
                                                       </div>

                                                       <div :class="{'sidebyside-answer-area':true, 'yes-correct':answerClass===1, 'yes-incorrect':answerClass===2, 'no-correct':answerClass===3, 'no-incorrect':answerClass===4 }">
                                                           <div class="sidebyside-answers"  :style="{display: isHiddenAnswer}" >
                                                               <div class="slide-button yes"
                                                                    data-value="1" @click.stop="review(true)">
                                                                   <div>
                                                                       <i :class="{'lni-check-mark-circle':answerClass===1, 'lni-close':answerClass===2}"></i>
                                                                   </div>
                                                                   <div class="text-area">
                                                                       Yes
                                                                   </div>
                                                               </div>
                                                               <div class="slide-button no"
                                                                    data-value="0" @click.stop="review(false)">
                                                                   <div>
                                                                       <i :class="{'lni-check-mark-circle':answerClass===3, 'lni-close':answerClass===4}"></i>
                                                                   </div>
                                                                   <div class="text-area">
                                                                       No
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
                       </div>
                   </div>
               </div>
           </div>
           <div id="slide-footer">
               <div class="slide-footer-text"></div>
               <div class="slide-header-sample">FOOTER</div>
           </div>
       </div>
       <div class="start-overlay" style="display: none;">
           <button class=" btn saasbox-btn btn-sm" aria-label="Click here">
               <i class="icon-play"></i>

           </button>
       </div>
   </div>
</template>

<script>
    import TheMatchingReview from './TheMatchingReview'
  export default {
      name: 'TheMatchingGame',
      data(){
          return this.initialData()
      },
      components: {
          TheMatchingReview
      },
      methods: {
          initialData(){
            return {
                dataList: this.$store.state.lesson.dataList,
                currentSlide: 0,
                isTrue: false,
                isRotatable: false,
                matchingScore:{
                    score:0,
                    right:0,
                    wrong:0
                },
                answer: 0
            }
        },
          review(isYes){
              this.isRotatable = true
              if (isYes === this.isTrue ){
                  this.matchingScore.right +=1
              } else {
                  this.matchingScore.wrong +=1
              }
              this.matchingScore.score = Math.round(this.matchingScore.right * 100 / this.dataList.length)
              if(isYes) {
                  this.answer = this.isTrue ? 1 : 2
              } else
                  this.answer = this.isTrue ? 4 : 3

              setTimeout(()=>{
                  this.next()
                  this.answer = 0
              }, 500)
          },
          next(){
              let maxVal = this.dataList.length
              this.currentSlide = this.currentSlide >= maxVal ? maxVal : this.currentSlide +1
              setTimeout(()=>{
                  this.isRotatable = false
              }, 3)
          },
          playAgain(){
              this.isRotatable = true
              setTimeout(()=>{
                  Object.assign(this.$data, this.initialData())
              }, 3)
          }
      },
      computed: {
          translateWidth () {
              let width = window.innerWidth
              let val = 0
              switch (true) {
              case (width >= 768):
                  val = 610
                  break
              case (374 > width && width >= 360):
                  val =  300
                  break
              case (410 > width && width >= 375):
                  val = 311
                  break
              case (479 > width && width >= 411):
                  val = 351
                  break
              case (767 > width && width >= 480):
                  val = 480
              }
              return val
          },
          getRandomData(){
              let randomData = this.$store.getters['lesson/getRandomData'](this.currentSlide)
              let index = this.currentSlide
              index >= this.dataList.length ? index -=1 : index
              this.isTrue = randomData.id === this.dataList[index].id
              return randomData
          },
          rotateVertCenter(){
              return !this.isRotatable
          },
          answerClass(){
              return this.answer
          },
          isHiddenAnswer(){
              return this.dataList.length === this.currentSlide ? 'none' : ''
          },
          active(){
              return this.currentSlide === this.dataList.length
          },
      }
  }
</script>

<style scoped>

</style>
