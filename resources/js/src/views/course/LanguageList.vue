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
                      <img class="h-4 w-5" :src="getImg(data[indextr].key)" :alt="data[indextr].name " />
                      <span class="hidden sm:block ml-2">{{ data[indextr].name }}</span>
                    </span>
                </vs-td>

                <vs-td :data="data[indextr].role">
                    <vs-chip transparent v-for="(item, index) in data[indextr].language_roles" :key="index" :color="roleColor(item)">
                        {{ item.name }}
                    </vs-chip>
                </vs-td>

                <vs-td class="vs-align-center">
                    <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" class="cursor-pointer  p-1" @click="edit(tr.id)" />
                    <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="cursor-pointer  p-1" @click="remove(tr.id)" />
                </vs-td>
            </vs-tr>
        </template>
    </vs-table>
        <language-block :active="isActive" :id="selectedID" :isRemove="isRemove" @deActive="close"/>
    </div>
</template>

<script>
  import LanguageBlock from './LanguageBlock.vue'
  import { mapGetters } from 'vuex'
  export default {
      name: 'LanguageList',
      components:{
          LanguageBlock
      },
      data(){
        return {
            val: '',
            activeEdit: false,
            activeRemove: false,
            list: [],
            isActive: false,
            selectedID: null,
            isRemove: false
        }
      },
      methods:{
          close(val){
              this.selectedID = null
              this.isRemove = false
              this.isActive = val
          },
          addNew(){
              this.isActive = true
          },
          edit(id){
              this.selectedID = id
              this.isActive = true
          },
          remove(id){
            this.isRemove = true
            this.edit(id)
          }
      },
      computed: {
        roleColor(){
            return role => role.id === 1 ? 'success' : 'danger'
        },
          getImg(){
            return img => require(`@assets/frontend/flags/4x3/${img}.svg`)
          },
          ...mapGetters({
              dataList: 'course/dataList'
          })
      },
      mounted(){
          this.$store.commit('SET_BEARER')
          this.$store.dispatch('course/indexLanguage')
      }
  }
</script>

<style lang="scss" scoped>
    input[type=file]::-webkit-file-upload-button {
        border: 2px solid #7367F0;
        padding: .2em .4em;
        border-radius: .2em;
        background-color: #7367F0;
        color: white;
        transition: 1s;
    }

    input[type=file]::file-selector-button {
        border: 2px solid #7367F0;
        padding: .2em .4em;
        border-radius: .2em;
        background-color: #7367F0;
        transition: 1s;
    }
</style>
