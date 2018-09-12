<template>
  <section>
    <v-container class="videoshow pa-0">
      <v-layout wrap>
        <v-flex xs10 offset-xs1 sm8 offset-sm2>

          <v-parallax :src="videoshowImg" height="440" class="text-xs-center">
            <div class="font-weight-bold fs20" v-html="videoshowTitle"/>

            <v-dialog
              v-model="videoshowDialog"
              max-width="790"
              @keydown.esc="videoshowDialog=false"
            >
              <v-icon slot="activator" class="fs85" color="white">mdi-youtube</v-icon>
              <iframe
                v-if="videoshowDialog"
                class="black d-block"
                width="790" height="440"
                :src="'https://www.youtube.com/embed/' + videoshowVideo + '?rel=0;showinfo=0;autoplay=1'"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
              />
            </v-dialog>

            <div class="pt-serif" v-html="videoshowSlogan"/>
          </v-parallax>

        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    data: () => ({
      videoshowTitle: 'Welcome to Terapolis!<br>Watch now',
      videoshowSlogan: '01:28',
      videoshowImg: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-0.3.5&s=94b8282b7d73d1522326d3d91fee141f&auto=format&fit=crop&w=1001&q=80',
      videoshowDialog: false,
      videoshowVideo: 'KzOzxh_kgf0'
    })
  }
</script>

<style lang="stylus">
  .videoshow
    // background-color #fff
    margin-top -300px
</style>
