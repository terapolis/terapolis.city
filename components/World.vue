<template>
  <div class="world text-xs-center white--text">
    <div class="font-weight-bold fs40" v-html="worldTitle"/>
    <div v-if="worldSlogan" class="pt-serif opacity-50" v-html="worldSlogan"/>
    <img class="mt-5" src="/img/bg/bg-world.svg" alt="">
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
    background #27283b url(/img/bg/bg-lines.svg) repeat
    padding-top 100px
    padding-bottom 45px
</style>
