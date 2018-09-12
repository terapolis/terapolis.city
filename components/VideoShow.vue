<template>
  <v-container class="videoshow pa-0">
    <v-flex xs10 offset-xs1 sm8 offset-sm2>
      <v-parallax :src="videoshowImg" height="440" class="text-xs-center">
        <!-- <div class="videoshow text-xs-center"> -->
          <div class="fs20" v-html="videoshowTitle"/>
          <v-icon class="fs85" color="white">mdi-youtube</v-icon>
          <div class="pt-serif" v-html="videoshowSlogan"/>
        <!-- </div> -->
      </v-parallax>
    </v-flex>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      videoshowTitle: 'Welcome to Terapolis!<br>Watch now',
      videoshowSlogan: '01:28',
      videoshowImg: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-0.3.5&s=94b8282b7d73d1522326d3d91fee141f&auto=format&fit=crop&w=1001&q=80'
    })
  }
</script>

<style lang="stylus">
  .videoshow
    // background-color #fff
    margin-top -250px
</style>
