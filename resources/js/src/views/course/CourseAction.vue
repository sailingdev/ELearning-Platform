<template>
    <vs-dropdown vs-trigger-click class="ml-auto md:block cursor-pointer">
        <vs-button radius icon="icon-settings" icon-pack="feather" />

        <vs-dropdown-menu class="w-auto">
            <vs-dropdown-item :disabled="!(this.isCourse || this.isLesson)">
                <div @click="addLesson" class="flex items-center">
                    <feather-icon icon="UserIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                    <span>Add lesson</span>
                </div>
            </vs-dropdown-item>
            <vs-dropdown-item :disabled="!isLesson">
                <div @click="editLesson" class="flex items-center">
                    <feather-icon icon="CheckSquareIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                    <span>Edit lesson</span>
                </div>
            </vs-dropdown-item>
            <vs-dropdown-item :disabled="!isLesson">
                <div @click="deleteLesson" class="flex items-center">
                    <feather-icon icon="MailIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                    <span>Delete lesson</span>
                </div>
            </vs-dropdown-item>
        </vs-dropdown-menu>

    </vs-dropdown>
</template>

<script>
  export default {
    name: 'CourseAction',
      props: {
        isLesson: {
            type: Boolean,
            default: false
        },
          isCourse: {
            type: Boolean,
              default: false
          }
      },
      methods: {
        addLesson(){
            this.$emit('addLesson');
        },
          editLesson(){
            this.$emit('editLesson');
          },
          deleteLesson(){
            this.$emit('deleteLesson');
          },
          resetType(){
            this.isPart = false;
            this.isCourse = false;
            this.isLesson = false;
          }
      }
  }
</script>

<style scoped>

</style>
