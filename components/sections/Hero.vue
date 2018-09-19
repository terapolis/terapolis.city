<template>
  <v-container class="hero white--text text-xs-center">
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="mt-5 mb-4 font-weight-thin fs54" v-html="title"/>
      </v-flex>
      <v-flex xs12 md8 offset-md2>
        <h2 class="font-weight-regular mb-5 fs16 pt-serif" v-html="descr"/>
        <v-btn outline large color="white" class="hero__btn mb-5" :href="onePage" target="_blank">
          <v-icon left>mdi-download</v-icon>
          <span class="fs20 font-weight-bold text-capitalize">Get One Page</span>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: [
      'title',
      'descr'
    ],
    data: () => ({
      onePage: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/one-pager%2FTerapolis-OnePage.pdf?alt=media&token=e035632b-7cf6-4209-9282-718766d61b30'
    })
  }
</script>

<style lang="stylus">
  .hero
    position relative
    z-index 20

    h1
      font-size 34px
      line-height 37px

      @media (min-width: 600px) {
        font-size 44px
        line-height 48px
      }

      @media (min-width: 960px) {
        font-size 54px
        line-height 59px
      }

    h1
    h2
      text-transform inherit

    &__btn
      border-width 2px !important
      border-radius 5px
      height 63px !important
</style>
