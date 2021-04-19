<template>
    <div class="pl-2 pr-2">
        <vs-table :data="lesson_parts"  stripe :search="true">
            <template slot="thead">
                <vs-th>Nro</vs-th>
                <vs-th>Title</vs-th>
                <vs-th>Sub title</vs-th>
                <vs-th>Audio</vs-th>
                <vs-th>Created_at</vs-th>
                <vs-th>Updated_at</vs-th>
                <vs-th>Action</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td>
                        {{ indextr + 1 }}
                    </vs-td>

                    <vs-td >
                        {{ tr.title }}
                    </vs-td>

                    <vs-td>
                        {{tr.sub_title}}
                    </vs-td>

                    <vs-td>
                        <audio :ref="`audio_${tr.id}`" controls>
                            <source
                                :src="tr.src"
                            />
                        </audio>
                    </vs-td>

                    <vs-td>
                        {{ format_date(tr.created_at)}}
                    </vs-td>

                    <vs-td>
                        {{format_date(tr.updated_at)}}
                    </vs-td>

                    <vs-td class="vs-align-center ">
                        <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" class="cursor-pointer p-1" @click="onEdit(tr.id)" />
                        <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="cursor-pointer  p-1" @click="onDelete(tr.id)" />
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <vs-prompt
            @accept="acceptAlert"
            color="danger"
            title="Warning!"
            :active.sync="activePrompt">
            <span>Are you sure ?</span>
        </vs-prompt>
    </div>
</template>

<script>
  export default {
    name: 'LessonPartsTable',
    props: {
      lesson_parts: {
          type: Array,
          default: []
      }
    },
      data(){
        return {
            activePrompt: false,
            itemId: null
        }
      },
      methods:{
        format_date(str){
            return moment(str).format('YYYY-MM-DD');
        },
          onEdit(itemId){
            this.$emit('itemId', itemId);
            this.$emit('onEdit');
          },
          onDelete(itemId){
              this.activePrompt = true;
              this.itemId = itemId;
          },
          acceptAlert(){
            this.$store.dispatch('lesson/destroyPart', this.itemId)
          }
      }
  }
</script>

<style scoped>

</style>
