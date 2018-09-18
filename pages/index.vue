<template>
  <section>
    <parallax-bg
      :img="parallaxImg"
    />
    <hero
      :title="heroTitle"
      :descr="heroDescr"
    />
    <video-show
      :img="videoshowImg"
    />
    <break
      :title="breakTitle"
      :descr="breakDescr"
    />
    <v-container fluid class="pa-0 px-3">
      <v-container fluid class="container-bordered pa-0">
        <city-life
        />
        <world
        />
        <roadmap
          :roadmap="roadmap"
        />
        <img src="/img/bg/bg-triangles.svg" alt="" class="container-bordered__img">
      </v-container>
    </v-container>
    <team
      :team="team"
      :teamMembers="teamMembers"
    />
    <advisors
      :advisors="advisors"
      :advisorMembers="advisorMembers"
    />
    <footer-alpha
      :coloredBg="coloredBg"
    />
  </section>
</template>

<script>
  import ParallaxBg from '~/components/sections/ParallaxBg'
  import Hero from '~/components/sections/Hero'
  import VideoShow from '~/components/sections/VideoShow'
  import Break from '~/components/sections/Break'
  import CityLife from '~/components/sections/CityLife'
  import World from '~/components/sections/World'
  import Roadmap from '~/components/sections/Roadmap'
  import Team from '~/components/sections/Team'
  import Advisors from '~/components/sections/Advisors'
  import FooterAlpha from '~/components/sections/FooterAlpha'

  export default {
    components: {
      ParallaxBg,
      Hero,
      VideoShow,
      Break,
      CityLife,
      World,
      Roadmap,
      Team,
      Advisors,
      FooterAlpha
    },
    data () {
      return {
        parallaxImg: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/hero%2F%D1%81itizen.jpg?alt=media&token=6bbd0b40-f824-4041-a069-c08b1944ad63',
        heroTitle: 'Terapolis offers advanced solutions for efficient and sustainable mining',
        heroDescr: "We strive to innovate industry's technologies and reduce their ecological footprint.",
        videoshowImg: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/videoshow%2F%D1%81itizen.jpg?alt=media&token=89e345ed-201e-44fe-aac2-fdf691fa3fff',
        breakTitle: 'Terapolis offers advanced industrial-grade solutions for efficient mining, professional ASIC hosting and cloud mining services',
        breakDescr: 'We develop quickly-assembled mining houses with 1 mW/h power installed capacity, utilizing waste heat for maximum mining efficiency. Our mining houses are non-flammable, weatherproof, and use water cooling, G4 air filters, and two-factor air cleaning system to eliminate dust particles',
        coloredBg: '#27283b url(/img/bg/bg-lines.svg) center repeat',
        roadmap: true,
        team: true,
        teamMembers: [{
          id: '0001',
          name: 'Marcus Berg',
          position: 'CEO',
          photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FMarcus%20Berg.jpg?alt=media&token=9691999f-7c90-4eed-b47a-689312402a24',
          linkedin: 'https://www.linkedin.com/in/marcus-berg-421030171/'
        }, {
          id: '0002',
          name: 'Igor Vlasov',
          position: 'Chief Business Developer Officer',
          photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FIgor%20Vlasov.jpg?alt=media&token=0a0aeff1-6507-476b-a848-67a4bb81359c',
          linkedin: 'https://www.linkedin.com/in/igor-v-vlasov-53152061/'
        }, {
          id: '0003',
          name: 'Vladimir Savastiyanov',
          position: 'CTO',
          photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FVladimir%20Savastiyanov.jpg?alt=media&token=06725878-7df0-4b6c-800c-08ddf405760e',
          linkedin: 'https://www.linkedin.com/in/vladimir-savastiyanov-988aa816b/'
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
        }],
        advisors: false,
        advisorMembers: []
      }
    },
    head: {
      title: 'Citizen',
      meta: [
        { name: 'description', content: 'Advanced solution for efficient and secure mining' },
        { property: 'og:image', content: 'https://terapolis.netlify.com/img/og-images/og-citizen.png' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
