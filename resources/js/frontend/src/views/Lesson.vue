<template>
    <div class="shop--area shop-fullwidth section-padding-120">
        <div class="container">
            <the-lesson-list-modal :display="isShown" @isClosed="closeModal"/>
            <div class="lesson-page">
                <div class="wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">
                    <a class="text-left cursor-on" v-on:click="selectLesson">
                        <h7 class="dropdown-toggle">Learn {{language}} :: Lesson {{lesson_num}}   </h7>
                        <h5>Meeting Someone</h5>
                    </a>
                    <a class="text-left cursor-on mt-5" v-on:click="selectLesson">
                        <img class="selected-type" :src="'frontend/img/lesson-type/'+selected_type+'.svg'" width="30px" />
                        <h7 class="dropdown-toggle">{{selected_type}} Lessons</h7>
                    </a>
                    <div class="mt-3 text-center">
                        <iframe src="https://h5p.org/h5p/embed/119355" width="600" height="300" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
<!--                        <img src="frontend/img/bg-img/4.png" width="600px"/>-->
                    </div>
                    <div class="d-flex justify-content-center mt-2 mb-5">
                        <a v-for="n in lesson_type_list" class="cursor-on"><img class="lessong-type" :src="'frontend/img/lesson-type/'+n+'.svg'" width="62px"/></a>
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
                        <div class="text-center mt-5">
                            <a class="let-us-know" href="#">Do you see an error on our website? Please let us know</a>
                        </div>
                        <div :style="style_lesson_full_name">
                            <router-link :to="{name: 'Lessons'}" class="cursor-on d-flex"><h5 class="wow fadeInUp mt-3" data-wow-delay="200ms" data-wow-duration="1000ms">More Afrikaans lessons    <i class="lni-arrow-right"></i></h5></router-link>
                        </div>
                        <div class="row align-items-center justify-content-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">
                            <div class="row g-3">
                                <!-- Single Feature Area-->
                                <div v-for="n in 35" class="col-12 col-sm-6 col-lg-6">
                                    <router-link :to="{name:'Lesson'}">
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
                            <router-link :to="{name: 'Lessons'}" class="cursor-on d-flex"><h5 class="wow fadeInUp mt-3" data-wow-delay="200ms" data-wow-duration="1000ms">More Afrikaans lessons    <i class="lni-arrow-right"></i></h5></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TheLessonListModal from '../components/TheLessonListModal'
    export default {
        name: 'Lesson',
        components:{
          TheLessonListModal
        },
        data(){
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
