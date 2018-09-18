<template>
  <div class="team text-xs-center">
    <v-container>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1>
          <title-light :title="teamTitle"/>
          <div v-if="teamSlogan" class="pt-serif opacity-50" v-html="teamSlogan"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout justify-center row wrap>
        <v-flex xs6 sm4 md2 v-for="i in team" :key="i.id" class="my-3">

          <div class="avatar-back mb-4">
            <svg class="avatar-clipping">
              <image :xlink:href="i.photo" width="124" height="134" clip-path="url(#clipping)"/>
            </svg>
          </div>

          <div class="black--text font-weight-medium fs16 mb-1">{{ i.name }}</div>
          <div class="grey--text text--darken-3 pt-serif opacity-50 mb-2">{{ i.position }}</div>
          <v-btn fab depressed small color="grey lighten-2">
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
  </div>
</template>

<script>
  import TitleLight from '~/components/shared/TitleLight'

  export default {
    components: {
      TitleLight
    },
    data: () => ({
      teamTitle: 'Our Team',
      teamSlogan: '',
      team: [{
        id: '0001',
        name: 'Igor Vlasov',
        position: 'Chief Business Developer Officer',
        photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/people%2FIgor%20Vlasov.jpg?alt=media&token=172661aa-2b95-4130-bf93-21fa43185420',
        linkedin: ''
      }, {
        id: '0002',
        name: 'Vladimir Savastiyanov',
        position: 'CTO',
        photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/people%2FVladimir%20Savastiyanov.jpg?alt=media&token=fdcf771f-8e03-487b-830f-32aa8af7cf9d',
        linkedin: ''
      }, {
        id: '0003',
        name: 'Marcus Berg',
        position: 'CEO',
        photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/people%2FMarcus%20Berg.jpg?alt=media&token=b7165be9-7559-4a86-9883-4e42025c7745',
        linkedin: ''
      }, {
        id: '0004',
        name: 'Anton Pivniuk',
        position: 'CMO',
        photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/people%2FAnton%20Pivniuk.jpg?alt=media&token=ce4716d3-fdcd-4a03-a683-3a0c1511fc21',
        linkedin: ''
      }, {
        id: '0005',
        name: 'Sergey Lysov',
        position: 'Executive Vice President',
        photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/people%2FSergey%20Lysov.jpg?alt=media&token=c1882ed8-11f7-4323-b76e-b27d9f8bfe79',
        linkedin: ''
      }]
    })
  }
</script>

<style lang="stylus">
  .team
    padding-top 40px
    // padding-bottom 30px

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
