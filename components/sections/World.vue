<template>
  <section :class="'world world--' + pageKind + ' text-xs-center'">

    <v-container class="mb-5">
      <div class="world__title font-weight-bold title-40">
        <span>{{ worldTitle }}</span>
      </div>
      <div v-if="worldDescr" class="pt-serif opacity-50" v-html="worldDescr"/>
    </v-container>

    <div :class="'locations-container locations-container--' + pageKind">
      <div v-for="i in worldPoints" :key="i.id" :class="'locations-item locations-item--' + i.id">

        <div class="locations-item__img">
          <terapolis-project v-if="i.kind == 'project'" color="#fff" width="34px" backgroundColor="#d34c31"/>
          <terapolis-citizen v-if="i.kind == 'citizen'" color="#b88162" width="34px"/>
          <terapolis-lab v-if="i.kind == 'lab'" color="#b88162" width="34px" backgroundColor="#f9ece7"/>
        </div>

        <div class="mx-3 locations-item__text">
          <div class="font-weight-bold fs16">{{ i.title }}</div>
          <div class="font-italic pt-serif opacity-50">{{ i.location }}</div>
          <div class="pt-serif">{{ i.descr }}</div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
  import TerapolisCitizen from '~/components/shared/TerapolisCitizen'
  import TerapolisProject from '~/components/shared/TerapolisProject'
  import TerapolisLab from '~/components/shared/TerapolisLab'

  export default {
    props: [
      'pageKind'
    ],
    components: {
      TerapolisCitizen,
      TerapolisProject,
      TerapolisLab
    },
    data: () => ({
      worldTitle: 'Our Global Network',
      worldDescr: '',
      worldPoints: [{
        id: '0001',
        kind: 'project',
        title: 'Terapolis: Project',
        location: 'Austria',
        descr: 'Corporate center and Headquarters'
      }, {
        id: '0002',
        kind: 'citizen',
        title: 'Terapolis: Citizen',
        location: 'Canada',
        descr: 'Professional hosting for miners'
      }, {
        id: '0003',
        kind: 'citizen',
        title: 'Terapolis: Citizen',
        location: 'Poland',
        descr: 'Professional hosting for miners'
      }, {
        id: '0004',
        kind: 'project',
        title: 'Terapolis: Project',
        location: 'Miami, USA',
        descr: 'American Sales office'
      }, {
        id: '0005',
        kind: 'lab',
        title: 'Terapolis: Lab',
        location: 'Poland',
        descr: 'R&D centre developing effective mining solutions'
      }, {
        id: '0006',
        kind: 'project',
        title: 'Terapolis: Project',
        location: 'Guangzhou, China',
        descr: 'Asian Business Development and Partnerships office'
      }]
    })
  }
</script>

<style lang="stylus">
  .world
    // background #27283b url(/img/bg/bg-lines.svg) center repeat
    padding-top 100px
    // padding-bottom 45px

    &__title
      // padding-top 70px !important
      position relative
      overflow hidden
      .world--citizen &
        @media (min-width: 600px) {
          background url(/img/bg/bg-title-center.svg) center no-repeat
        }

      &>span
        position relative
        z-index 20
        .world--citizen &
          @media (min-width: 600px) {
            background #27283b url(/img/bg/bg-lines.svg) center repeat
          }

        &:before
        &:after
          z-index 10
          content ''
          position absolute
          top 50%
          margin-top 1px
          transform translateY(-50%)
          width 11px
          height 12px
          .world--citizen &
            @media (min-width: 600px) {
              background url(/img/bg/bg-title-center.svg) center no-repeat
            }

        &:before
          left 0

        &:after
          right 0

  .locations-container
    position relative
    padding-bottom 100px
    &--citizen
      background url(/img/bg/bg-map-blue.svg) center top / contain no-repeat
    &--project
      background url(/img/bg/bg-map-red.svg) center top / contain no-repeat
    &--lab
      background url(/img/bg/bg-map-beige.svg) center top / contain no-repeat
    @media (min-width: 960px) {
      padding-bottom 550px
      // background-position center top
      background-size auto
    }

  .locations-item
    text-align left
    display flex
    margin 0 auto 20px
    max-width 254px
    @media (min-width: 960px) {
      max-width inherit
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
    }

    &--0001
      @media (min-width: 960px) {
        text-align right
        margin-top -115px
        margin-left -65px
        padding-right 24px
        padding-bottom 160px
        background url(/img/lines/0001.svg) right bottom no-repeat
      }

      &>.locations-item__img
        @media (min-width: 960px) {
          order 3
        }

    &--0002
      @media (min-width: 960px) {
        margin-top -140px
        margin-left -330px
        padding-bottom 20px
        background url(/img/lines/0002.svg) left bottom no-repeat
      }

    &--0003
      @media (min-width: 960px) {
        margin-top -85px
        margin-left 255px
        padding-left 24px
        padding-bottom 20px
        background url(/img/lines/0003.svg)left bottom no-repeat
      }

    &--0004
      @media (min-width: 960px) {
        margin-top 40px
        margin-left -330px
        padding-bottom 20px
        background url(/img/lines/0004.svg) left bottom no-repeat
      }

    &--0005
      @media (min-width: 960px) {
        text-align right
        margin-top 60px
        margin-left -45px
        padding-right 24px
        padding-top 100px
        background url(/img/lines/0005.svg) right top no-repeat
      }

      &>.locations-item__img
        @media (min-width: 960px) {
          order 3
        }

    &--0006
      @media (min-width: 960px) {
        text-align right
        margin-top 100px
        margin-left 330px
        padding-right 24px
        padding-top 40px
        background url(/img/lines/0006.svg) right top no-repeat
      }

      &>.locations-item__img
        @media (min-width: 960px) {
          order 3
        }

    &__img
      order 1

    &__text
      width 220px
      order 2
</style>
