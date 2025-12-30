<script>
	import '../lib/styles/global.css';
</script>

<div class="app">
	<div class="app-content">
		<slot />
	</div>
	
	<footer class="global-footer">
		<div class="container">
			<p>IIM Bangalore · Bannerghatta Road · Bengaluru, India</p>
			<p>© {new Date().getFullYear()} Gopal Mahapatra</p>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--color-bg);
		color: var(--color-text);
	}

	.app-content {
		flex: 1;
	}

	.global-footer {
		padding: var(--space-xl) 0;
		border-top: 1px solid var(--color-border);
		font-size: var(--text-xs);
		color: var(--color-text-subtle);
	}

	.global-footer p {
		margin-bottom: 0.25rem;
	}
</style>
