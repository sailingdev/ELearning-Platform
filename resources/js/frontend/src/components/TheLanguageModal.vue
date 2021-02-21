<template>
    <!-- The Modal -->
    <div id="myModal" class="cust-modal" :style="isShown?'display: block':'display: none'">

        <!-- Modal content -->
        <div class="cust-modal-content">
            <div class="cust-modal-header">
                <span class="cust-close" v-on:click="onCloseModal">&times;</span>
                <h4>{{header}}</h4>
            </div>
            <div class="cust-modal-body mt-4 mb-3">

            <!--  Flag Element -->
                <div class="row">
                    <div v-for="(flag, key) in langs" :key="key" class="col-xs-6 col-sm-4 col-md-4 col-lg-3 mt-1 mb-4">
                       <router-link :to="{name: 'Lessons'}">
                           <span :class="'flag-icon flag-icon-'+key"></span>
                            <span>{{flag.name}}</span>
                       </router-link>
                    </div>

                </div>

            </div>
            <div class="cust-modal-footer align-content-center mb-4">
                <button class="btn btn-outline-primary" v-on:click="onCloseModal"> Close </button>
            </div>
        </div>
    </div>
</template>

<script>
    import langs from '../LanguageList'
    export default {
        name: 'TheLanguageModal',
        props:{
            type: Number,
            display: Boolean,
        },
        data(){
            return {
                langs: langs
            }
        },
        computed: {
            isShown(){
                return this.display
            },
            header(){
                return this.type === 1? 'What language do you speak?' : 'What language do you want to learn?';
            }
        },
        methods: {
            onCloseModal(){
                this.$emit('isClosed', true)
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
</style>
