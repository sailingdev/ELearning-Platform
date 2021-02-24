<template>
<!--    <div class="shop&#45;&#45;area shop-fullwidth section-padding-0-120">-->
<!--        <div class="container">-->
<!--            <h2 class="wow fadeInUp mt-3" data-wow-delay="200ms" data-wow-duration="1000ms">Free German lessons</h2>-->
<!--            <p class="mb-3 wow fadeInUp mt-5" data-wow-delay="300ms" data-wow-duration="1000ms">-->
<!--                What lesson do you want to learn?-->
<!--            </p>-->
<!--            <div class="row align-items-center justify-content-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">-->
<!--                <div class="row g-3">-->
<!--                    &lt;!&ndash; Single Feature Area&ndash;&gt;-->
<!--                    <div v-for="n in 3" class="col-12 col-sm-6 col-lg-4">-->
<!--                        <router-link :to="{name:'Lessons'}">-->
<!--                            <div class="card feature-card">-->
<!--                                <div class="card-body d-flex align-items-center row">-->
<!--                                    <div class="fea-text col-10 col-sm-9 col-lg-9">-->
<!--                                        <h6>Lesson {{n}}</h6><span>Meeting someone</span>-->
<!--                                    </div>-->

<!--                                    <div class=" col-2 col-sm-3 col-lg-3">-->
<!--                                        <i class="lni-arrow-right-circle lesson-arrow"></i>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </router-link>-->
<!--                    </div>-->
<!--                    <div class="text-center mt-5">-->
<!--                        <a class="let-us-know" href="#">Do you see an error on our website? Please let us know</a>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    -->
    <!-- Service Area-->
    <section class="service-area section-padding-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-9 col-lg-7 col-xxl-6">
                    <div class="section-heading text-center">
                        <h2>What lesson do you want to learn?</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center g-5">
                <!-- Single Service Area-->
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="card service-card wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                        <div class="card-body">
                            <div class="icon"><i class=""></i></div>
                            <h4>Vocabulary</h4>
                            <p>It's crafted with the latest trend of design.</p>
                        </div>
                    </div>
                </div>
                <!-- Single Service Area-->
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="card service-card wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1000ms">
                        <div class="card-body">
                            <div class="icon"><i class="lni-sun"></i></div>
                            <h4>Grammar</h4>
                            <p>It's crafted with the latest trend of design.</p>
                        </div>
                    </div>
                </div>
                <!-- Single Service Area-->
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="card service-card wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1000ms">
                        <div class="card-body">
                            <div class="icon"><i class="lni-play"></i></div>
                            <h4>Dialogues</h4>
                            <p>It's crafted with the latest trend of design.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Category'
  }
</script>

<style scoped>
    /*.let-us-know {*/
    /*    font-weight: 600;*/
    /*}*/

    /*.feature-card.active, .feature-card:hover, .feature-card:focus {*/
    /*    border-color: unset;*/
    /*    background-color: unset;*/
    /*    box-shadow: 0 18px 56px rgb(255 255 255 / 18%);*/
    /*    color: white;*/
    /*}*/
    /*.feature-card i {*/
    /*    color: #00000099;*/
    /*    background-color: #0b075700;*/
    /*}*/
    /*.feature-card.active i, .feature-card:hover i, .feature-card:focus i {*/
    /*    box-shadow: 0 2px 38px rgb(255 255 255 / 40%);*/
    /*    color: white;*/
    /*}*/
    /*a {*/
    /*    color: #00000099;*/
    /*}*/
    /*a:hover {*/
    /*    color: black;*/
    /*}*/
    /*h6 {*/
    /*    color: unset;*/
    /*}*/
</style>
