<template>
  <section v-if="roadmap" class="roadmap text-xs-center white--text">

    <v-container class="mb-5">
      <div class="roadmap__title font-weight-bold title-40" v-html="roadmapTitle"/>
      <div v-if="roadmapDescr" class="pt-serif opacity-50" v-html="roadmapDescr"/>
    </v-container>

    <v-container fluid class="roadmap__container position-relative pa-0">

      <div v-for="i in roadmapPointsCheked" :key="i.id" class="mb-4">
        <v-flex v-if="i.columnSide=='right'" text-xs-left xs6 offset-xs6 sm5 md4 lg3 xl2>
          <v-chip small class="brown-background mt-0 mb-2" style="transform: translateX(-19px);">
            <v-icon left class="white--text">mdi-check-circle</v-icon>
            <div class="white--text font-italic fs12 pt-serif">{{ i.date }}</div>
          </v-chip>
          <div class="mr-1 ml-4">
            <div class="font-weight-bold mb-1 fs16">{{ i.title }}</div>
            <div class="blue-color pt-serif">{{ i.descr }}</div>
          </div>
        </v-flex>
        <v-flex v-if="i.columnSide=='left'" text-xs-right xs6 sm5 offset-sm1 md4 offset-md2 lg3 offset-lg3 xl2 offset-xl4>
          <v-chip small class="brown-background mt-0 mb-2" style="transform: translateX(19px);">
            <div class="white--text font-italic fs12 pt-serif">{{ i.date }}</div>
            <v-icon right class="white--text">mdi-check-circle</v-icon>
          </v-chip>
          <div class="mr-4 ml-1">
            <div class="font-weight-bold mb-1 fs16">{{ i.title }}</div>
            <div class="blue-color pt-serif">{{ i.descr }}</div>
          </div>
        </v-flex>
      </div>

      <div class="nowline mt-4 mb-4">Now</div>

      <div v-for="i in roadmapPointsFuture" :key="i.id" class="mb-4">
        <v-flex v-if="i.columnSide=='right'" text-xs-left xs6 offset-xs6 sm5 md4 lg3 xl2>
          <v-chip small class="white mt-0 mb-2" style="transform: translateX(-19px);">
            <v-icon left class="brown-color">mdi-circle</v-icon>
            <div class="grey--text text--darken-2 font-italic fs12 pt-serif">{{ i.date }}</div>
          </v-chip>
          <div class="mr-1 ml-4">
            <div class="font-weight-bold mb-1 fs16">{{ i.title }}</div>
            <div class="blue-color pt-serif">{{ i.descr }}</div>
          </div>
        </v-flex>
        <v-flex v-if="i.columnSide=='left'" text-xs-right xs6 sm5 offset-sm1 md4 offset-md2 lg3 offset-lg3 xl2 offset-xl4>
          <v-chip small class="white mt-0 mb-2" style="transform: translateX(19px);">
            <div class="grey--text text--darken-2 font-italic fs12 pt-serif">{{ i.date }}</div>
            <v-icon right class="brown-color">mdi-circle</v-icon>
          </v-chip>
          <div class="mr-4 ml-1">
            <div class="font-weight-bold mb-1 fs16">{{ i.title }}</div>
            <div class="blue-color pt-serif">{{ i.descr }}</div>
          </div>
        </v-flex>
      </div>

    </v-container>
  </section>
</template>

<script>
  export default {
    props: [
      'roadmap'
    ],
    data: () => ({
      roadmapTitle: 'Our Journey',
      roadmapDescr: '',
      roadmapPointsCheked: [{
        id: 'rpc0001',
        columnSide: 'right',
        date: 'Q4 2017',
        title: 'The idea of the project is born',
        descr: 'Our engineering team starts developing the first highly efficient mining house in Poland'
      }, {
        id: 'rpc0002',
        columnSide: 'left',
        date: 'Q2 2018',
        title: 'Terapolis.Citizen is launched',
        descr: 'The 10 MWh facility commissioned and mining Bitcoin'
      }, {
        id: 'rpc0003',
        columnSide: 'right',
        date: 'Q3 2018',
        title: 'Terapolis.Labs is launched',
        descr: 'The R&D centre started working on waste heat capture and re-use technologies'
      }],
      roadmapPointsFuture: [{
        id: 'rpf0001',
        columnSide: 'left',
        date: 'Q4 2018',
        title: 'Pilot Project for Waste Heat Use',
        descr: 'The waste heat is used for greenhouses needs. This milestone unites cryptocurrencies with real economy by providing savings and saving environment'
      }, {
        id: 'rpf0002',
        columnSide: 'right',
        date: 'Q2 2019',
        title: 'ICO, Fundraising campaign',
        descr: 'Terapolis.Project launches, seeking investment funds for a faster development and scaling'
      }, {
        id: 'rpf0003',
        columnSide: 'left',
        date: 'Q2 2019',
        title: 'Terapolis.Citizen launches in Canada',
        descr: 'Enjoying low energy rates and piloting waste heat to energy solution with up to 40% recovery of energy'
      }]
    })
  }
</script>

<style lang="stylus">
  .roadmap
    // background #27283b url(/img/bg/bg-lines.svg) center repeat
    // padding-top 70px
    // padding-bottom 100px
    position relative
    @media (min-width: 960px) {
      background url(/img/bg/bg-map.svg) center -550px no-repeat
    }

    &__title
      padding-top 70px !important
      background url(/img/bg/bg-title-center.svg) top center no-repeat

    &__container
      padding-bottom 120px !important
      // background url(/img/bg/bg-triangles.svg) center bottom no-repeat

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
