<template>
    <div class="chat__header">
        <vs-navbar collapse  class="p-4 flex navbar-custom" color="white" type="flat">
            <div class="relative flex mr-4 h-10">
                <feather-icon icon="MenuIcon" class="mr-4 cursor-pointer" v-if="isSidebarCollapsed" @click.stop="$emit('openContactsSidebar')" />

                <div class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0 bg-success"></div>
            </div>
            <h6>firsthisd</h6>
            <vs-spacer></vs-spacer>
        </vs-navbar>
    </div>
</template>

<script>
  export default {
    name: 'LessonNavbar',
      props:{
          isSidebarCollapsed: {
              type: Boolean,
              required: true
          }
      }
  }
</script>

<style scoped>

</style>
