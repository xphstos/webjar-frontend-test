import React, { useRef } from "react"
import styles from "./Freescript.module.scss"
import InView from "react-intersection-observer"
import { AnimatePresence, motion } from "framer-motion"
import classNames from "classnames"

const defaultVariants = {
	visible: { scale: 1, opacity: 1, x: "-1em", rotate: -4 },
	hidden: {
		scale: 0,
		opacity: 0,
		x: "-1rem",
		rotate: 0
	}
}

const transition = {
	delay: 0,
	duration: 0.2,
	type: "spring",
	damping: 10,
	mass: 0.75,
	stiffness: 100
}

export const Freescript = ({
	className,
	variants = defaultVariants,
	threshold = 0,
	initialInView = false,
	triggerOnce = false,
	...props
}) => {
	return (
		<AnimatePresence>
			<InView
				threshold={threshold}
				initialInView={initialInView}
				triggerOnce={triggerOnce}
			>
				{({ ref, inView, entry }) => {
					return (
						inView && (
							<motion.p
								ref={ref}
								className={classNames(styles.freescript, className)}
								initial="hidden"
								animate="visible"
								variants={variants}
								transition={transition}
							>
								{props.children}
							</motion.p>
						)
					)
				}}
			</InView>
		</AnimatePresence>
	)
}
