import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
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
