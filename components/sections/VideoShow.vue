<template>
  <section class="videoshow">
    <!-- <v-container class="pa-0"> -->
      <!-- <v-layout wrap> -->
        <!-- <v-flex xs10 offset-xs1 sm8 offset-sm2> -->

        <div v-if="!videoshowDialog" class="videoshow__parallax black">
          <v-parallax :src="videoshowImg" class="videoshow__parallax__parallax text-xs-center">
            <div class="font-weight-bold fs20" v-html="videoshowTitle"/>

            <!-- <v-dialog
              v-model="videoshowDialog"
              max-width="790"
              @keydown.esc="videoshowDialog=false"
            > -->

              <v-icon class="fs85" color="white" @click="videoshowDialog = true">mdi-youtube</v-icon>

            <!-- </v-dialog> -->

            <div class="pt-serif" v-html="videoshowSlogan"/>
          </v-parallax>
        </div>

          <div v-if="videoshowDialog" class="videoshow__iframe">
            <v-btn fab dark small color="#b88162" @click="videoshowDialog = false" class="videoshow__iframe__close">
              <v-icon color="white">mdi-close</v-icon>
            </v-btn>
            <!-- <v-icon color="white" @click="videoshowDialog = false">mdi-close</v-icon> -->
            <iframe
              class="black d-block"
              width="790" height="440"
              :src="'https://www.youtube.com/embed/' + videoshowVideo + '?rel=0;showinfo=0;autoplay=1'"
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
            />
          </div>

        <!-- </v-flex> -->
      <!-- </v-layout> -->
    <!-- </v-container> -->
  </section>
</template>

<script>
  export default {
    data: () => ({
      videoshowTitle: 'Welcome to Terapolis!<br>Watch now',
      videoshowSlogan: '01:28',
      videoshowImg: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/01.jpg?alt=media&token=4931b9b5-c221-42f2-95f2-4de30acc0853',
      videoshowDialog: false,
      videoshowVideo: 'KzOzxh_kgf0'
    })
  }
</script>

<style lang="stylus">
  // $XS 320px
  // $SM 508px
  // $MD 754px
  // $LG 1054px
  // $XL 1300px

  ratio($width, $ratio-width, $ratio-height)
    width $width
    padding-bottom ($ratio-height / $ratio-width) * $width
    position relative

  .videoshow
    // background-color #fff
    // margin-top -300px
    // max-width 790px
    // padding-bottom 440px
    // margin -300px auto 0
    margin 0 auto -100px
    transform translateY(-50%)
    position relative
    // overflow hidden
    ratio(90%,790,440)

    @media (min-width: 960px) {
      // transform translateY(-50%)
      margin-bottom -200px
      ratio(60%,790,440)
    }

    &__parallax
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index 10

      &__parallax
        // position absolute
        // top 0
        // left 0
        height 100% !important
        // z-index 10

    &__iframe
      // position absolute
      // top 0
      // left 0
      // width 100%
      // z-index 20

      & > iframe
        position absolute
        top 0
        left 0
        z-index 20
        width 100%
        height 100%

      &__close
        position absolute !important
        top -20px
        right -20px
        z-index 30

</style>
