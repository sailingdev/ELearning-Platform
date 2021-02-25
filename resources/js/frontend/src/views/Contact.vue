<template>
    <div data-scopeId>
        <!-- Contact Area-->
        <div class="saasbox-contact-us-area section-padding-120-40 banner-mt">
            <div class="container ">
                <div class="wow fadeInUp  breadcrumb-title" data-wow-delay="200ms" data-wow-duration="1000ms">
                    <h1>{{$t('Contact.title')}}</h1>
                </div>
                <div class="row justify-content-between mt-5 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                    <!-- Contact Side Info-->
                    <div class="col-12 col-lg-5 col-xl-4">
                        <div class="contact-side-info mb-80">
                            <h2 class="mb-3">{{$t('Contact.subtitle')}}</h2>
                            <p class="mb-4">{{$t('Contact.description')}}</p>
                            <div class="contact-mini-card-wrapper">
                                <!-- Contact Mini Card-->
                                <div class="contact-mini-card">
                                    <div class="contact-mini-card-icon"><i class="lni lni-envelope"></i></div>
                                    <p>example@domain.com</p>
                                </div>
                                <!-- Contact Mini Card-->
                                <div class="contact-mini-card">
                                    <div class="contact-mini-card-icon"><i class="lni lni-headphone-alt"></i></div>
                                    <p>(+880) 145 2635896</p>
                                </div>
                                <!-- Contact Mini Card-->
                                <div class="contact-mini-card">
                                    <div class="contact-mini-card-icon"><i class="lni lni-tag"></i></div>
                                    <p>{{$t('Contact.timescale')}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Contact Form-->
                    <div class="col-12 col-lg-7">
                        <div class="contact-form mb-80">
                            <form id="main_contact_form" action="php/mail.php" method="POST">
                                <div id="success_fail_info"></div>
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <label for="name">{{$t('Contact.full_name')}}</label>
                                        <input class="form-control mb-30" id="name" type="text" placeholder="Meng Lang" value="" name="name" required>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label for="email">{{$t('Contact.email')}}</label>
                                        <input class="form-control mb-30" id="email" type="email" placeholder="care.designingworld@gmail.com" name="email" value="" required>
                                    </div>
                                    <div class="col-12">
                                        <label for="subject">{{$t('Contact.topics')}}</label>
                                        <input class="form-control mb-30" id="topics" type="text" placeholder="Presale Questions" name="topics" value="">
                                    </div>
                                    <div class="col-12">
                                        <label for="message">{{$t('Contact.message')}}</label>
                                        <textarea class="form-control mb-30" id="message" name="message" :placeholder="$t('Contact.content')"></textarea>
                                    </div>
                                    <div class="col-12 text-center">
                                        <button class="btn saasbox-btn w-100" type="submit">{{$t('Contact.btn_send')}}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Google Maps-->
        <div class="google-maps-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14047.882048906753!2d-0.14268817855593444!3d51.50701170390822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1570696571917!5m2!1sen!2sbd" allowfullscreen=""></iframe>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style>

</style>
