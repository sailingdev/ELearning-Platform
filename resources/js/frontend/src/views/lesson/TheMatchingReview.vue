<template>
    <!-- Score Section -->
    <div :class="{'sidebyside-question': true, active:isActive}">
        <div class="score-text">
            Score: <span
            class="score-number">{{score}}</span>%
        </div>
        <div class="right-text">
            Right: <span
            class="right-number">{{right}}</span>
        </div>
        <div class="wrong-text">
            Wrong: <span
            class="wrong-number">{{wrong}}</span>
        </div>
        <div class="slide-button multi-choice-try-again-button mb-2" @click.stop="playAgain">
            <i class="lni-reload"></i>
            Play again
        </div>
    </div>
    <!---->
</template>

<script>
  export default {
    name: 'TheMatchingReview',
      props:{
        matchingScore: Object,
          active: Boolean,
      },
      methods:{
        playAgain(){
            this.$emit('playAgain')
        }
      },
      computed:{
        score(){
            return this.matchingScore.score
        },
          right(){
            return this.matchingScore.right
          },
          wrong(){
            return this.matchingScore.wrong
          },
          isActive(){
            return this.active
          }
      }
  }
</script>

<style scoped>

</style>
