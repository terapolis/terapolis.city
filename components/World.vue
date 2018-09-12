<template>
  <div class="world text-xs-center">
    <div class="font-weight-bold fs40" v-html="worldTitle"/>
    <div v-if="worldSlogan" class="pt-serif opacity-50" v-html="worldSlogan"/>
    <img src="/img/bg/bg-world.svg" alt="">
  </div>
</template>

<script>
  export default {
    data: () => ({
      worldTitle: 'Our Global Network',
      worldSlogan: '',
    })
  }
</script>

<style lang="stylus">
  .world
    color #fff
    background-color #27283b
    padding-top 100px
    padding-bottom 45px
</style>
