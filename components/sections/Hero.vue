<template>
  <v-container class="hero white--text text-xs-center">
    <v-layout wrap class="mb-4">
      <v-flex xs12 v-if="title">
        <h1 class="mt-5 mb-4 font-weight-thin fs54" v-html="title"/>
      </v-flex>
      <v-flex xs12 md8 offset-md2 v-if="descr">
        <h2 class="font-weight-regular fs16 pt-serif" v-html="descr"/>
      </v-flex>
    </v-layout>
    <v-layout wrap class="mb-4">
      <v-flex xs12 md8 offset-md2>
        <v-btn outline large color="white" class="hero__btn" :href="onePage" target="_blank">
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
      onePage: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/hero%2FTerapolis-OnePage.pdf?alt=media&token=a0514e5f-33cb-4e7d-8a08-d71303ab832f'
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
