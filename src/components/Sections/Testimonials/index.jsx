import classNames from "classnames"
import React, { useEffect } from "react"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { fadeUpEnd, fadeUpInitial } from "../../../helpers/animations"
import styles from "./Testimonials.module.scss"
import { testimonialsData } from "../../../_data"
import { MotionTestimonial, Testimonial } from "../../Testimonial"

const Testimonials = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0,
		initialInView: false
	})
	const animation = useAnimation()

	useEffect(() => {
		inView && animation.start(fadeUpEnd)
	}, [inView])

	return (
		<section className={styles.section}>
			<header className={styles.header}>
				<h2 className={styles.title}>Testimonials</h2>
				<p className={styles.description}>
					Need even more convincing?
					<br />
					Here is what our customers say about us
				</p>
			</header>
			<div ref={ref} className={styles.testimonialsWrapper}>
				<Swiper
					spaceBetween={30}
					slidesPerView="auto"
					grabCursor={true}
					modules={[Pagination]}
					pagination={{ clickable: true }}
					className={styles.testimonials}
					breakpoints={{
						1024: {
							slidesPerView: 2,
							slidesPerGroup: 2
						}
					}}
				>
					{testimonialsData.map((testimonial, i) => {
						return (
							<SwiperSlide key={i}>
								<MotionTestimonial
									custom={i}
									initial={fadeUpInitial}
									animate={animation}
									data={testimonial}
								/>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</section>
	)
}

export default Testimonials
