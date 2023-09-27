import footer from './footer.module.sass'
export default function Footer() {
	return (
		<footer className={footer.main}>
			<div>
				<p>Copyright (C) 2023</p>
				<hr />
				<p>clarifionsupport@clarifion.com</p>
			</div>
			<div>
				<span><img src="/svg/lock2.svg" alt="Lock" /></span>
				<p>Secure 256-Bit SSL Encryption.</p>
			</div>
		</footer>
	)
}