<!--
props: Boolean Display
emit: Boolean isClosed
-->
<template>
    <div>
        <!-- The Modal -->
        <div id="myModal" class="cust-modal" :style="isShown?'display: block':'display: none'">

            <!-- Modal content -->
            <div class="cust-modal-content">
                <div class="cust-modal-header">
                    <span class="cust-close" v-on:click="onCloseModal">&times;</span>
                    <h4>{{header}}</h4>
                </div>
                <div class="cust-modal-body mt-4 mb-3">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
                <div class="cust-modal-footer align-content-center mb-4">
                    <button class="btn btn-outline-primary" v-on:click="onCloseModal"> Close </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TheModal',
      props: {
        display: Boolean
      },
      data(){
        return {
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
