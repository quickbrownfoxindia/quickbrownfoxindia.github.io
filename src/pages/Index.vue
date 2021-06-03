<template>
  <Layout>

	  <home-page-slider />

  </Layout>
</template>

<script>
import HomePageSlider from '../components/HomePageSlider.vue'
export default {
  components: { HomePageSlider },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
