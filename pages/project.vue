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
        parallaxImg: 'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        heroTitle: 'Terapolis offers advanced solutions for efficient and sustainable mining',
        heroDescr: "We strive to innovate industry's technologies and reduce their ecological footprint.",
        breakTitle: 'Terapolis offers advanced industrial-grade solutions for efficient mining, professional ASIC hosting and cloud mining services',
        breakDescr: 'We develop quickly-assembled mining houses with 1 mW/h power installed capacity, utilizing waste heat for maximum mining efficiency. Our mining houses are non-flammable, weatherproof, and use water cooling, G4 air filters, and two-factor air cleaning system to eliminate dust particles',
        roadmap: false
      }
    },
    head: {
      title: 'Project',
      meta: [
        { name: 'description', content: '' },
        { property: 'og:image', content: 'https://terapolis.netlify.com/img/og-images/og-citizen.png' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
