<template>
	<div class="component primary-menu">
		<div class="nav-item">
			<g-link class="nav-link" to="/"><home-icon /></g-link>
		</div>
		<div class="nav-item">
			<g-link class="nav-link" to="/about/">Work</g-link>
		</div>
		<div class="nav-item">
			<a href="#" class="nav-link" onclick="return false" @click="toggleAboutMenu">About</a>
			<div class="sub-menu" v-if="!isAboutMenuOpen">
				<div class="nav-item">
					<g-link class="nav-link" to="/about/">Who we are</g-link>
				</div>
				<div class="nav-item">
					<g-link class="nav-link" to="/about/">Careers</g-link>
				</div>
				<div class="nav-item">
					<g-link class="nav-link" to="/about/">Insights</g-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import HomeIcon from '~/assets/svgs/icons/Home.svg';

export default {
	name: 'PrimaryMenu',
	components: { HomeIcon },
	data() {
		return {
			isAboutMenuOpen: false,
		}
	},

	methods: {
		toggleAboutMenu() {
			this.isAboutMenuOpen = !this.isAboutMenuOpen;
		}
	}
}
</script>

<style lang="scss" scoped>
.primary-menu {
    writing-mode: vertical-rl;
	@apply right-0 fixed m-6;
	@apply uppercase;
	@apply z-50;

	@apply text-gray-400;

	.nav-item {
		@apply inline-block;

		@apply my-2;
		@apply font-sans;
		@apply font-semibold;
		@apply my-2;
		.sub-menu {
			@apply text-gray-300;
			@apply my-2;
			@apply inline-block;
			.nav-item {
				@apply my-2;
			}

		}
	}
	.nav-link {
		@apply underline;
	}
}
</style>