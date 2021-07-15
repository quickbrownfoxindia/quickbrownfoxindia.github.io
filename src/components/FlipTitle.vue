<template>

	<div class="flip-title" v-bind:class="{ vertical: vertical == true, xl: size }">
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
		'size': String,
		'to': String,
	},
	data() {
		return {

		}
	}

}
</script>

<style lang="scss" scoped>

	.flip-title, .title {
		transition: 0.3s;     
	}

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
		&.xl {
			@apply h-20;
			@apply text-7xl;

			line-height: 6rem;;


			&:hover .title {
				@apply -mt-24;
			}
			
		}
		&.vertical {
			width: 1.2rem;
			position: relative;
			height: auto;
			line-height: 1.2rem;
			overflow: hidden;
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