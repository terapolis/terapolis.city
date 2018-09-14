<template>
  <v-app class="white">

    <v-toolbar flat class="white" height="111">
      <v-spacer class="hidden-sm-and-down"/>
      <v-toolbar-items>

        <v-btn flat :to="citizenBtn.url" class="btn-header" exact>
          <terapolis-citizen class="btn-header__img hidden-sm-and-down opacity-70" color="#424242" width="32px"/>
          <v-icon class="grey--text text--darken-3 opacity-70 hidden-md-and-up">{{ citizenBtn.icon }}</v-icon>
          <div class="ml-3 hidden-sm-and-down">
            <div class="btn-header__title grey--text text--darken-3 text-capitalize font-weight-bold fs16 opacity-70">{{ citizenBtn.title }}</div>
            <div class="grey--text text--darken-3 text-capitalize font-weight-regular fs12 opacity-70">{{ citizenBtn.slogan }}</div>
          </div>
        </v-btn>

        <v-btn flat :to="projectBtn.url" class="btn-header">
          <terapolis-project class="btn-header__img hidden-sm-and-down opacity-70" color="#424242" width="32px"/>
          <v-icon class="grey--text text--darken-3 opacity-70 hidden-md-and-up">{{ projectBtn.icon }}</v-icon>
          <div class="ml-3 hidden-sm-and-down">
            <div class="btn-header__title grey--text text--darken-3 text-capitalize font-weight-bold fs16 opacity-70">{{ projectBtn.title }}</div>
            <div class="grey--text text--darken-3 text-capitalize font-weight-regular fs12 opacity-70">{{ projectBtn.slogan }}</div>
          </div>
        </v-btn>

        <v-btn flat :to="labBtn.url" class="btn-header">
          <terapolis-lab class="btn-header__img hidden-sm-and-down opacity-70" color="#424242" width="32px"/>
          <v-icon class="grey--text text--darken-3 opacity-70 hidden-md-and-up">{{ labBtn.icon }}</v-icon>
          <div class="ml-3 hidden-sm-and-down">
            <div class="btn-header__title grey--text text--darken-3 text-capitalize font-weight-bold fs16 opacity-70">{{ labBtn.title }}</div>
            <div class="grey--text text--darken-3 text-capitalize font-weight-regular fs12 opacity-70">{{ labBtn.slogan }}</div>
          </div>
        </v-btn>

      </v-toolbar-items>
      <v-spacer/>

      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-md-and-up">
        <v-icon class="grey--text text--darken-3 opacity-70">mdi-menu</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>

    <v-content>

      <!-- <hero/> -->

      <nuxt/>

      <video-show/>
      <break/>
      <city-life/>
      <world/>
      <roadmap/>
      <team/>
      <advisors/>

    </v-content>

    <footer-alpha/>

    <v-navigation-drawer
      fixed
      temporary
      right
      v-model="sideNav"
    >
      <v-list dense class="pt-0">

        <v-list-tile :to="citizenBtn.url">
          <v-list-tile-action>
            <v-icon>{{ citizenBtn.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ citizenBtn.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="projectBtn.url">
          <v-list-tile-action>
            <v-icon>{{ projectBtn.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ projectBtn.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="labBtn.url">
          <v-list-tile-action>
            <v-icon>{{ labBtn.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ labBtn.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

  </v-app>
</template>

<script>
  // import Hero from '~/components/sections/Hero'
  import VideoShow from '~/components/sections/VideoShow'
  import Break from '~/components/sections/Break'
  import CityLife from '~/components/sections/CityLife'
  import World from '~/components/sections/World'
  import Roadmap from '~/components/sections/Roadmap'
  import Team from '~/components/sections/Team'
  import Advisors from '~/components/sections/Advisors'
  import FooterAlpha from '~/components/sections/FooterAlpha'
  import TerapolisCitizen from '~/components/shared/TerapolisCitizen'
  import TerapolisProject from '~/components/shared/TerapolisProject'
  import TerapolisLab from '~/components/shared/TerapolisLab'

  export default {
    components: {
      // Hero,
      VideoShow,
      Break,
      CityLife,
      World,
      Roadmap,
      Team,
      Advisors,
      FooterAlpha,
      TerapolisCitizen,
      TerapolisProject,
      TerapolisLab
    },
    data () {
      return {
        sideNav: null,
        citizenBtn: {
          title: 'Terapolis: Citizen',
          slogan: 'The people behind the project',
          icon: 'mdi-key',
          url: '/'
        },
        projectBtn: {
          title: 'Terapolis: Project',
          slogan: 'The tech behind the project',
          icon: 'mdi-flash',
          url: '/project'
        },
        labBtn: {
          title: 'Terapolis: Lab',
          slogan: 'The ambitions behind the project',
          icon: 'mdi-fan',
          url: '/lab'
        }
      }
    }
  }
</script>

<style lang="stylus">
  .btn-header
    // width 330px

    &__img
      width 32px !important
      transition width .5s

    &__title
      transition font-size .5s, color .5s

  .v-btn--active
    .btn-header__img
      width 64px !important

      svg
        g
          fill #b78061 !important

    .btn-header__title
      font-size 26px !important
      color #b78061 !important
</style>
