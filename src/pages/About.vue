<template>
	<Layout>
		
		<div class="page about" id="page">
			<div class="section hero">
				<div data-swiper-parallax="-200"  data-swiper-parallax-duration="600" class="logo text-left my-12 font-black text-3xl md:text-center md:text-8xl md:mb-56 md:mt-32">QUICK BROWN FOX<sup>®</sup></div>
				<p class="text-lg md:text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
			</div>
			<div class="section">
				<div class="flex flex-wrap overflow-hidden relative">
					<div class="w-full md:w-1/6 overflow-hidden mt-10 sideways">
						<flip-title title="CLIENTS" titleOnHover="उपभोगता" :vertical="false" />
					</div>
					<div class="w-full md:w-5/6 overflow-hidden">
						<div class="flex flex-wrap overflow-hidden relative">
							<div class="w-1/2 md:w-1/5 text-left md:text-center overflow-hidden">
								<g-image src="@/assets/images/logos/ford-logo.png" />
							</div>

							<div class="w-1/2 md:w-1/5 text-left md:text-center overflow-hidden">
								<g-image src="@/assets/images/logos/aakiva-logo.png" />
							</div>

							<div class="w-1/2 md:w-1/5 text-left md:text-center overflow-hidden">
								<g-image src="@/assets/images/logos/fortune-logo.png" />
							</div>

							<div class="w-1/2 md:w-1/5 text-left md:text-center overflow-hidden">
								<g-image src="@/assets/images/logos/motorola-logo.png" />
								<!-- Column Content -->
							</div>
							<div class="w-1/2 md:w-1/5 text-left md:text-center overflow-hidden">
								<g-image src="@/assets/images/logos/poi-logo.png" />
							</div>
							<div class="w-1/2 md:w-1/5 text-left md:text-center overflow-hidden">
								<g-image src="@/assets/images/logos/hbr-logo.png" />
								<!-- Column Content -->
							</div>
							<div class="w-1/2 md:w-1/5 text-left md:text-center overflow-hidden">
								<g-image src="@/assets/images/logos/adra-logo.png" />
								<!-- Column Content -->
							</div>
							<div class="w-1/2 md:w-1/5 text-left md:text-center overflow-hidden">
								<g-image src="@/assets/images/logos/nu-logo.png" />
								<!-- Column Content -->
							</div>
							<div class="w-1/2 md:w-1/5 text-left md:text-center overflow-hidden">
								<g-image src="@/assets/images/logos/novo-logo.png" />
								<!-- Column Content -->
							</div>
							<div class="w-1/2 md:w-1/5 text-left md:text-center overflow-hidden">
								<g-image src="@/assets/images/logos/nu-logo.png" />
								<!-- Column Content -->
							</div>
						</div>
				</div>
					
					
				</div>
				<div class="flex flex-wrap overflow-hidden relative">
					<div class="sideways w-1/6 overflow-hidden mt-10">
					
					</div>
					
					<div class="w-1/12 overflow-hidden">
					</div>
				</div>
			</div>
			<div class="section wide">
				<g-image class="w-full my-24" height="300" fit="cover" quality="100" src="@assets/images/skyscrapers.jpeg" />
			</div>
			<div class="section">
				<div class="flex flex-wrap overflow-hidden relative">
					<div class="sideways w-full md:w-1/6 overflow-hidden mb-5 md:my-0">
						<flip-title title="Services" titleOnHover="सेवाएं" :vertical="false" />
					</div>
					<div class="w-full md:w-1/5 md:mx-1 overflow-hidden mb-5 md:m-0">
						<p class="mb-2 font-bold">Social Media</p>
						<p class="mb-2">Social and Content Marketing</p>
						<p class="mb-2">Strategy and Planning</p>
						<p class="mb-2">Creative Conceptualization and Design</p>
					</div>

					<div class="w-full md:w-1/5 md:mx-1 overflow-hidden mb-5 md:m-0">
						<p class="mb-2 font-bold">Consulting</p>
						<p class="mb-2">Strategy and Planning</p>
						<p class="mb-2">Digital Transformation</p>
					</div>

					<div class="w-full md:w-1/5 md:mx-1 overflow-hidden mb-5 md:m-0">
						
						<p class="mb-2 font-bold">Technology</p>
						<p class="mb-2">Product Development</p>
						<p class="mb-2">Mobile Applications</p>
						<p class="mb-2">Technology Consulting</p>
						<p class="mb-2">Transformation Strategy</p>


					</div>

					<div class="w-full md:w-1/5 md:mx-1 overflow-hidden mb-5 md:m-0">
						
						<p class="mb-2 font-bold">E-commerce</p>
						<p class="mb-2">Strategy and Planning</p>
						<p class="mb-2">CMS and Platforms</p>
						<p class="mb-2">Platform Building and Implementation</p>
						<p class="mb-2">CRM</p>
						<p class="mb-2">Marketing Automation</p>
					</div>
					
				</div>
			</div>
			<div class="section text-center font-black">
				<g-link to="/contact/" class="my-90"><flip-title title="CONTACT US" title-on-hover="संपर्क करें" :vertical="false" size="xl" /></g-link>
			</div>
			
		</div>
	</Layout>
</template>

<script>
import MapPin from '~/assets/svgs/icons/map-pin.svg';
import MailIcon from '~/assets/svgs/icons/mail.svg';

import VanillaTilt from 'vanilla-tilt';
import FlipTitle from '../components/FlipTitle.vue';

export default {
  	metaInfo: {
		title: 'About us'
	},
  	components: { MapPin, MailIcon, FlipTitle },
  	mounted() 
    {
		const vt = document.querySelector(".logo");
		VanillaTilt.init(vt, {
			max: 10,
			speed: 100,
			perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
			gyroscope: true,
			gyroscopeMinAngleX: -65,
			gyroscopeMaxAngleX: 65,
			gyroscopeMinAngleY: -65,
			gyroscopeMaxAngleY: 65,
		});

		
  	}
}
</script>

<style lang="scss" scoped>
	.sideways {
		@apply uppercase text-sm font-semibold;
	}
	

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
	.page {
		
		@apply z-10;
		@apply text-white bg-black;

		.feather {
			@apply inline-block;
		}

		.section {
			@apply md:w-5/6 md:mx-auto;
			@apply pl-8 pr-16 md:px-52 md:py-14;
			&.hero {
				// @apply py-36;
				@apply pt-36;
			}
			&.wide {
				@apply p-0 m-0 w-full;
			}
		}
	}
</style>