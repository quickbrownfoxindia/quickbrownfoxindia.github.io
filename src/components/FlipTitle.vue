<template>

	<div class="flip-title" v-bind:class="{ vertical: vertical == true}">
		<span class="title" :href="to">{{ title }}</span>
		<span class="title-on-hover" :href="to">{{ titleOnHover }}</span>
	</div>
  
</template>

<script>
export default {
	name: 'FlipTitle',
	props: {
		'title': String,
		'titleOnHover': String,
		'vertical': Boolean,
	},
	data() {
		return {

		}
	}

}
</script>

<style lang="scss" scoped>

	
	// .flip-title:not(.vertical) span {
	// 	display: block;
	// }

	.flip-title, .title {
		transition: 0.3s;     
	}

	// .flip-title:not(.vertical) {
	// 	@apply h-5;
	// 	@apply leading-5;
	// 	overflow: hidden;
	// }

	// .flip-title:not(.vertical).title {
	// 	@apply mt-0;
	// }

	// .flip-title:not(.vertical):hover .title {
	// 	@apply -mt-4;
	// }

	.flip-title {
		&:not(.vertical) {
			@apply h-5;
			@apply leading-5;
			overflow: hidden;
			span {
				@apply block;
			}
			.title {
				@apply mt-0;
			}
			&:hover .title {
				@apply -mt-4;
			}
		}
		&.vertical {
			width: 1.2rem;
			position: relative;
			height: auto;
			line-height: 1.2rem;
			overflow: hidden;
			// display: inline-grid;
			// display: -ms-inline-grid;
			// display: -moz-inline-grid;

			span {
				position: relative;
				transition: 0.3s;     
				display: block;
				text-decoration: underline;;
			}

			.title {
				@apply mr-0;
			}

			&:hover .title {
				@apply -mr-5;
			}
		}
	}

</style>