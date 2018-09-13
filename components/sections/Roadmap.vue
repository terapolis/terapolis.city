<template>
  <div class="roadmap text-xs-center white--text">
    <v-container fluid class="position-relative pa-0">
      <div class="font-weight-bold fs40" v-html="roadmapTitle"/>
      <div v-if="roadmapSlogan" class="pt-serif opacity-50" v-html="roadmapSlogan"/>

      <v-flex v-for="i in roadmapPointsCheked" :key="i.id">
        <v-chip small class="brown-background">
          <v-avatar>
            <v-icon class="white--text">mdi-check-circle</v-icon>
          </v-avatar>
          <div class="white--text font-italic fs12 pt-serif">{{ i.date }}</div>
        </v-chip>
        <div class="font-weight-bold mb-1 fs16">{{ i.title }}</div>
        <div class="blue-color pt-serif">{{ i.descr }}</div>
      </v-flex>

      <div class="nowline mt-4 mb-4">Now</div>

      <v-flex v-for="i in roadmapPointsFuture" :key="i.id">
        <v-chip small class="white">
          <v-avatar>
            <v-icon class="brown-color">mdi-circle</v-icon>
          </v-avatar>
          <div class="grey--text text--darken-2 font-italic fs12 pt-serif">{{ i.date }}</div>
        </v-chip>
        <div class="font-weight-bold mb-1 fs16">{{ i.title }}</div>
        <div class="blue-color pt-serif">{{ i.descr }}</div>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      roadmapTitle: 'Our Journey',
      roadmapSlogan: '',
      roadmapPointsCheked: [{
        id: '0001',
        date: 'Q4 2017',
        title: 'The idea of the project is born',
        descr: 'Our engineering team starts developing the first highly efficient mining house in Poland'
      }, {
        id: '0002',
        date: 'Q3 2017',
        title: 'Terapolis.Citizen is launched',
        descr: 'Our engineering team starts developing the first highly efficient mining house in Poland'
      }, {
        id: '0003',
        date: 'Q3 2018',
        title: 'Terapolis.Labs is launched',
        descr: 'The R&D centre started working on waste heat capture and re-use technologies'
      }],
      roadmapPointsFuture: [{
        id: '0001',
        date: 'Q4 2018',
        title: 'Pilot Project for Waste Heat Use',
        descr: 'The waste heat is used for greenhouses needs. This milestone unites cryptocurrencies with real economy by providing savings and saving environment'
      }, {
        id: '0002',
        date: 'Q2 2019',
        title: 'ICO, Fundraising campaign',
        descr: 'Terapolis.Project launches, seeking investment funds for a faster development and scaling'
      }, {
        id: '0003',
        date: 'Q2 2019',
        title: 'Terapolis.Citizen launches in Canada',
        descr: 'Enjoying low energy rates and piloting waste heat to energy solution with up to 40% recovery of energy'
      }]
    })
  }
</script>

<style lang="stylus">
  .roadmap
    background #27283b url(/img/bg/bg-lines.svg) repeat
    padding-top 100px
    padding-bottom 100px
    position relative

    &:before
      content ''
      position absolute
      top 0
      left 50%
      width 2px
      margin-left -1px
      height 100%
      background-color #b88162

  .nowline
    position relative
    background-color #2f3147
    box-shadow 0 2px 4px 0 rgba(#000,.10)
    line-height 26px
</style>
