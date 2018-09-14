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
        heroTitle: 'Terapolis is an advanced solution for efficient and secure mining',
        heroSlogan: 'Our waste heat recovery technology reduces industry’s ecological footprint',
        heroImg: 'https://images.unsplash.com/photo-1516074269859-f54ee0d65fa7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=59843ca59ee74e93c09ac3ce391f96f1&auto=format&fit=crop&w=1567&q=80'
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

<style>
</style>
