import React from "react"
import { Card } from "../../Card"
import EatLogo from "../../../assets/up-logo-go-for-eat.svg"
import CreditCard from "../../../assets/credit-card-go-for-eat.png"
import classNames from "classnames"
import StickerCup from "../../../assets/sticker-cup.svg"
import EatIllustration from "../../../assets/illustration-section-eat.png"
import FatArrowRight from "../../../assets/icon-fat-arrow-right.png"
import Button from "../../Button"
import { Freescript } from "../../Freescript"
import Badge from "../../Badge"
import styles from "../SectionCommon.module.scss"
import eatStyles from "./Eat.module.scss"
import { motion } from "framer-motion"
Object.assign(styles, eatStyles)

const variants = {
	visible: { scale: 1, opacity: 1, rotate: -4 },
	hidden: {
		scale: 0,
		opacity: 0,
		rotate: 0
	}
}

const Eat = () => {
	return (
		<section className={classNames(styles.section, styles.eatSection)}>
			<header className={classNames(styles.header, styles.eatHeader)}>
				<Freescript
					initialInView={true}
					variants={variants}
					className={styles.sectionFreescript}
				>
					The unrivalled meal card solution
				</Freescript>
				<Card as="figure" className={styles.card}>
					<header className={styles.cardHeader}>
						<img src={EatLogo} alt="" />
						<Badge>Meal card</Badge>
					</header>
					<h3 className={styles.title}>Enjoy your meals anywhere you want</h3>
					<p>
						Our prepaid meal card by Mastercard is designed to offer to both our
						corporate customers and users an unmatched experience that’s simple
						&amp; fun.
					</p>
					<p className={styles.excemptions}>
						Tax exemption: 6 euros per day / 1,452 euros per year per employee
					</p>
					<h4 className={styles.listTitle}>Benefits</h4>
					<ul className={styles.list}>
						<li>
							Order &amp; load cards online in seconds, download invoices &amp;
							reports in a click
						</li>
						<li>
							Best in class service: Quantified &amp; qualified with a monthly
							report
						</li>
						<li>Our cards are accepted everywhere in Greece</li>
						<li>Use our app for full control &amp; mobile payments</li>
					</ul>
					<img className={styles.creditcard} src={CreditCard} alt="" />
					<Button as="a" href="#" theme="droplet" brand className={styles.more}>
						Tell me more <img src={FatArrowRight} alt="" />
					</Button>
				</Card>
				<div className={styles.eatSticker}>
					<img src={StickerCup} alt="" />
				</div>
			</header>
			<img src={EatIllustration} alt="" />
		</section>
	)
}

export default Eat
