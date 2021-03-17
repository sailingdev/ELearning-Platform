<template>
    <div>
        <header class="header-area header2">
            <div class="container">
                <div :class="breakpoint">
                    <nav class="classy-navbar navbar2 justify-content-between" id="saasboxNav">
                        <!-- Logo--><router-link class="nav-brand mr-5" :to="'/'"><Logo /></router-link>

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
                                            {{$t('LearnAfrikaans')}} <i class="lni lni-chevron-down-circle" style="font-weight: bold;"></i>
                                        </a>
                                    </li>
                                    <li v-on:click="setMenuOn()"><router-link :to="{name: 'contact'}">{{$t('Contact.name')}}</router-link></li>
                                    <li v-on:click="setMenuOn()"><router-link :to="{name: 'pricing'}">{{$t('Pricing.name')}}</router-link></li>
                                    <li v-on:click="setMenuOn()"><router-link :to="{name: 'blog'}">{{$t('Blog.name')}}</router-link></li>
                                </ul>
                                <!-- Login Button-->
                                <div v-if="!isLoggedIn"  class="login-btn-area ml-4 mt-4 mt-lg-0" v-on:click="setMenuOn()">
                                    <router-link class="btn saasbox-btn btn-sm  btn-full" :to="{name:'login' }">{{$t('Login.name')}}</router-link>
                                </div>
                                <div v-else class="login-btn-area ml-4 mt-4 mt-lg-0" v-on:click="setMenuOn()">
                                    <a class="btn saasbox-btn btn-sm  btn-full" v-on:click="logout()">{{$t('Logout')}}</a>
                                </div>
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
    import Logo from '../components/Logo'
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
        TheLanguageModal,
          Logo
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
          },
          isLoggedIn(){
                let isLoggedIn = this.$store.state.auth.isLoggedIn
                return isLoggedIn
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
          },
          logout(){
              this.$store.dispatch('auth/logout').then(res => {
                  this.$router.push(this.$router.currentRoute.query.to || '/').then().catch(err => {})
              })
          }
      },
      mounted () {
        this.$store.commit('auth/SET_LOGGEDIN', !!localStorage.getItem('tortu_accessToken'))
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
