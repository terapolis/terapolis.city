<template>
  <section>
    <hero
      :h1="heroTitle"
      :h2="heroSlogan"
      :img="heroImg"
    />
  </section>
</template>

<script>
  import Hero from '~/components/sections/Hero'

  export default {
    components: {
      Hero
    },
    data () {
      return {
        heroTitle: 'Terapolis offers advanced solutions for efficient and sustainable mining',
        heroSlogan: "We strive to innovate industry's technologies and reduce their ecological footprint.",
        heroImg: 'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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

<style>
</style>
