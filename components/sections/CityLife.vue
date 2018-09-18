<template>
  <section :class="'citylife citylife--' + pageKind + ' text-xs-center'">

    <v-container class="pa-0 mb-5">
      <div class="font-weight-bold title-40" v-html="citylifeTitle"/>
      <div v-if="citylifeDescr" class="pt-serif opacity-50" v-html="citylifeDescr"/>
    </v-container>

    <div :class="'features-container features-container--' + pageKind">
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

  </section>
</template>

<script>
  export default {
    props: [
      'pageKind',
      'citylifeTitle',
      'citylifeDescr',
      'citylifeFeatures'
    ]
  }
</script>

<style lang="stylus">
  .citylife
    padding-top 100px
    padding-bottom 50px
    &--citizen
      background url(/img/bg/bg-citylife.svg) 50% 20px no-repeat
    &--project
      background none
    &--lab
      background none
    @media (min-width: 960px) {
      background none
    }

  .features-container
    position relative
    // @media (min-width: 960px) {
    // }
    &--citizen
      @media (min-width: 960px) {
        padding-bottom 724px
        background url(/img/bg/bg-farm.svg) 50% 164px no-repeat, url(/img/bg/bg-citylife.svg) 50% 0 no-repeat
      }
    &--project
      display flex
      flex-direction row
      flex-wrap wrap
      justify-content center
      max-width 700px
      margin 0 auto
    &--lab
      display flex
      flex-direction row
      flex-wrap wrap
      justify-content center
      max-width 700px
      margin 0 auto

  .features-item
    border-radius: 4px
    background-color #fff
    display flex
    flex-direction row
    align-items center
    align-content space-around
    text-align left
    height 140px
    margin 0 auto 10px
    max-width 270px
    @media (min-width: 600px) {
      max-width 330px
    }
    &__img
      min-width 100px
      order 1

      &>img
        display block
        margin 0 auto

    &__text
      padding-right 10px
      // display block
      order 2

  .features-container--citizen
    .features-item
      position relative
      display flex
      flex-direction wrap
      align-items center
      align-content space-around
      text-align left
      height 140px
      margin 10px auto
      max-width 270px
      @media (min-width: 600px) {
        max-width 330px
      }
      @media (min-width: 960px) {
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        max-width 330px
        width 330px
      }

      &--0001
        @media (min-width: 960px) {
          margin-top -155px
          margin-left 116px
        }

      &--0002
        @media (min-width: 960px) {
          text-align right
          margin-top 112px
          margin-left -330px
        }

        &>.features-item__img
          @media (min-width: 960px) {
            order 3
          }

        &>.features-item__text
          @media (min-width: 960px) {
            padding-right 0
            padding-left 10px
          }

      &--0003
        @media (min-width: 960px) {
          margin-top 112px
          margin-left 330px
        }

      &--0004
        @media (min-width: 960px) {
          text-align right
          margin-top 330px
          margin-left -110px
        }

        &>.features-item__img
          @media (min-width: 960px) {
            order 3
          }

        &>.features-item__text
          @media (min-width: 960px) {
            padding-right 0
            padding-left 10px
          }

</style>
