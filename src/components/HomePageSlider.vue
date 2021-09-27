<template>
	<div class="flex items-center w-screen h-screen">
		<div class="swiper-container flex items-center">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div data-swiper-parallax="-100" class="background absolute w-1/3 h-3/4 bg-black opacity-40 z-10 overflow-hidden">
						<!-- <g-image 
							class="w-full h-full object-cover"
							:src="require('!!assets-loader?!@images/home-page/driving-ford.jpg').src"
						></g-image> -->
						
					</div>
					<div class="overlay"></div>
					<div data-swiper-parallax="-200"  data-swiper-parallax-duration="600" class="z-50">
						<div class="content">
							<div class="title">
								International<br/>Women's Day<br/>
							</div>
							<div class="link">

							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div data-swiper-parallax="-100" class="background">
						<video 
						class="w-full h-full object-cover"
						muted
						playsinline
						autoplay
						loop
						:src="require('!!assets-loader?!@videos/home-page/akiva.mp4').src" />
					</div>
					<div class="overlay"></div>
					<div data-swiper-parallax="-200" data-swiper-parallax-duration="600" class="z-50">
						<div class="content">
							<div class="title">
								Akiva<br/>Superfoods
							</div>
							<div class="link">
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<!-- Add Pagination -->
			<!-- <div class="swiper-pagination"></div> -->
			<!-- <div class="swiper-button-next">
				
				<svg class="text-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 490.688 490.688" style="enable-background:new 0 0 490.688 490.688;" xml:space="preserve">
				<path style="fill:#ffffff;" d="M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262
					c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667
					c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262
					L472.328,120.529z"/>
				<path d="M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083
					c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262
					c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279
					C250.748,372.281,248.039,373.408,245.213,373.415z"/>
				<g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>

			</div> -->
		</div>
	</div>

</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import VanillaTilt from 'vanilla-tilt';

export default {
	'name': 'home-page-slider',
	mounted() {
		var swiper = new Swiper('.swiper-container', {
			effect: 'coverflow',
			grabCursor: true,
			direction: 'vertical',
			centeredSlides: true,
			slidesPerView: 'auto',
			loop: true,
			mousewheel: {
				enabled: true,
			},
			freeMode: false,
			speed: 700,
			grabCursor: true,
			parallax: true,
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: false,
			},
			keyboard: {
				enabled: true,
				onlyInViewport: false,
			},
			 navigation: {
				nextEl: '.swiper-button-next',
			},
		});

		const vt = document.querySelector(".swiper-container");
		VanillaTilt.init(vt, {
			max: 10,
			speed: 100,
			perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
			gyroscope: true,
			gyroscopeMinAngleX: -45,
			gyroscopeMaxAngleX: 45,
			gyroscopeMinAngleY: -45,
			gyroscopeMaxAngleY: 45,
		});

	}

}
</script>

<style scoped lang="scss">

	.slider-wrapper {

	}
	
	.swiper-container {
		@apply w-full;
		@apply h-full;

		.swiper-button-next {
			@screen md {
				@apply hidden;
			}
		}
	}

    .swiper-slide {
		@apply opacity-50;
		@apply w-full;
		@apply h-full;
		@apply flex;
		@apply items-center;
		@screen md {
			@apply h-1/3;
		}

		.overlay {
			@apply absolute z-20;
			@apply w-full;
			@apply h-full;
			@apply object-cover;

			@screen md {
				@apply w-1/3 h-3/4;
			}

		}
		.background {
			background-size: 50% 50%;
			background-position: left center;
			background-repeat: no-repeat;

			@apply absolute z-30 overflow-hidden;
			@apply w-full;
			@apply h-full;
			@apply object-cover;

			@screen md {
				@apply w-1/3 h-3/4;
			}

		}

		.content {
			@apply z-30;
			
			.title {
				
				@apply text-white;
				
				@apply ml-10 md:ml-40 text-4xl md:text-7xl font-black uppercase leading-none;
				@screen md {

				}
			}
			@supports (-webkit-text-stroke: 1px black) {
					.title {
						-webkit-text-stroke: 1px white;
						-webkit-text-fill-color: transparent;
					}
				}
			.link {
				@apply ml-10 md:ml-40 my-1 underline leading-none;
				@screen md {

				}
			}
		}
	
    }
	.swiper-slide-active {
		@apply opacity-100;
	}

	.swiper-button-next {
		bottom: 0;
		left: auto;
		right: auto;
		top: auto;
		margin: 0 auto;
		left: 50%;
		margin-left: -10px;
		// background: #ffffff;
		width: 20px;
		height: 20px;
		bottom: 10px;
		color: #ffffff;
		svg {
			color: #ffffff;
			fill: #ffffff;
		}
	}


		.swiper-button-next::after {
		display: none;
	}

</style>