<script lang="ts">
	import { Tabs } from 'bits-ui';
</script>

<section id="about" class="about section">
	<div class="container container--narrow">
		<h2 class="about__heading">About</h2>

		<Tabs.Root value="biography" class="about__tabs">
			<Tabs.List class="about__tabs-list">
				<Tabs.Trigger value="biography" class="about__tabs-trigger">Biography</Tabs.Trigger>
				<Tabs.Trigger value="courses" class="about__tabs-trigger">Courses Taught</Tabs.Trigger>
				<Tabs.Trigger value="background" class="about__tabs-trigger">Academic Background</Tabs.Trigger
				>
			</Tabs.List>

			<Tabs.Content value="biography" class="about__tabs-content">
				<div class="about__bio">
					<p>
						Gopal Mahapatra brings over three and a half decades of rich and varied experience
						traversing corporate, consulting, and academic domains. He has held senior management
						roles leading the HRM, Talent Development & OD, Management Services, and Corporate
						Communication Departments, working with MNCs and large private and public sector
						organizations.
					</p>
					<p>
						Since August 2018, working as a Professor of Practice, OB & HRM at IIM Bengaluru, he has
						been teaching courses on Leadership in Digital Era, Managing People and Performance in
						Organisation, Managing Career Success and Transitions, Executive Coaching and Mentoring
						for Full-time and Part-time MBA students and executives.
					</p>
					<p>
						He is acknowledged in business and academic forums as an HR Thought Leader, Leadership
						Coach, and a successful Organizational Transformation Practitioner passionate about
						building Institutions and establishing systems to enhance performance.
					</p>
				</div>
			</Tabs.Content>

			<Tabs.Content value="courses" class="about__tabs-content">
				<ul class="about__courses">
					<li>Leadership in Digital Era</li>
					<li>Managing People and Performance in Organisation</li>
					<li>Managing Career Success and Transitions</li>
					<li>Executive Coaching and Mentoring</li>
					<li>Leadership, Career Success and Change Management (MDP sessions)</li>
				</ul>
			</Tabs.Content>

			<Tabs.Content value="background" class="about__tabs-content">
				<ul class="about__education">
					<li>
						<strong>Fellow Programme (Doctoral Programme) in Management</strong><br />
						Indian Institute of Management, Bangalore, India (1982-1990)
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
			</Tabs.Content>
		</Tabs.Root>
	</div>
</section>

<style>
	.about {
		background: var(--color-bg-alt);
	}

	.about__heading {
		text-align: center;
		margin-bottom: var(--space-2xl);
	}

	.about__tabs {
		width: 100%;
	}

	.about__tabs-list {
		display: flex;
		gap: var(--space-sm);
		border-bottom: 1px solid var(--color-border);
		margin-bottom: var(--space-xl);
		justify-content: center;
	}

	.about__tabs-trigger {
		padding: var(--space-sm) var(--space-lg);
		font-size: var(--text-base);
		font-weight: 500;
		color: var(--color-text-muted);
		background: transparent;
		border: none;
		border-bottom: 2px solid transparent;
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.about__tabs-trigger:hover {
		color: var(--color-text);
	}

	.about__tabs-trigger[data-state='active'] {
		color: var(--color-accent);
		border-bottom-color: var(--color-accent);
	}

	.about__tabs-content {
		animation: fadeIn var(--transition-normal);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.about__bio {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
		font-size: var(--text-lg);
		line-height: var(--line-relaxed);
		color: var(--color-text-muted);
	}

	.about__courses,
	.about__education {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		font-size: var(--text-lg);
	}

	.about__courses li {
		padding-left: var(--space-lg);
		border-left: 3px solid var(--color-accent);
		color: var(--color-text);
	}

	.about__education li {
		padding: var(--space-md);
		background: var(--color-surface);
		border-radius: var(--radius-md);
		border-left: 3px solid var(--color-accent);
	}

	@media (max-width: 768px) {
		.about__tabs-list {
			flex-direction: column;
		}
	}
</style>
