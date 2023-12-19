import React from "react"
import { ReactComponent as DeleteIcon } from "../../../../../assets/img/icon-delete.svg"
import { ErrorMessage } from "@hookform/error-message"
import styles from "../../SecondStep.module.scss"
import { UseFieldArrayRemove, useFormContext } from "react-hook-form"

interface BenefitProps {
	item: Record<"id", string>
	index: number
	remove: UseFieldArrayRemove
}

const Benefit = ({ item, index, remove }: BenefitProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	return (
		<li key={item.id} className={styles.fieldWrap}>
			<div className={styles.fieldsRow}>
				<input
					{...register(`advantages.${index}.advantages`)}
					className={styles.input}
					placeholder="Placeholder"
				/>

				<button
					className={styles.removeBtn}
					type="button"
					onClick={() => remove(index)}
				>
					<DeleteIcon />
				</button>
			</div>
			<ErrorMessage
				errors={errors}
				name={`advantages.${index}.advantages`}
				render={({ message }) => <p className={styles.errorField}>{message}</p>}
			/>
		</li>
	)
}

export default Benefit
