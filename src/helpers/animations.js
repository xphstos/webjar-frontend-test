export const fadeUpInitial = {
	opacity: 0,
	y: "10%"
}

export const fadeUpEnd = (i) => ({
	opacity: 1,
	y: 0,
	transition: {
		delay: i * 0.3
	}
})
export const fadeInLogosInitial = {
	opacity: 0
}

export const fadeInLogosEnd = (i) => ({
	opacity: 0.5,
	transition: {
		delay: i * 0.3
	}
})
