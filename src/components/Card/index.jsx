import React, { forwardRef } from "react"
import { motion } from 'framer-motion'
import styles from './Card.module.scss'
import classNames from "classnames"

const Card = forwardRef(({
	as, className, ...rest
}, ref) => {
	const Tag = as
	return (
		<Tag {...rest} className={classNames(styles.card, className)} ref={ref}/>
	)
})

Card.defaultProps = {
	as: "article"
}

const MotionCard = motion(Card, { forwardMotionProps: true })

export {
	Card,
	MotionCard
}
