import React from "react"
import DefaultInput from "../../ui/DefaultInput/DefaultInput"
import styles from "./FirstStep.module.scss"
import MuiSelect from "../../ui/MuiSelect/MuiSelect"

export default function FirstStep() {
	return (
		<>
			<DefaultInput
				className={styles.input}
				type="text"
				value="nickname"
				placeholder="Placeholder"
				label="Никнейм"
			>
				<span className={styles.inputTip}>Tip</span>
			</DefaultInput>
			<DefaultInput
				className={styles.input}
				type="text"
				value="name"
				placeholder="Placeholder"
				label="Имя"
			>
				<span className={styles.inputTip}>Tip</span>
			</DefaultInput>
			<DefaultInput
				className={styles.input}
				type="text"
				value="surname"
				placeholder="Placeholder"
				label="Фамилия"
			>
				<span className={styles.inputTip}>Tip</span>
			</DefaultInput>
			<MuiSelect />
		</>
	)
}
