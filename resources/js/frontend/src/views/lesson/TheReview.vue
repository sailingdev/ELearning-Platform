<template>
    <div :class="{'slick-slide':true, 'slick-current slick-center':isActive}"
         data-slick-index="0" aria-hidden="true">
        <div>
            <div class="lesson-slide"
                 style="width: 100%; display: inline-block;">
                <div id="view25" class="border-slide game">
                    <div class="inner-slide size-slide listen-game"
                         style="min-height: 472px;">
                        <div
                            class="multi-choice-question-area card-background">
                            <div class="listening-slide-number">
                            </div>
                            <div class="listening-careful-area text-black-50">
                                Score: {{score}}%
                            </div>
                            <div>
                                <h4></h4>
                                <p class="text-black-50">Right: {{right}}</p>
                                <p class="text-black-50">Wrong: {{wrong}}</p>
                                <p v-if="skipped > 0" class="text-black-50">Skipped: {{skipped}}</p>
                            </div>
                            <div class="slide-button multi-choice-try-again-button mb-5" @click="playAgain">
                                <i class="lni-reload"></i>
                                Play again
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TheReview',
      props:{
          scoreList: Array,
          active: Boolean,
      },
      methods:{
          playAgain(){
              this.$emit('playAgain')
          },
          getCount(val){
              let list = [];
              let array = this.scoreList
              array.forEach(function(x) { x === val && list.push(x)  });
              return list.length
          }
      },
      computed:{
          score(){
              return Math.round(this.right * 100 / this.scoreList.length)
          },
          right(){
              return this.getCount(1)
          },
          wrong(){
              return this.getCount(0)
          },
          skipped(){
              return this.getCount(2)
          },
          isActive(){
              return this.active
          }
      }
  }
</script>

<style scoped>

</style>
