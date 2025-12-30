import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			// CRITICAL: Allow access to content directory
			allow: ['./content', './src', './static']
		}
	}
});
