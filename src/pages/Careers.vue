<template>
	<Layout>
		<div class="page about">
			<div class="section hero">
				<h1>Careers @ Quick Brown Fox</h1>
				<p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
			</div>
			<div class="section">
				lorem ipsum
			</div>
		</div>
	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style lang="scss" scoped>
h1 {
	@apply text-5xl;
}
h2 {
	@apply text-5xl;
}
h3 {
	@apply text-4xl;
}
h4 {
	@apply text-3xl;
}
h5 {
	@apply text-2xl;
}
h6 {
	@apply text-xl;
}
.page {
	@apply text-white bg-black;;
	// @apply text-center;
	// @apply w-5/6 mx-auto;

	.section.hero {
		@apply h-screen pt-96;
		@apply text-center;
	}
}
</style>