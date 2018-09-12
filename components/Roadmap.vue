<template>
  <div class="roadmap text-xs-center white--text">
    <div class="font-weight-bold fs40" v-html="roadmapTitle"/>
    <div v-if="roadmapSlogan" class="pt-serif opacity-50" v-html="roadmapSlogan"/>
    <v-flex v-for="i in roadmapPointsCheked">
      <v-icon small class="white--text">mdi-check</v-icon>
      {{ i.date }}<br>
      {{ i.title }}<br>
      {{ i.descr }}
    </v-flex>
    <v-chip>Now</v-chip>
    <v-flex v-for="i in roadmapPointsFuture">
      {{ i.date }}<br>
      {{ i.title }}<br>
      {{ i.descr }}
    </v-flex>
  </div>
</template>

<script>
  export default {
    data: () => ({
      roadmapTitle: 'Our Journey',
      roadmapSlogan: '',
      roadmapPointsCheked: [{
        date: 'Q4 2017',
        title: 'The idea of the project is born',
        descr: 'Our engineering team starts developing the first highly efficient mining house in Poland'
      }, {
        date: 'Q3 2017',
        title: 'Terapolis.Citizen is launched',
        descr: 'Our engineering team starts developing the first highly efficient mining house in Poland'
      }, {
        date: 'Q3 2018',
        title: 'Terapolis.Labs is launched',
        descr: 'The R&D centre started working on waste heat capture and re-use technologies'
      }],
      roadmapPointsFuture: [{
        date: 'Q4 2018',
        title: 'Pilot Project for Waste Heat Use',
        descr: 'The waste heat is used for greenhouses needs. This milestone unites cryptocurrencies with real economy by providing savings and saving environment'
      }, {
        date: 'Q2 2019',
        title: 'ICO, Fundraising campaign',
        descr: 'Terapolis.Project launches, seeking investment funds for a faster development and scaling'
      }, {
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
</style>
