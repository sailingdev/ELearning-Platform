<template>
    <div class="shop--area shop-fullwidth section-padding-120">
        <div class="container">
            <h2 class="wow fadeInUp mt-3" data-wow-delay="200ms" data-wow-duration="1000ms">Free German lessons</h2>
            <p class="mb-3 wow fadeInUp mt-5" data-wow-delay="300ms" data-wow-duration="1000ms">
                Teach yourself German. Learn with 125 free lessons. There is no risk and no contract. Learn to speak German. Totally free!
            </p>
            <div class="row align-items-center justify-content-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">
                <div class="row g-3">
                    <!-- Single Feature Area-->
                    <div v-for="n in 35" class="col-12 col-sm-6 col-lg-3">
                        <router-link :to="{name:'lesson'}">
                        <div class="card feature-card">
                            <div class="card-body d-flex align-items-center row">
                                <div class="fea-text col-10 col-sm-9 col-lg-9">
                                    <h6>Lesson {{n}}</h6><span>Meeting someone</span>
                                </div>

                                <div class=" col-2 col-sm-3 col-lg-3">
                                    <i class="lni-arrow-right-circle lesson-arrow"></i>
                                </div>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <the-contact-modal />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TheContactModal from '../components/TheContactModal'
  export default {
    name: 'LessonList',
      components: {
        TheContactModal
      }
  }
</script>

<style lang="css" scoped>
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
    h6 {
        color: unset;
    }
</style>
