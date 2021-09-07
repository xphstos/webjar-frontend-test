import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import styles from "./Badge.module.scss"

const Badge = ({ theme, className, children }) => {
	return (
		<span className={classNames(styles.badge, styles[theme], className)}>
			{children}
		</span>
	)
}

Badge.defaultProps = {
	theme: "orange"
}

Badge.propTypes = {
	theme: PropTypes.oneOf(["orange", "watermelon"])
}

export default Badge
