<template>
    <div>
        <header class="header-area header2">
            <div class="container">
                <div :class="breakpoint">
                    <nav class="classy-navbar navbar2 justify-content-between" id="saasboxNav">
                        <!-- Logo--><router-link class="nav-brand mr-5" :to="{name: 'home'}"><img src="images/logo/logo.png" alt=""></router-link>


                        <!-- Navbar Toggler-->
                        <div class="classy-navbar-toggler" v-on:click="setMenuOn()"><span class="navbarToggler" ><span></span><span></span><span></span><span></span></span></div>
                        <!-- Menu-->
                        <div :class="menu">
                            <!-- close btn-->
                            <div class="classycloseIcon" v-on:click="setMenuOn()">
                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                            </div>
                            <!-- Nav Start-->
                            <div class="classynav">
                                <ul id="corenav">

                                    <li class="cursor-on" v-on:click="setMenuOn()">
                                        <a v-on:click="showModal">
                                            learn Afrikaans <i class="lni lni-chevron-down-circle" style="font-weight: bold;"></i>
                                        </a>
                                    </li>
                                    <li v-on:click="setMenuOn()"><router-link :to="{name: 'contact'}">Contact</router-link></li>
                                    <li v-on:click="setMenuOn()"><router-link :to="{name: 'pricing'}">Pricing</router-link></li>
                                    <li v-on:click="setMenuOn()"><router-link :to="{name: 'blog'}">Blog</router-link></li>
                                </ul>
                                <!-- Login Button-->
                                <div class="login-btn-area ml-4 mt-4 mt-lg-0" v-on:click="setMenuOn()"><router-link class="btn saasbox-btn btn-sm  btn-full" :to="{name: 'login'}">Login</router-link></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        <the-language-modal :display=isShown :type="modal" @isClosed="closeModal" />
    </div>
</template>

<script>
    import TheLanguageModal from '../components/TheLanguageModal'
  export default {
    name: 'Header',
      data(){
        return {
            windowWidth: window.innerWidth,
            menuClass: false,
            modal:2,
            display: false
        }
      },
      components:{
        TheLanguageModal
      },
      computed: {
            breakpoint(){
                return this.windowWidth <= 991 ? 'classy-nav-container breakpoint-on' : 'classy-nav-container breakpoint-off';
            },
            menu(){
                return {
                    'classy-menu':true,
                    'menu-on':this.menuClass
                }
            },
          isShown(){
                return this.display;
          }
      },
      methods: {
          setMenuOn(){
              this.menuClass = !this.menuClass;
          },
          closeModal(){
              this.display = false
          },
          showModal(){
              this.display = true
          }
      }
  }
</script>

<style scoped>
    /*@media only screen and (min-width: 1400px) {*/
    /*}*/
    /*@media only screen and (min-width: 1200px) and (max-width: 1399px) {*/
    /*}*/
    /*@media only screen and (min-width: 992px) and (max-width: 1199px) {*/
    /*}*/
    @media only screen and (max-width: 991px) {
        .btn-full {
            width: 100%;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
     }
    @media only screen and (min-width: 576px) and (max-width: 767px) {
    }
</style>
