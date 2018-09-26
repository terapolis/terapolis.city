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
        pageKind: 'project',
        parallaxImg: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/hero%2Fhero-project.jpg?alt=media&token=7989310f-da2d-4114-abac-95eb77682aa6',
        heroTitle: 'Terapolis Security Token Offering (STO) Coming Q2 2019',
        heroDescr: "Our team wants to develop Terapolis technologies as fast as possible. That's why we need investment funds to achieve these plans and make Terapolis a large-scale project. Instead of seeking for a single big investor we want to share these technologies with other mining enthusiasts and give them an opportunity to take part in Terapolis in the early stage.<br>We are planning to launch STO in the second quarter of 2019. Meanwhile, you can learn more about Terapolis on our Citizen page",
        videoshowImg: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/videoshow%2Flab.jpg?alt=media&token=e8a01978-4100-492f-9c71-571908cc0de5',
        breakTitle: 'Terapolis offers advanced solutions for efficient and sustainable mining with waste heat recovery technologies that are able to capture and convert up to 40% of waste heat into useful energy.',
        breakDescr: '',
        citylifeTitle: 'Why Invest',
        citylifeDescr: '',
        citylifeFeatures: [{
          id: '0001',
          img: '/img/features/05.svg',
          title: 'We Have Faith in the Project',
          descr: 'The project already exists and was previously funded by its team.'
        }, {
          id: '0002',
          img: '/img/features/06.svg',
          title: 'We Selected the Right People',
          descr: "A professional team formed from industry's experts."
        }, {
          id: '0003',
          img: '/img/features/07.svg',
          title: 'We Have Professional Support',
          descr: 'A highly experienced advisory board well known among the community.'
        }, {
          id: '0004',
          img: '/img/features/08.svg',
          title: 'We Constantly Evolve',
          descr: 'The Terapolis.Lab R&D center steadily works on developing new ways to reuse waste heat energy.'
        }],
        roadmap: false,
        team: false,
        teamMembers: [{
          id: '0001',
          name: 'Henrik Dam',
          position: 'Project Manager',
          photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FHenrik%20Dam.jpg?alt=media&token=9e678ef6-51c1-4dcb-bc72-537fe17d2269',
          linkedin: 'https://www.linkedin.com/in/henrik-dam-78110019/'
        }, {
          id: '0002',
          name: 'Vladimir Savastiyanov',
          position: 'CTO',
          photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FVladimir%20Savastiyanov.jpg?alt=media&token=06725878-7df0-4b6c-800c-08ddf405760e',
          linkedin: 'https://www.linkedin.com/in/vladimir-savastiyanov-988aa816b/'
        // }, {
        //   id: '0003',
        //   name: 'Serge Lysov',
        //   position: 'Executive Vice President',
        //   photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FSergey%20Lysov.jpg?alt=media&token=e958f940-1b2e-4936-90cc-9b0e7e83ea59',
        //   linkedin: 'https://www.linkedin.com/in/lysov/'
        // }, {
        //   id: '0004',
        //   name: 'Igor Vlasov',
        //   position: 'Chief Business Developer Officer',
        //   photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/team%2FIgor%20Vlasov.jpg?alt=media&token=0a0aeff1-6507-476b-a848-67a4bb81359c',
        //   linkedin: 'https://www.linkedin.com/in/igor-v-vlasov-53152061/'
        }],
        advisors: false,
        advisorMembers: [{
          id: '0001',
          name: 'Eric Alexandre Ceret',
          photo: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/advisors%2FEric%20Alexandre%20Ceret.jpg?alt=media&token=bbedc6c6-8145-4cd1-b463-7e202e476ddb',
          linkedin: 'https://www.linkedin.com/in/eric-alexandre-ceret-2184315/'
        }],
        footerTitle: 'Terapolis: Project',
        footerDescr: 'The tech behind the project'
      }
    },
    head: {
      title: 'Project',
      meta: [
        { name: 'description', content: 'Terapolis Security Token Offering (STO) Coming Q2 2019' },
        { property: 'og:image', content: 'https://terapolis.netlify.com/img/og-images/og-citizen.png' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
