import React from "react"
import styles from "./ThirdStep.module.scss"
import { useFormContext } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
const ThirdStep = () => {
	const {
		register,
		watch,
		formState: { errors },
	} = useFormContext()
	const textareaWatch = watch("about")

	return (
		<>
			<label>
				<span className={styles.textareaTitle}>О себе</span>
				<textarea
					className={styles.formTextarea}
					{...register("about")}
					placeholder="Placeholder"
				></textarea>
				<div className={styles.decorWrap}>
					<span>Tip</span>
					<span className={styles.decorCountWord}>{textareaWatch?.length}</span>
				</div>
				<ErrorMessage
					errors={errors}
					name={"about"}
					render={({ message }) => <p className={styles.error}>{message}</p>}
				/>
			</label>
		</>
	)
}

export default ThirdStep
