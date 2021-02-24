<template>
    <!-- Register Area-->
    <div class="register-area section-padding-120-70 banner-mt">
        <div class="container">
            <div class="wow fadeInUp breadcrumb-title" data-wow-delay="200ms" data-wow-duration="1000ms">
                <h1>Login</h1>
            </div>
            <div class="row align-items-center justify-content-between wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                <!-- Register Thumbnail-->
                <div class="col-12 col-lg-6">
                    <div class="register-thumbnail mb-50"><img src="frontend/img/bg-img/hero-3.png" alt=""></div>
                </div>
                <!-- Register Card-->
                <div class="col-12 col-lg-6">
                    <div class="card register-card bg-gray p-1 p-sm-4 mb-50">
                        <div class="card-body">
                            <h4>Welcome Back!</h4>
                            <p>Didn't have an account? <router-link class="ml-2" :to="{name: 'register'}">Sign Up</router-link></p>
                            <!-- Register Form-->
                            <div class="register-form my-5">
                                <form>
                                    <div class="form-group mb-3">
                                        <input class="form-control rounded-0" type="email" placeholder="Email Address" v-model="email" required>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="label-psswd" for="password"><span class="hide">HIDE</span><span class="show">SHOW</span></label>
                                        <input class="input-psswd form-control rounded-0" id="password" type="password" placeholder="Password" psswd-shown="false" v-model="password" required>
                                    </div>
                                    <button class="btn saasbox-btn white-btn w-100" v-on:click="login"><i class="lni-unlock mr-2"></i>Login</button>
                                </form>
                                <div class="login-meta-data d-flex align-items-center justify-content-between">
                                    <div class="form-check mt-3">
                                        <input class="form-check-input" id="rememberMe" type="checkbox" value="" checked>
                                        <label class="form-check-label" for="rememberMe">Keep me logged in</label>
                                    </div><router-link class="forgot-password mt-3" :to="{name:'forgot-password'}">Forgot Password?</router-link>
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
                password: null
            }
        },
        methods:{
            login(){
                let payload = {
                    email: this.email,
                    password: this.password
                }
                $('form').submit(false);
                this.$store.dispatch('auth/login', payload)
            }
        }

    }
</script>
