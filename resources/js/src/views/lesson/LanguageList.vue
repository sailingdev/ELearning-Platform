<template>
    <div>
    <vs-table :data="dataList"  stripe :search="true">
        <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">
            <div class="flex flex-wrap-reverse items-center data-list-btn-container">

                <!-- ADD NEW -->
                <a @click="addNew" class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" >
                    <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
                    <span class="ml-2 text-base text-primary">Add New</span>
                </a>

            </div>
        </div>

        <template slot="thead">
            <vs-th>Nro</vs-th>
            <vs-th>Name</vs-th>
            <vs-th>Role</vs-th>
            <vs-th>Action</vs-th>
        </template>

        <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                <vs-td :data="data[indextr].id">
                    {{ data[indextr].id }}
                </vs-td>

                <vs-td :data="data[indextr].img">
                    <span class="cursor-pointer flex items-center i18n-locale">
                      <img class="h-4 w-5" :src="getImg(data[indextr].img)" :alt="data[indextr].name " />
                      <span class="hidden sm:block ml-2">{{ data[indextr].name }}</span>
                    </span>
                </vs-td>

                <vs-td :data="data[indextr].role">
                    <vs-chip transparent v-for="(item, index) in data[indextr].role" :key="index" :color="roleColor(item)">
                        {{ item }}
                    </vs-chip>
                </vs-td>

                <vs-td>
                    <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" class="cursor-pointer" />
                    <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2 cursor-pointer"  />
                </vs-td>
            </vs-tr>
        </template>
    </vs-table>

    </div>
</template>

<script>
    import vSelect from 'vue-select'
    import languageList from '../../LanguageList'
  export default {
      name: 'LanguageList',
      components:{
        vSelect
      },
      data(){
        return {
            dataList: this.$store.state.lesson.lang,
            role: this.$store.state.lesson.langRole,
            val: '',
            activeEdit: false,
            activeRemove: false,
            list: [],

        }
      },
      methods:{
          acceptAlert(){
              this.$store.dispatch('lesson/storeLanguage')
              this.$vs.notify({
                  color:'success',
                  title:'Accept Selected',
                  text:'Lorem ipsum dolor sit amet, consectetur'
              })
          },
          close(){
              this.$vs.notify({
                  color:'danger',
                  title:'Closed',
                  text:'You close a dialog!'
              })
          },
          addNew(){
              this.activeEdit = true
          }
      },
      computed: {
        roleColor(){
            return role => role === 'Own' ? 'success' : 'danger'
        },
          getImg(){
            return img => require(`@assets/images/flags/${img}.svg`)
          },
      },
      mounted(){
          for (const [key, value] of Object.entries(languageList)) {
              this.list.push({label: value.name, value: key})
          }
      }

  }
</script>

<style scoped>

</style>
