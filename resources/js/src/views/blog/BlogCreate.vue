<template>
   <div class="vx-row ">
       <div class="vx-col w-full lg:w-3/12 mb-base">
           <vx-card>
               <p class="text-black mb-4">Properties</p>
               <vs-textarea v-model="title" label="Blog Title" class="w-full mt-5 mb-5" />

                   <vs-upload limit="1" text="Upload Main Image" ref="imgSubmit" action="http://localhost/" @change="onFilePicked" @on-success="successUpload" />

               <p class="text-grey mb-3">Catetory</p>
               <ul class="centerx mb-12">
                   <li>
                       <vs-radio v-model="category" vs-value="1">Vocabulary</vs-radio>
                   </li>
                   <li>
                       <vs-radio v-model="category" vs-value="2">Grammar</vs-radio>
                   </li>
                   <li>
                       <vs-radio v-model="category" vs-value="3">Dialogues</vs-radio>
                   </li>
               </ul>
               <div class="text-right">
                   <form enctype="multipart/form-data">
                        <vs-button class="btn btn-primary justify-end" @click.prevent="onSubmit" >Submit</vs-button>
                   </form>
               </div>
           </vx-card>
       </div>
       <div class="vx-col w-full lg:w-9/12 mb-base">
           <vx-card>
               <p class="text-grey mb-4">Build your blog page content.</p>
               <quill-editor v-model="content" ></quill-editor>
           </vx-card>
       </div>
   </div>

</template>

<script>
    // require styles
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    import { quillEditor } from 'vue-quill-editor'

  export default {
    name: 'BlogCreate',
      data() {
          return {
              content: `...`,
              category: 1,
              title: '',
              cover_img: ''
          }
      },
      components: {
          quillEditor,
      },
      methods: {
          successUpload(){
              this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
          },
          onSubmit(){
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
              let data = new FormData()
              data.append('title', this.title)
              data.append('category', this.category)
              data.append('content', this.content)
              data.append('cover_image', this.cover_img)
              this.$store.commit('SET_BEARER')
              this.$store.dispatch('blog/add_new', {config, data})
                .catch(err => {
                    this.erros = {}
                    if (err.response.status === 422){
                        this.erros = err.response.data.errors;
                    }
                    console.log(this.erros)
                })
          },
          onFilePicked(event){
              this.cover_img = event
          }
      },
  }
</script>

<style >
    .ql-editor{
        min-height:490px;
    }
    .con-img-upload {
        text-align: -webkit-center;
    }
    .con-input-upload {
        float: unset;
    }
</style>
