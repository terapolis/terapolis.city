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
      'team'
    ],
    data: () => ({
      teamTitle: 'Our Team',
      teamDescr: '',
      teamMembers: [{
        id: '0001',
        name: 'Igor Vlasov',
        position: 'Chief Business Developer Officer',
        photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FIgor%20Vlasov.jpg?alt=media&token=0a0aeff1-6507-476b-a848-67a4bb81359c',
        linkedin: 'https://www.linkedin.com/in/igor-v-vlasov-53152061/'
      }, {
        id: '0002',
        name: 'Vladimir Savastiyanov',
        position: 'CTO',
        photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FVladimir%20Savastiyanov.jpg?alt=media&token=06725878-7df0-4b6c-800c-08ddf405760e',
        linkedin: 'https://www.linkedin.com/in/vladimir-savastiyanov-988aa816b/'
      }, {
        id: '0003',
        name: 'Marcus Berg',
        position: 'CEO',
        photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FMarcus%20Berg.jpg?alt=media&token=9691999f-7c90-4eed-b47a-689312402a24',
        linkedin: 'https://www.linkedin.com/in/marcus-berg-421030171/'
      }, {
        id: '0004',
        name: 'Anton Pivniuk',
        position: 'CMO',
        photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FAnton%20Pivniuk.jpg?alt=media&token=11c799f5-acb8-4aa0-8b32-53d09a872431',
        linkedin: 'https://www.linkedin.com/in/antonpivniuk/'
      }, {
        id: '0005',
        name: 'Sergey Lysov',
        position: 'Executive Vice President',
        photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FSergey%20Lysov.jpg?alt=media&token=e958f940-1b2e-4936-90cc-9b0e7e83ea59',
        linkedin: 'https://www.linkedin.com/in/lysov/'
      }, {
        id: '0006',
        name: 'Oleg Manyuta',
        position: 'Head of compliance',
        photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FOleg%20Manyuta.jpg?alt=media&token=884b90e9-ced1-43fc-80fa-aaa0c84dc2e3',
        linkedin: 'https://www.linkedin.com/in/oleg-manyuta-34a96944/'
      }, {
        id: '0007',
        name: 'Andreas Valsky',
        position: 'Chief legal officer',
        photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FAndreas%20Valsky.jpg?alt=media&token=1995d364-9675-4da4-9e2e-2b6408062968',
        linkedin: ''
      }]
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
