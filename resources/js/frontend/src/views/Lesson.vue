<template>
    <div class="shop--area shop-fullwidth section-padding-120">
        <div class="container">
            <the-lesson-list-modal :display="isShown" :selected_type="selected_type" @setQuiz="setQuiz" @isClosed="closeModal"/>
            <div class="lesson-page">
                <div class="wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">
                    <a class="text-left cursor-on" v-on:click="selectLesson">
                        <i class="dropdown-toggle" style="font-style: inherit;">Learn {{language}} :: Lesson {{lesson_num}}   </i>
                        <h5>Meeting Someone</h5>
                    </a>
                    <a class="text-left cursor-on mt-5" v-on:click="selectLesson">
                        <img class="selected-type" :src="'frontend/img/lesson-type/'+selected_type+'.svg'" width="30px" />
                        <i class="dropdown-toggle" style="font-style: inherit;">{{selected_type}}</i>
                    </a>
                    <div class="mt-3 text-center">
                        <div class="min-height-container lesson-position">
                            <div id="modal-lesson-area"></div>
                            <div id="slide-modal-body">
                                <the-vocabulary-lesson v-if="selected_type === 'Vocabulary lesson'" @setQuiz = "setQuiz" />
                                <the-listening-game v-if="selected_type === 'Listening game'" />
                                <the-matching-game v-if="selected_type === 'Matching game'" />
                                <the-fill-the-blanks v-if="selected_type === 'Fill the blank'" />
                                <the-speak-words-set v-if="selected_type === 'Speak Words'" />
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mt-2 mb-5">
                        <a v-for="n in lesson_type_list" v-if="n !== selected_type" class="cursor-on" @click.stop="setQuiz(n)"><img class="lesson-type" :title="n" :src="'frontend/img/lesson-type/'+n+'.svg'" width="62px"/></a>
                    </div>
                </div>
                <div :style="style_lesson_full_name">
                    <h5 class="wow fadeInUp mt-3" data-wow-delay="200ms" data-wow-duration="1000ms">Afrikaans vocabulary :: Meeting someone</h5>
                </div>

                <div class="row align-items-center justify-content-center wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                    <div class="row g-3">
                        <!-- Single Feature Area-->
                        <div v-for="n in 35" class="col-12 col-sm-6 col-lg-6">
                            <a class="cursor-on">
                                <div class="card feature-card">
                                    <div class="card-body d-flex align-items-center row">
                                        <div class="fea-text col-10 col-sm-10 col-lg-10">
                                            <span>Meeting someone</span><br><span class="mt-2">Meeting someone</span>
                                        </div>
                                        <div class=" col-2 col-sm-2 col-lg-2">
                                            <i class="lni-play lesson-arrow"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div :style="style_lesson_full_name">
                            <router-link :to="{name: 'lesson-list'}" class="cursor-on d-flex"><h5 class="wow fadeInUp mt-3" data-wow-delay="200ms" data-wow-duration="1000ms">More Afrikaans lessons    <i class="lni-arrow-right"></i></h5></router-link>
                        </div>
                        <the-contact-modal />
                        <div class="row align-items-center justify-content-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">
                            <div class="row g-3">
                                <!-- Single Feature Area-->
                                <div v-for="n in 35" class="col-12 col-sm-6 col-lg-6">
                                    <router-link :to="{name:'lesson'}">
                                        <div class="card feature-card">
                                            <div class="card-body d-flex align-items-center row">
                                                <div class="fea-text col-9 col-sm-9 col-lg-9">
                                                    <h6>Lesson {{n+1}}</h6><span>Meeting someone</span>
                                                </div>

                                                <div class=" col-3 col-sm-3 col-lg-3">
                                                    <i class="lni-arrow-right-circle lesson-arrow"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div :style="style_lesson_full_name">
                            <router-link :to="{name: 'lesson-list'}" class="cursor-on d-flex"><h5 class="wow fadeInUp mt-3" data-wow-delay="200ms" data-wow-duration="1000ms">More Afrikaans lessons    <i class="lni-arrow-right"></i></h5></router-link>
                        </div>
                        <the-contact-modal />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TheContactModal from '../components/TheContactModal'
    import TheLessonListModal from '../components/TheLessonListModal'
    import TheListeningGame from './lesson/TheListeningGame'
    import TheMatchingGame from './lesson/TheMatchingGame'
    import TheFillTheBlanks from './lesson/TheFillTheBlanks'
    import TheVocabularyLesson from './lesson/TheVocabularyLesson'
    import TheSpeakWordsSet from './lesson/TheSpeakWordsSet'
    export default {
        name: 'Lesson',
        components:{
            TheVocabularyLesson,
            TheListeningGame,
            TheLessonListModal,
            TheContactModal,
            TheMatchingGame,
            TheFillTheBlanks,
            TheSpeakWordsSet
        },
        data(){
            return {
                language: 'Afrikaans',
                lesson_num: 1,
                selected_type: 'Vocabulary lesson',
                lesson_type_list: ['Vocabulary lesson', 'Speak Words', 'Listening game', 'Matching game', 'Fill the blank'],
                style_lesson_full_name: {
                    'padding-left': '21px',
                    'padding-right': '10px'
                },
                display: false,
            }
        },
        computed:{
          isShown(){
              return this.display;
          }
        },
        methods:{
            closeModal(){
                this.display = false;
            },
            selectLesson(){
                this.display = true;
            },
            setQuiz(type){
                this.selected_type = type
            }
        }
    }
</script>

<style lang="css" scoped>

    .let-us-know {
        font-weight: 600;
    }
    .feature-card.active, .feature-card:hover, .feature-card:focus {
        border-color: unset;
        background-color: unset;
        box-shadow: 0 18px 56px rgb(255 255 255 / 18%);
        color: white;
    }
    .feature-card i {
        color: #00000099;
        background-color: #0b075700;
    }
    .feature-card.active i, .feature-card:hover i, .feature-card:focus i {
        box-shadow: 0 2px 38px rgb(255 255 255 / 40%);
        color: white;
    }
    a {
        color: #00000099;
    }
    a:hover {
        color: black;
    }
    h5 {
        color: unset;
    }
    h6 {
        color: unset;
    }
    .selected-type {
        border-radius: 50%;
        width: 45px;
    }

    /*@media only screen and (min-width: 1400px) {*/
    /*    .lesson-page {*/
    /*        max-width: 665px;*/
    /*    }*/
    /*}*/
    /*@media only screen and (min-width: 1200px) and (max-width: 1399px) {*/
    /*    .container, .container-lg, .container-md, .container-sm, .container-xl {*/
    /*        max-width: 1140px;*/
    /*    }*/
    /*}*/
    @media only screen and (min-width: 992px) and (max-width: 1199px) {

    }
    @media only screen and (min-width: 992px) {
        .lesson-page {
            max-width: 785px;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {

    }
    @media only screen and (min-width: 576px) and (max-width: 767px) {

    }
</style>
