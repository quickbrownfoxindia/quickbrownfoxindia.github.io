<template>
	<div class="component primary-menu">
		<div class="nav-item -m-1">
			<g-link class="nav-link" to="/"><home-icon /></g-link>
		</div>
		<!-- <div class="nav-item">
			<g-link class="nav-link" to="/work/">
				<flip-title title="Work" title-on-hover="काम" :vertical="true" />
			</g-link>
		</div>
		<div class="nav-item">
			<g-link class="nav-link" to="/about/">
				<flip-title title="Who we are" title-on-hover="हम कौन हैं" :vertical="true" />
			</g-link>
		</div> -->
		<div class="nav-item">
			<g-link class="nav-link" to="/careers/">
				<flip-title title="Careers" title-on-hover="व्यवसाय" :vertical="true" />
			</g-link>
		</div>
		<div class="nav-item">
			<g-link class="nav-link" to="/contact/">
				<g-link to="/contact/"><flip-title title="contact us" title-on-hover="संपर्क करें" :vertical="true"/></g-link>
			</g-link>
		</div>
		<!-- <div class="nav-item">
			<a href="#" class="nav-link" onclick="return false" @click="toggleAboutMenu">
				<flip-title title="About Us" title-on-hover="हमारे बारे में" :vertical="true" />
			</a>
			<div class="sub-menu" v-if="!isAboutMenuOpen">
				<div class="nav-item">
					<g-link class="nav-link" to="/about/">
						<flip-title title="Who we are" title-on-hover="हम कौन हैं" :vertical="true" />
					</g-link>
				</div>
				<div class="nav-item">
					<g-link class="nav-link" to="/about/">
						<flip-title title="Careers" title-on-hover="व्यवसाय" :vertical="true" />
					</g-link>
				</div>
				<div class="nav-item">
					<g-link class="nav-link" to="/about/">
						<flip-title title="Insights" title-on-hover="अंतर्दृष्टि" :vertical="true" />
					</g-link>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>

import HomeIcon from '~/assets/svgs/icons/home.svg';
import FlipTitle from '../components/FlipTitle.vue';

export default {
	name: 'PrimaryMenu',
	components: { HomeIcon, 'flip-title': FlipTitle },
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
		@apply align-bottom;

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