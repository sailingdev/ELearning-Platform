<template>
    <div>
        <!-- Shop Area-->
        <div class="shop--area shop-fullwidth section-padding-120">
            <div class="container">
                <the-language-modal :display=isShown :type="modal" @isClosed="closeModal" />
                <h2 class="wow fadeInUp mt-3" data-wow-delay="200ms" data-wow-duration="1000ms">{{$t('Home.title')}}</h2>
                <p class="mb-3 wow fadeInUp mt-5" data-wow-delay="300ms" data-wow-duration="1000ms">
                    {{$t('Home.subtitle')}}
                </p>
                <div class="row wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                    <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4 mt-1">
                    <button class="btn-border" v-on:click="selectLang(1)"> {{$t('Home.speakLang')}} <i class="lni-arrow-down"></i></button>
                    </div>
                    <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4 mt-1">
                        <button class="btn-border" v-on:click="selectLang(2)"> {{$t('Home.learnLang')}} <i class="lni-arrow-down"></i></button>
                    </div>
                    <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 mt-1">
                        <button class="btn btn-pink h-100" v-on:click="selectLang(2)" ><i class="lni-chevron-right"></i></button>
                    </div>
                </div>
                <div class="wow fadeInUp row g-4 mt-5" data-wow-delay="500ms" data-wow-duration="1000ms">
                    <!-- Single lesson Card-->
                    <div class="col-6 col-sm-6 col-lg-4" v-for="n in 6" :key="n">
                        <div class="card shop-card">
                            <router-link :to="{name: 'category'}">
                                <div class="product-img-wrap"><img class="card-img-top" src="frontend/img/language.jpg" alt="">
                                    <!-- Love Products--><a :class="n === 3 ? 'love-product active' : 'love-product'" href="#" data-toggle="tooltip" data-placement="right" title="Liked"><i class="lni-heart"></i></a>
                                </div>
                                <div class="product-meta d-flex align-items-center justify-content-between p-4">
                                    <div class="product-name">
                                        <h6>{{$t('LearnAfrikaans')}}</h6>
                                    </div>
                                    <div class="product-add-to-cart">
                                        <!-- Add To Cart--><a href="#"><i class="lni-play"></i></a>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Pagination Area-->
        <div class="saasbox-pagination-area section-padding-0-120">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">...</a></li>
                    <li class="page-item"><a class="page-link" href="#">9</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import TheLanguageModal from '../components/TheLanguageModal.vue'
  export default {
    name: 'Home',
      components:{
          TheLanguageModal
      },
      data(){
        return {
            display: false,
            modal: 0
        }
      },
      computed: {
          isShown(){
            return this.display;
        },
      },
      methods: {
          closeModal(val){
              this.display = !val;
          },
          selectLang(val){
              this.modal = val;
              this.display = true;
          }
      }
  }
</script>

<style lang="css" scoped>
    .shop-card .product-img-wrap .love-product {
        width: 21px;
        height: 21px;
    }
    .shop-card .product-img-wrap .love-product i {
        line-height: 1px;
    }
</style>
