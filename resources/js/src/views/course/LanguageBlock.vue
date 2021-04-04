<template>
    <vs-prompt
        @cancel="close"
        @accept="acceptAlert"
        @close="close"
        :is-valid="validation"
        :color="isRemove?'danger':'primary'"
        :title="title"
        :active.sync="activePrompt">
        <div v-if="!isRemove">
            <v-select :options="list" v-model="currentLang" />
            <ul class="demo-alignment">
                <li>
                    <vs-checkbox v-model="own" >Own</vs-checkbox>
                </li>
                <li>
                    <vs-checkbox v-model="to_learn" >To Learn</vs-checkbox>
                </li>
            </ul>
            <vs-alert color="warning" title="Warning" class="mt-10" :active="!validation">
                The language roles should be selected.
            </vs-alert>
        </div>
        <div v-else>
            <span>Are you sure you want to delete the selected language?</span>
        </div>
    </vs-prompt>
</template>

<script>
    import vSelect from 'vue-select'
  export default {
    name: 'LanguageBlock',
      components: {
        vSelect
      },
      props: {
          active: {
              type: Boolean,
              default:false
          },
          id: {
            type: Number,
              default: null
          },
          isRemove: {
              type: Boolean,
              default: false
          }
      },
      data(){
        return {
            activePrompt: false,
            langType:[],
            currentLang:null,
            to_learn: false,
            own: false,
        }
      },
      watch: {
        active(newVal, oldVal){
            this.activePrompt = newVal
        },
          activePrompt(newVal, oldVal){
            !newVal && this.$emit('deActive', newVal)
          },
          id(newVal, oldVal){
            if(newVal !== null){
                this.$store.commit('course/SET_CURRENT_LANG_ID', newVal)
                this.currentLang = this.$store.getters['course/currentLang']
                this.own = this.currentLang.own
                this.to_learn = this.currentLang.to_learn
            }
          }
      },
      methods: {
          acceptAlert(){
              this.$store.commit('SET_BEARER')
              const link = this.isRemove ? 'destroyLanguage' : 'updateLanguage'
              const payload = {
                  id: this.id != null ? this.id : this.currentLang.value,
                  currentLang: this.currentLang,
                  is_own: this.own,
                  is_to_learn: this.to_learn
              }
              this.$store.dispatch(`course/${link}`, payload)
                  .then(res=>{
                      this.$vs.notify({
                          color:'success',
                          title:this.isRemove?'Delete':'Update',
                          text:`Successfully ${this.isRemove ? 'deleted': 'updated'} !`
                      })
                  })
                  .catch(err=>{
                      this.$vs.notify({
                          color:'danger',
                          title:this.isRemove?'Delete':'Update',
                          text: err.response.data.message
                      })
                  })
              this.currentLang = null
              this.to_learn = this.own = false
              console.log(this.to_learn)
          },
          close(){
              this.$emit('deActive', false)
          },
      },
      computed:{
          title(){
              return this.id ? 'Edit language' : 'Add language'
          },
          list(){
              let array = []
              let langs = this.$store.getters['course/all']
              langs.filter(item => array.push({label: item.name, value: item.id}))
              return array
          },
          validation(){
              if (this.isRemove) return true
              return (this.own || this.to_learn) && this.currentLang != null
          }
      },
  }
</script>

<style scoped>

</style>
