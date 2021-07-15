<template>
	<Layout>
		<div class="page work">
			<div class="portfolio">
				<div class="md:masonry-2-col lg:masonry-3-col box-border before:box-inherit after:box-inherit mx-auto">
					<div class="break-inside text-center" v-for="item in items" :key="item.slug">
					<g-link :to="'/work/' + item.slug + '/'">
						<div v-if="item.featured.type == 'video' && item.featured.provider == 'youtube'"
							class="relative h-0 overflow-hidden max-w-full" style="padding-bottom: 36.25%">
							<iframe allowfullscreen="0" modestbranding="1" frameborder="0"
								class="absolute top-0 left-0 w-full h-full" :src="item.featured.src" />
							<div class="overlay" />
						</div>
						<div v-if="item.featured.type == 'video' && item.featured.provider == 'local'"
							class="relative h-0 overflow-hidden max-w-full" style="padding-bottom: 36.25%">
							<video playsinline autoplay muted loop class="absolute object-cover top-0 left-0 w-full h-full"
								:src="require(`!!assets-loader?!@assets/${item.featured.src}`).src" />
							<div class="overlay" />
						</div>
						<div v-if="item.featured.type == 'image' && item.featured.provider == 'local'">
							<g-image :src="require(`!!assets-loader?!@assets/${item.featured.src}`).src" />
							<div class="overlay" />
						</div>
						<div v-if="item.featured.type == 'image' && item.featured.provider == 'remote'">
							<g-image :src="item.featured.src" />
							<div class="overlay" />
						</div>
					</g-link>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'Work'
  },
  components: {
  },
  data() {
	  return {
		  items: null
	  }
  },
  created() {
	this.items = require('../data/projects.json')
  },
  mounted() {
	  


  }
}
</script>

<style lang="scss" scoped>
@layer utilities {
    @variants responsive {
        .masonry-3-col {
            column-count: 3;
            column-gap: 0em;
        }
        .masonry-2-col {
            column-count: 2;
            column-gap: 0em;
        }
        .masonry--col {
            column-count: 2;
            column-gap: 0em;
        }
        .break-inside {
            break-inside: avoid;
        }
    }
}
.page {
	
	@apply w-full h-full;
	
	.portfolio {
		@apply w-full h-full;

	}
	
	.overlay {
		@apply w-full h-full top-0 left-0 right-0 bottom-0 bg-black opacity-60;
	}
	
}
</style>