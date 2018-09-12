<template>
  <v-footer dark height="false" class="footer">
    <v-container>
      <v-layout>
        <v-flex xs12 sm3>
          <div class="font-weight-bold fs18">{{ footerTitle }}</div>
          <div class="opacity-50 fs12 mb-3">{{ footerSlogan }}</div>
          <v-btn depressed fab small icon class="white opacity-30 mb-3" :href="footerFb" target="_blank">
            <v-icon class="footer-text-color">mdi-facebook</v-icon>
          </v-btn>
          <div class="font-italic opacity-50 pt-serif">{{ footerCopy }}</div>
        </v-flex>
        <v-flex xs12 sm3>
          <div class="mb-3 font-weight-medium fs16">{{ footerTitle2 }}</div>
          <div class="font-italic opacity-50 pt-serif" v-html="footerSlogan2"/>
        </v-flex>
        <v-flex xs12 sm3>
          <div class="mb-3 font-weight-medium fs16">{{ footerTitle3 }}</div>
          <div class="font-italic opacity-50 pt-serif" v-html="footerSlogan3"/>
        </v-flex>
        <v-flex xs12 sm3>
          <div class="mb-3 font-weight-medium fs16">{{ footerTitle4 }}</div>
          <div class="font-italic opacity-50 pt-serif" v-html="footerSlogan4"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      footerTitle: 'Terapolis: Citizen',
      footerSlogan: 'The people behind the project',
      footerFb: 'https://www.facebook.com/terapolisproject/',
      footerCopy: '© Terapolis 2018',
      footerTitle2: 'Terapolis: Citizen',
      footerSlogan2: 'Evernote Corporation<br>12651 High Bluff Dr STE 300<br>San Diego, CA 92130<br>United States',
      footerTitle3: 'Terapolis: Project USA office',
      footerSlogan3: 'Evernote Corporation<br>3300 N. Interstate 35<br>Suite 400<br>Austin, TX 78705<br>United States',
      footerTitle4: 'Terapolis: Project Asia office',
      footerSlogan4: 'Evernote Corporation<br>305 Walnut Street<br>Redwood City, CA 94063<br>United States'
    })
  }
</script>

<style lang="stylus">
  .footer
    // background-color #27283b
    background #27283b url(/img/bg/bg-lines.svg) repeat !important
    padding-top 64px
    padding-bottom 150px

    .v-btn--floating.v-btn--small
      height 30px
      width 30px

    .footer-text-color
      color #27283b !important
</style>
