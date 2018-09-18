<template>
  <section v-if="team" class="team text-xs-center">
    <v-container>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1>
          <title-light :title="teamTitle"/>
          <div v-if="teamDescr" class="pt-serif opacity-50" v-html="teamDescr"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout justify-center row wrap>
        <v-flex xs6 sm4 md2 v-for="i in teamMembers" :key="i.id" class="my-3">

          <div class="avatar-back mb-4">
            <svg class="avatar-clipping">
              <image :xlink:href="i.photo" width="124" height="134" clip-path="url(#clipping)"/>
            </svg>
          </div>

          <div class="black--text font-weight-medium fs16 mb-1">{{ i.name }}</div>
          <div class="grey--text text--darken-3 pt-serif opacity-50 mb-2">{{ i.position }}</div>
          <v-btn v-if="i.linkedin" :href="i.linkedin" target="_blank" fab depressed small color="grey lighten-2">
            <v-icon color="white">mdi-linkedin</v-icon>
          </v-btn>
        </v-flex>

        <svg class="svg-clipping">
          <clipPath id="clipping">
            <path d="M62 111.216L124 134V0H0v134z"/>
          </clipPath>
        </svg>

      </v-layout>
    </v-container>
  </section>
</template>

<script>
  import TitleLight from '~/components/shared/TitleLight'

  export default {
    components: {
      TitleLight
    },
    props: [
      'team',
      'teamMembers'
    ],
    data: () => ({
      teamTitle: 'Our Team',
      teamDescr: ''
    })
  }
</script>

<style lang="stylus">
  .team
    // padding-top 40px
    // padding-bottom 30px
    margin-bottom 50px

  .avatar-back
    background url(/img/bg/bg-avatar.svg) top center no-repeat
    padding-top 4px
    padding-bottom 6px

  .avatar-clipping
    position relative
    width 124px
    height 134px
    display block
    margin 0 auto

  .svg-clipping
    position absolute
    width 0
    height 0
</style>
