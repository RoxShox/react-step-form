import * as yup from "yup"
import { FormSteps } from "../../enum"

export const validationSchemeDict: Record<FormSteps, yup.AnyObjectSchema> = {
	[FormSteps.FirstStep]: yup.object().shape({
		name: yup
			.string()
			.required()
			.matches(/^[а-яА-ЯёЁa-zA-Z]+$/, "Имя может содержать только буквы ")
			.max(50),
		nickname: yup
			.string()
			.max(30)
			.required("Обязательное поле")
			.matches(
				/^[а-яА-ЯёЁa-zA-Z0-9]+$/,
				"Никнейм может содержать только буквы или цифры"
			),

		surname: yup
			.string()
			.required()
			.matches(/^[а-яА-ЯёЁa-zA-Z]+$/, "Фамилия может содержать только буквы ")
			.max(50),
		sex: yup.string().required(),
	}),
	[FormSteps.SecondStep]: yup.object().shape({
		advantages: yup.array().of(
			yup.object().shape({
				advantages: yup.string().required("Обязательное поле"),
			})
		),
		checkbox: yup.array().min(1),
		radio: yup.string().required(),
	}),
	[FormSteps.ThirdStep]: yup.object().shape({
		about: yup.string().max(200).required(),
	}),
}
