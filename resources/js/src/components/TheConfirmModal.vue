<template>
    <vs-button @click="openConfirm()" color="danger" type="gradient">Delete Image</vs-button>
</template>

<script>
    export default {
        name: 'TheConfirmModal',
        data: () => ({
            activeConfirm: false
        }),
        methods: {
            openConfirm() {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Confirm`,
                    text: 'Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups.',
                    accept: this.acceptAlert
                })
            },
            acceptAlert() {
                this.$vs.notify({
                    color: 'danger',
                    title: 'Deleted image',
                    text: 'The selected image was successfully deleted'
                })
            },
        }
    }
</script>
