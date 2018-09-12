<template>
  <div class="font-weight-bold fs40 title-light">
    <span class="white px-5 grey--text text--darken-3">{{ title }}</span>
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
