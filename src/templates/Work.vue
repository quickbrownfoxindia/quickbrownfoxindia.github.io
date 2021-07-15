<template>
  <Layout>
	  <div class="template work mx-auto flex justify-center pt-14 text-white">
			<div class="wrapper w-5/6">
				<div class="seciton py-16 featured relative" :class="$context.project.featured.type">
					<div
						v-if="$context.project.featured.type == 'video' && $context.project.featured.provider == 'youtube'"
						class="relative h-0 overflow-hidden max-w-full" 
						style="padding-bottom: 36.25%"
					>
						<iframe 
							allowfullscreen="0"
							modestbranding="1"
							frameborder="0" 
							class="absolute top-0 left-0 w-full h-full"
							:src="$context.project.featured.src"
						/>

					</div>
					<div
						v-if="$context.project.featured.type == 'video' && $context.project.featured.provider == 'local'"
						class="relative h-0 overflow-hidden max-w-full" 
						style="padding-bottom: 36.25%"
					>
						<video 
							playsinline
							autoplay
							muted
							loop
							class="absolute object-cover top-0 left-0 w-full h-full"
							:src="require(`!!assets-loader?!@videos/${$context.project.featured.src}`).src"
						/>

					</div>
					<div v-if="$context.project.featured.type == 'image'">
						<g-image 
						:src="require(`!!assets-loader?!@assets/${$context.project.featured.src}`).src"
						 />
					</div>
					<div class="overlay absolute z-20 w-full h-full top-0 bottom-0 flex justify-end items-end pb-0 pr-1 md:pr-6">
						<div class="text-lg md:text-9xl uppercase font-black break-words" v-html="$context.project.title">
						</div>
					</div>
				</div>

				<div class="seciton py-16">
				</div>
				
				<div class="seciton py-16" :class="content.type" v-for="(content, i) in $context.project.contents" :key='i'>
					<div
						v-if="content.type == 'video' && content.provider == 'youtube'"
						class="relative h-0 overflow-hidden max-w-full" 
						style="padding-bottom: 36.25%"
					>
						<iframe 
							allowfullscreen="0"
							modestbranding="1"
							frameborder="0" 
							class="absolute top-0 left-0 w-full h-full"
							:src="content.src"
						/>

					</div>
					<div
						v-if="content.type == 'video' && content.provider == 'local'"
						class="relative h-0 overflow-hidden max-w-full" 
						style="padding-bottom: 36.25%"
					>
						<video 
							playsinline
							autoplay
							muted
							loop
							class="absolute object-cover top-0 left-0 w-full h-full"
							:src="require(`!!assets-loader?!@videos/${content.src}`).src"
						/>

					</div>
					<div v-if="content.type == 'image'">
						<img class="w-full" height="1920" width="1080" :src="content.src" v-if="content.provider != 'local'" />
						<g-image
							v-if="content.provider == 'local'"
							:src="require(`!!assets-loader?width=1440&height=720!@assets/${content.src}`).src"
						/>
					</div>
					<div v-if="content.type == 'text'" v-html="content.text" />
					<h2 v-if="content.type == 'heading'" v-html="content.text" class="text-4xl" />
				</div>
			</div>
	  </div>
  </Layout>
</template>

<page-query>

</page-query>

<script>
export default {
	metaInfo() {
		return {

		};
  	},
  	mounted() {
	  	// console.log('project mounted')
		// console.log(this.$context.project)
	  	// console.log('emitting event')
		// this.$emit('changeTheme', 'light')
		// this.$emit('changeTheme', this.$context.project.theme)
		console.log(this.$context)
  	}
};
</script>

<style lang="scss" scoped>
.overlay {
	background: rgba(0,0,0,.10);
	background: -moz-linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 50%);
	background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 50%);
	background: linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 50%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
}
</style>