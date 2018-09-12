<template>
  <v-parallax :src="img" height="735" class="text-xs-center">
    <v-container>
      <v-layout wrap>
        <v-flex xs12 md10 offset-md1>
          <h1 class="mt-5 mb-2 font-weight-thin fs54">{{ h1 }}</h1>
          <h2 class="font-weight-regular fs16 pt-serif">{{ h2 }}</h2>
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
</style>
