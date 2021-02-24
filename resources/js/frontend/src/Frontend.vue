<!-- =========================================================================================
  File Name: Frontend.vue
  Description: Main vue file - APP
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div id="frontend" :class="vueAppClasses">
    <router-view @setAppClasses="setAppClasses" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      vueAppClasses: []
    }
  },
  methods: {
    setAppClasses (classesStr) {
      this.vueAppClasses.push(classesStr)
    },
  },
  async created () {
    window.addEventListener('resize', this.handleWindowResize)
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleWindowResize)
    window.removeEventListener('scroll', this.handleScroll)
  }
}

</script>
