<script lang="ts">
	import { Accordion } from 'bits-ui';

	const publications = [
		{
			id: 'books',
			title: 'Books & Edited Volumes',
			items: [
				{
					title: 'Springer Business Cases in Organisation Behaviour and HRM',
					venue: 'Springer Singapore',
					year: '2023'
				},
				{
					title: '360 Degree Feedback and Performance Management System, Vol. II',
					venue: 'Excel Books',
					year: '2002'
				},
				{
					title: 'HRD, OD and Institution Building - Essays in Memory of Udai Pareek',
					venue: 'Sage',
					year: '2016/2024'
				}
			]
		},
		{
			id: 'journals',
			title: 'Refereed Journal Articles',
			items: [
				{
					title: 'Talent development in a changing world of work',
					venue: 'IIMB Management Review',
					year: '2022'
				},
				{
					title:
						'Appraising the revamped performance management system in Indian IT multinational enterprises',
					venue: 'Human Resource Management',
					year: '2021'
				},
				{
					title: 'Gen Z: An emerging phenomenon',
					venue: 'Sage NHRD Network Journal',
					year: '2022'
				},
				{
					title: 'Leadership in Crisis: Lessons from India',
					venue: 'Sage NHRD Network Journal',
					year: '2021'
				},
				{
					title: 'Leadership Development in a Multinational-An Indian case',
					venue: 'Vikalpa',
					year: '2011'
				}
			]
		},
		{
			id: 'cases',
			title: 'Case Studies',
			items: [
				{
					title: 'Devita Saraf and VU from the Top',
					venue: 'HBS Case',
					year: '2024-25'
				},
				{
					title: 'Growth and Transformation of Gujarat Gas Limited - An OD & HRD Perspective',
					venue: 'Springer',
					year: '2023'
				},
				{
					title: 'Start up to Scale Up - The Changing Entrepreneurs Competencies',
					venue: 'Springer',
					year: '2023'
				},
				{
					title: 'Career at Crossroads: Passion or Profession (A & B)',
					venue: 'IIMB HBSC Publishing',
					year: '2021-22'
				},
				{
					title: 'HR Facilitator at IOCL: Reviving Human Touch',
					venue: 'IIMB HBSC Publishing',
					year: '2021-22'
				}
			]
		}
	];
</script>

<section id="publications" class="publications section">
	<div class="container container--narrow">
		<h2 class="publications__heading">Publications</h2>
		<p class="publications__intro">
			A selection of books, journal articles, and case studies spanning organizational behavior,
			human resource management, and leadership development.
		</p>

		<Accordion.Root type="multiple" class="publications__accordion">
			{#each publications as section}
				<Accordion.Item value={section.id} class="publications__item">
					<Accordion.Trigger class="publications__trigger">
						<span>{section.title} ({section.items.length})</span>
						<span class="publications__icon">+</span>
					</Accordion.Trigger>
					<Accordion.Content class="publications__content">
						<ul class="publications__list">
							{#each section.items as item}
								<li class="publications__list-item">
									<span class="publications__title">{item.title}</span>
									<span class="publications__meta">
										{item.venue} · {item.year}
									</span>
								</li>
							{/each}
						</ul>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>

<style>
	.publications__heading {
		text-align: center;
		margin-bottom: var(--space-md);
	}

	.publications__intro {
		text-align: center;
		font-size: var(--text-lg);
		color: var(--color-text-muted);
		margin-bottom: var(--space-2xl);
		max-width: 36rem;
		margin-left: auto;
		margin-right: auto;
	}

	.publications__accordion {
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		overflow: hidden;
	}

	.publications__item {
		border-bottom: 1px solid var(--color-border);
	}

	.publications__item:last-child {
		border-bottom: none;
	}

	.publications__trigger {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-lg);
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--color-text);
		background: var(--color-surface);
		border: none;
		cursor: pointer;
		transition: background var(--transition-fast);
	}

	.publications__trigger:hover {
		background: var(--color-bg-alt);
	}

	.publications__icon {
		font-size: var(--text-xl);
		color: var(--color-text-muted);
		transition: transform var(--transition-fast);
	}

	.publications__trigger[data-state='open'] .publications__icon {
		transform: rotate(45deg);
	}

	.publications__content {
		padding: 0 var(--space-lg) var(--space-lg);
	}

	.publications__list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.publications__list-item {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		padding-left: var(--space-md);
		border-left: 2px solid var(--color-accent);
	}

	.publications__title {
		color: var(--color-text);
		font-weight: 500;
	}

	.publications__meta {
		font-size: var(--text-sm);
		color: var(--color-text-subtle);
	}
</style>
