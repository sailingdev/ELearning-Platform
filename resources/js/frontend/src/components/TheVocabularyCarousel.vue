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
                                type="button" aria-disabled="true" @click="previous"
                        >
                        </button>
                        <div class="slick-list draggable" style="padding: 0px 20px;">
                            <div class="slick-track"
                                 :style="{opacity: 1, width: '9760px', transform: translated3d , 'transition': 'transform 500ms ease 0s'}">
                                <div v-for="(item, index) in slides" :key="index"
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
                                                            {{item.id}}/{{slides.length}}
                                                        </div>
                                                        <div class="intro-section">
                                                            <div class="intro-e-text ">
                                                                <div
                                                                    class="intro-text english-text">
                                                                    Good morning
                                                                </div>
                                                            </div>
                                                            <div class="intro-lht-watermark"
                                                                 aria-hidden="true">
                                                                © Copyright LingoHut.com 771363
                                                            </div>
                                                            <div class="intro-s-text">
                                                                <div class="intro-text spalan-text">
                                                                    Goeie môre
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="intro-repeat-area">
                                                            <audio v-on:ended="onEnded" @play="true" style="display: none">
                                                                <source v-for="n in 2" :key="n" :src="item.src"
                                                                    type="audio/mp3">
                                                            </audio>
                                                            <div class="intro-repeat-self-text">
                                                                Repeat out loud
                                                            </div>
                                                            <!--
<div class="intro-repeat-teacher-text">
Repeat out loud
</div>
-->
                                                            <div class="intro-mute sound-volume-1" style="top: 14px">
                                                                <i :class="audioBtnClass" style="cursor: pointer;
                                                                    padding: 12px;
                                                                    font-size: 26px;
                                                                    color: rgba(0,0,0,.54);"
                                                                   v-on:click="audioControl"
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
                            </div>
                        </div>
                        <button class="slick-next slick-arrow lni-arrow-right lni-bold" aria-label="Next" type="button"
                                style="display: block;" aria-disabled="false" v-on:click="next">
                        </button>
                    </div>
                    <div id="slide-footer">
                        <div class="slide-footer-text"></div>
                        <div class="slide-header-sample">FOOTER</div>
                    </div>
                </div>
                <div class="start-overlay" style="display: none">
                    <button class=" start-icon-wrapper" aria-label="Click here">
                        <i class="lni-play"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheVocabularyCarousel',
        data () {
            return {
                slides: [
                    {
                        id: 1,
                        src: 'https://www.w3schools.com/tags/horse.mp3'
                    },
                    {
                        id: 2,
                        src: 'https://www.w3schools.com/tags/horse.mp3'
                    },
                    {
                        id: 3,
                        src: 'https://www.w3schools.com/tags/horse.mp3'
                    },
                    {
                        id: 4,
                        src: 'https://www.w3schools.com/tags/horse.mp3'
                    }
                ],
                currentSlide: 0,
                currentAudio: null,
                isPlayable: true
            }
        },
        methods: {
            previous () {
                this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide
                this.currentSlide -= 1
                this.audioControl()
            },
            next () {
                this.currentSlide = this.currentSlide >= this.slides.length - 1 ? -1 : this.currentSlide
                this.currentSlide += 1
                this.audioControl()
            },
            audioControl () {
                this.audio()
                let audio = this.currentAudio
                this.isPlayable? audio.play() : audio.pause()
                this.isPlayable = !this.isPlayable
            },
            onEnded () {
                this.isPlayable = true
            },
            audio () {
                this.currentAudio = new Audio(this.slides[this.currentSlide].src)
            },
        },
        computed: {
            translated3d () {
                let val = -610 * this.currentSlide
                return `translate3d(${val}px, 0px, 0px)`
            },
            audioBtnClass () {
                return this.isPlayable === true ? 'lni-play' : 'lni-pause'
            },
        },
        watch:{
            currentAudio(val, oldVal){
                if (val.onended){
                    console.log(123)
                }
            }
        }
    }
</script>

<style scoped>
    @import "../../../../assets/frontend/css/lht-pure--CB20210215.css";
</style>
