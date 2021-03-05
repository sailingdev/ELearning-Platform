<template>
   <div class="vx-row ">
       <div class="vx-col w-full lg:w-3/12 mb-base mw-32">
           <vx-card @focusin="onResetMSG">
               <p class="text-black mb-4">Properties</p>

               <!-- Title section -->
               <vs-alert :active="!!errMSG.title" color="danger" icon-pack="feather" icon="icon-info">
                   <span>{{ errMSG.title }}</span>
               </vs-alert>
               <vs-textarea v-model="title" label="Blog Title" class="w-full mt-3 mb-5" />

               <!-- Cover Image upload section -->
               <div class="mb-5" style="min-height: 200px">
                   <div v-if="!image_src">
                       <vs-alert :active="!!errMSG.cover_image" color="danger" icon-pack="feather" icon="icon-info">
                           <span>{{ errMSG.cover_image }}</span>
                       </vs-alert>
                       <p class="text-grey mb-3">Select cover image.</p>
                       <input type="file" @change="onFileChange">
                   </div>
                   <div v-else>
                       <img class="cover_img" :src="image_src" />
                       <button @click="removeImage">Remove image</button>
                   </div>
               </div>

               <!-- Category section   -->
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

       <!-- Editor section  -->
       <div class="vx-col w-full lg:w-8/12 mb-base">
           <vx-card @focusin="onResetMSG">
               <p class="text-grey mb-4">Build your blog page content.</p>
               <vs-alert class="mb-1" :active="!!errMSG.content" color="danger" icon-pack="feather" icon="icon-info">
                   <span>{{errMSG.content}}</span>
               </vs-alert>
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
    name: 'BlogEdit',
      props: {
        id: String
      },
      data() {
          return {
              image_src: '',
              content: '',
              category: 1,
              title: '',
              cover_image: '',
              err_title: '',
              err_cover_image: '',
              err_content: '',
          }
      },
      components: {
          quillEditor,
      },
      methods: {
          onFileChange(e) {
              var files = e.target.files || e.dataTransfer.files;
              if (!files.length)
                  return;
              this.cover_image = files[0]
              this.createImage(files[0]);
          },
          createImage(file) {
              var image = new Image();
              var reader = new FileReader();
              var vm = this;

              reader.onload = (e) => {
                  vm.image_src = e.target.result;
              };
              reader.readAsDataURL(file);
          },
          removeImage: function (e) {
              this.image_src = '';
          },
          onSubmit(){
              const config = {
                  headers: {
                      'content-type': 'multipart/form-data'
                  }
              }
              const id = this.id
              let data = new FormData()
              data.append('title', this.title)
              data.append('category', this.category)
              data.append('content', this.content)
              data.append('cover_image', this.cover_image)
              data.append('_method', 'PUT')
              this.$store.commit('SET_BEARER')
              this.$store.dispatch('blog/update', {config, id, data})
                  .then(() => {
                      this.successAlert()
                      this.$router.push(this.$router.currentRoute.query.to || '/admin/blog/list')
                  })
                  .catch(err => {
                      if (err.response.status === 422){
                          let errs = err.response.data.errors;
                          for (const index in errs)
                          {
                              switch (index) {
                              case 'title':
                                  this.err_title = errs[index][0].replace(/[^a-zA-Z0-9 ]/g, "")
                                  break
                              case 'cover_image':
                                  this.err_cover_image = errs[index][0].replace(/[^a-zA-Z0-9 ]/g, "")
                                  break
                              case 'content':
                                  this.err_content = errs[index][0].replace(/[^a-zA-Z0-9 ]/g, "")
                                  break
                              }
                          }
                      }
                  })
          },
          onResetMSG(){
              this.err_cover_image = ''
              this.err_title = ''
              this.err_content = ''
          },
          successAlert(){
              this.$vs.notify({
                  color:'success',
                  title:'Successfully Updated !',
                  text:'A blog is successfully updated.'
              })
          },
      },
      computed: {
        errMSG(){
            return {
                title: this.err_title,
                cover_image: this.err_cover_image,
                content: this.err_content
            }
        },
      },
      mounted(){
          this.$store.commit('SET_BEARER')
          this.$store.dispatch('blog/show', this.id).then( post => {
              this.image_src = post.cover_image
              this.content = post.content
              this.category = post.category_id
              this.title = post.title
              this.content = post.content
          })
      }
  }
</script>

<style >
    .ql-editor{
        min-height:466px;
    }
    .con-img-upload {
        text-align: -webkit-center;
    }
    .con-input-upload {
        float: unset;
    }
    .mw-32{
        min-width: 320px;
    }
    .cover_img {
        width: 100%;
        margin: auto;
        display: block;
        margin-bottom: 10px;
        border-radius: 5px;
    }
</style>
