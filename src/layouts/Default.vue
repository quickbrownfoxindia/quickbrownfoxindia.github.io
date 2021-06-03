<template>
	<div class="layout">
  		
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

}
</script>

<style lang="scss" scoped>

.layout {
	@apply bg-black;
	@apply w-full h-full;
}

</style>