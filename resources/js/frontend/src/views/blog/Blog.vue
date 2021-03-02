<template>
    <!--  blog-management Area  -->
    <div class="saasbox--blog--area section-padding-120">
        <div class="container">
            <div class="row justify-content-center wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                <div class="col-12 col-md-9 col-lg-7 col-xxl-6">
                    <div class="section-heading text-center">
                        <h2>{{$t('Blog.title')}}</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-12 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                    <div class="row g-5">
                        <!-- Single blog-management Post-->
                        <div v-for="n in 5" :key="n" class="col-12">
                            <div class="card blog-card"><a href="#"><img class="card-img-top" src="frontend/img/bg-img/blog7.jpg" alt=""></a>
                                <div class="post-content p-4"><a class="d-block text-muted mb-2" href="#">Sep 15, 2020</a><router-link class="post-title d-block mb-3" :to="{name: 'blog-details'}">
                                    <h4>Seven ways agency can improve your business.</h4></router-link>
                                    <p>It's crafted with the latest trend of design & coded with all modern approaches.</p>
                                    <div class="post-meta d-flex align-items-center justify-content-between"><router-link class="post-author" :to="{name: 'blog-details'}"><img src="frontend/img/bg-img/t1.png" alt=""></router-link><span class="text-muted">2 min read</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Pagination Area-->
                    <div class="saasbox-pagination-area mt-5">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">-</a></li>
                                <li class="page-item"><a class="page-link" href="#">9</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-12 col-md-5 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                    <div class="blog-sidebar-area">
                        <!-- Single Widget Area-->
                        <div class="single-widget-area mb-5">
                            <!-- Search Form-->
                            <form class="widget-form">
                                <input class="form-control" type="search" :placeholder="$t('blog-management.search')">
                                <button ><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <!-- Single Widget Area-->
                        <div class="single-widget-area mb-5">
                            <h4 class="widget-title mb-30">{{$t('Category.name')}}</h4>
                            <ul class="catagories-list pl-0">
                                <li><a href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i>{{$t('Category.vocabulary.title')}}</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i>{{$t('Category.grammar.title')}}</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i>{{$t('Category.dialogues.title')}}</a></li>
                            </ul>
                        </div>
                        <!-- Single Widget Area-->
                        <div class="single-widget-area mb-5">
                            <h4 class="widget-title mb-30">{{$t('blog-management.recent_posts')}}</h4>
                            <!-- Single Recent Post-->
                            <div class="single-recent-post d-flex align-items-center">
                                <div class="post-thumb"><a href="#"><img src="frontend/img/bg-img/sb1.jpg" alt=""></a></div>
                                <div class="post-content"><a class="post-title" href="#">Seven ways agency can improve your business.</a>
                                    <p class="post-date">Sep 30, 2020</p>
                                </div>
                            </div>
                            <!-- Single Recent Post-->
                            <div class="single-recent-post d-flex align-items-center">
                                <div class="post-thumb"><a href="#"><img src="frontend/img/bg-img/sb2.jpg" alt=""></a></div>
                                <div class="post-content"><a class="post-title" href="#">The reason why everyone love business.</a>
                                    <p class="post-date">Sep 30, 2020</p>
                                </div>
                            </div>
                            <!-- Single Recent Post-->
                            <div class="single-recent-post d-flex align-items-center">
                                <div class="post-thumb"><a href="#"><img src="frontend/img/bg-img/sb3.jpg" alt=""></a></div>
                                <div class="post-content"><a class="post-title" href="#">How to get people to like trend.</a>
                                    <p class="post-date">Sep 30, 2020</p>
                                </div>
                            </div>
                            <!-- Single Recent Post-->
                            <div class="single-recent-post d-flex align-items-center">
                                <div class="post-thumb"><a href="#"><img src="frontend/img/bg-img/sb4.jpg" alt=""></a></div>
                                <div class="post-content"><a class="post-title" href="#">Seven ways agency can improve your business.</a>
                                    <p class="post-date">Sep 30, 2020</p>
                                </div>
                            </div>
                            <!-- Single Recent Post-->
                            <div class="single-recent-post d-flex align-items-center">
                                <div class="post-thumb"><a href="#"><img src="frontend/img/bg-img/sb5.jpg" alt=""></a></div>
                                <div class="post-content"><a class="post-title" href="#">The reason why everyone love business.</a>
                                    <p class="post-date">Sep 30, 2020</p>
                                </div>
                            </div>
                            <!-- Single Recent Post-->
                            <div class="single-recent-post d-flex align-items-center">
                                <div class="post-thumb"><a href="#"><img src="frontend/img/bg-img/sb6.jpg" alt=""></a></div>
                                <div class="post-content"><a class="post-title" href="#">How to get people to like trend.</a>
                                    <p class="post-date">Sep 30, 2020</p>
                                </div>
                            </div>
                        </div>
                        <!-- Single Widget Area-->
                        <div class="single-widget-area">
                            <h4 class="widget-title mb-30">{{$t('blog-management.popular_tags')}}        </h4>
                            <ul class="popular-tags clearfix pl-0">
                                <li><a href="#">business</a></li>
                                <li><a href="#">agency</a></li>
                                <li><a href="#">studio</a></li>
                                <li><a href="#">marketing</a></li>
                                <li><a href="#">internet technology</a></li>
                                <li><a href="#">analytics</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Blog'
  }
</script>

