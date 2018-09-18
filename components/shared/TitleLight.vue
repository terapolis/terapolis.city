<template>
  <div class="font-weight-bold title-light title-40">
    <span class="white grey--text text--darken-3">{{ title }}</span>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style lang="stylus">
  .title-light
    position relative

    &>span
      position relative

    &:before
      content ''
      position absolute
      top 50%
      left 0
      width 100%
      height 1px
      background-color #b88162
</style>
