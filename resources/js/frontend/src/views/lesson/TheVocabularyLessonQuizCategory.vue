<template>
    <div class="slick-slide slick-current slick-center"
         data-slick-index="0" aria-hidden="true" style="width: 610px;">
        <div>
            <div class="lesson-slide"
                 style="width: 100%; display: inline-block;">
                <div id="view16" class="border-slide">
                    <div class="inner-slide size-slide"
                         style="min-height: 254px;">
                        <div class="slide-counter"></div>
                        <div class="card-background intro-slide">
                            <div class="intro-slide-number">
                            </div>
                            <div class="intro-section" style="padding: 20px 104px 16px;">
                                <div class="row">
                                    <div v-for="item in lesson_type_list" class="col-md-3" style="text-align: -webkit-center;">
                                        <img width="62px" class="cursor-on" @click.stop=""  :src="`frontend/img/lesson-type/${item}.svg`" />
                                    </div>
                                </div>
                                <p class="mt-5 cursor-on">Lesson 2: Meeting Someone</p>
                            </div>
                            <div class="intro-repeat-area">
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
    name: 'TheVocabularyLessonQuizCategory',
      data(){
          return {
              lesson_type_list: ['Speak Words', 'Listening game', 'Matching game', 'Concentration game']
          }
      }
  }
</script>

<style scoped>

</style>
