<template>
  <div class="advisors text-xs-center">
    <div class="font-weight-bold fs40" v-html="advisorsTitle"/>
    <div v-if="advisorsSlogan" class="pt-serif opacity-50" v-html="advisorsSlogan"/>
  </div>
</template>

<script>
  export default {
    data: () => ({
      advisorsTitle: 'Advisors',
      advisorsSlogan: ''
    })
  }
</script>

<style lang="stylus">
  .advisors
    // background-color #fff
    padding-top 30px
    padding-bottom 154px
</style>
