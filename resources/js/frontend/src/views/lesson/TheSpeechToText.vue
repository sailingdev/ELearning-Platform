<template>
    <div class="mt-3">
        <p>
            <span :style="{'font-size': '27px', color: getResult ? 'yellow': '#d2d2d2'}">
                <i v-if="getResult !== null" class="lni-star-filled"></i>
            </span>
        </p>
        <span class="cursor-on speech-to-text" :style="{'background-color': isRecording?'#ff3f5f':'#9D21B2'}" @click.stop="startSpeechToTxt">
            <i class="lni-mic" > </i>
            {{textContent}}
        </span>
    </div>
</template>



<script>

    export default {
        name: 'TheSpeechToText',
        props:{
            answer: String,
            lang_: {
                type: String,
                default: 'en-US'
            }
        },
        data() {
            return {
                runtimeTranscription_: "",
                transcription_: [],
                recording: false,
                isTrue: null
            };
        },
        methods: {
            startSpeechToTxt () {
                // initialisation of voicereco

                window.SpeechRecognition =
                    window.SpeechRecognition ||
                    window.webkitSpeechRecognition;
                const recognition = new window.SpeechRecognition();
                recognition.lang = this.lang_;
                recognition.interimResults = true;

                // event current voice reco word
                recognition.addEventListener("result", event => {
                    var text = Array.from(event.results)
                        .map(result => result[0])
                        .map(result => result.transcript)
                        .join("");
                    this.runtimeTranscription_ = text;
                });
                // end of transcription
                recognition.addEventListener("end", () => {
                    this.transcription_ = this.runtimeTranscription_
                    this.runtimeTranscription_ = "";
                    recognition.stop();
                    this.recording = false
                    this.review()
                });
                if (!this.recording){
                    this.recording = true
                    recognition.start();
                }
            },
            review(){
                // console.log(this.answer.toLowerCase())
                // console.log(this.answer.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').trim())
                // console.log(this.transcription_.toLowerCase().trim())
                this.isTrue = this.answer.toLowerCase().replace(/[^a-zA-Z1-9' ]/, "").trim() === this.transcription_.toLowerCase().trim()
            }
        },
        computed:{
            isRecording(){
                return this.recording
            },
            textContent(){
                if (this.isTrue === null){
                    return this.recording ? 'Listening...' : 'Push to speak'
                } else
                    return this.recording ? 'Listening...' : 'Try Again'
            },
            getResult(){
                return this.isTrue
            }
        }
    }
</script>
<style lang="css" >

</style>
