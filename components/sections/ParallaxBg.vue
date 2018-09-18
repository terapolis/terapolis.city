<template>
  <v-parallax :src="img" height="735" class="parallax-bg grey"/>
</template>

<script>
  export default {
    props: [
      'img'
    ]
  }
</script>

<style lang="stylus">
  .parallax-bg
    position absolute
    top 0
    left 0
    width 100%
    z-index 10
</style>
