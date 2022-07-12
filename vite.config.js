import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: 'src/components',
			$animations: 'src/animations',
			$modules: 'src/modules',
			$utils: 'src/utils',
			$style: 'src/style',
		},
	}
};

export default config;
