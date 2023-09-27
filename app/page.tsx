import Footer from "./components/Footer/page"
import HeaderSection from "./components/HeaderSection/page"
import MainSection from "./components/MainSection/page"
import Steps from "./components/Steps/page"

export const metadata = {
	title: 'Clarifion'
}
export default function Page() {
	return <>
		<HeaderSection />
		<Steps />
		<MainSection />
		<Footer />
	</>
}