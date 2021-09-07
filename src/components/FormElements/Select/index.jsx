import classNames from "classnames"
import React from "react"
import ArrowDown from "../../../assets/icon-arrow-down.svg"
import styles from "../Inputs.module.scss"

const Select = ({
	className,
	label,
	name,
	errors,
	options,
	type = "text",
	register,
	required
}) => (
	<label className={classNames(styles.inputField, className)}>
		<span className={styles.label}>{label}</span>
		<div className={styles.selectWrapper}>
			<select
				className={styles.select}
				name={label}
				{...register(name)}
				aria-invalid={errors ? "true" : "false"}
			>
				{options.map((option, i) => (
					<option key={i} value={option.value} defaultValue={option.default}>
						{option.label}
					</option>
				))}
			</select>
			<img className={styles.selectArrow} src={ArrowDown} alt="" />
		</div>
	</label>
)

export default Select
