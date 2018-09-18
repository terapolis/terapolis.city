<template>
  <div class="break text-xs-center">
    <v-container class="position-relative">
      <v-layout wrap>
        <v-flex xs12 sm10 offset-sm1>
          <div class="black--text font-weight-bold fs24 mb-3" v-html="title"/>
        </v-flex>
        <v-flex xs12 sm8 offset-sm2>
          <div class="grey--text text--darken-2 fs16 pt-serif" v-html="descr"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    props: [
      'title',
      'descr'
    ]
  }
</script>

<style lang="stylus">
  .break
    position relative
    margin-top 80px
    margin-bottom 80px
    padding-top 80px
    padding-bottom 80px

    &:before
      content ''
      position absolute
      top 0
      left 50%
      width 2px
      margin-left -1px
      height 100%
      background-color rgba(#1a1c2b,.1)
</style>
