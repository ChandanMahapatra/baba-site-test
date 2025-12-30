<script lang="ts">
	import { base } from '$app/paths';

	const publications = [
		{
			title: 'Books & Edited Volumes',
			items: [
				{
					text: 'Springer Business Cases in Organisation Behaviour and HRM (Springer Singapore, 2023)',
					url: 'https://link.springer.com/book/10.1007/978-981-19-0822-4'
				},
				{
					text: '360 Degree Feedback and Performance Management System, Vol. II (Excel Books, 2002)',
					url: null
				},
				{
					text: 'HRD, OD and Institution Building - Essays in Memory of Udai Pareek (Sage, 2016/2024)',
					url: 'https://us.sagepub.com/en-us/nam/hrd-od-and-institution-building/book250596'
				},
				{
					text: 'Organization Development: Accelerating Learning and Transformation (Contributor, Sage, 2011)',
					url: null
				}
			]
		},
		{
			title: 'Selected Journal Articles',
			items: [
				{
					text: 'Talent development in a changing world of work — IIMB Management Review (2022)',
					url: 'https://www.sciencedirect.com/science/article/pii/S097038962200002X'
				},
				{
					text: 'Appraising the revamped performance management system in Indian IT multinational enterprises — Human Resource Management (2021)',
					url: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/hrm.22087'
				},
				{
					text: 'Gen Z: An emerging phenomenon — Sage NHRD Network Journal (2022)',
					url: 'https://journals.sagepub.com/doi/abs/10.1177/26314541221085002'
				},
				{
					text: 'Leadership in Crisis: Lessons from India — Sage NHRD Network Journal (2021)',
					url: 'https://journals.sagepub.com/doi/10.1177/2631454120974633'
				},
				{
					text: 'Future of Mid-Career Education in a Transforming Work Context — South Asian Journal of Management (2021)',
					url: null
				},
				{
					text: 'Leadership Development in a Multinational-An Indian case — Vikalpa (2011)',
					url: 'https://journals.sagepub.com/doi/10.1177/0256090920110201'
				}
			]
		},
		{
			title: 'Case Studies',
			items: [
				{
					text: 'Devita Saraf and VU from the Top (HBS Case, 2024-25)',
					url: null
				},
				{
					text: 'Growth and Transformation of Gujarat Gas Limited - An OD & HRD Perspective (Springer, 2023)',
					url: 'https://link.springer.com/chapter/10.1007/978-981-19-0822-4_7'
				},
				{
					text: 'Start up to Scale Up - The Changing Entrepreneurs Competencies (Springer, 2023)',
					url: 'https://link.springer.com/chapter/10.1007/978-981-19-0822-4_12'
				},
				{
					text: 'Career at Crossroads: Passion or Profession (IIMB HBSC Publishing, 2021-22)',
					url: 'https://www.hbsp.harvard.edu/'
				},
				{
					text: 'HR Facilitator at IOCL: Reviving Human Touch (IIMB HBSC Publishing, 2021-22)',
					url: null
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Publications - Gopal Mahapatra</title>
</svelte:head>

<main class="page">
	<div class="container container--wide">
		<nav class="nav">
			<a href="{base}/" class="home-link">← Home</a>
		</nav>

		<header class="header">
			<h1>Publications</h1>
		</header>

		{#each publications as section}
			<section class="section section--grid">
				<span class="section-marker">{section.title}</span>
				<ul class="dashed-list">
					{#each section.items as item}
						<li>
							{#if item.url}
								<a href={item.url} target="_blank">{item.text}</a>
							{:else}
								{item.text}
							{/if}
						</li>
					{/each}
				</ul>
			</section>
		{/each}
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
	}
</style>
