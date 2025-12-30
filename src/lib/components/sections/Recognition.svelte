<section id="recognition" class="recognition section">
	<div class="container">
		<h2 class="recognition__heading">Recognition & Impact</h2>

		<div class="recognition__grid">
			<div class="recognition__card">
				<div class="recognition__icon">🎓</div>
				<h3 class="recognition__title">HR Thought Leader</h3>
				<p class="recognition__text">
					Acknowledged in business and academic forums for contributions to HR and organizational
					development
				</p>
			</div>

			<div class="recognition__card">
				<div class="recognition__icon">📚</div>
				<h3 class="recognition__title">35+ Years Experience</h3>
				<p class="recognition__text">
					Rich experience across corporate, consulting, and academic domains
				</p>
			</div>

			<div class="recognition__card">
				<div class="recognition__icon">👥</div>
				<h3 class="recognition__title">President, NHRDN</h3>
				<p class="recognition__text">Former President of National HRD Network, Bangalore</p>
			</div>
		</div>

		<div class="recognition__section">
			<h3 class="recognition__subtitle">Academic Council Memberships</h3>
			<div class="recognition__tags">
				<span class="recognition__tag">RBI Staff College</span>
				<span class="recognition__tag">PDEU</span>
				<span class="recognition__tag">MICA</span>
				<span class="recognition__tag">XIM University</span>
				<span class="recognition__tag">SHRM</span>
				<span class="recognition__tag">Chinmaya Viswa Vidyapeeth</span>
				<span class="recognition__tag">KIIT SOM</span>
			</div>
		</div>

		<div class="recognition__section">
			<h3 class="recognition__subtitle">Editorial Roles</h3>
			<ul class="recognition__list">
				<li>Founding Associate Editor, South Asian Journal of HRM (Sage, since 2013)</li>
				<li>Editor, Sage NHRDN Journal (since 2018)</li>
				<li>Springer Invited Editor, Business Cases in OB & HRM</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.recognition {
		background: var(--color-bg-alt);
	}

	.recognition__heading {
		text-align: center;
		margin-bottom: var(--space-3xl);
	}

	.recognition__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-xl);
		margin-bottom: var(--space-3xl);
	}

	.recognition__card {
		background: var(--color-surface);
		padding: var(--space-xl);
		border-radius: var(--radius-lg);
		text-align: center;
		box-shadow: var(--shadow-sm);
		transition: transform var(--transition-normal), box-shadow var(--transition-normal);
	}

	.recognition__card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
	}

	.recognition__icon {
		font-size: 3rem;
		margin-bottom: var(--space-md);
	}

	.recognition__title {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: var(--space-sm);
	}

	.recognition__text {
		color: var(--color-text-muted);
		line-height: var(--line-relaxed);
	}

	.recognition__section {
		margin-bottom: var(--space-2xl);
		text-align: center;
	}

	.recognition__subtitle {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: var(--space-lg);
	}

	.recognition__tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
		justify-content: center;
	}

	.recognition__tag {
		padding: var(--space-xs) var(--space-md);
		background: var(--color-accent-light);
		color: var(--color-accent);
		border-radius: var(--radius-full);
		font-size: var(--text-sm);
		font-weight: 500;
	}

	.recognition__list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		max-width: 42rem;
		margin: 0 auto;
	}

	.recognition__list li {
		padding: var(--space-md);
		background: var(--color-surface);
		border-radius: var(--radius-md);
		border-left: 3px solid var(--color-accent);
		text-align: left;
	}
</style>
