<template>
    <vs-prompt
        @cancel="val=''"
        @accept="acceptAlert"
        @close="close"
        :active.sync="activeEdit">
        <p>
            <span>Select Language</span>
            <v-select :options="list" v-model="selectedLang" class="w-full"/>
        </p>
        <p class="mt-3">
            <span style="margin-top: 2px">Select role</span>
            <v-select multiple :options="role" v-model="selectedRole" class="w-full"/>
        </p>
    </vs-prompt>
</template>

<script>
  export default {
    name: 'LessonDialog',
      data(){
        return {
            selectedLang : null,
            selectedRole : null
        }
      }
  }
</script>

<style scoped>

</style>
