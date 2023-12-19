import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"

import FirstStep from "../../components/Steps/FirstStep/FirstStep"
import SecondStep from "../../components/Steps/SecondStep/SecondStep"
import ThirdStep from "../../components/Steps/ThirdStep/ThirdStep"
import StepCheck from "../../components/ui/StepCheck/StepCheck"
import styles from "./StepsForm.module.scss"
import { postFormData, setCurrentStep } from "../../redux/slices/formSlice"
import { yupResolver } from "@hookform/resolvers/yup"
import { useLocation, useNavigate } from "react-router"
import ResultModal from "../../components/Steps/ResultModal/ResultModal"
import { validationSchemeDict } from "./shemas"
import { StepFormValues } from "./type"
import { FormSteps } from "../../enum"

const StepsForm = () => {
	const dispatch = useAppDispatch()
	let { curentStep, showModal } = useAppSelector((state) => state.form)
	const navigate = useNavigate()
	const { state } = useLocation()
	const paramsURL = state ? { ...state } : ""
	const methods = useForm<StepFormValues>({
		resolver: yupResolver(validationSchemeDict[curentStep]),
		defaultValues: {
			advantages: [
				{
					advantages: "",
				},
				{
					advantages: "",
				},
				{
					advantages: "",
				},
			],
		},
	})

	const onSubmit = (data: StepFormValues) => {
		dispatch(postFormData({ ...data, ...paramsURL }))
	}

	const nextStep = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		const isStepValid = await methods.trigger()

		if (isStepValid) {
			if (curentStep !== FormSteps.ThirdStep) {
				dispatch(setCurrentStep((curentStep += 1)))
				e.preventDefault()
			}
		}
	}
	const prevStep = () => {
		if (curentStep !== FormSteps.FirstStep) {
			dispatch(setCurrentStep((curentStep -= 1)))
		} else {
			navigate("/")
		}
	}

	const calculateProgressLine =
		curentStep !== FormSteps.ThirdStep ? curentStep * 50 - 50 : 100
	return (
		<div className={styles.wrapper}>
			<div className={styles.progressWrapper}>
				<div className={styles.line}>
					<div
						style={{ width: `${calculateProgressLine}%` }}
						className={styles.progressLine}
					></div>
				</div>
				<StepCheck step={FormSteps.FirstStep} />
				<StepCheck step={FormSteps.SecondStep} />
				<StepCheck step={FormSteps.ThirdStep} />
			</div>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					{curentStep === FormSteps.FirstStep && <FirstStep />}
					{curentStep === FormSteps.SecondStep && <SecondStep />}
					{curentStep === FormSteps.ThirdStep && <ThirdStep />}

					<div className={styles.btnWrap}>
						<button
							type="button"
							onClick={() => prevStep()}
							className={styles.btnPrev}
						>
							Назад
						</button>
						<button
							type={curentStep === FormSteps.ThirdStep ? "submit" : "button"}
							onClick={(e) => nextStep(e)}
							className={styles.btnNext}
						>
							{curentStep === FormSteps.ThirdStep ? "Отправить" : "Далее"}
						</button>
					</div>
				</form>
			</FormProvider>
			{showModal && <ResultModal />}
		</div>
	)
}

export default StepsForm
