import React from "react"
import styles from "./StepCheck.module.scss"
import { useAppSelector } from "../../../hooks/redux"
import clsx from "clsx"
import { ReactComponent as StepDoneIcon } from "../../../assets/img/step-done.svg"
interface StepCheckProps {
	step: number
}

const StepCheck = ({ step }: StepCheckProps) => {
	let { curentStep } = useAppSelector((state) => state.form)
	const activeCircle = clsx({
		[styles.stepCircle]: true,
		[styles.activeCircle]: curentStep === step,
		[styles.activeCircleDone]: curentStep > step,
	})
	const activeNum = clsx({
		[styles.stepNumActive]: curentStep === step,
		[styles.stepNumDone]: curentStep > step,
	})

	return (
		<div className={styles.stepItem}>
			<div className={activeCircle}>
				{curentStep > step && <StepDoneIcon />}
			</div>
			<span className={activeNum}>{step}</span>
		</div>
	)
}

export default StepCheck
