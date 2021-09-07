import classNames from "classnames"
import React, { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { fadeInLogosInitial, fadeInLogosEnd } from "../../../helpers/animations"
import styles from "./Trustedby.module.scss"
import { trustedByData } from "../../../_data"

const TrustedBy = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0,
		initialInView: false
	})
	const animation = useAnimation()

	useEffect(() => {
		inView && animation.start(fadeInLogosEnd)
	}, [inView])

	return (
		<section className={styles.section} title="Trusted by" ref={ref}>
			<Swiper
				spaceBetween={30}
				slidesPerView="auto"
				centeredSlides={false}
				className={styles.trustedBy}
			>
				{trustedByData.map((logo, i) => {
					return (
						<SwiperSlide key={i}>
							<motion.img
								src={logo}
								custom={i}
								initial={fadeInLogosInitial}
								animate={animation}
								className={styles.logo}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default TrustedBy
