<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Teaching - Gopal Mahapatra</title>
</svelte:head>

<main class="page">
	<div class="container">
		<nav class="nav">
			<a href="{base}/" class="home-link">← Home</a>
		</nav>

		<header class="header">
			<h1>Teaching</h1>
		</header>

		<section class="section">
			<span class="section-marker">MBA & Executive MBA</span>
			<ul class="tight-list">
				<li>
					<strong>Leadership in Digital Era</strong><br />
					Examining leadership challenges and opportunities in the context of digital transformation.
				</li>
				<li>
					<strong>Managing People and Performance in Organizations</strong><br />
					Strategies for talent management, performance appraisal systems, and organizational culture.
				</li>
				<li>
					<strong>Managing Career Success and Transitions</strong><br />
					Navigating career trajectories, managing transitions, and building personal resilience.
				</li>
				<li>
					<strong>Executive Coaching and Mentoring</strong><br />
					Developing coaching competencies for leaders to drive performance and development in
					others.
				</li>
			</ul>
		</section>

		<section class="section">
			<span class="section-marker">Leadership Development</span>
			<ul class="dashed-list">
				<li>Leadership Development for Senior Executives</li>
				<li>Change Management & Organizational Transformation</li>
				<li>Talent Management Strategies</li>
				<li>Assessment & Development Centers</li>
				<li>Strategic HR Management</li>
			</ul>
		</section>
	</div>
</main>

<style>
	.page {
		padding: var(--space-xl) 0;
	}

	.nav {
		margin-bottom: var(--space-2xl);
	}

	.home-link {
		font-size: var(--text-sm);
		color: var(--color-text-subtle);
		text-decoration: none;
	}

	.home-link:hover {
		text-decoration: underline;
	}

	.header {
		margin-bottom: var(--space-2xl);
		max-width: 32rem;
	}

	.section {
		margin-bottom: var(--space-2xl);
		max-width: 38rem;
	}

	.tight-list li {
		margin-bottom: var(--space-sm);
	}
</style>
