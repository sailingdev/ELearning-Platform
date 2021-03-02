<template>
   <div class="vx-row ">
       <div class="vx-col w-full lg:w-1/5 mb-base">
           <vx-card>
               <p class="text-black mb-4">Properties</p>
               <vs-textarea v-model="title" label="Blog Title" class="w-full mt-5 mb-5" />

                   <vs-upload limit="1" text="Upload Main Image" action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />

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
                   <vs-button class="btn btn-primary justify-end">Submit</vs-button>
               </div>
           </vx-card>
       </div>
       <div class="vx-col w-full lg:w-4/5 mb-base">
           <vx-card>
               <p class="text-grey mb-4">Build your blog page content.</p>
               <quill-editor v-model="content" ></quill-editor>
               <div class="flex justify-between flex-wrap">

               </div>
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
              category: "1",
              title: ''
          }
      },
      components: {
          quillEditor,
      },
      methods: {
          successUpload(){
              this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
          }
      }
  }
</script>

<style >
    .ql-editor{
        min-height:490px;
    }
</style>
