<!--
props: Boolean Display
emit: Boolean isClosed
-->
<template>
    <div>
        <!-- The Modal -->
        <div id="myModal" class="cust-modal" :style="isShown?'display: block':'display: none'">

            <!-- Modal content -->
            <div class="cust-lesson-list-modal-content">
                <div class="cust-modal-header" :style="style_lesson_full_name">
                    <span class="cust-close" v-on:click="onCloseModal">&times;</span>
                    <h6 style="font-size: 20px" class="text-black-50">{{header}}</h6>
                </div>
                <div class="cust-modal-body mt-4 mb-3">
                    <!-- quiz area -->
                   <div class="row">
                       <div v-for="n in lesson_type_list" v-if="n !== selected_type"  class="col-12 col-sm-6 col-lg-4">
                           <a class="cursor-on" @click.stop="setQuiz(n)"><img class="lessong-type" :title="n" :src="'frontend/img/lesson-type/'+n+'.svg'" width="62px"/> <i class="text-black-50" style="font-style: inherit; font-size: 1.2em">{{n}}</i></a>
                       </div>
                   </div>

                    <!-- lesson area -->
                    <div class="row g-3 mt-5">
                        <div :style="style_lesson_full_name">
                            <router-link :to="{name:'category'}" class="cursor-on d-flex"><h5 class="mt-3" >More Afrikaans lessons    <i class="lni-arrow-right"></i></h5></router-link>
                        </div>
                        <!-- Single Feature Area-->
                        <div v-for="n in 20" class="col-12 col-sm-6 col-lg-6" v-on:click="onCloseModal">
                            <router-link :to="{name:'lesson'}"  >
                                <div class="card feature-card">
                                    <div class="card-body d-flex align-items-center row">
                                        <div class="fea-text col-10 col-sm-10 col-lg-10">
                                            <h6>Lesson {{n+1}}</h6><span>Meeting someone</span>
                                        </div>

                                        <div class=" col-2 col-sm-2 col-lg-2">
                                            <i class="lni-arrow-right-circle lesson-arrow"></i>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div :style="style_lesson_full_name">
                        <router-link :to="{name:'category'}" class="cursor-on d-flex"><h5 class="mt-3" >More Afrikaans lessons    <i class="lni-arrow-right"></i></h5></router-link>
                    </div>
                </div>
                <div class="cust-modal-footer align-content-center mb-4">
                    <button class="btn btn-outline-primary" v-on:click="onCloseModal"> Close </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheLessonListModal',
        props: {
            display: Boolean,
            selected_type: String
        },
        data(){
            return {
                lesson_type_list: ['Vocabulary lesson','Speak Words', 'Listening game', 'Matching game', 'Fill the blank'],
                style_lesson_full_name: {
                    'padding-left': '21px',
                    'padding-right': '10px',
                },
            }
        },
        computed: {
            isShown(){
                return this.display
            },
            header(){
                return "Meeting Someone"
            },
        },
        methods: {
            onCloseModal(){
                this.$emit('isClosed', true)
            },
            setQuiz(type){
                this.$emit('setQuiz', type)
                this.onCloseModal()
            }
        }
    }
</script>

<style scoped>
    h4 {
        color: gray;
    }
    @media only screen and (min-width: 1400px) {
        .cust-lesson-list-modal-content {
            max-width: 1015px; } }
    @media only screen and (min-width: 1200px) and (max-width: 1399px) {
        .cust-lesson-list-modal-content {
            max-width: 1130px; } }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .cust-lesson-list-modal-content {
            max-width: 950px; } }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .cust-lesson-list-modal-content {
            max-width: 700px; } }
    @media only screen and (min-width: 576px) and (max-width: 767px) {
        .cust-lesson-list-modal-content {
            max-width: 530px; } }
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
    a >.text-black-50:hover {
        color: black !important;
    }
    .feature-card i {
        color: #00000099;
        background-color: #0b075700;
    }
    .feature-card.active i, .feature-card:hover i, .feature-card:focus i {
        box-shadow: 0 2px 38px rgb(255 255 255 / 40%);
        color: white;
    }
</style>
