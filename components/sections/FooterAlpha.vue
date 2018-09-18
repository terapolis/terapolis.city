<template>
  <section height="false" class="footer white--text" :style="'background: ' + coloredBg + ';'">
    <v-container fluid>
      <v-layout>
        <v-flex xs12 lg10 offset-lg1>
          <v-layout row wrap>

            <v-flex xs12 sm6 md3 class="mb-5">
              <v-layout>
                <v-flex xs3 text-xs-right>
                  <terapolis-citizen color="#fff" width="38px"/>
                </v-flex>
                <v-flex xs9>
                  <div class="font-weight-bold fs18">{{ footerTitle }}</div>
                  <div class="blue-color opacity-50 fs12 mb-3">{{ footerDescr }}</div>
                  <v-btn depressed fab small icon class="white opacity-30 mb-3" :href="footerFb" target="_blank">
                    <v-icon class="footer-text-color">mdi-facebook</v-icon>
                  </v-btn>
                  <div class="font-italic blue-color opacity-50 pt-serif">{{ footerCopy }}</div>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex v-for="i in footerLocations" :key="i.id" xs12 sm6 md3 class="mb-5">
              <div class="footer__item pl-5">
                <div class="mb-3 font-weight-medium fs16" v-html="i.name"/>
                <div class="mb-2 font-italic blue-color pt-serif" v-html="i.location"/>
                <div class="pt-serif" v-html="i.address"/>
              </div>
            </v-flex>

          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  import TerapolisCitizen from '~/components/shared/TerapolisCitizen'

  export default {
    components: {
      TerapolisCitizen
    },
    props: [
      'coloredBg'
    ],
    data: () => ({
      footerTitle: 'Terapolis: Citizen',
      footerDescr: 'The people behind the project',
      footerFb: 'https://www.facebook.com/Terapolis-1209184865898665/',
      footerCopy: '© Terapolis 2018',
      footerLocations: [{
        id: '0001',
        name: 'Terapolis: Citizen',
        location: 'USA, Head Sales office',
        address: '6846 Palmetto Circle S.#  1117<br>Boca Raton, FL 33433'
      }, {
        id: '0002',
        name: 'Terapolis: Project',
        location: 'Hong Kong, Corporate center and Headquarters',
        address: 'Jumbo Pacific Limited<br>Wing Cheong Commerciel Building 19-25, Jervios Street, Sheung Wan<br>HONG KONG'
      }, {
        id: '0003',
        name: 'Terapolis: Lab',
        location: 'Poland',
        address: 'Ogrodowa 2 Street<br>Maczniki village,<br>Nowe Skalmierzyce<br>63-460, Poland'
      }]
    })
  }
</script>

<style lang="stylus">
  .footer
    background #27283b url(/img/bg/bg-lines.svg) center repeat
    padding-top 64px
    padding-bottom 100px

    .v-btn--floating.v-btn--small
      height 30px
      width 30px

    .footer-text-color
      color #27283b !important

    &__item
      position relative

      &:before
        content ''
        position absolute
        top 0
        left 20px
        width 1px
        height 80px
        background-color #b88162
</style>
