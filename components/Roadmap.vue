<template>
  <div class="roadmap text-xs-center">
    <div class="font-weight-bold fs40" v-html="roadmapTitle"/>
    <div v-if="roadmapSlogan" class="pt-serif opacity-50" v-html="roadmapSlogan"/>
  </div>
</template>

<script>
  export default {
    data: () => ({
      roadmapTitle: 'Our Journey',
      roadmapSlogan: '',
    })
  }
</script>

<style lang="stylus">
  .roadmap
    color #fff
    background-color #27283b
    padding-top 100px
    padding-bottom 100px
</style>
