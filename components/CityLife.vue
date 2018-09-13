<template>
  <div class="citylife text-xs-center white--text">
    <div class="font-weight-bold fs40" v-html="citylifeTitle"/>
    <div class="mb-5 pt-serif opacity-50" v-html="citylifeSlogan"/>
    <v-flex v-for="i in citylifeFeatures" :key="i.id">
      <v-card class="feature pa-3 mb-3">
        {{ i.img }}<br>
        <div class="black--text mb-2 font-weight-bold fs16">{{ i.title }}</div>
        <div class="grey--text text--darken-2 fs12 pt-serif">{{ i.descr }}</div>
      </v-card>
    </v-flex>
    <img class="mt-1" src="/img/bg/bg-citylife.svg" alt="">
  </div>
</template>

<script>
  export default {
    data: () => ({
      citylifeTitle: 'Terapolis Citizen',
      citylifeSlogan: 'Our Key Features',
      citylifeFeatures: [{
        id: '0001',
        img: '',
        title: 'Efficiency in Everything',
        descr: 'We use water cooling, G4 air filters, and two-factor air cleaning system to keep our houses dust-free.'
      }, {
        id: '0002',
        img: '',
        title: 'Protection and Security',
        descr: 'We’re building Terapolis on European soil where cryptocurrency mining is legally protected. The territory is fenced and kept under 24/7 surveillance.'
      }, {
        id: '0003',
        img: '',
        title: 'Quick Assembly',
        descr: 'Only 14 days separate you from efficient, eco-friendly cryptocurrency mining with 24/7 customer support.'
      }, {
        id: '0004',
        img: '',
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
</style>
