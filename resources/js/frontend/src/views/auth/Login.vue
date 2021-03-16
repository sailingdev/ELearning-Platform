<template>
    <!-- Register Area-->
    <div class="register-area section-padding-120-70 banner-mt">
        <div class="container">
            <div class="wow fadeInUp breadcrumb-title" data-wow-delay="200ms" data-wow-duration="1000ms">
                <h1>{{$t('Login.title')}}</h1>
            </div>
            <div class="row align-items-center justify-content-center wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                <!-- Register Thumbnail-->
                <!-- Register Card-->
                <div class="col-12 col-lg-7">
                    <div class="card register-card bg-gray p-1 p-sm-4 mb-50">
                        <div class="card-body">
                            <h4>{{$t('Login.welcome')}}</h4>
                            <p>{{$t('Login.account_question')}} <router-link class="ml-2" :to="{name: 'register'}">{{$t('Login.signup')}}</router-link></p>
                            <!-- Register Form-->
                            <div class="register-form my-5">
                                <label class="mb-1 text-danger">{{err_message}}</label>
                                <form @focusin="hidden_err">
                                    <div class="form-group mb-3">
                                        <input class="form-control rounded-0" name="email" type="email" :placeholder="$t('Email')" v-model="email" required>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="label-psswd" for="password"><span class="hide">{{$t('Hide')}}</span><span class="show">{{$t('Show')}}</span></label>
                                        <input class="input-psswd form-control rounded-0" name="password" id="password" type="password" :placeholder="$t('Password')" psswd-shown="false" v-model="password" required>
                                    </div>
                                    <button class="btn saasbox-btn white-btn w-100"  v-on:click="login"><i class="lni-unlock mr-2"></i>{{$t('Login.title')}}</button>
                                </form>
                                <div class="login-meta-data d-flex align-items-center justify-content-between">
                                    <div class="form-check mt-3">
                                        <input class="form-check-input" id="rememberMe" type="checkbox" value="" checked>
                                        <label class="form-check-label" for="rememberMe">{{$t('Login.keep')}}</label>
                                    </div><router-link class="forgot-password mt-3" :to="{name:'forgot-password'}">{{$t('Login.forgot')}}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return {
                email: null,
                password: null,
                err: null
            }
        },
        computed: {
          err_message(){
              return this.err;
          },
        },
        methods:{
            login(){
                let payload = {
                    email: this.email,
                    password: this.password
                }
                $('form').submit(false);
                this.$store.dispatch('auth/login', payload)
                    .then()
                    .catch(e => {
                        this.err = e.message;
                    });
            },
            hidden_err(){
                this.err = null
            }
        },
    }
</script>
