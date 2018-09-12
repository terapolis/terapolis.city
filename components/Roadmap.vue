<template>
  <div class="roadmap text-xs-center">
    <div class="fs40" v-html="roadmapTitle"/>
    <div class="" v-html="roadmapSlogan"/>
  </div>
</template>

<script>
  export default {
    data: () => ({
      roadmapTitle: 'Roadmap',
      roadmapSlogan: 'Our Journey',
    })
  }
</script>

<style lang="stylus">
  .roadmap
    color #fff
    background-color #27283b
</style>
