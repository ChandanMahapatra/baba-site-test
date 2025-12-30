<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'ghost' | 'link';
		size?: 'sm' | 'md' | 'lg';
	}

	export let variant: 'primary' | 'secondary' | 'ghost' | 'link' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<button class="btn btn--{variant} btn--{size}" {...$$restProps}>
	<slot />
</button>

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		font-family: var(--font-sans);
		font-weight: 500;
		border-radius: var(--radius-md);
		cursor: pointer;
		transition: all var(--transition-fast);
		border: none;
	}

	/* Sizes */
	.btn--sm {
		padding: var(--space-xs) var(--space-sm);
		font-size: var(--text-sm);
	}

	.btn--md {
		padding: var(--space-sm) var(--space-lg);
		font-size: var(--text-base);
	}

	.btn--lg {
		padding: var(--space-md) var(--space-xl);
		font-size: var(--text-lg);
	}

	/* Variants */
	.btn--primary {
		background: var(--color-accent);
		color: white;
	}

	.btn--primary:hover {
		background: var(--color-accent-hover);
	}

	.btn--secondary {
		background: transparent;
		color: var(--color-accent);
		border: 1px solid var(--color-accent);
	}

	.btn--secondary:hover {
		background: var(--color-accent-light);
	}

	.btn--ghost {
		background: transparent;
		color: var(--color-text);
	}

	.btn--ghost:hover {
		background: var(--color-bg-alt);
	}

	.btn--link {
		background: transparent;
		color: var(--color-accent);
		padding: 0;
	}

	.btn--link:hover {
		text-decoration: underline;
	}
</style>
