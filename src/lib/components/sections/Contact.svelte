<section id="contact" class="contact section">
	<div class="container container--narrow">
		<h2 class="contact__heading">Connect</h2>
		<p class="contact__intro">
			For speaking engagements, coaching, consulting, or academic collaboration
		</p>

		<div class="contact__grid">
			<a href="mailto:gopal.mahapatra@iimb.ac.in" class="contact__card">
				<div class="contact__icon">✉️</div>
				<h3 class="contact__title">Email</h3>
				<p class="contact__text">gopal.mahapatra@iimb.ac.in</p>
			</a>

			<a
				href="https://in.linkedin.com/in/prof-gopal-pr-mahapatra-9011961"
				target="_blank"
				rel="noopener"
				class="contact__card"
			>
				<div class="contact__icon">💼</div>
				<h3 class="contact__title">LinkedIn</h3>
				<p class="contact__text">Connect on LinkedIn</p>
			</a>

			<a
				href="https://www.iimb.ac.in/sites/default/files/2023-09/Prof.Gopal-Mahapatra-2023.pdf"
				target="_blank"
				rel="noopener"
				class="contact__card"
			>
				<div class="contact__icon">📄</div>
				<h3 class="contact__title">Download CV</h3>
				<p class="contact__text">Full curriculum vitae (PDF)</p>
			</a>

			<a
				href="https://www.iimb.ac.in/user/162/gopal-mahapatra"
				target="_blank"
				rel="noopener"
				class="contact__card"
			>
				<div class="contact__icon">🏛️</div>
				<h3 class="contact__title">IIMB Profile</h3>
				<p class="contact__text">Faculty page at IIM Bangalore</p>
			</a>
		</div>

		<div class="contact__location">
			<h3 class="contact__location-title">Location</h3>
			<p class="contact__location-text">
				Indian Institute of Management Bangalore<br />
				Bannerghatta Road<br />
				Bengaluru, India - 560076
			</p>
		</div>
	</div>
</section>

<style>
	.contact {
		background: var(--color-bg-alt);
	}

	.contact__heading {
		text-align: center;
		margin-bottom: var(--space-md);
	}

	.contact__intro {
		text-align: center;
		font-size: var(--text-lg);
		color: var(--color-text-muted);
		margin-bottom: var(--space-3xl);
	}

	.contact__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: var(--space-lg);
		margin-bottom: var(--space-3xl);
	}

	.contact__card {
		background: var(--color-surface);
		padding: var(--space-xl);
		border-radius: var(--radius-lg);
		text-align: center;
		text-decoration: none;
		box-shadow: var(--shadow-sm);
		transition: all var(--transition-normal);
		border: 1px solid var(--color-border);
	}

	.contact__card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
		border-color: var(--color-accent);
		text-decoration: none;
	}

	.contact__icon {
		font-size: 2.5rem;
		margin-bottom: var(--space-md);
	}

	.contact__title {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: var(--space-xs);
	}

	.contact__text {
		color: var(--color-text-muted);
		font-size: var(--text-sm);
	}

	.contact__location {
		text-align: center;
		padding: var(--space-xl);
		background: var(--color-surface);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
	}

	.contact__location-title {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: var(--space-md);
	}

	.contact__location-text {
		color: var(--color-text-muted);
		line-height: var(--line-relaxed);
	}
</style>
