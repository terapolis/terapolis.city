<template>
  <section>
    <div>
      <h1 class="title">Pages</h1>

      <v-btn color="success" class="ml-0" :to="createPageBtn.url">
        <v-icon left>{{ createPageBtn.icon }}</v-icon>
        {{ createPageBtn.title }}
      </v-btn>

      <v-progress-circular
        v-if="loading"
        indeterminate
        :size="40"
        color="amber"
      />

      <div v-else>
        <div v-for="i in pages" :key="i.id">
          {{ i.title }}
          <v-btn small flat icon @click="onLoadPage(i.id)">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
          <!-- <v-icon small>mdi-delete</v-icon> -->
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        createPageBtn: { title: 'Add new page', icon: 'mdi-plus', url: '/admin/create/page' }
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      pages () {
        return this.$store.getters.loadedPages.reverse()
      }
    },
    methods: {
      onLoadPage (id) {
        this.$router.push('/admin/edit/page/' + id)
      }
    }
  }
</script>

<style>
</style>
