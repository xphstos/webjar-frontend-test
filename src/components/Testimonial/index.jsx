import React, { forwardRef } from "react"
import { motion } from "framer-motion"
import styles from "./Testimonial.module.scss"
import classNames from "classnames"

const Testimonial = forwardRef(
	({ className, data: { text, author, authorTitle, authorImage } }, ref) => {
		const authorSplit = author.slice(0, 1) + author.split(" ")[1].slice(0, 1)

		return (
			<figure className={classNames(styles.blockquote, className)} ref={ref}>
				<blockquote>
					<p className={styles.text}>{text}</p>
				</blockquote>
				<figcaption className={styles.footer}>
					{authorImage ? (
						<img src={authorImage} className={styles.avatar} alt="" />
					) : (
						<div className={styles.avatarWithNoImage}>{authorSplit}</div>
					)}
					<cite className={styles.authorName}>{author}</cite>
					<p className={styles.authorTitle}>{authorTitle}</p>
				</figcaption>
			</figure>
		)
	}
)

const MotionTestimonial = motion(Testimonial, { forwardMotionProps: true })

export { Testimonial, MotionTestimonial }
