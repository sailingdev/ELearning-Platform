<template>
	<h4>You are in home.</h4>
</template>
<script>
    export default {
        name: 'home',
        mounted(){
            let _token = localStorage.getItem('tortu_accessToken')
            // console.log(`Authorization: Bearer ${_token}`)
        }
    }
</script>
