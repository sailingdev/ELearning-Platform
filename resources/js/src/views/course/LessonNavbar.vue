<template>
    <div class="chat__header">
        <vs-navbar collapse  class="p-4 flex navbar-custom" color="white" type="flat">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="flex-start" vs-w="4" class="h-10">
                    <feather-icon icon="MenuIcon" class="mr-4 cursor-pointer" v-if="isSidebarCollapsed" @click.stop="$emit('openContactsSidebar')" />
                </vs-col>
                <vs-col vs-type="flex" vs-justify="flex-end" vs-w="8">
                    <vs-button :disabled="!isLesson" type="border" color="primary" @click="AddPart">Add lesson part</vs-button>
                </vs-col>
            </vs-row>
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
          },
          isLesson: {
              type: Boolean,
              required: true
          }
      },
      methods: {
          AddPart(){
              this.$emit('addPart');
          }
      }
  }
</script>

<style scoped>

</style>
