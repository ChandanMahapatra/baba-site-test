<script lang="ts">
	import { base } from '$app/paths';

	const navItems = [
		{ label: 'Home', href: `${base}/` },
		{ label: 'About', href: `${base}/#about` },
		{ label: 'Teaching', href: `${base}/#teaching` },
		{ label: 'Publications', href: `${base}/#publications` },
		{ label: 'Books', href: `${base}/#books` },
		{ label: 'Coaching', href: `${base}/#coaching` },
		{ label: 'Resources', href: `${base}/#resources` },
		{ label: 'Contact', href: `${base}/#contact` }
	];
</script>

<header class="header">
	<div class="container header__container">
		<a href={`${base}/`} class="header__logo">
			<span class="header__name">Prof. Gopal Mahapatra</span>
		</a>
		<nav class="header__nav">
			{#each navItems as item}
				<a href={item.href} class="header__link">{item.label}</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
		backdrop-filter: blur(10px);
		background-color: rgba(255, 255, 255, 0.95);
	}

	@media (prefers-color-scheme: dark) {
		.header {
			background-color: rgba(26, 26, 26, 0.95);
		}
	}

	.header__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--header-height);
	}

	.header__logo {
		text-decoration: none;
	}

	.header__name {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--color-text);
		letter-spacing: var(--letter-tight);
	}

	.header__nav {
		display: flex;
		gap: var(--space-lg);
	}

	.header__link {
		font-size: var(--text-sm);
		font-weight: 500;
		color: var(--color-text-muted);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.header__link:hover {
		color: var(--color-accent);
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.header__nav {
			display: none;
		}
	}
</style>
