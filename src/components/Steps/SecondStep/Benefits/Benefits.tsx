import React from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import styles from "../SecondStep.module.scss"
import Benefit from "./Benefit/Benefit"
const Benefits = () => {
	const { control } = useFormContext()
	const { fields, append, remove } = useFieldArray({
		control,
		name: "advantages",
	})
	return (
		<div className={styles.benefits}>
			<h4 className={styles.benefitsTitle}>Преимущества</h4>
			<ul>
				{fields.map((item, index) => {
					return (
						<Benefit key={item.id} item={item} index={index} remove={remove} />
					)
				})}
			</ul>

			<button
				type="button"
				className={styles.addBtn}
				onClick={() => {
					append({ advantages: "" })
				}}
			>
				+
			</button>
		</div>
	)
}

export default Benefits
