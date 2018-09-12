<template>
  <div class="citylife text-xs-center">
    <div class="fs40" v-html="citylifeTitle"/>
    <div class="" v-html="citylifeSlogan"/>
  </div>
</template>

<script>
  export default {
    data: () => ({
      citylifeTitle: 'Terapolis City Life',
      citylifeSlogan: 'How Are We Different',
    })
  }
</script>

<style lang="stylus">
  .citylife
    color #fff
    background-color #27283b
</style>
