<template>
  <v-parallax :src="img" height="735" class="hero grey text-xs-center">
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <h1 class="mt-5 mb-4 font-weight-thin fs54" v-html="h1"/>
        </v-flex>
        <v-flex xs12 md8 offset-md2>
          <h2 class="font-weight-regular mb-5 fs16 pt-serif" v-html="h2"/>
          <v-btn outline large color="white" class="hero__btn">
            <v-icon left>mdi-download</v-icon>
            <span class="fs20 font-weight-bold text-capitalize">Get One Page</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
  export default {
    props: [
      'h1',
      'h2',
      'img'
    ]
  }
</script>

<style lang="stylus">
  .hero
    background-color #fff

    h1
      line-height 59px

    h1
    h2
      text-transform inherit

    &__btn
      border-width 2px !important
      border-radius 5px
      height 63px
</style>
