<template>
	<Layout>
		<div class="page about">
			<div class="section hero py-96 block">
				<h1 class="font-black mt-4">Quick Brown Fox</h1>
				<p class=""><map-pin /> C2, Sector 1, Noida - 201301</p>
				<p class="mb-4"><mail-icon /> hello@qbf.company</p>
				<h3 class="font-black mt-4">Work with us</h3>
				<p>What’s next for your business? We’re here to help you achieve it.</p>
				<p class="mb-4"><a class="underline" href="https://forms.gle/v2SPJ545xv8ETp2n8" target="_blank">Get in touch</a></p>
				<h3 class="font-black mt-4">General Enquiries</h3>
				<p class="mb-4"><a class="underline" href="mailto:hello@qbf.company">hello@qbf.company</a></p>
				<h3 class="font-black mt-4">Crisis Management</h3>
				<p class="mb-4"><a class="underline" href="mailto:neeraj@qbf.company">neeraj@qbf.company</a></p>
				<p class="my-2">
					<a class="inline-block mx-2 ml-0" href="https://fb.me/quickbrownfoxindia/" target="_blank"><FacebookIcon /></a>
					<a class="inline-block mx-2" href="https://www.linkedin.com/company/quickbrownfox/" target="_blank"><LinkedinIcon /></a>
					<a class="inline-block mx-2" href="https://instagram.com/quickbrownfoxindia/" target="_blank"><InstagramIcon /></a>
				</p>
			</div>
		</div>
	</Layout>
</template>

<script>

import LinkedinIcon from '~/assets/svgs/icons/linkedin.svg';
import FacebookIcon from '~/assets/svgs/icons/facebook.svg';
import InstagramIcon from '~/assets/svgs/icons/instagram.svg';
import MapPin from '~/assets/svgs/icons/map-pin.svg';
import MailIcon from '~/assets/svgs/icons/mail.svg';

export default {
  metaInfo: {
    title: 'About us'
  },
  components: { LinkedinIcon, FacebookIcon, InstagramIcon, MapPin, MailIcon },
  mounted() {
	  
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
.layout {
	// background: url(https://papers.co/wallpaper/papers.co-vp82-dark-tree-line-abstract-bw-pattern-29-wallpaper.jpg);
    background-position: bottom;
    background-repeat: no-repeat;
    background-position: center center;
}
.page {
	@apply text-white;
	// bg-black;
	@apply md:w-1/3 mx-auto;
	@apply flex;
	.feather {
		@apply inline-block;
	}


	@apply min-h-full;
	.section.hero {
		// @apply bg-black;
		@apply min-h-full flex content-center justify-center items-start;
		flex-direction: column;
		@apply p-5 pr-16 md:pr-5;
		@apply py-16 md:py-0;
	}
}
</style>