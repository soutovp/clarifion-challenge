import steps from './steps.module.sass'
export default function Steps() {
	const stepsList = [
		{
			condition: steps.checked,
			string: 'Cart Review',
			img: 'tick-circle-white.svg'
		},
		{
			condition: steps.checked,
			string: 'Checkout',
			img: 'tick-circle-white.svg'
		},
		{
			condition: steps.active,
			string: 'Special Offer',
		},
		{
			condition: steps.next,
			string: 'Confirmation'
		}
	]
	return (
		<>
			<section>
				<ul className={steps.ul}>
					{stepsList.map(step => {
						return (
							<li className={step.condition} key={stepsList.indexOf(step)}>
								<span>
									{step.img ? <img src={`/svg/${step.img}`} alt="" /> : stepsList.indexOf(step) + 1}
								</span>
								<p>
									<div>Step {stepsList.indexOf(step) + 1} : </div>
									{step.string}
								</p>
							</li>
						)
					})}
				</ul>
			</section>
		</>
	)
}