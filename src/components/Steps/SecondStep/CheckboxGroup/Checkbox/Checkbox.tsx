import React from "react"
import { useFormContext } from "react-hook-form"
import styles from "../CheckboxGroup.module.scss"
interface CheckboxProps {
	value: string
}
const Checkbox = ({ value }: CheckboxProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()
	return (
		<div className={styles.checkboxWrapper}>
			<label className={styles.labelCheckbox}>
				<input
					className={styles.checkboxInput}
					type="checkbox"
					{...register("checkbox")}
					value={value}
				/>
				<span className={styles.checkboxInputStyles}></span>
				<span className={styles.checkboxValue}>{value}</span>
			</label>
			{errors.checkbox && (
				<p className={styles.checkboxError}>
					Вы должны выбрать хотя бы один чекбокс
				</p>
			)}
		</div>
	)
}

export default Checkbox
