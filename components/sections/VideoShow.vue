<template>
  <section class="videoshow">

    <div v-if="!videoshowDialog" class="videoshow__parallax black">
      <v-parallax :src="img" class="videoshow__parallax__parallax text-xs-center">
        <div class="font-weight-bold fs20" v-html="videoshowTitle"/>
          <v-icon class="fs85" color="white" @click="videoshowDialog = true">mdi-youtube</v-icon>
        <div class="pt-serif" v-html="videoshowTime"/>
      </v-parallax>
    </div>

    <div v-if="videoshowDialog" class="videoshow__iframe">
      <v-btn fab dark small color="#b88162" @click="videoshowDialog = false" class="videoshow__iframe__close">
        <v-icon color="white">mdi-close</v-icon>
      </v-btn>
      <iframe
        class="black d-block"
        width="790" height="440"
        :src="'https://www.youtube.com/embed/' + videoshowVideo + '?rel=0;showinfo=0;autoplay=1'"
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
      />
    </div>

  </section>
</template>

<script>
  export default {
    props: [
      'img'
    ],
    data: () => ({
      videoshowTitle: 'Welcome to Terapolis!<br>Watch now',
      videoshowTime: '01:26',
      videoshowDialog: false,
      videoshowVideo: '9ba-cERZm_M'
    })
  }
</script>

<style lang="stylus">
  ratio($width, $ratio-width, $ratio-height)
    width $width
    padding-bottom ($ratio-height / $ratio-width) * $width
    position relative

  .videoshow
    // margin 0 auto -100px
    margin 0 auto
    // transform translateY(-50%)
    position relative
    z-index 20
    ratio(96%,790,440)

    @media (min-width: 960px) {
      // margin-bottom -200px
      ratio(60%,790,440)
    }

    &__parallax
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index 20

      &__parallax
        height 100% !important

    &__iframe

      & > iframe
        position absolute
        top 0
        left 0
        z-index 30
        width 100%
        height 100%

      &__close
        position absolute !important
        top -20px
        right -20px
        z-index 40
</style>
