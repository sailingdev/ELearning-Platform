<template>
    <!-- blog-management Details Area -->
    <div class="saasbox--blog--area section-padding-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-9 col-lg-7 col-xxl-6">
                    <div class="section-heading text-center">
                        <h2></h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                <div class="post--like-post">
                    <a href="#"><i class="lni-heart"></i></a><span>267</span>
                    <the-social-button />
                </div>
                <div class="col-12 col-sm-10 col-md-8">
                    <!-- blog-management Details Area-->
                    <div class="single-blog-details-area"><img class="post-thumbnail mb-5" :src="currentPost.cover_image" alt="">
                        <div class="post-date mb-2">{{updated_at}}</div>
                        <h2 class="mb-3">{{currentPost.title}}</h2>
                        <div class="post-meta mb-5"><a class="post-author" href="#">By Nazrul</a></div>
                        <div v-html="currentPost.content">
                        </div>
                    </div>
                    <!-- Post Tag & Share Button-->
                    <div class="post-tag-share-button d-sm-flex align-items-center justify-content-between my-5">
                        <!-- Post Tags-->
                        <div class="post-tag pb-5">
                            <ul class="d-flex align-items-center pl-0" >
                                <li><a href="#">{{currentPost.category.name}}</a></li>
                            </ul>
                        </div>
                        <!-- Share Button-->
                        <div class="share-button pb-5"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-pinterest"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import moment from 'moment';
    import TheSocialButton from '../../components/TheSocialButton.vue'
  export default {
    name: 'BlogDetails',
      components: {
        TheSocialButton
      },
      data(){
        return {
            id: null,
            idReady: false,
        }
      },
      computed: {
        ...mapGetters(['currentPost']),
          updated_at(){
              return moment(this.currentPost.updated_at).format('MMM D, YYYY');
          }
      },
      mounted(){
        this.id = this.$route.params.id;
        this.$store.dispatch('showPost', this.id);
      },
  }
</script>
