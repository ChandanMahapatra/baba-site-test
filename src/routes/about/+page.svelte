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
					roles, leading HRM, Talent Development & OD, Management
					Services, and Corporate Communication functions. His corporate tenure includes work with
					MNCs like Oracle and BPL, as well as large private and public sector organizations such
					as Gujarat Gas, INDAL, and BEL.
				</p>
				<p>
					In his consulting career, notably with TVRLS, he has institutionalized critical
					processes to foster vision, culture, talent, values, and growth. He is recognized in
					business and academic forums as an HR Thought Leader, Leadership Coach, and a successful
					Organizational Transformation Practitioner.
				</p>
				<p>
					Since August 2018, he has served as a Professor of Practice in OB & HRM at IIM
					Bengaluru. His teaching portfolio includes Leadership in the Digital Era, Managing People
					and Performance in Organizations, Managing Career Success and Transitions, and Executive
					Coaching and Mentoring.
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
		color: #000;
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
