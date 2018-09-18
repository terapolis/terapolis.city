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
    />
    <advisors
      :advisors="advisors"
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
        parallaxImg: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/hero%2Flab.jpg?alt=media&token=321cf4f4-2b6b-4423-95f7-bbfb72281db4',
        heroTitle: 'Terapolis ICO Coming Q2 2019',
        heroDescr: "Our team wants to develop Terapolis technologies as fast as possible. That's why we need investment funds to achieve these plans and make Terapolis a large-scale project. Instead of seeking for a single big investor we want to share these technologies with other mining enthusiasts and give them an opportunity to take part in Terapolis in the early stage.<br>We are planning to launch ICO in the second quarter of 2019. Meanwhile, you can learn more about Terapolis on our Citizen page",
        videoshowImg: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/videoshow%2Flab.jpg?alt=media&token=e8a01978-4100-492f-9c71-571908cc0de5',
        breakTitle: 'Terapolis offers advanced solutions for efficient and sustainable mining with waste heat recovery technologies that are able to capture and convert up to 40% of waste heat into useful energy.',
        breakDescr: '',
        roadmap: false,
        team: false,
        advisors: false
      }
    },
    head: {
      title: 'Lab',
      meta: [
        { name: 'description', content: '' },
        { property: 'og:image', content: 'https://terapolis.netlify.com/img/og-images/og-citizen.png' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
