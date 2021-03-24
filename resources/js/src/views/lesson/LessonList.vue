<template>
    <div id="chat-app" class="border border-solid d-theme-border-grey-light rounded relative overflow-hidden">
        <vs-sidebar class="items-no-padding" parent="#chat-app" :click-not-close="clickNotClose"
                    :hidden-background="clickNotClose" v-model="isChatSidebarActive" id="chat-list-sidebar">
            <vs-row vs-align="flex-end" vs-type="flex" vs-justify="flex-end" class="chat__profile-search flex p-4">
                <vs-col vs-type="flex" vs-justify="flex-end" class=" h-10" >
                    <feather-icon class="md:justify-items-end lg:hidden -ml-3 cursor-pointer" icon="XIcon" @click="toggleChatSidebar(false)" />
                </vs-col>
            </vs-row>
            <vs-divider class="d-theme-border-grey-light m-0" />
            <component :is="scrollbarTag" class="chat-scroll-area pt-4" :settings="settings" :key="$vs.rtl">
                <div class="chat__contacts">
                </div>
            </component>
        </vs-sidebar>

        <!-- RIGHT COLUMN -->
        <div
            class="chat__bg no-scroll-content chat-content-area border border-solid d-theme-border-grey-light border-t-0 border-r-0 border-b-0"
            :class="{'sidebar-spacer--wide': clickNotClose}">
            <div class="chat__navbar">
                <lesson-navbar :isSidebarCollapsed="!clickNotClose" @openContactsSidebar ="toggleChatSidebar(true)" ></lesson-navbar>
            </div>
            <component :is="scrollbarTag" class="chat-content-scroll-area border border-solid d-theme-border-grey-light" :settings="settings" ref="chatLogPS" :key="$vs.rtl">

            </component>
        </div>

    </div>
</template>

<script>
    import LessonNavbar from './LessonNavbar'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    export default {
        name: 'LessonList',
        components: {
            LessonNavbar,
            VuePerfectScrollbar
        },
        data () {
            return {
                clickNotClose: true,
                isChatSidebarActive  : true,
                settings             : {
                    maxScrollbarLength : 60,
                    wheelSpeed         : 0.70
                },
            }
        },
        watch: {
            windowWidth () {
                this.setSidebarWidth()
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
        }
    }
</script>

<style lang="scss">
    @import "@sass/vuexy/apps/chat.scss";
</style>
