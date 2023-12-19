import React from "react"
import { useFormContext } from "react-hook-form"
import styles from "../SecondStep.module.scss"
const RadioGroup = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext()
	return (
		<div className={styles.radioItems}>
			<h4 className={styles.radioTitle}>Radio группа</h4>
			<div className={styles.radioItem}>
				<input type="radio" {...register("radio")} value="1" />
				<label> 1</label>
			</div>
			<div className={styles.radioItem}>
				<input type="radio" {...register("radio")} value="2" />
				<label> 2</label>
			</div>
			<div className={styles.radioItem}>
				<input type="radio" {...register("radio")} value="3" />
				<label> 3</label>
			</div>
			<p style={{ color: "red" }}>{errors.radio && "Radio is required"}</p>
		</div>
	)
}

export default RadioGroup
