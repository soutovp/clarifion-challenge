import mainSection from './mainSection.module.sass'
export default function MainSection() {
	const productData = {
		BigImage: ['/img/products/example1/product1.png', 'Image of product 1'],
		rating: [{ name: 'Ken T.', status: 'Verified', profilePicture: ['/img/profiles/kenT.png', 'Profile of Ken T.'] }]
	}
	const bandeiras = [
		['Visa', '/svg/visa.svg'],
		['Shop Pay', '/svg/shoppay.svg'],
		['Paypal', '/svg/paypal.svg'],
		['Mastercard', '/svg/mastercard.svg'],
		['Google play', '/svg/gpay.svg'],
		['Apple play', '/svg/applepay.svg'],
		['Amex', '/svg/amex.svg'],
	]
	return (
		<section className={mainSection.section}>
			<div>
				<img src={productData.BigImage[0]} alt={productData.BigImage[1]} />
				{productData.rating.map(person => {
					return (
						<article className={mainSection.article}>
							<header>
								<div>
									<img src={person.profilePicture[0]} alt={person.profilePicture[1]} />
									<div>
										<div><img src="/svg/stars.svg" alt="Rate of five stars" /></div>
										<ul>
											<li>{person.name}</li>
											<li><span>{person.status === 'Verified' ? <img src='/svg/verify.svg' alt='Verified Symbol' /> : ''}</span>{person.status} Customer</li>
										</ul>
									</div>
								</div>
							</header>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, recusandae suscipit. Architecto, explicabo magnam quis atque earum dolorum a at blanditiis, dolores necessitatibus ullam assumenda. Fugit reiciendis laudantium velit amet!</p>
						</article>
					)
				})}
			</div>
			<div className={mainSection.productSection}>
				<h1><span>One time only</span> special price for 6 extra Clarifion for only <span>$14 Each</span> ($84.00 total!)</h1>
				<div>
					<div>
						<img src="/img/products/example1/product2.png" alt="Product" />
					</div>
					<section>
						<ul>
							<li><h2>Clarifion Air Ionizer</h2></li>
							<li><span>$180</span> $84</li>
						</ul>
						<div>{['/svg/star.svg'].map(elemento => {
							return (<><img src={elemento} alt="Star" /><img src={elemento} alt="Star" /><img src={elemento} alt="Star" /><img src={elemento} alt="Star" /><img src={elemento} alt="Star" /></>)
						})}</div>
						<p><span></span> 12 left in Stock</p>
						<p>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
					</section>
				</div>
				<ul>
					<li>
						<span><img src="/svg/tick-circle.svg" alt="check" /></span>
						<p>Negative Ion Technology may <span>help with allergens</span></p>
					</li>
					<li>
						<span><img src="/svg/tick-circle.svg" alt="check" /></span>
						<p>Designed for <span>air rejuvenation</span></p>
					</li>
					<li>
						<span><img src="/svg/tick-circle.svg" alt="check" /></span>
						<p><span>Perfect for every room</span> in all types of places.</p>
					</li>
				</ul>
				<div><p><span>%</span> Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each.</span></p></div>
				<button className={mainSection.discountButton}>Yes - Claim my discount →</button>
				<div>
					<p>Free Shipping</p>
					<hr />
					<p><span><img src="/svg/lock.svg" alt="Lock" /></span> Secure 256-Bit SSL Encryption.</p>
					<hr />
					<div>
						<ul>
							{bandeiras.map(bandeira => {
								return <li><img src={bandeira[1]} alt={bandeira[0]} /></li>
							})}
						</ul>
					</div>
				</div>
				<a href='#'>No thnaks, i don't want this</a>
				<div>
					<img src="/img/satisfaction.png" alt="Satisfaction 100% Guarantee" width={88} />
					<p>If you are not completely thrilled with your Clarifion - We have a <strong>30 day satisfaction guarantee</strong>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
				</div>
			</div>
		</section>
	)
}