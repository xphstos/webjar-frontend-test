import classNames from "classnames"
import React from "react"

import styles from "../Inputs.module.scss"

const Checkbox = ({ className, checked, name, errors, children, register }) => {
	return (
		<label className={classNames(styles.checkboxField, className)}>
			<input
				className={styles.inputHidden}
				type="checkbox"
				name={name}
				{...register(name)}
				aria-invalid={errors ? "true" : "false"}
			/>
			<div
				className={classNames(styles.checkbox, {
					[styles.checkboxChecked]: checked
				})}
			/>
			<span className={styles.checkboxLabel}>{children}</span>
			{errors && <p className={styles.checkboxErrors}>{errors.message}</p>}
		</label>
	)
}

export default Checkbox
