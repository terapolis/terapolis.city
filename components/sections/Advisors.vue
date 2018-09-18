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
      'advisors',
      'advisorMembers'
    ],
    data: () => ({
      advisorsTitle: 'Advisors',
      advisorsDescr: ''
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
