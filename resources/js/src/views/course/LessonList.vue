<template>
    <div id="chat-app" class="border border-solid d-theme-border-grey-light rounded relative overflow-hidden">
        <vs-sidebar class="items-no-padding" parent="#chat-app" :click-not-close="clickNotClose"
                    :hidden-background="clickNotClose" v-model="isChatSidebarActive" id="chat-list-sidebar">
            <vs-row class="chat__profile-search p-4" >
                <vs-col vs-type="flex" vs-justify="flex-end" vs-w="11">
                    <!-- DROPDOWN -->
                    <course-action :is-course="isCourse" :is-lesson="isLesson" @addLesson="addLesson" @editLesson="editLesson" @deleteLesson="deleteLesson"  />
                </vs-col>
                <vs-col vs-type="flex" vs-justify="flex-end" vs-w="1">
                    <feather-icon class="lg:hidden cursor-pointer" icon="XIcon" @click="toggleChatSidebar(false)" />
                </vs-col>
            </vs-row>
            <vs-divider class="d-theme-border-grey-light m-0" />
            <component :is="scrollbarTag" class="chat-scroll-area pt-4" :settings="settings" :key="$vs.rtl">
                <div class="chat__contacts">
                    <lesson-tree :key="lesson_tree" ref="lesson-tree" @itemId="id => this.payload.itemId = id" @selectedLesson="selectedLesson" @selectedCourse="selectedCourse" @selectedOthers="selectedOthers" />
                </div>
            </component>
        </vs-sidebar>

        <!-- RIGHT COLUMN -->
        <div
            class="no-scroll-content chat-content-area border border-solid d-theme-border-grey-light border-t-0 border-r-0 border-b-0"
            :class="{'sidebar-spacer--wide': clickNotClose}">
            <div class="chat__navbar">
                <lesson-navbar :isSidebarCollapsed="!clickNotClose" :isLesson="isLesson" @openContactsSidebar ="toggleChatSidebar(true)" @addPart="addPart"></lesson-navbar>
            </div>
            <component :is="scrollbarTag" class="chat-content-scroll-area border border-solid d-theme-border-grey-light" :settings="settings" ref="chatLogPS" :key="$vs.rtl">
                <lesson-creator v-if="isLessonCreator || isLessonEditor" :edit-lesson="isLessonEditor" :id="payload.itemId" @onClose="closeLessonCreator" />
                <lesson-part-creator v-if="isPartCreator || isPartEditor" @closePart="closePart" :add-part="isPartCreator" :edit-part="isPartEditor" :id="payload.itemId" />
                <lesson-parts-table v-if="isLesson && !isLessonCreator && !isLessonEditor && !isPartCreator && !isPartEditor" :lesson_parts = "lesson_parts" />
            </component>
        </div>

    </div>
</template>

<script>
    import LessonNavbar from './LessonNavbar';
    import LessonTree from './LessonTree';
    import LessonCreator from './LessonCreator';
    import CourseAction from './CourseAction';
    import LessonPartsTable from './LessonPartsTable';
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import LessonPartCreator from './LessonPartCreator'
    export default {
        name: 'LessonList',
        components: {
            LessonPartCreator,
            LessonNavbar,
            LessonTree,
            LessonCreator,
            CourseAction,
            LessonPartsTable,
            VuePerfectScrollbar,
        },
        data () {
            return {
                clickNotClose: true,
                isChatSidebarActive  : true,
                settings             : {
                    maxScrollbarLength : 60,
                    wheelSpeed         : 0.70
                },
                actionList: [
                ],
                data: [],
                isCourse: false,
                isLesson: false,
                isLessonCreator: false,
                isLessonEditor: false,
                isPartCreator: false,
                isPartEditor: false,
                lesson_parts: [],
                payload : {
                    itemId: null,
                    notify: this.$vs.notify
                },
                lesson_tree: 0,
            }
        },
        watch: {
            windowWidth () {
                this.setSidebarWidth()
            },
            isCourse(newVal, oldVal){
                if (!newVal){
                    this.isLessonCreator = false;
                }
            }
        },
        computed: {
            scrollbarTag(){
              return this.$store.getters.scrollbarTag
            },
            windowWidth () {
                return this.$store.state.windowWidth
            },
        },
        created(){
          this.setSidebarWidth()
        },

        methods: {
            toggleChatSidebar (value = false) {
                if (!value && this.clickNotClose) return
                this.isChatSidebarActive = value
            },
            setSidebarWidth () {
                if (this.windowWidth < 1200) {
                    this.isChatSidebarActive = this.clickNotClose = false
                } else {
                    this.isChatSidebarActive = this.clickNotClose = true
                }
            },
            selectedCourse(){
                console.log(`Course Selected:: ${this.payload.itemId}`)
                this.isCourse = true
                this.isLesson = false
            },
            selectedLesson(){
                console.log(`Lesson Selected:: ${this.payload.itemId}`)
                this.isCourse = false
                this.isLesson = true
                this.$store.dispatch('lesson/show', this.payload).then(lesson_parts => this.lesson_parts = lesson_parts);
            },
            selectedOthers(){
                this.isCourse = false
                this.isLesson = false
            },
            addLesson(){
                this.isLessonCreator = true
            },
            editLesson(){
                this.isLessonEditor = true
            },
            deleteLesson(){
                this.$store.dispatch('lesson/destroy', this.payload).then(()=>{
                    this.lesson_tree ++;
                })
            },
            closeLessonCreator(){
                this.resetState();
                this.lesson_tree ++;
                console.log('lESSON_TABLE_STATUS', this.isLesson)
            },
            addPart(){
                this.resetState();
                this.isPartCreator = true;
            },
            editPart(){
                this.resetState();
                this.isPartEditor = true;
            },
            closePart(){
                this.resetState();
            },
            resetState(){
                this.isLessonCreator = false;
                this.isLessonEditor = false;
                this.isPartCreator = false;
                this.isPartEditor = false;
            }
        }
    }
</script>

<style lang="scss">
    @import "@sass/vuexy/apps/chat.scss";
</style>
