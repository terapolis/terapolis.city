<template>
  <div class="citylife text-xs-center white--text">
    <v-container>
      <div class="font-weight-bold fs40" v-html="citylifeTitle"/>
      <div class="mb-5 pt-serif opacity-50" v-html="citylifeSlogan"/>
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12 md6 lg4 xl3 v-for="i in citylifeFeatures" :key="i.id">
            <v-card class="feature mb-2 mx-auto" flat>
              <!-- <v-container class="pa-0"> -->
                <v-layout fill-height align-center justify-center>
                  <v-flex xs4>
                    <img class="d-block mx-auto" :src="i.img" :alt="i.title + ' Image'"/>
                  </v-flex>
                  <v-flex xs8 class="pr-2 text-xs-left">
                    <div class="black--text mb-1 font-weight-bold fs16">{{ i.title }}</div>
                    <div class="grey--text text--darken-2 fs12 pt-serif lh15">{{ i.descr }}</div>
                  </v-flex>
                </v-layout>
              <!-- </v-container> -->
            </v-card>
          </v-flex>
          <v-flex xs12>
            <img src="/img/logos/farm.svg" alt="">
            <img src="/img/bg/bg-citylife.svg" alt="">
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      citylifeTitle: 'Terapolis Citizen',
      citylifeSlogan: 'Our Key Features',
      citylifeFeatures: [{
        id: '0001',
        img: '/img/logos/efficiency-in-everything.svg',
        title: 'Efficiency in Everything',
        descr: 'We use water cooling, G4 air filters, and two-factor air cleaning system to keep our houses dust-free.'
      }, {
        id: '0002',
        img: '/img/logos/protection-and-security.svg',
        title: 'Protection and Security',
        descr: 'We’re building Terapolis on European soil where cryptocurrency mining is legally protected. The territory is fenced and kept under 24/7 surveillance.'
      }, {
        id: '0003',
        img: '/img/logos/quick-assembly.svg',
        title: 'Quick Assembly',
        descr: 'Only 14 days separate you from efficient, eco-friendly cryptocurrency mining with 24/7 customer support.'
      }, {
        id: '0004',
        img: '/img/logos/waste-heat-recovery.svg',
        title: 'Waste Heat Recovery',
        descr: 'Terapolis technology captures and converts up to 40% of waste heat to useful energy.'
      }]
    })
  }
</script>

<style lang="stylus">
  .citylife
    background #27283b url(/img/bg/bg-lines.svg) repeat
    padding-top 100px
    padding-bottom 45px

  .feature
    max-width 330px
    height 140px
</style>
