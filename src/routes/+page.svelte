<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Gopal Mahapatra</title>
	<meta
		name="description"
		content="Professor of Practice in OB & HRM at IIM Bangalore. HR Thought Leader, Leadership Coach."
	/>
</svelte:head>

<main class="page">
	<div class="container">
		<!-- Header / Identity -->
		<header class="header">
			<img src="{base}/gopal-mahapatra.jpg" alt="Prof. Gopal Mahapatra" class="header__photo" />
			<div class="header__text">
				<h1 class="header__name">Gopal Mahapatra</h1>
				<p class="header__title">Professor of Practice, OB & HRM</p>
				<p class="header__institution">
					<a href="https://www.iimb.ac.in/" target="_blank">Indian Institute of Management Bangalore</a
					>
				</p>
			</div>
		</header>

		<!-- About -->
		<section class="section">
			<p class="about">
				HR Thought Leader, Leadership Coach, and Organizational Transformation Practitioner with
				over three and a half decades of experience across corporate, consulting, and academic
				domains.
			</p>
		</section>

		<!-- Navigation -->
		<nav class="nav">
			<a href="{base}/about" class="nav__link">About</a>
			<a href="{base}/teaching" class="nav__link">Teaching</a>
			<a href="{base}/publications" class="nav__link">Publications</a>
		</nav>

		<!-- Now -->
		<section class="section">
			<span class="section-marker">Now</span>
			<ul class="dashed-list">
				<li>
					Teaching <strong>Leadership in Digital Era</strong>,
					<strong>Managing People and Performance</strong>, and
					<strong>Executive Coaching</strong> at
					<a href="https://www.iimb.ac.in/" target="_blank">IIM Bangalore</a>
				</li>
				<li>
					Editor, <a href="https://journals.sagepub.com/home/nhr" target="_blank"
						>Sage NHRDN Journal</a
					>
				</li>
				<li>
					Founding Associate Editor, <a
						href="https://journals.sagepub.com/home/hrm"
						target="_blank">South Asian Journal of HRM</a
					>
				</li>
			</ul>
		</section>

		<!-- Previously - UPDATED to dashed-list -->
		<section class="section">
			<span class="section-marker">Previously</span>
			<ul class="dashed-list">
				<li>Chairman, PGPEM (Weekend MBA for working professionals)</li>
				<li>
					President, <a href="https://www.nationalhrd.org/" target="_blank"
						>National HRD Network, Bangalore</a
					>
				</li>
				<li>
					Senior management roles in HRM, Talent Development & OD across MNCs and large
					organizations
				</li>
				<li>
					Academic Council Member at <a href="https://www.rbi.org.in/" target="_blank"
						>RBI Staff College</a
					>, <a href="https://www.mica.ac.in/" target="_blank">MICA</a>,
					<a href="https://xim.edu.in/" target="_blank">XIM University</a>
				</li>
			</ul>
		</section>

		<!-- Selected Work - UPDATED to dashed-list structure -->
		<section class="section">
			<span class="section-marker">Selected Work</span>
			<ul class="dashed-list">
				<li>
					<a href="https://link.springer.com/book/10.1007/978-981-19-0822-4" target="_blank"
						>Springer Business Cases in OB & HRM (2023) →</a
					>
				</li>
				<li>
					<a href="{base}/publications"
						>360 Degree Feedback and Performance Management System →</a
					>
				</li>
				<li><a href="{base}/publications">HRD, OD and Institution Building (Sage) →</a></li>
				<li>
					<a
						href="https://www.sciencedirect.com/science/article/pii/S097038962200002X"
						target="_blank">"Talent development in a changing world" (IIMB Review) →</a
					>
				</li>
				<li>
					<a href="https://journals.sagepub.com/doi/10.1177/2631454120974633" target="_blank"
						>"Leadership in Crisis: Lessons from India" (NHRD Journal) →</a
					>
				</li>
			</ul>
		</section>

		<!-- Connect -->
		<section class="section">
			<span class="section-marker">Connect</span>
			<div class="links">
				<a href="mailto:gopal.mahapatra@iimb.ac.in">Email →</a>
				<a
					href="https://www.iimb.ac.in/sites/default/files/2023-09/Prof.Gopal-Mahapatra-2023.pdf"
					target="_blank">CV (PDF) →</a
				>
				<a href="https://www.iimb.ac.in/user/162/gopal-mahapatra" target="_blank"
					>IIMB Faculty Page →</a
				>
				<a href="https://in.linkedin.com/in/prof-gopal-pr-mahapatra-9011961" target="_blank">LinkedIn →</a>
			</div>
		</section>
	</div>
</main>

<style>
	.page {
		padding: var(--space-xl) 0 var(--space-xl);
	}

	/* Header */
	.header {
		display: flex;
		align-items: flex-start;
		gap: var(--space-xl);
		margin-bottom: var(--space-2xl);
	}

	.header__photo {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
	}

	.header__text {
		padding-top: var(--space-sm);
	}

	.header__name {
		font-size: var(--text-3xl);
		font-weight: 500;
		margin-bottom: var(--space-xs);
	}

	.header__title {
		font-size: var(--text-base);
		color: var(--color-text-muted);
		margin-bottom: var(--space-xs);
	}

	.header__institution {
		font-size: var(--text-sm);
		color: var(--color-text-subtle);
	}

	.about {
		font-size: var(--text-lg);
		line-height: 1.5;
		color: var(--color-text-muted);
		max-width: 32rem;
	}

	.nav {
		display: flex;
		gap: var(--space-lg);
		padding: var(--space-lg) 0;
		border-top: 1px solid var(--color-border);
		border-bottom: 2px solid var(--color-border);
		margin: var(--space-xl) 0;
	}

	.nav__link {
		font-size: var(--text-sm);
		text-transform: uppercase;
		letter-spacing: var(--letter-wide);
		text-decoration: none;
		color: var(--color-text-muted);
		transition: all var(--transition-fast);
	}

	.nav__link:hover {
		color: var(--color-text);
		text-decoration: underline;
		background: none;
	}

	.section {
		margin-bottom: var(--space-2xl);
	}



	.links {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		align-items: flex-start;
	}

	@media (max-width: 600px) {
		.header {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
		.nav {
			justify-content: center;
		}
		.about {
			text-align: center;
		}
	}
</style>
