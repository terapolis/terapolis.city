<template>
  <div class="world text-xs-center white--text">
    <v-container>
      <div class="font-weight-bold fs40" v-html="worldTitle"/>
      <div v-if="worldSlogan" class="pt-serif opacity-50" v-html="worldSlogan"/>
      <v-flex v-for="i in worldPoints" :key="i.id">
        <v-icon small class="white--text">mdi-circle-slice-8</v-icon><br>
        {{ i.img }}<br>
        {{ i.title }}<br>
        {{ i.location }}<br>
        {{ i.descr }}
      </v-flex>
      <img class="mt-5" src="/img/bg/bg-world.svg" alt="">
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      worldTitle: 'Our Global Network',
      worldSlogan: '',
      worldPoints: [{
        id: '0001',
        img: '',
        title: 'Terapolis: Project',
        location: 'Austria',
        descr: 'Corporate center and Headquarters'
      }, {
        id: '0002',
        img: '',
        title: 'Terapolis: Citizen',
        location: 'Canada',
        descr: 'Professional hosting for miners'
      }, {
        id: '0003',
        img: '',
        title: 'Terapolis: Citizen',
        location: 'Poland',
        descr: 'Professional hosting for miners'
      }, {
        id: '0004',
        img: '',
        title: 'Terapolis: Project',
        location: 'Miami, USA',
        descr: 'American Sales office'
      }, {
        id: '0005',
        img: '',
        title: 'Terapolis: Lab',
        location: 'Poland',
        descr: 'R&D centre developing effective mining solutions'
      }, {
        id: '0006',
        img: '',
        title: 'Terapolis: Project',
        location: 'Guangzhou, China',
        descr: 'Asian Business Development and Partnerships office'
      }]
    })
  }
</script>

<style lang="stylus">
  .world
    background #27283b url(/img/bg/bg-lines.svg) repeat
    padding-top 100px
    padding-bottom 45px
</style>
