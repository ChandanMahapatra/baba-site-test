<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>About - Gopal Mahapatra</title>
</svelte:head>

<main class="page">
	<div class="container">
		<nav class="nav">
			<a href="{base}/" class="home-link">← Home</a>
		</nav>

		<header class="header">
			<h1>About</h1>
		</header>

		<section class="section">
			<span class="section-marker">Biography</span>
			<div class="text-block">
				<p>
					Gopal Mahapatra brings over three and a half decades of rich and varied experience
					traversing corporate, consulting, and academic domains. He has held senior management
					roles equal to C-Suite levels, leading the HRM, Talent Development & OD, Management
					Services, and Corporate Communication Departments. He has worked with MNCs (Oracle, BPL)
					and large private and public sector organizations (Gujarat Gas, INDAL, BEL).
				</p>
				<p>
					In his corporate and consulting career (mafoi, TVRLS), he has institutionalized multiple
					processes and built-in focus for vision, culture, talent, values, and growth for many of
					these organizations. He is acknowledged in business and academic forums as an HR Thought
					Leader, Leadership Coach, and a successful Organizational Transformation Practitioner.
				</p>
				<p>
					Since August 2018, working as a Professor of Practice, OB & HRM at IIM Bengaluru, he has
					been teaching courses on Leadership in Digital Era, Managing People and Performance in
					Organisation, Managing Career Success and Transitions, Executive Coaching and Mentoring.
				</p>
			</div>
		</section>

		<section class="section">
			<span class="section-marker">Education</span>
			<ul class="tight-list">
				<li>
					<strong>Fellow Programme in Management (Doctoral)</strong><br />
					Indian Institute of Management, Bangalore (1982-1990)
				</li>
				<li>
					<strong>Post Graduate Diploma in Personnel Management & IR</strong><br />
					Xavier Institute of Social Service, Ranchi (1980-1982)
				</li>
				<li>
					<strong>BA (English Literature, Political Science)</strong><br />
					Utkal University (1978-1980)
				</li>
			</ul>
		</section>

		<section class="section">
			<span class="section-marker">Recognition</span>
			<ul class="dashed-list">
				<li>President, National HRD Network, Bangalore</li>
				<li>
					Academic Council Member: RBI Staff College, PDEU, MICA, XIM Univ, SHRM, Chinmaya Viswa
					Vidyapeeth, KIIT SOM
				</li>
				<li>Founding Associate Editor, South Asian Journal of HRM (Sage)</li>
				<li>Invited Editor, Springer Business Cases in OB & HRM</li>
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
	}

	.section {
		margin-bottom: var(--space-2xl);
		max-width: 38rem;
	}

	.text-block p {
		margin-bottom: var(--space-md);
		line-height: 1.5;
		color: var(--color-text-muted);
	}

	.tight-list li {
		margin-bottom: var(--space-md);
		color: var(--color-text-muted);
		line-height: var(--line-relaxed);
	}

	.tight-list strong {
		color: var(--color-text);
		font-weight: 500;
	}
</style>
