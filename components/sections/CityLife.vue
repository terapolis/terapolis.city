<template>
  <div class="citylife text-xs-center white--text">

    <v-container class="pa-0">
      <div class="font-weight-bold fs40" v-html="citylifeTitle"/>
      <div class="mb-5 pt-serif opacity-50" v-html="citylifeSlogan"/>
    </v-container>

    <div class="features-container">
      <div v-for="i in citylifeFeatures" :key="i.id" :class="'features-item features-item--' + i.id">
        <div class="features-item__img">
          <img :src="i.img" :alt="i.title + ' Image'"/>
        </div>
        <div class="features-item__text">
          <div class="black--text mb-1 font-weight-bold fs16">{{ i.title }}</div>
          <div class="grey--text text--darken-2 fs12 pt-serif lh15">{{ i.descr }}</div>
        </div>
      </div>
    </div>

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
    padding-top 100px
    padding-bottom 50px

  .features-container
    position relative
    padding-bottom 724px
    background url(/img/bg/bg-farm.svg) 50% 164px no-repeat, url(/img/bg/bg-citylife.svg) 50% 0 no-repeat

  .features-item
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    max-width 330px
    width 330px
    height 140px
    border-radius: 4px
    background-color #fff
    display flex
    flex-direction wrap
    align-items center
    align-content space-around
    text-align left

    &--0001
      margin-top -155px
      margin-left 116px

    &--0002
      text-align right
      margin-top 112px
      margin-left -330px

      &>.features-item__img
        order 3

      &>.features-item__text
        padding-right 0
        padding-left 10px

    &--0003
      margin-top 112px
      margin-left 330px

    &--0004
      text-align right
      margin-top 330px
      margin-left -110px

      &>.features-item__img
        order 3

      &>.features-item__text
        padding-right 0
        padding-left 10px

    &__img
      min-width 100px
      order 1

      &>img
        display block
        margin 0 auto

    &__text
      display block
      order 2
      padding-right 10px
</style>
