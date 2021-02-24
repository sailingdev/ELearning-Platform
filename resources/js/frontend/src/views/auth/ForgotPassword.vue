<template>
    <!-- Register Area-->
    <div class="register-area section-padding-120-70 banner-mt">
        <div class="container">
            <div class="wow fadeInUp breadcrumb-title" data-wow-delay="200ms" data-wow-duration="1000ms">
                <h1>Reset Password</h1>
            </div>
            <div class="row align-items-center justify-content-between wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                <!-- Register Thumbnail-->
                <div class="col-12 col-lg-6">
                    <div class="register-thumbnail mb-50"><img src="frontend/img/bg-img/hero-3.png" alt=""></div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card register-card bg-gray p-1 p-sm-4 mb-50">
                        <div class="card-body">
                            <h4>Reset Password</h4>
                            <p>Already have an account?<router-link class="ml-2" :to="{name: 'login'}">Log in</router-link></p>
                            <!-- Register form-->
                            <div class="register-form my-5">
                                <form>
                                    <div class="form-group mb-3">
                                        <input class="form-control rounded-0" type="email" placeholder="Email Address" v-model="email" required>
                                    </div>
                                    <button class="btn saasbox-btn white-btn w-100" v-on:click="reset_pass"><i class="lni-lock mr-2"></i>Reset Password</button>
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
    name: 'ForgetPassword',
      data(){
        return {
            email: null
        }
      },
      methods: {
          reset_pass(){
              $('form').submit(false)
              let payload = {
                email: this.email
            }
            this.$store.dispatch('auth/forgot_password', payload)
        }
      }
  }
</script>

<style scoped>

</style>
