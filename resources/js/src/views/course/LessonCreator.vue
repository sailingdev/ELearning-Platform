<template>
    <vs-row class="mt-8">
        <vs-col vs-offset="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10" >
            <vx-card class="lg:w-10/12 sm:w-full min-h-300" :title="isLessonPart ? 'Add a new lesson part.' : 'Type Lesson title.'" remove-card-action>
                <!-- SLOT = ACTIONS -->
                <template slot="actions">
                    <feather-icon class="cursor-pointer" icon="XIcon" @click="onClose" />
                </template>

                    <!-- tab 1 content -->
                    <div class="vx-row" v-show="!isLessonPart">
                        <div class="vx-col w-full">
                            <vs-input :label="editLesson?'New Name' : 'Lesson Name'"  v-model="name" class="w-full mt-4" />
                        </div>
                    </div>

                    <!-- tab 2 content -->
                    <div v-show="isLessonPart" @focusin="isValid = true">
                        <div class="vx-row" >
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-textarea v-model="title" label="the content of own" rows="3" />
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-textarea v-model="subTitle" label="the content of to learn." rows="3" />
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
                    <vs-alert v-if="isLessonPart && !isValid" title="Warning" color="rgb(231, 154, 23)" active="true" class="mt-5 text-warning">
                        To create new lesson, you have to add a lesson part at least.
                    </vs-alert>
                    <div class="flex justify-end flex-wrap mt-auto">
                        <vs-button v-show="!editLesson" @click="back" :disabled="!isLessonPart" class="mt-4 mr-5" type="border" color="#b9b9b9">Back</vs-button>
                        <vs-button v-if="isLessonPart || editLesson" :disabled="isNextable" @click="onSubmit" class="mt-4 mr-2 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">Submit</vs-button>
                        <vs-button v-else @click="next" :disabled="isNextable" class="mt-4 mr-2 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">Next</vs-button>
                    </div>
             </vx-card>
        </vs-col>
    </vs-row>
</template>

<script>

    export default {
        name: 'LessonCreator',
        props: {
            editLesson: {
                type: Boolean,
                default: false
            },
            id: {
                type: Number,
                default: null
            }
        },
        data(){
          return this.initialData();
        },
        computed: {
            isNextable(){
                return this.name.length === 0;
            },
        },
        methods: {
            onClose(){
              this.$emit('onClose');
            },
            getAudio(e){
                let audio = e.target.files || e.dataTransfer.files;
                if (!audio.length) return;
                this.audio = audio[0];
            },
            next(e){
                e.preventDefault();
                this.isLessonPart = true;
            },
            back(e){
                e.preventDefault();
                this.isLessonPart = false;
            },
            onSubmit(e) {
                e.preventDefault();
                this.isValid = this.validator();
                console.log('Validate', this.isValid);
                if (!this.isValid) return ;

                this.$store.commit('SET_BEARER');
                this.editLesson ? this.update() : this.store();
                this.onClose();
            },
            store(){
                const payload = {
                    notify: this.$vs.notify,
                    data: new FormData()
                }
                payload.data.append('id', this.id);
                payload.data.append('name', this.name);
                payload.data.append('title', this.title);
                payload.data.append('sub_title', this.subTitle);
                payload.data.append('audio', this.audio);
                this.$store.dispatch('lesson/store', payload);
            },
            update(){
                const payload = {
                    notify: this.$vs.notify,
                    id: this.id,
                    name: this.name,
                }
                this.$store.dispatch('lesson/update', payload);
            },
            reset(){
              Object.assign(this.$data, this.initialData())
            },
            validator(){
                if (this.editLesson) return true;
                return this.title.length > 0 && this.subTitle.length > 0 && this.audio !== null;
            },
            initialData(){
                return {
                    lesson_id: '',
                    name: '',
                    isLessonPart:false,
                    isValid: true,
                    audio: null,
                    title: '',
                    subTitle: ''
                }
            }
        },
    }
</script>
<style lang="scss">
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
