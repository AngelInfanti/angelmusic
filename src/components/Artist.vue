<template lang="pug">
    li
        h2: a(:href="artist.url" target="_blank") {{artist.name}}
        
        img(v-bind:src="artist.image[2]['#text']")   
</template>

<script>
    
    export default {
       name: 'artist',
       props: ['artist'] 
    }
</script>

<style lang="stylus">
li
    
    margin 10px 10px 10px 10px
</style>
