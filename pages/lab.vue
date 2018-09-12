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
  import Hero from '~/components/Hero'

  export default {
    components: {
      Hero
    },
    data () {
      return {
        heroTitle: 'Professional hosting for industrial mining',
        heroSlogan: 'Available at our sites in Poland 🇵🇱 and Canada 🇨🇦 with aggregated 40 MWh+ of allocated power',
        heroImg: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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

<style>
</style>
