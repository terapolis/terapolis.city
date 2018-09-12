<template>
  <div class="break text-xs-center">
    <v-container>
      <v-layout wrap>
        <v-flex xs12 sm10 offset-sm1>
          <div class="font-weight-medium fs24 mb-3" v-html="breakTitle"/>
        </v-flex>
        <v-flex xs12 sm8 offset-sm2>
          <div class="fs16 pt-serif" v-html="breakSlogan"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      breakTitle: 'Terapolis offers advanced industrial-grade solutions for efficient mining, professional ASIC hosting and cloud mining services',
      breakSlogan: 'We develop quickly-assembled mining houses with 1 mW/h power installed capacity, utilizing waste heat for maximum mining efficiency. Our mining houses are non-flammable, weatherproof, and use water cooling, G4 air filters, and two-factor air cleaning system to eliminate dust particles',
    })
  }
</script>

<style lang="stylus">
  .break
    background-color #fff
    padding-top 160px
    padding-bottom 174px
</style>
