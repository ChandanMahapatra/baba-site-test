import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig)
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html', // CRITICAL: Enables client-side routing on GitHub Pages
			strict: false // CRITICAL: Prevents build failures from unresolved routes
		}),
		paths: {
			base: process.env.BASE_PATH || ''
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore base path mismatch errors during prerendering
				if (message.includes('does not begin with')) {
					console.warn(`Ignoring path mismatch: ${path}`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
