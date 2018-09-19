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
        heroTitle: 'Discovering new ways to reuse waste heat energy and optimize mining efficiency. Our mission is to bring 1TW back to Earth',
        heroDescr: '',
        videoshowImg: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/videoshow%2Fproject.jpg?alt=media&token=7a3314cb-4d6f-4dce-9410-9de194f67f38',
        breakTitle: 'Each utilized kilowatt of energy enables to solve vital tasks. It helps in decreasing the price of mining by refunding the cost of energy, minimizes emissions, and reduces the level of CO2. Terapolis Labs develops, tests, and implements the heat recycling technologies.',
        breakDescr: 'While our mission might sound simple, it takes a lot of advanced techs to solve the necessary tasks in order to fulfill it. Terapolis Labs seek for the new ways to implement the technologies which allow achieving a particular mining goal faster when taking into consideration a potential life cycle of a cryptocurrency.',
        citylifeTitle: 'What are we doing',
        citylifeDescr: 'Our Key Features',
        citylifeFeatures: [{
          id: '0001',
          img: '/img/features/09.svg',
          title: 'Transparent Work',
          descr: "We are open about our mission and how we're trying to succeed"
        }, {
          id: '0002',
          img: '/img/features/10.svg',
          title: 'Higher Purpose',
          descr: 'Taking part in the development of reusable energy tech to help the environment'
        }, {
          id: '0003',
          img: '/img/features/11.svg',
          title: 'Collaborative Space',
          descr: 'A place to share knowledge and experience for industry pioneers'
        }, {
          id: '0004',
          img: '/img/features/12.svg',
          title: 'Building a Market',
          descr: 'The new market for effective and proven energy recovery technologies'
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
