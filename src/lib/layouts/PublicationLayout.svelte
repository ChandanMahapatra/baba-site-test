<script lang="ts">
	export let data;
</script>

<article class="publication-layout">
	<header class="publication-header">
		<h1>{data.title}</h1>
		{#if data.venue}
			<p class="publication-meta">{data.venue} · {data.year}</p>
		{/if}
	</header>
	<div class="publication-content">
		<slot />
	</div>
</article>

<style>
	.publication-layout {
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: var(--space-2xl);
	}

	.publication-header {
		margin-bottom: var(--space-2xl);
		padding-bottom: var(--space-lg);
		border-bottom: 1px solid var(--color-border);
	}

	.publication-header h1 {
		margin-bottom: var(--space-sm);
	}

	.publication-meta {
		color: var(--color-text-muted);
		font-size: var(--text-lg);
	}

	.publication-content {
		line-height: var(--line-relaxed);
	}
</style>
