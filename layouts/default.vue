<template>
  <v-app class="white">

    <div class="toolbar">
      <div v-for="i in btns" :key="i.kind">
        <nuxt-link v-ripple class="toolbar-item" :to="i.url" exact>

          <div class="toolbar-item__img toolbar-item__img--active">
            <terapolis-citizen v-if="i.kind == 'citizen'" color="#fff" width="71px" backgroundColor="#292b41"/>
            <terapolis-project v-if="i.kind == 'project'" color="#fff" width="71px" backgroundColor="#d34c31"/>
            <terapolis-lab v-if="i.kind == 'lab'" color="#b88162" width="71px" backgroundColor="#f9ece7"/>
          </div>

          <div class="toolbar-item__img">
            <terapolis-citizen v-if="i.kind == 'citizen'" color="#424242" width="34px" class="opacity-70"/>
            <terapolis-project v-if="i.kind == 'project'" color="#424242" width="34px" class="opacity-70"/>
            <terapolis-lab v-if="i.kind == 'lab'" color="#424242" width="34px" class="opacity-70"/>
          </div>

          <div class="toolbar-item__text">
            <div :class="'toolbar-item__title toolbar-item__title--' + i.kind">{{ i.title }}</div>
            <div class="toolbar-item__descr">{{ i.descr }}</div>
          </div>
        </nuxt-link>
      </div>
    </div>

    <v-content class="position-relative">
      <nuxt/>
    </v-content>

  </v-app>
</template>

<script>
  import TerapolisCitizen from '~/components/shared/TerapolisCitizen'
  import TerapolisProject from '~/components/shared/TerapolisProject'
  import TerapolisLab from '~/components/shared/TerapolisLab'

  export default {
    components: {
      TerapolisCitizen,
      TerapolisProject,
      TerapolisLab
    },
    data () {
      return {
        btns: [{
          kind: 'citizen',
          title: 'Terapolis: Citizen',
          descr: 'The people behind the project',
          url: '/'
        }, {
          kind: 'project',
          title: 'Terapolis: Project',
          descr: 'The tech behind the project',
          url: '/project'
        }, {
          kind: 'lab',
          title: 'Terapolis: Lab',
          descr: 'The ambitions behind the project',
          url: '/lab'
        }]
      }
    }
  }
</script>

<style lang="stylus">
  .toolbar
    margin 0 auto
    display flex
    height 111px
    position relative
    z-index 30

  .toolbar-item
    padding-top 10px
    padding-left 10px
    padding-right 10px
    display flex
    height 100%
    color rgba(#4a4a4a,.7)
    text-decoration none
    @media (min-width: 960px) {
      padding-left 20px
      padding-right 20px
    }
    &:hover
      background-color #f9f9f9

  .toolbar-item__img
    display block
    // margin-left 10px
    // margin-right 10px
    margin-top 20px
    @media (min-width: 960px) {
      // margin-left 38px
      // margin-right 20px
    }

  .toolbar-item__img--active
    display none
    margin-top 0

  .toolbar-item__text
    display none
    padding-right 10px
    padding-top 10px
    padding-left 10px
    @media (min-width: 600px) {
      display block
    }
    @media (min-width: 960px) {
      // display block
      padding-right 20px
      padding-top 20px
      padding-left 20px
    }

  .toolbar-item__title
    // display block
    margin-top 10px
    font-size 16px
    font-weight bold
    // transition: color .2s

  .toolbar-item__descr
    // display block
    font-size 10px
    @media (min-width: 960px) {
      font-size 12px
    }

  .nuxt-link-active
    & .toolbar-item__img
      display none
    & .toolbar-item__img--active
      display block
    & .toolbar-item__text
      display block
    & .toolbar-item__title
      font-size 17px
      @media (min-width: 960px) {
        font-size 26px
        margin-top 0
      }
      &--citizen
        color rgba(#b78061,1)
      &--project
        color rgba(#d34b31,1)
      &--lab
        color rgba(#b88162,1)

</style>
