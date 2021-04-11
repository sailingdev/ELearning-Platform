<template>
    <vs-row class="mt-8">
        <vs-col vs-offset="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <vx-card class="lg:w-10/12 sm:w-full min-h-300" :title="'Add a new lesson part.'">
                <!-- SLOT = ACTIONS -->
                <template slot="actions">
                    <feather-icon class="cursor-pointer" icon="XIcon" @click="onClose" />
                </template>
                <!-- tab 2 content -->
                <div @focusin="isValid = true">
                    <div class="vx-row" >
                        <div class="vx-col md:w-1/2 w-full">
                            <vs-textarea v-model="title" label="Lesson part content" rows="3" />
                        </div>
                        <div class="vx-col md:w-1/2 w-full">
                            <vs-textarea v-model="subTitle" label="Lesson part content" rows="3" />
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col md:w-1/2 w-full">
                            <vs-row class="mt-5">
                                <input type="file" id="fileUpload" @change="getAudio">
                                <label for="fileUpload" class="mt-5">Please upload an audio file.</label>
                            </vs-row>
                        </div>
                    </div>
                </div>
                <vs-alert v-if="!isValid" title="Warning" color="rgb(231, 154, 23)" active="true" class="mt-5 text-warning">
                    Please fill the content and upload the audio file.
                </vs-alert>
                <div class="flex justify-end flex-wrap mt-auto">
                    <vs-button @click="onSubmit" class="mt-4 mr-2 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">Submit</vs-button>
                </div>
            </vx-card>
        </vs-col>
    </vs-row>
</template>

<script>
  export default {
      name: 'LessonPartCreator',
      props: {
          addPart: {
              type: Boolean,
              default: false
          },
          editPart: {
              type: Boolean,
              default: false
          },
          id: {
              type: Number,
              default: null
          }
      },
      data() {
          return {
              lessonPartId: '',
              name: '',
              isValid: true,
              title: '',
              subTitle: '',
              audio: null,
          }
      },
      methods: {
          getAudio(e){
              this.audio = e.target.files[0];
          },
          async onSubmit(e) {
              e.preventDefault();
              this.isValid = this.validator();
              if (this.isValid){
                  const payload = {
                      notify: this.$vs.notify,
                      data: new FormData()
                  }
                  payload.data.append('id', this.id);
                  payload.data.append('name', this.name);
                  payload.data.append('title', this.title);
                  payload.data.append('sub_title', this.subTitle);
                  payload.data.append('audio', this.audio);
                  const url = this.editPart ? 'lesson/updatePart' : 'lesson/storePart';
                  const res = await this.$store.dispatch(url, payload);
                  res === 201 || 204 ? this.onClose() : '';
              }
          },
          validator(){
              return this.title.length > 0 && this.subTitle.length > 0 && this.audio !== null;
          },
          onClose(){
              this.$emit('closePart');
          }
      }
  }
</script>

<style scoped>

</style>
