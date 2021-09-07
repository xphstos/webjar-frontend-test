import React from "react"
import Header from "./components/Header"
import {
	Keyvisual,
	Eat,
	Testimonials,
	Gift,
	TrustedBy
} from "./components/Sections"
import ContactForm from "./components/Sections/ContactForm"

function App() {
	return (
		<>
			<Header />
			<main>
				<Keyvisual />
				<Eat />
				<Gift />
				<Testimonials />
				<TrustedBy />
				<ContactForm />
			</main>
		</>
	)
}

export default App
