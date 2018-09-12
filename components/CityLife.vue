<template>
  <div class="citylife text-xs-center white--text">
    <div class="font-weight-bold fs40" v-html="citylifeTitle"/>
    <div class="mb-5 pt-serif opacity-50" v-html="citylifeSlogan"/>
    <img class="mt-1" src="/img/bg/bg-citylife.svg" alt="">
  </div>
</template>

<script>
  export default {
    data: () => ({
      citylifeTitle: 'Terapolis Citizen',
      citylifeSlogan: 'Our Key Features',
    })
  }
</script>

<style lang="stylus">
  .citylife
    background #27283b url(/img/bg/bg-lines.svg) repeat
    padding-top 100px
    padding-bottom 45px
</style>
