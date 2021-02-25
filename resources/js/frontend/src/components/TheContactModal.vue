<!--
props: Boolean Display
emit: Boolean isClosed
-->
<template>
    <div>
        <div class="text-center mt-5">
            <a class="let-us-know cursor-on" v-on:click="manageModal(true)">{{$t('LetUsKnow')}}</a>
        </div>
        <!-- The Modal -->
        <div id="myModal" class="cust-modal" :style="isShown?'display: block':'display: none'">
            <!-- Modal content -->
            <div class="cust-modal-content">
                <div class="cust-modal-header">
                    <span class="cust-close" v-on:click="manageModal(false)">&times;</span>
                    <h4>{{$t('Contact.title')}}</h4>
                </div>
                <div class="cust-modal-body mt-4 mb-3 row justify-content-between">
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
                <div class="cust-modal-footer align-content-center mb-4">
                    <button class="btn btn-outline-primary" v-on:click="manageModal(false)"> Close </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheContactModal',
        data(){
            return {
                display: false
            }
        },
        computed: {
            isShown(){
                return this.display
            },
            header(){
                return "What language do you speak?"
            },
        },
        methods: {
            manageModal(val){
                this.display = val
            },
        }
    }
</script>

<style scoped>
    h4 {
        color: gray;
    }
    @media only screen and (min-width: 1400px) {
        .cust-modal-content {
            max-width: 1015px; } }
    @media only screen and (min-width: 1200px) and (max-width: 1399px) {
        .cust-modal-content {
            max-width: 1130px; } }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .cust-modal-content {
            max-width: 950px; } }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
        .cust-modal-content {
            max-width: 700px; } }
    @media only screen and (min-width: 576px) and (max-width: 767px) {
        .cust-modal-content {
            max-width: 530px; } }

    .let-us-know {
        font-weight: 600;
    }
    a {
        color: #00000099;
    }
    a:hover {
        color: black;
    }
</style>
