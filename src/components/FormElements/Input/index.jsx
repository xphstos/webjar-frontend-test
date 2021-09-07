import classNames from "classnames"
import React from "react"

import styles from "../Inputs.module.scss"

const Input = ({
	className,
	label,
	name,
	errors,
	type = "text",
	register,
	required
}) => {
	return (
		<label className={classNames(styles.inputField, className)}>
			<span className={styles.label}>{label}</span>
			<input
				className={styles.input}
				type={type}
				{...register(name)}
				aria-invalid={errors ? "true" : "false"}
			/>
			{errors && <p className={styles.errors}>{errors.message}</p>}
		</label>
	)
}

export default Input
