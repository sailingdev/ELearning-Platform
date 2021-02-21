<!-- =========================================================================================
    File Name: Main.vue
    Description: Main layout
    ----------------------------------------------------------------------------------------
    Item Name: Front-end Template
    Author: Tortu
    Author URL:
========================================================================================== -->


<template>
    <div>
        <Header />
        <router-view />
        <Footer />
    </div>
</template>


<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';
export default {
    components:{
      Header,
      Footer
    },
  data () {
    return {
    }
  },
    computed:{
        current_name: function (){
            return this.$route.name;
        }
    }
}

</script>

