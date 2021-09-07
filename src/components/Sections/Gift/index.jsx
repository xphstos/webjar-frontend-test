import React from "react"
import { Card } from "../../Card"
import GiftLogo from "../../../assets/up-logo-gift.svg"
import CreditCard from "../../../assets/credit-card-gift.png"
import classNames from "classnames"
import VictorySticker from "../../../assets/sticker-victory.svg"
import GiftIllustration from "../../../assets/illustration-section-gift.png"
import FatArrowRight from "../../../assets/icon-fat-arrow-right.png"
import Button from "../../Button"
import { Freescript } from "../../Freescript"
import Badge from "../../Badge"
import styles from "../SectionCommon.module.scss"
import giftStyles from "./Gift.module.scss"
Object.assign(styles, giftStyles)

const variants = {
	visible: { scale: 1, opacity: 1, rotate: -4 },
	hidden: {
		scale: 0,
		opacity: 0,
		rotate: 0
	}
}

const Gift = () => {
	return (
		<section className={classNames(styles.section, styles.giftSection)}>
			<header className={classNames(styles.header, styles.giftHeader)}>
				<Freescript
					initialInView={true}
					variants={variants}
					className={styles.sectionFreescript}
				>
					The perfect gift
				</Freescript>
				<Card as="figure" className={styles.card}>
					<header className={styles.cardHeader}>
						<img src={GiftLogo} alt="" />
						<Badge theme="watermelon">Gift card</Badge>
					</header>
					<h3 className={styles.title}>
						Everything you desire in a single tap
					</h3>
					<p>
						Our reloadable gift card is the perfect gift to reward, to
						incentivise, to celebrate!
					</p>
					<p className={styles.excemptions}>
						Tax exemption: 300 euros per year per employee
					</p>
					<h4 className={styles.listTitle}>Benefits</h4>
					<ul className={styles.list}>
						<li>
							Order &amp; load cards online in seconds, download invoices &amp;
							reports in a click
						</li>
						<li>
							Buy everything you want - electronics, clothing, cosmetics and so
							much more
						</li>
						<li>Our app is loaded with crazy-fun features</li>
					</ul>
					<img className={styles.creditcard} src={CreditCard} alt="" />
					<Button
						as="a"
						href="#"
						theme="droplet"
						watermelon
						className={styles.more}
					>
						Tell me more <img src={FatArrowRight} alt="" />
					</Button>
				</Card>
				<div className={styles.giftSticker}>
					<img src={VictorySticker} alt="" />
				</div>
			</header>
			<img className={styles.illustration} src={GiftIllustration} alt="" />
		</section>
	)
}

export default Gift
