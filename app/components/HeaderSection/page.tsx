import headerSection from './headerSection.module.sass'
export default function HeaderSection() {
	return (
		<section className={headerSection.section}>
			<div>
				<ul>
					<li>
						<img src="/img/clarifion-logo.png" alt="Logo Clarifion" />
					</li>
					<li>
						<img src="/svg/mcafee-secure-logo.svg" alt="McAfee Secure Logo" />
						<img src="/svg/norton-antivirus-logo.svg" alt="Norton Antivirus Logo" />
					</li>
				</ul>
			</div>
			<article>
				<h1>Wait! Your Order In Progress.</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</article>

		</section>
	)
}