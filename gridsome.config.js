// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

// if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
//	siteUrl: 'https://quickbrownfoxindia.github.io',
  
	siteName: 'QBF',
	plugins: [],
	css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
	chainWebpack: config => {
		config.resolve.alias.set('@images', '@/assets/images')
		config.resolve.alias.set('@videos', '@/assets/videos')
		config.resolve.alias.set('@svgs', '@/assets/svgs')
		config.resolve.alias.set('@assets', '@/assets')
		const svgRule = config.module.rule('svg')
		svgRule.uses.clear()
		svgRule
		  .use('vue-svg-loader')
		  .loader('vue-svg-loader')
	  }
}
