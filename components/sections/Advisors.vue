<template>
  <section v-if="advisors" class="advisors text-xs-center">
    <v-container>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1>
          <title-light :title="advisorsTitle"/>
          <div v-if="advisorsDescr" class="pt-serif opacity-50" v-html="advisorsDescr"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout justify-center row wrap>
        <v-flex xs6 sm4 md3 v-for="i in advisorMembers" :key="i.id" class="my-3">
          <v-avatar size="130" class="avatar mb-4">
            <img :src="i.photo" :alt="i.name + ' Photo'">
          </v-avatar>
          <div class="black--text font-weight-medium fs16 mb-1">{{ i.name }}</div>
          <div class="grey--text text--darken-3 pt-serif opacity-50 mb-2">{{ i.position }}</div>
          <v-btn v-if="i.linkedin" :href="i.linkedin" target="_blank" fab depressed small color="grey lighten-2">
            <v-icon color="white">mdi-linkedin</v-icon>
          </v-btn>
        </v-flex>
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
      'advisors'
    ],
    data: () => ({
      advisorsTitle: 'Advisors',
      advisorsDescr: '',
      advisorMembers: [{
        id: '0001',
        name: 'Anton Pivniuk',
        position: 'CMO',
        photo: 'https://images.unsplash.com/photo-1504583395652-c7793d4c8d06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9304f66a4c5f3ea941840948eb3a435e&auto=format&fit=crop&w=260&h=260&q=80',
        linkedin: ''
      }, {
        id: '0002',
        name: 'Anton Pivniuk',
        position: 'CMO',
        photo: 'https://images.unsplash.com/photo-1514218698632-ef079aeae842?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0107421ec3e290d404cdb7e5c6ba6e1f&auto=format&fit=crop&w=260&h=260&q=80',
        linkedin: ''
      }, {
        id: '0003',
        name: 'Anton Pivniuk',
        position: 'CMO',
        photo: 'https://images.unsplash.com/photo-1510821984-41a9197835e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f5efef6bde32809057043e523965b8ad&auto=format&fit=crop&w=260&h=260&q=80',
        linkedin: ''
      }]
    })
  }
</script>

<style lang="stylus">
  .advisors
    // padding-top 30px
    // padding-bottom 130px
    margin-bottom 50px

    .avatar
      border 2px solid #b88162
      box-sizing content-box

      &>img
        border 2px solid #fff
        box-sizing border-box

</style>
