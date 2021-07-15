<template>
	<div class="layout">
  		<div id="cursorBlob" class="hidden md:block"></div>
		<primary-menu />
  		<action-menu />
		  
		<slot />

	</div>
</template>

<script>
import ActionMenu from '../components/ActionMenu.vue'
import PrimaryMenu from '../components/PrimaryMenu.vue'

export default {
  components: { PrimaryMenu, ActionMenu },
  mounted() {
		const blobCursor = (() => {
			const CURSOR = document.querySelector("#cursorBlob");
			const LINKS = document.querySelectorAll(".page");
			function setCursorPos(e) {
				CURSOR.style.top = `${e.pageY - CURSOR.offsetHeight / 2}px`;
				CURSOR.style.left = `${e.pageX - CURSOR.offsetWidth / 2}px`;
			};

			document.addEventListener("mousemove", setCursorPos);

			const setCursorHover = () => (CURSOR.style.transform = "scale(2.5)");
			const removeCursorHover = () => (CURSOR.style.transform = "");
			LINKS.forEach((link) => link.addEventListener("mouseover", setCursorHover));
			LINKS.forEach((link) =>
				link.addEventListener("mouseleave", removeCursorHover)
			);
		})();
  }
}
</script>

<style lang="scss" scoped>

#cursorBlob {
	width: 50px;
	height: 50px;
	background: linear-gradient(
		120deg,
		#FF1744,
		#E040FB,
		#2979FF,
		#00E5FF,
		#76FF03
	);
	background-size: 1600% 1600%;
	position: absolute;
	mix-blend-mode: difference;
	pointer-events: none;
	z-index: 1;
	transition: 0.15s linear;
	animation: blobRadius 5s ease infinite, blobBackground 15s ease infinite;
}
@keyframes blobRadius {
	0%, 100% { border-radius: 43% 77% 80% 40% / 40% 40% 80% 80%; }
		20% { border-radius: 47% 73% 61% 59% / 47% 75% 45% 73%; }
		40% { border-radius: 46% 74% 74% 46% / 74% 58% 62% 46%; }
		60% { border-radius: 47% 73% 61% 59% / 40% 40% 80% 80%; }
		80% { border-radius: 50% 70% 52% 68% / 51% 61% 59% 69%; }
}
@keyframes blobBackground {
	0%, 100% { background-position: 0% 50%; }
	50% { background-position: 100% 50%; }
}

.layout {
	@apply bg-black;
	@apply w-full h-full;
}

</style>