<template>
    <div>
        <div class="preloader" id="preloader">
            <div class="spinner-grow text-light" role="status"><span class="sr-only">Loading...</span></div>
        </div>
        <header class="header-area header2">
            <div class="container">
                <div :class="breakpoint">
                    <nav class="classy-navbar navbar2 justify-content-between" id="saasboxNav">
                        <!-- Logo--><router-link class="nav-brand mr-5" :to="{name: 'Home'}"><img src="" alt=""></router-link>
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
                                    <li v-on:click="setMenuOn()"><router-link :to="{name: 'Home'}" >Home</router-link></li>
                                    <li v-on:click="setMenuOn()"><router-link :to="{name: 'Lessons'}">Lesson List</router-link></li>
                                    <li v-on:click="setMenuOn()"><router-link :to="{name: 'Lesson'}" >Lesson</router-link></li>
                                    <li v-on:click="setMenuOn()"><router-link :to="{name: 'Contact'}">Contact</router-link></li>
                                    <li v-on:click="setMenuOn()"><router-link :to="{name: 'Pricing'}">Pricing</router-link></li>
                                </ul>
                                <!-- Login Button-->
                                <div class="login-btn-area ml-4 mt-4 mt-lg-0" v-on:click="setMenuOn()"><router-link class="btn saasbox-btn btn-sm  btn-full" :to="{name: 'Login'}">Login</router-link></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
  export default {
    name: 'Header',
      data(){
        return {
            windowWidth: window.innerWidth,
            menuClass: false
        }
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
        }
      },
      methods: {
          setMenuOn(){
              this.menuClass = !this.menuClass;
          },
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
