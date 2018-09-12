<template>
  <div class="world text-xs-center">
    <div class="fs40" v-html="worldTitle"/>
    <div class="" v-html="worldSlogan"/>
  </div>
</template>

<script>
  export default {
    data: () => ({
      worldTitle: 'Terapolis World',
      worldSlogan: 'Our Global Network',
    })
  }
</script>

<style lang="stylus">
  .world
    color #fff
    background-color #27283b
</style>
