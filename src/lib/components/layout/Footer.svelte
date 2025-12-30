<footer class="footer">
	<div class="container footer__container">
		<div class="footer__content">
			<div class="footer__section">
				<h3 class="footer__title">Prof. Gopal Mahapatra</h3>
				<p class="footer__text">
					Professor of Practice, OB & HRM<br />
					Indian Institute of Management Bangalore
				</p>
			</div>

			<div class="footer__section">
				<h4 class="footer__subtitle">Connect</h4>
				<ul class="footer__links">
					<li><a href="mailto:gopal.mahapatra@iimb.ac.in">Email</a></li>
					<li><a href="https://www.linkedin.com/in/gopal-mahapatra" target="_blank">LinkedIn</a></li>
					<li>
						<a
							href="https://www.iimb.ac.in/sites/default/files/2023-09/Prof.Gopal-Mahapatra-2023.pdf"
							target="_blank">Download CV</a
						>
					</li>
				</ul>
			</div>

			<div class="footer__section">
				<h4 class="footer__subtitle">Location</h4>
				<p class="footer__text">
					IIM Bangalore<br />
					Bannerghatta Road<br />
					Bengaluru, India - 560076
				</p>
			</div>
		</div>

		<div class="footer__bottom">
			<p class="footer__copyright">
				© {new Date().getFullYear()} Prof. Gopal Mahapatra. All rights reserved.
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-surface);
		border-top: 1px solid var(--color-border);
		padding: var(--space-3xl) 0 var(--space-xl);
		margin-top: var(--space-4xl);
	}

	.footer__content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--space-2xl);
		margin-bottom: var(--space-2xl);
	}

	.footer__title {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: var(--space-sm);
	}

	.footer__subtitle {
		font-size: var(--text-base);
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: var(--space-sm);
	}

	.footer__text {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		line-height: var(--line-relaxed);
	}

	.footer__links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.footer__links a {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.footer__links a:hover {
		color: var(--color-accent);
	}

	.footer__bottom {
		padding-top: var(--space-lg);
		border-top: 1px solid var(--color-border);
	}

	.footer__copyright {
		font-size: var(--text-sm);
		color: var(--color-text-subtle);
		text-align: center;
	}
</style>
