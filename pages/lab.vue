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
        heroTitle: 'Terapolis ICO Coming Q2 2019',
        heroSlogan: "Our team wants to develop Terapolis technologies as fast as possible. That's why we need investment funds to achieve these plans and make Terapolis a large-scale project. Instead of seeking for a single big investor we want to share these technologies with other mining enthusiasts and give them an opportunity to take part in Terapolis in the early stage.<br>We are planning to launch ICO in the second quarter of 2019. Meanwhile, you can learn more about Terapolis on our Citizen page",
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
