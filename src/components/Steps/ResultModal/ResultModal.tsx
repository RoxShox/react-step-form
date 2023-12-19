import React from "react"
import styles from "./ResultModal.module.scss"
import { ReactComponent as DoneIcon } from "../../../assets/img/icon-done.svg"
import { ReactComponent as ErrorIcon } from "../../../assets/img/icon-error.svg"
import { useAppSelector } from "../../../hooks/redux"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import {
	Status,
	closeModal,
	setCurrentStep,
} from "../../../redux/slices/formSlice"

import { ReactComponent as CloseModalIcon } from "../../../assets/img/close-modal.svg"
import clsx from "clsx"
import { FormSteps } from "../../../enum"

const ResultModal = () => {
	let { status } = useAppSelector((state) => state.form)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const resetHandler = () => {
		if (status === Status.ERROR) {
			dispatch(closeModal(false))
		} else {
			dispatch(setCurrentStep(FormSteps.FirstStep))
			dispatch(closeModal(false))
			navigate("/")
		}
	}
	const isErrorForm = status === Status.ERROR
	const modalTitleError = clsx({
		[styles.modalTitle]: true,
		[styles.modalTitleError]: isErrorForm,
	})
	const modalBtnError = clsx({
		[styles.modalBtn]: true,
		[styles.modalBtnError]: isErrorForm,
	})
	const modalIconError = clsx({
		[styles.modalIconDone]: true,
		[styles.modalIconError]: isErrorForm,
	})
	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}>
				{isErrorForm && (
					<button
						className={styles.closeModal}
						onClick={() => dispatch(closeModal(false))}
					>
						<CloseModalIcon />
					</button>
				)}
				<h3 className={modalTitleError}>
					{isErrorForm ? "Ошибка" : "Форма успешно отправлена"}
				</h3>
				<div className={modalIconError}>
					{isErrorForm ? <ErrorIcon /> : <DoneIcon />}
				</div>
				<button onClick={resetHandler} className={modalBtnError}>
					{isErrorForm ? "Закрыть" : "На главную"}
				</button>
			</div>
		</div>
	)
}

export default ResultModal
