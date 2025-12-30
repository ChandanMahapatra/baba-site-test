<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="hero section">
	<div class="container container--narrow">
		<div class="hero__content">
			<h1 class="hero__name">Prof. Gopal Mahapatra</h1>
			<p class="hero__title">Professor of Practice, OB & HRM</p>
			<p class="hero__institution">Indian Institute of Management Bangalore</p>

			<p class="hero__tagline">
				HR Thought Leader • Leadership Coach • Organizational Transformation Practitioner
			</p>

			<p class="hero__bio">
				Over three and a half decades of rich experience traversing corporate, consulting, and
				academic domains. Helping organizations and leaders achieve positive, lasting change through
				strategic HR, leadership development, and organizational transformation.
			</p>

			<div class="hero__actions">
				<Button variant="primary" size="lg">
					<a href="#contact" style="color: inherit; text-decoration: none;">Get in Touch</a>
				</Button>
				<Button variant="secondary" size="lg">
					<a
						href="https://www.iimb.ac.in/sites/default/files/2023-09/Prof.Gopal-Mahapatra-2023.pdf"
						target="_blank"
						style="color: inherit; text-decoration: none;"
					>
						Download CV
					</a>
				</Button>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		text-align: center;
		padding-top: var(--space-4xl);
	}

	.hero__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-lg);
	}

	.hero__name {
		font-size: var(--text-5xl);
		font-weight: 700;
		color: var(--color-text);
		margin-bottom: var(--space-xs);
	}

	.hero__title {
		font-size: var(--text-xl);
		font-weight: 500;
		color: var(--color-text-muted);
	}

	.hero__institution {
		font-size: var(--text-lg);
		color: var(--color-text-subtle);
	}

	.hero__tagline {
		font-size: var(--text-lg);
		font-weight: 500;
		color: var(--color-accent);
		margin-top: var(--space-md);
		padding: var(--space-sm) var(--space-lg);
		background: var(--color-accent-light);
		border-radius: var(--radius-full);
	}

	.hero__bio {
		font-size: var(--text-lg);
		line-height: var(--line-relaxed);
		color: var(--color-text-muted);
		max-width: 42rem;
		margin-top: var(--space-md);
	}

	.hero__actions {
		display: flex;
		gap: var(--space-md);
		margin-top: var(--space-xl);
	}

	@media (max-width: 768px) {
		.hero__name {
			font-size: var(--text-3xl);
		}

		.hero__actions {
			flex-direction: column;
			width: 100%;
		}
	}
</style>
