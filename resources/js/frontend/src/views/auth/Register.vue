<template>
    <!-- Register Area-->
    <div class="register-area section-padding-120-70 banner-mt">
        <div class="container">
            <div>
                <div class="wow fadeInUp breadcrumb-title" data-wow-delay="200ms" data-wow-duration="1000ms">
                    <h1>{{$t('Register.name')}}</h1>
                </div>
            </div>
            <div class="row align-items-center justify-content-between wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                <div class="col-12 col-lg-6">
                    <div class="register-thumbnail mb-50"><img src="frontend/img/bg-img/1.png" alt=""></div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card register-card bg-gray p-1 p-sm-4 mb-50">
                        <div class="card-body">
                            <h4>{{$t('Register.title')}}</h4>
                            <p>{{$t('Register.subtitle')}}<router-link class="ml-2" :to="{name: 'login'}">{{$t('Login.name')}}</router-link></p>
                            <!-- Register Form-->
                            <div  class="register-form my-5">
                                <label class="mb-1 text-danger" >{{err_message}}</label>
                                <form @focusin="remove_err">
                                    <div class="form-group mb-3">
                                        <input class="form-control rounded-0" type="email" :placeholder="$t('Email')" v-model="email" required>
                                    </div>
                                    <div class="form-group mb-3">
                                        <input class="form-control rounded-0" type="text" :placeholder="$t('FullName')" v-model="full_name" required>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="label-psswd" for="registerPassword"><span class="hide">{{$t('Hide')}}</span><span class="show">{{$t('Show')}}</span></label>
                                        <input class="input-psswd form-control rounded-0" id="registerPassword" type="password" :placeholder="$t('Password')" psswd-shown="false" v-model="password" required>
                                    </div>
                                    <button class="btn saasbox-btn white-btn w-100" v-on:click="register">{{$t('Register.btn_register')}}</button>
                                </form>
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
        name: 'Register',
        data() {
            return {
                email: null,
                full_name: null,
                password: null,
                err: null
            }
        },
        computed: {
          err_message(){
              return this.err;
          }
        },
        methods: {
            register(){
                let payload = {
                    email: this.email,
                        name: this.full_name,
                        password: this.password,
                        password_confirmation: this.password
                }
                $('form').submit(false)
                this.$store.dispatch('auth/register', payload)
                    .then()
                    .catch(e => {
                        this.err = e.message;
                    })
            },
            remove_err(){
                this.err = null
            }
        }
    }
</script>
