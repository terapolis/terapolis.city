<template>
  <div class="advisors text-xs-center">
    <div class="fs40" v-html="advisorsTitle"/>
    <div class="" v-html="advisorsSlogan"/>
  </div>
</template>

<script>
  export default {
    data: () => ({
      advisorsTitle: 'Advisors',
      advisorsSlogan: 'The people behind the project',
    })
  }
</script>

<style lang="stylus">
  .advisors
    // background-color #fff
</style>
