<template>
    <div class="min-height-container lesson-position">
        <div class="social-media-share">
            <div class="share-closed"><i class="icon-share"></i></div>
            <div class="share-open">
                <div class="share-email"><i class="icon-mail-alt"></i></div>
                <div class="share-facebook"><i class="icon-facebook"></i></div>
                <div class="share-cancel"><i class="icon-cancel"></i></div>
            </div>
        </div>
        <div id="loading-view-overlay" style="display: none;">
            <div class="loader">Loading ....</div>
        </div>
        <div id="modal-lesson-area"></div>
        <div id="slide-modal-body">
            <div class="html-lesson-content">
                <div id="slide-view">
                    <div id="slide-header">
                        <div class="slide-header-text"></div>
                        <div class="slide-header-sample">SLIDE HEADER<br>HERE</div>
                    </div>
                    <div id="lesson-carousel" style="" class="slick-initialized slick-slider">
                        <button class="slick-prev slick-arrow lni-arrow-left lni-bold" aria-label="Previous"
                                type="button" aria-disabled="true" @click="directionPlay(false)"
                                :style="{'display': previousBtn}"
                        >
                        </button>
                        <div class="slick-list draggable" style="padding: 0px 20px;">
                            <div class="slick-track"
                                 :style="{opacity: 1, width: '9760px', transform: translated3d , 'transition': 'transform 500ms ease 0s'}">
                                <div v-for="(item, index) in dataList" :key="index"
                                     :class="{'slick-slide':true, 'slick-current slick-center': index === currentSlide }"
                                     data-slick-index="1" aria-hidden="true"
                                     style="width: 610px;" tabindex="-1">
                                    <div>
                                        <div class="lesson-slide"
                                             style="width: 100%; display: inline-block;">
                                            <div id="view17" class="border-slide">
                                                <div class="inner-slide size-slide"
                                                     style="min-height: 254px;">
                                                    <div class="slide-counter"></div>
                                                    <div class="card-background intro-slide">
                                                        <div class="intro-slide-number">
                                                            {{item.id}}/{{dataList.length}}
                                                        </div>
                                                        <div class="intro-section">
                                                            <div class="intro-e-text ">
                                                                <div
                                                                    class="intro-text english-text">
                                                                    {{item.title}}
                                                                </div>
                                                            </div>
                                                            <div class="intro-lht-watermark"
                                                                 aria-hidden="true">
                                                                © Copyright LingoFeen.com 771363
                                                            </div>
                                                            <div class="intro-s-text" @click="directPlay(true)">
                                                                <div class="intro-text spalan-text">
                                                                    {{item.subtitle}}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div :class="{'intro-repeat-area':true, 'repeat':repeat }">
                                                            <audio ref="audio" v-on:ended="onEnded">
                                                                <source :src="item.src"
                                                                    type="audio/mp3">
                                                            </audio>
                                                            <div class="intro-repeat-self-text">
                                                                Repeat out loud
                                                            </div>
                                                            <div class="intro-mute sound-volume-1" style="top: 14px">
                                                                <i :class="audioBtnClass" style="cursor: pointer;
                                                                    padding: 12px;
                                                                    font-size: 26px;
                                                                    color: rgba(0,0,0,.54);"
                                                                   v-on:click="directPlay(false)"
                                                                >
                                                                </i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <the-quiz-category />
                            </div>
                        </div>
                        <button class="slick-next slick-arrow lni-arrow-right lni-bold" aria-label="Next" type="button"
                                :style="{'display': nextBtn}" aria-disabled="false" v-on:click="directionPlay(true)"
                        >
                        </button>
                    </div>
                    <div id="slide-footer">
                        <div class="slide-footer-text"></div>
                        <div class="slide-header-sample">FOOTER</div>
                    </div>
                </div>
                <div class="start-overlay" :style="{'display': startOverlayBtn}">
                    <button class=" start-icon-wrapper" aria-label="Click here" @click="startOverlay">
                        <i class="lni-play"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TheQuizCategory from './TheVocabularyLessonQuizCategory'
    export default {
        name: 'TheVocabularyCarousel',
        components: {TheQuizCategory},
        data () {
            return {
                dataList: this.$store.state.lesson.dataList,
                currentSlide: 0,
                currentAudio: null,
                isPlayable: true,
                isPlayable_temp: true,
                isDirection: true,
                isStartOverlay: true,
                isNextStatus: 0
            }
        },
        methods: {
            startOverlay(){
                this.isStartOverlay = false
                this.isNextStatus += 1
                this.directPlay(false)
            },
            directionPlay(isNext){
                this.isNextStatus = 0
                this.isDirection = true
                const audios = this.$refs.audio
                const currentSlide = this.currentSlide
                audios[currentSlide] && this.audioStop(currentSlide)
                isNext ? this.next(currentSlide) : this.previous(currentSlide)
                this.timeDelay() && this.timeDelay()
            },
            directPlay(isOnce){
                if(isOnce)  this.isDirection = false
                this.isPlayable_temp = !this.isPlayable_temp
                this.audioControl()
            },
            previous (val) {
                this.currentSlide = val <= 0 ? 0 : val-1
            },
            next (val) {
                this.currentSlide = val >= this.dataList.length ? this.dataList.length : val+1
            },
            timeDelay(){
                this.isPlayable_temp = false
                this.isNextStatus += 1
                setTimeout(()=> {
                    this.isPlayable = true
                    this.audioControl()
                }, 700)
            },
            audioControl () {
                let audio = this.$refs.audio[this.currentSlide]
                if (audio){
                    if(this.isPlayable)
                        audio.play()
                    else {
                        audio.pause()
                        audio.currentTime = 0
                    }
                }
                this.isPlayable = !this.isPlayable
            },
            audioStop(oldIndex){
                let oldAudio = this.$refs.audio[oldIndex]
                oldAudio.pause()
                oldAudio.currentTime = 0
            },
            onEnded () {
                if (!this.isDirection){
                    this.isPlayable_temp = true
                    this.isPlayable = true
                    this.isDirection = true
                } else if (this.isNextStatus === 2){
                    this.directionPlay(true)
                } else {
                    this.timeDelay()
                }
            },
        },
        computed: {
            translated3d () {
                let val = -610 * this.currentSlide
                return `translate3d(${val}px, 0px, 0px)`
            },
            audioBtnClass () {
                return this.isPlayable_temp === true ? 'lni-play' : 'lni-pause'
            },
            previousBtn(){
                return this.currentSlide === 0 ? 'none' : 'block'
            },
            nextBtn(){
                if (this.isStartOverlay){
                    return 'none'
                } else
                    return this.currentSlide === this.dataList.length ? 'none' : 'block'
            },
            startOverlayBtn(){
                return this.isStartOverlay ? 'block' : 'none'
            },
            repeat(){
            }
        },
    }
</script>

<style >
    @import "../../../../../assets/frontend/css/lht-pure--CB20210215.css";
</style>
