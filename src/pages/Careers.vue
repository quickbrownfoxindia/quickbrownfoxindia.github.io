<template>
	<Layout>
		<div class="page about">
			<div class="section hero py-96 block">
				<h1 class="font-black mt-4">Careers @ Quick Brown Fox</h1>
				<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi</p>
				<p class="mb-4">
					<external-link-icon /> <a class="underline" href="https://www.linkedin.com/company/quickbrownfox/jobs/?viewAsMember=true" target="_blank">View current openings</a>
				</p>
				<p class="mb-4">
					<mail-icon /><a class="underline" href="mailto:hello@qbf.company" target="_blank">or email us on hello@qbf.company</a>
				</p>
			</div>
		</div>
	</Layout>
</template>

<script>

import LinkedinIcon from '~/assets/svgs/icons/linkedin.svg';
import FacebookIcon from '~/assets/svgs/icons/facebook.svg';
import InstagramIcon from '~/assets/svgs/icons/instagram.svg';
import ExternalLinkIcon from '~/assets/svgs/icons/external-link.svg';
import MailIcon from '~/assets/svgs/icons/mail.svg';

export default {
  metaInfo: {
    title: 'About us'
  },
  components: { LinkedinIcon, FacebookIcon, InstagramIcon, ExternalLinkIcon, MailIcon },
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
	@apply md:w-1/3 mx-auto;
	@apply flex;

	.feather {
		@apply inline-block;
	}

	@apply min-h-full;

	.section.hero {
		@apply min-h-full flex content-center justify-center items-start;
		flex-direction: column;
		@apply p-5 pr-16 md:pr-5;
		@apply py-16 md:py-0;
	}
}
</style>