<template>
    <!-- Footer Area-->
    <div>
        <div class="container">
            <div class="border-top"></div>
        </div>
        <the-language-modal :display=isShown :type="modal" @isClosed="closeModal" />
        <footer class="footer-area footer2 section-padding-120">
            <div class="container">
                <div class="row justify-content-between">
                    <!-- Footer Widget Area-->
                    <div class="col-12 col-sm-10 col-lg-3">
                        <div class="footer-widget-area mb-70"><a class="d-block mb-4" href="index.html"><img src="img/core-img/logo-white.png" alt=""></a>
                            <p>{{$t('SignUpForEmails')}}</p>
                            <p>{{$t('SignUpForEmailsContent')}}</p>
                            <div class="newsletter-form">
                                <form action="#">
                                    <input class="form-control" type="email" :placeholder="$t('EnterEmail')">
                                    <button class="btn d-none" type="submit">Go</button>
                                </form>
                            </div>
                            <div class="footer-social-icon d-flex align-items-center"><a href="#" data-toggle="tooltip" data-placement="top" title="Facbook"><i class="fa fa-facebook"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="fa fa-twitter"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i class="fa fa-instagram"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="Linkedin"><i class="fa fa-linkedin"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i class="fa fa-youtube"></i></a></div>
                        </div>
                    </div>
                    <!-- Footer Widget Area-->
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="footer-widget-area mb-70">
                            <ul>
                                <h5>&nbsp</h5>
                                <li><a href="#" target="_blank">{{$t('TermsConditions.name')}}</a></li>
                                <li><a href="#" target="_blank">{{$t('Contact.name')}}</a></li>
                                <li><a href="#" target="_blank">{{$t('AboutUs.name')}}</a></li>
                                <li><a href="#" target="_blank">{{$t('FAQ.name')}}</a></li>
                                <li><router-link :to="{name: 'home'}">{{$t('Home.name')}}</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <!-- Footer Widget Area-->
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="footer-widget-area mb-70">
                            <h5>&nbsp</h5>
                            <ul>
                                <li><a href="#" target="_blank">{{$t('SiteMap.name')}}</a></li>
                                <li><a href="#" target="_blank">{{$t('Pricing.name')}}</a></li>
                                <li><a href="#" target="_blank"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 col-lg-5">
                        <!-- Copywrite Text-->
                        <div class="footer--content-text">
                            <p class="mb-0">{{$t('AllRightReservedBy')}} <a href="#" target="_blank">{{$t('AllRightReservedByName')}}</a></p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-5">

                    </div>
                    <div class="col-12 col-lg-2">
                        <!-- Default dropup button-->
                        <div class="language-dropdown text-center text-lg-right mt-4 mt-lg-0">
                            <div class="btn-group">
                                <button v-on:click="selectLang()" class="btn saasbox-btn-2 dropdown-toggle text-white" type="button" >{{$t('Language')}}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import TheLanguageModal from '../components/TheLanguageModal'
  export default {
    name: 'Footer',
      data(){
          return {
              display: false,
              modal: 1
          }
      },
      components: {
        TheLanguageModal
      },
      computed: {
          isShown(){
              return this.display;
          },
      },
      methods: {
          closeModal(){
              this.display = false;
          },
          selectLang(){
              this.display = true;
          }
      }

  }
</script>

<style scoped>

</style>
