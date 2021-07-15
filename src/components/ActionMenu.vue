<template>
	<div class="component action-menu">
		<div class="nav-item">
			<div class="sub-menu" v-if="isMoreMenuOpen">
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
					<a class="nav-link" href="https://docs.google.com/document/d/1cGBQrT-XAdjX_9Pc95Epj329TG43X4DACU4EnI3EnSo/edit?usp=sharing" target="_blank">privacy</a>
				</div>
				<div class="nav-item">
					<a class="nav-link" href="https://docs.google.com/document/d/1T87U-DhZns5V3NNGdvwARHzG6rWUG93NLROuOlLBlYY/edit?usp=sharing" target="_blank">terms</a>
				</div>
			</div>
		</div>
		<div class="nav-item">
			<a href="#" class="nav-link" onclick="return false" @click="toggleMoreMenu">more</a>
		</div>
		<div class="nav-item">
			<span class="nav-link" v-if="!isFullScreen" @click="toggleFullScreen"><maximise-icon /></span>
			<span class="nav-link" v-if="isFullScreen" @click="toggleFullScreen"><minimise-icon /></span>
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
			isFullScreen: false,
		}
	},

	methods: {
		toggleMoreMenu() {
			this.isMoreMenuOpen = !this.isMoreMenuOpen;
		},
		toggleFullScreen() {
			this.isFullScreen = !this.isFullScreen;

			var elem = window.document.getElementById("app");

			if(this.isFullScreen) this.openFullscreen(elem);

			else this.closeFullscreen(elem);
		},
		openFullscreen(elem) {
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.webkitRequestFullscreen) { /* Safari */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) { /* IE11 */
				elem.msRequestFullscreen();
			}
		},
		closeFullscreen(elem) {
			if (window.document.exitFullscreen) {
				window.document.exitFullscreen();
			} else if (window.document.webkitExitFullscreen) { /* Safari */
				window.document.webkitExitFullscreen();
			} else if (window.document.msExitFullscreen) { /* IE11 */
				window.document.msExitFullscreen();
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.action-menu {
	@apply fixed right-4 bottom-4;
	@apply z-50;
	@apply text-sm;
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