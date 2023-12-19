import * as yup from "yup"
import { regExpEmail } from "../../regExp"

export const validationSchema = yup.object({
	email: yup
		.string()
		.required("email is required")
		.email("Введите правильный email"),
	// .matches(regExpEmail, "Введите правильный email"),
	phone: yup
		.string()
		.required("Phone is required")
		.min(11, "Введите полный номер телефона"),
})
