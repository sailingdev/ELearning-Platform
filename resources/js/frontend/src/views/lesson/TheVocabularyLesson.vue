<template>
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
                                 :style="{opacity: 1, width: '9760px', transform: translate3d , 'transition': 'transform 500ms ease 0s'}">
                                <div v-for="(item, index) in dataList" :key="index"
                                     :class="{'slick-slide':true, 'slick-current slick-center': index === currentSlide }"
                                     data-slick-index="1" aria-hidden="true"
                                     tabindex="-1">
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
                                <the-vocabulary-lesson-quiz-category @setQuiz = 'setQuiz' />
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
                    <button class=" btn saasbox-btn btn-sm" aria-label="Click here" @click="startOverlay">
                        <i class="lni-play"></i>
                    </button>
                </div>
            </div>
</template>

<script>
    import TheVocabularyLessonQuizCategory from './TheVocabularyLessonQuizCategory'
    export default {
        name: 'TheVocabularyLesson',
        components: {TheVocabularyLessonQuizCategory},
        data () {
            return {
                dataList: this.$store.state.lesson.dataList,
                currentSlide: 0,
                currentAudio: null,
                isPlayable: false,
                isPlayable_temp: true,   // for play button class
                isDirection: true,
                isStartOverlay: true,
                isNextStatus: 0,
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
                this.isPlayable = !this.isPlayable
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
                }, 2500)
            },
            audioControl () {
                let audio = this.$refs.audio[this.currentSlide]
                if (audio){
                    if(this.isPlayable && !this.isPlayable_temp)
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
                } else if (!this.isPlayable_temp) {
                    this.timeDelay()
                }
            },
            setQuiz(type){
                this.$emit('setQuiz', type)
            }
        },
        computed: {
            translate3d () {
                let width = window.innerWidth
                let val = 0
                switch (true) {
                    case (width >= 768):
                        val = -610 * this.currentSlide
                        break
                    case (374 > width && width >= 360):
                        val = -300 * this.currentSlide
                        break
                    case (410 > width && width >= 375):
                        val = -311 * this.currentSlide
                        break
                    case (479 > width && width >= 411):
                        val = -352 * this.currentSlide
                        break
                    case (767 > width && width >= 480):
                        val = -480 * this.currentSlide
                }
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
