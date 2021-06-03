<template>
	<div class="component action-menu">
		<div class="nav-item">
			<div class="sub-menu" v-if="!isMoreMenuOpen">
				<div class="nav-item">
					<a class="nav-link" href="/about/" target="_blank"><FacebookIcon /></a>
				</div>
				<div class="nav-item">
					<a class="nav-link" href="/" target="_blank"><LinkedinIcon /></a>
				</div>
				<div class="nav-item">
					<a class="nav-link" href="/about/" target="_blank"><InstagramIcon /></a>
				</div>
				<div class="nav-item">
					<g-link class="nav-link" to="/privacy/">privacy</g-link>
				</div>
				<div class="nav-item">
					<g-link class="nav-link" to="/terms/">terms</g-link>
				</div>
			</div>
		</div>
		<div class="nav-item">
			<a href="#" class="nav-link" onclick="return false" @click="toggleMoreMenu">more</a>
		</div>
		<div class="nav-item">
			<g-link class="nav-link" to="/"><maximise-icon /></g-link>
		</div>
	</div>
</template>

<script>

import LinkedinIcon from '~/assets/svgs/icons/linkedin.svg';
import FacebookIcon from '~/assets/svgs/icons/facebook.svg';
import InstagramIcon from '~/assets/svgs/icons/instagram.svg';
import MaximiseIcon from '~/assets/svgs/icons/maximise.svg';
import MinimiseIcon from '~/assets/svgs/icons/minimise.svg';

export default {
	name: 'ActionMenu',
	components: { MaximiseIcon, MinimiseIcon, LinkedinIcon, FacebookIcon, InstagramIcon },
	data() {
		return {
			isMoreMenuOpen: false,
		}
	},

	methods: {
		toggleMoreMenu() {
			this.isMoreMenuOpen = !this.isMoreMenuOpen;
		}
	}
}
</script>

<style lang="scss" scoped>
.action-menu {
	@apply fixed right-4 bottom-4;
	@apply z-50;
	.nav-item {
		@apply mx-1;
		@apply inline-block align-middle;
		@apply text-gray-300;
		.sub-menu {
			@apply inline-block align-middle;
			.nav-item {
				.nav-link {
					@apply mx-1;
					@apply inline-block align-middle;
				}
				@apply inline-block align-middle;

			}
		}
	}
}
</style>