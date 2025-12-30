<script lang="ts">
	import { base } from '$app/paths';

	const publications = [
		{
			title: 'Books & Edited Volumes',
			items: [
				{
					text: 'Business Cases in Organisation Behaviour and HRM, Perspectives from India (Springer, 2023)',
					url: 'https://link.springer.com/book/10.1007/978-981-99-2031-0'
				},
				{
					text: '360 Degree Feedback and Performance Management System (2012)',
					url: 'https://www.amazon.com/Degree-Feedback-Performance-Management-System-ebook/dp/B00AQKH6QA#averageCustomerReviewsAnchor'
				},
				{
					text: 'HRD, OD and Institution Building: Essays in Memory of Udai Pareek',
					url: 'https://www.amazon.com/HRD-OD-Institution-Building-Essays-ebook/dp/B0FGPRXMTW'
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
					text: 'Talent development in a changing world (IIMB Review, 2022)',
					url: 'https://doi.org/10.1016/j.iimb.2022.03.002'
				},
				{
					text: "Appraising the revamped performance management system in Indian IT multinational enterprises: The employees' perspective — Human Resource Management (2021)",
					url: 'https://doi.org/10.1002/hrm.22061'
				},
				{
					text: 'Gen Z: An Emerging Phenomenon — Sage NHRD Network Journal (2022)',
					url: 'https://doi.org/10.1177/26314541221077137'
				},
				{
					text: 'Leadership in Crisis: Lessons from India (NHRD Journal, 2021)',
					url: 'https://doi.org/10.1177/26314541211043051'
				},
				{
					text: 'Leadership Development in Organizations in India: The Why and How of It — Vikalpa (2011)',
					url: 'https://doi.org/10.1177/0256090920110305'
				}
			]
		},
		{
			title: 'Case Studies',
			items: [
				{
					text: 'Growth and Transformation of Gujarat Gas Limited—An OD and HRD Perspective (Springer, 2023)',
					url: 'https://www.springerprofessional.de/en/growth-and-transformation-of-gujarat-gas-limited-an-od-and-hrd-p/26511062'
				},
				{
					text: 'Start-Up to Scale-Up: The Changing Entrepreneurs’ Competencies (Springer, 2023)',
					url: 'https://www.springerprofessional.de/en/start-up-to-scale-up-the-changing-entrepreneurs-competencies/26511074'
				},
				{
					text: 'Career at Crossroads: Passion or Profession? (IIMB HBR, 2021-22)',
					url: 'https://store.hbr.org/product/career-at-crossroads-passion-or-profession-a/IMB941'
				},
				{
					text: 'Devita Saraf and VU from the Top (HBS Case, 2024-25)',
					url: null
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
	<div class="container">
		<nav class="nav">
			<a href="{base}/" class="home-link">← Home</a>
		</nav>

		<header class="header">
			<h1>Publications</h1>
		</header>

		{#each publications as section}
			<section class="section">
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
		max-width: 32rem;
	}

	.section {
		margin-bottom: var(--space-2xl);
		max-width: 42rem;
	}
</style>
