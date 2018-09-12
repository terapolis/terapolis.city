<template>
  <div class="team text-xs-center">
    <div class="font-weight-bold fs40" v-html="teamTitle"/>
    <div v-if="advisorsSlogan" class="pt-serif opacity-50" v-html="teamSlogan"/>
  </div>
</template>

<script>
  export default {
    data: () => ({
      teamTitle: 'Our Team',
      teamSlogan: ''
    })
  }
</script>

<style lang="stylus">
  .team
    // background-color #fff
    padding-top 66px
    padding-bottom 30px
</style>
