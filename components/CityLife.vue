<template>
  <div class="citylife text-xs-center">
    <div class="font-weight-bold fs40" v-html="citylifeTitle"/>
    <div class="mb-5 pt-serif opacity-50" v-html="citylifeSlogan"/>
    <img src="/img/bg/bg-citylife.svg" alt="">
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
    color #fff
    background-color #27283b
    padding-top 100px
    padding-bottom 45px
</style>
