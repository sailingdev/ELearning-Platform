<template>
    <!-- Blog Details Area -->
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
                    <a href="#"><i class="lni-heart"></i></a><span>267 {{$t('Blog.heart')}}</span>
                    <the-social-button />
                </div>
                <div class="col-12 col-sm-10 col-md-8">
                    <!-- Blog Details Area-->
                    <div class="single-blog-details-area"><img class="post-thumbnail mb-5" src="frontend/img/bg-img/blog20.jpg" alt="">
                        <div class="post-date mb-2">Oct 1, 2019</div>
                        <h2 class="mb-3">Seven ways agency can improve your business</h2>
                        <div class="post-meta mb-5"><a class="post-author" href="#">By Nazrul</a><a class="post-tutorial" href="#">Creative Agency</a></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, animi, numquam. Nam suscipit iste enim deleniti vitae facere earum doloribus, tempora alias quas voluptatibus aut, voluptates qui nihil, quisquam quos.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quibusdam, nam porro cupiditate itaque doloribus commodi aut mollitia repellendus. Cum consequuntur nihil, itaque numquam aspernatur nisi quo soluta tempora rem?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet tempore officia, ab, pariatur harum quae cupiditate quia nisi atque qui tempora quis neque, molestiae doloribus repudiandae excepturi cum vero similique, aliquid laboriosam. Tempore vitae, quod rem architecto eum a dolores eveniet dolor aperiam hic alias suscipit, animi.</p>
                        <h4 class="mb-3">The reason why everyone love business.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente enim eligendi natus ratione, quia, illo reiciendis voluptas nostrum expedita eum libero. Officiis sapiente non, totam numquam dolor. Dolores qui impedit voluptatem accusamus odio modi mollitia reiciendis quod tenetur accusantium optio soluta excepturi adipisci quidem nobis, totam reprehenderit consectetur omnis, nemo ea voluptatum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aliquam mollitia accusantium debitis dolore soluta temporibus, laborum, fuga tempora adipisci molestias. Nobis similique nulla eveniet incidunt reprehenderit nam, accusantium asperiores iure. Quas voluptatem, facere facilis repellat!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis asperiores, quo suscipit quaerat deserunt ullam et ab, dolor, architecto totam culpa temporibus. Quo, quidem. Molestiae, deserunt impedit neque.</p>
                    </div>
                    <!-- Post Tag & Share Button-->
                    <div class="post-tag-share-button d-sm-flex align-items-center justify-content-between my-5">
                        <!-- Post Tags-->
                        <div class="post-tag pb-5">
                            <ul class="d-flex align-items-center pl-0">
                                <li><a href="#">agency</a></li>
                                <li><a href="#">business</a></li>
                                <li><a href="#">studio</a></li>
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
    import TheSocialButton from '../../components/TheSocialButton.vue'
  export default {
    name: 'BlogDetails',
      components: {
        TheSocialButton
      }
  }
</script>
