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
    />
    <advisors
    />
    <footer-alpha
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
        roadmap: true
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
