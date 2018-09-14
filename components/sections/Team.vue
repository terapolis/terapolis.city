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
          <div class="grey--text text--darken-3 pt-serif opacity-50">{{ i.position }}</div>

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
        photo: 'https://images.unsplash.com/photo-1511623785848-021573a3a04f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3dc14cb7621dbb159141b39c3251ac6&auto=format&fit=crop&w=248&h=268&q=80'
      }, {
        id: '0002',
        name: 'Volodja',
        position: 'CTO',
        photo: 'https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-0.3.5&s=25f883d188f83803e1b63d7a1ae9524a&auto=format&fit=crop&w=248&h=268&q=80'
      }, {
        id: '0003',
        name: 'Igor Vlasov',
        position: 'CEO',
        photo: 'https://images.unsplash.com/photo-1458696352784-ffe1f47c2edc?ixlib=rb-0.3.5&s=7df45ed6dd4727de4fbf9c4c91ca5b25&auto=format&fit=crop&w=248&h=268&q=80'
      }, {
        id: '0004',
        name: 'Anton Pivniuk',
        position: 'CMO',
        photo: 'https://images.unsplash.com/photo-1512911041729-acb19a87d993?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1e54ba2732538e861236ad326bb63f2&auto=format&fit=crop&w=248&h=268&q=80'
      }, {
        id: '0005',
        name: 'Sergey Lysov',
        position: 'CFO  - Executive VP',
        photo: 'https://images.unsplash.com/photo-1534385842125-8c9ad0bd123c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bfe6238c8534bd32b402a72ffbc7982c&auto=format&fit=crop&w=248&h=268&q=80'
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
