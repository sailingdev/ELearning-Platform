<template>
    <div class="mt-2 social-group center" :style="{'background-color': isColored}">
        <a class="cursor-on item-3" @click="btn_open" :style="{color: status ? '#fff' : '#0811fb' }">
            <i :class="{fa:true, 'fa-share-alt':!status, 'fa-close': status}"></i>
        </a>
        <div class="item-1 cursor-on" :style="{display: isOpened}">
            <i class="lni-facebook-filled"></i>
        </div>
        <div class="item-2 cursor-on" :style="{display: isOpened}">
            <i class="lni-twitter-filled"></i>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TheSocialButton',
      data(){
          return {
              status: false
          }
      },
      computed: {
          isOpened(){
              return this.status === false ? 'none' : 'block'
          },
          isColored(){
              return this.status ? '#0811fb' :  '#fff'
          }
      },
      methods: {
          btn_open(){
              this.status = !this.status
          }
      }
  }
</script>

<style scoped>

</style>
