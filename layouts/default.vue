<template>
  <v-app class="white">

    <v-toolbar flat class="white" height="111">
      <v-spacer class="hidden-sm-and-down"/>
      <v-toolbar-items>

        <v-btn flat :to="citizenBtn.url" exact>
          <v-icon>{{ citizenBtn.icon }}</v-icon>
          <div class="ml-3 hidden-sm-and-down">
            <div class="grey--text text--darken-3 text-capitalize font-weight-bold fs16 opacity-70">{{ citizenBtn.title }}</div>
            <div class="grey--text text--darken-3 text-capitalize font-weight-regular fs12 opacity-70">{{ citizenBtn.slogan }}</div>
          </div>
        </v-btn>

        <v-btn flat :to="projectBtn.url">
          <v-icon>{{ projectBtn.icon }}</v-icon>
          <div class="ml-3 hidden-sm-and-down">
            <div class="grey--text text--darken-3 text-capitalize font-weight-bold fs16 opacity-70">{{ projectBtn.title }}</div>
            <div class="grey--text text--darken-3 text-capitalize font-weight-regular fs12 opacity-70">{{ projectBtn.slogan }}</div>
          </div>
        </v-btn>

        <v-btn flat :to="labBtn.url">
          <v-icon>{{ labBtn.icon }}</v-icon>
          <div class="ml-3 hidden-sm-and-down">
            <div class="grey--text text--darken-3 text-capitalize font-weight-bold fs16 opacity-70">{{ labBtn.title }}</div>
            <div class="grey--text text--darken-3 text-capitalize font-weight-regular fs12 opacity-70">{{ labBtn.slogan }}</div>
          </div>
        </v-btn>

      </v-toolbar-items>
      <v-spacer/>

      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-md-and-up">
        <v-icon>mdi-menu</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>

    <v-content>

      <!-- <hero/> -->

      <!-- <v-container> -->
        <nuxt/>
      <!-- </v-container> -->

      <video-show/>
      <break/>
      <city-life/>
      <world/>
      <roadmap/>
      <team/>
      <advisors/>

    </v-content>

    <footer-a/>

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
  import Hero from '~/components/Hero'
  import VideoShow from '~/components/VideoShow'
  import Break from '~/components/Break'
  import CityLife from '~/components/CityLife'
  import World from '~/components/World'
  import Roadmap from '~/components/Roadmap'
  import Team from '~/components/Team'
  import Advisors from '~/components/Advisors'
  import FooterA from '~/components/FooterA'

  export default {
    components: {
      Hero,
      VideoShow,
      Break,
      CityLife,
      World,
      Roadmap,
      Team,
      Advisors,
      FooterA
    },
    data () {
      return {
        sideNav: null,
        citizenBtn: {
          title: 'Terapolis: Citizen',
          slogan: 'The people behind the project',
          icon: 'mdi-robot',
          url: '/'
        },
        projectBtn: {
          title: 'Terapolis: Project',
          slogan: 'The tech behind the project',
          icon: 'mdi-yin-yang',
          url: '/project'
        },
        labBtn: {
          title: 'Terapolis: Lab',
          slogan: 'The ambitions behind the project',
          icon: 'mdi-headset',
          url: '/lab'
        }
      }
    }
  }
</script>

<style>
</style>
