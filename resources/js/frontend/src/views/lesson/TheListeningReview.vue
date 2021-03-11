<template>
    <div class="slick-slide slick-current slick-center"
         data-slick-index="0" aria-hidden="true" style="width: 610px;">
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
                                <p class="text-black-50">Skipped: {{skipped}}</p>
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
    name: 'TheListeningReview',
      props: {
        listenScore: Object
      },
      methods: {
          playAgain(){
              this.$emit('playAgain')
          }
      },
      computed: {
          score(){
                return this.listenScore.score
            },
          right(){
            return this.listenScore.right
          },
          wrong(){
            return this.listenScore.wrong
          },
          skipped(){
            return this.listenScore.skipped
          }
      }
  }
</script>

<style scoped>

</style>
