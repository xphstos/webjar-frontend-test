import React, { useEffect } from "react"
import Button from "../../Button"
import KeyvisualImage from "../../../assets/intro-keyvisual.png"
import Sticker5Years from "../../../assets/badge-5-years.svg?component"
import { motion, useAnimation } from "framer-motion"
import { Freescript } from "../../Freescript"
import IconArrowDown from "../../../assets/icon-arrow-down.svg?component"
import { fadeUpEnd, fadeUpInitial } from "../../../helpers/animations"
import { useInView } from "react-intersection-observer"
import { upCardsData } from "../../../_data"
import { Card, MotionCard } from "../../Card"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import styles from "./Keyvisual.module.scss"

const Keyvisual = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0,
		initialInView: false
	})
	const animation = useAnimation()

	useEffect(() => {
		inView && animation.start(fadeUpEnd)
	}, [inView])

	return (
		<section title="UP Hellas - 5 Years" className={styles.section}>
			<section className={styles.introSubsection}>
				<header className={styles.introHeader}>
					<div className={styles.introHeaderTop}>
						<Freescript className={styles.introFree} initialInView={true}>
							Here’s a<br />
							crazy thought
						</Freescript>
						<Sticker5Years />
					</div>
					<h1 className={styles.introTitle}>
						Happy &amp; healthy employees work better!
					</h1>
					<Button>Find out how we can help</Button>
				</header>
				<img src={KeyvisualImage} alt="" />
				<div className={styles.introScroller}>
					<a href="#more" className={styles.scrollForMore}>
						<span>Scroll for more</span>
						<IconArrowDown />
					</a>
				</div>
			</section>
			<section id="more" className={styles.happyHealthySubsection}>
				<header className={styles.happyHealthyHeader}>
					<h2>Happy &amp; healthy employees work better ❤️</h2>
					<p className={styles.happyHealthyDescription}>
						We are Up. We design and deliver digital-first employee benefits
						that transform the workplace experience.
					</p>
				</header>
				<div ref={ref}>
					<Swiper
						spaceBetween={20}
						slidesPerView={"auto"}
						className={styles.cardSlider}
					>
						{upCardsData.map((card, i) => {
							return (
								<SwiperSlide key={i}>
									<MotionCard
										custom={i}
										initial={fadeUpInitial}
										animate={animation}
										as="a"
										href={card.url}
										className={styles.card}
									>
										<header>
											<img src={card.logo} alt="" />
											<p className={styles.cardDescription}>
												{card.description}
											</p>
										</header>
										<img
											src={card.graphic}
											className={styles.cardImage}
											alt=""
										/>
										<button className={styles.learnMore}>Learn more</button>
									</MotionCard>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</section>
		</section>
	)
}

export default Keyvisual
