<template>
    <div class="mt-5">
        <span class="cursor-on speech-to-text" :style="{'background-color': isRecording?'#ff3f5f':'#00bcd4'}" @click.stop="startSpeechToTxt">
            <i class="lni-mic" > </i>
            {{textContent}}
        </span>
        <p>{{transcription_}}</p>
    </div>
</template>



<script>

    export default {
        name: 'TheSpeechToText',
        props:{
            answer: Text,
            lang_: Text
        },
        data() {
            return {
                runtimeTranscription_: "",
                transcription_: [],
                recording: false
            };
        },
        methods: {
            startSpeechToTxt() {
                // initialisation of voicereco
                this.recording = !this.recording
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
                    this.transcription_.push(this.runtimeTranscription_);
                    this.runtimeTranscription_ = "";
                    recognition.stop();
                    this.recording = !this.recording
                });
                recognition.start();
            },

        },
        computed:{
            isRecording(){
                return this.recording
            },
            textContent(){
                return this.recording ? 'Listening...' : 'Push to speak'
            }
        }
    }
</script>
<style lang="css" >

</style>
