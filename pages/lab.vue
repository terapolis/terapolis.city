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
    <v-container fluid class="py-0 px-3">
      <section :class="'container-bordered container-bordered--' + pageKind">
        <city-life
          :pageKind="pageKind"
          :citylifeTitle="citylifeTitle"
          :citylifeDescr="citylifeDescr"
          :citylifeFeatures="citylifeFeatures"
        />
        <world
          :pageKind="pageKind"
        />
        <roadmap
          :roadmap="roadmap"
        />
        <img src="/img/bg/bg-triangles.svg" alt="" class="container-bordered__img">
      </section>
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
      :pageKind="pageKind"
      :footerTitle="footerTitle"
      :footerDescr="footerDescr"
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
        pageKind: 'lab',
        parallaxImg: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/hero%2Fproject.jpg?alt=media&token=d41962cd-8ad4-45f4-a41a-36e361dd5121',
        heroTitle: 'Terapolis offers advanced solutions for efficient and sustainable mining',
        heroDescr: "We strive to innovate industry's technologies and reduce their ecological footprint.",
        videoshowImg: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/videoshow%2Fproject.jpg?alt=media&token=7a3314cb-4d6f-4dce-9410-9de194f67f38',
        breakTitle: 'Terapolis offers advanced industrial-grade solutions for efficient mining, professional ASIC hosting and cloud mining services',
        breakDescr: 'We develop quickly-assembled mining houses with 1 mW/h power installed capacity, utilizing waste heat for maximum mining efficiency. Our mining houses are non-flammable, weatherproof, and use water cooling, G4 air filters, and two-factor air cleaning system to eliminate dust particles',
        citylifeTitle: 'Terapolis Citizen',
        citylifeDescr: 'Our Key Features',
        citylifeFeatures: [{
          id: '0001',
          img: '/img/logos/efficiency-in-everything.svg',
          title: 'Efficiency in Everything',
          descr: 'We use water cooling, G4 air filters, and two-factor air cleaning system to keep our houses dust-free.'
        }, {
          id: '0002',
          img: '/img/logos/protection-and-security.svg',
          title: 'Protection and Security',
          descr: 'We’re building Terapolis on European soil where cryptocurrency mining is legally protected. The territory is fenced and kept under 24/7 surveillance.'
        }, {
          id: '0003',
          img: '/img/logos/quick-assembly.svg',
          title: 'Quick Assembly',
          descr: 'Only 14 days separate you from efficient, eco-friendly cryptocurrency mining with 24/7 customer support.'
        }, {
          id: '0004',
          img: '/img/logos/waste-heat-recovery.svg',
          title: 'Waste Heat Recovery',
          descr: 'Terapolis technology captures and converts up to 40% of waste heat to useful energy.'
        }],
        roadmap: false,
        team: false,
        teamMembers: [],
        advisors: false,
        advisorMembers: [],
        footerTitle: 'Terapolis: Lab',
        footerDescr: 'The tech behind the project'
      }
    },
    head: {
      title: 'Lab',
      meta: [
        { name: 'description', content: 'Advanced solution for efficient and secure mining' },
        { property: 'og:image', content: 'https://terapolis.netlify.com/img/og-images/og-citizen.png' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
