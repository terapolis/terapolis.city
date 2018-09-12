<template>
  <div class="team text-xs-center">
    <div class="fs40" v-html="teamTitle"/>
    <div class="" v-html="teamSlogan"/>
  </div>
</template>

<script>
  export default {
    data: () => ({
      teamTitle: 'Our Team',
      teamSlogan: 'The people behind the project',
    })
  }
</script>

<style lang="stylus">
  .team
    background-color #fff
</style>
