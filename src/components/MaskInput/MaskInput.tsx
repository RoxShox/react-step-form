import { ErrorMessage } from "@hookform/error-message"
import styles from "../../screens/Main/Main.module.scss"
import { Controller, useFormContext } from "react-hook-form"
import { useIMask } from "react-imask"
import clsx from "clsx"
const MaskInput = () => {
	const mask = useIMask({
		mask: "+{7}(000) 000-00-00",
	})
	const {
		control,
		formState: { errors },
	} = useFormContext()

	const inputError = clsx({
		[styles.formInput]: true,
		[styles.inputError]: errors["phone"] && errors["phone"]?.message,
	})
	return (
		<div className={styles.inputMaskWrap}>
			<Controller
				render={(params) => (
					<label className={styles.labelWrap}>
						<span>Телефон</span>
						<input
							className={inputError}
							name={params.field.name}
							onBlur={params.field.onBlur}
							defaultValue={params.field.value}
							// @ts-ignore
							ref={mask.ref}
							onChange={() =>
								params.field.onChange({
									target: { value: mask.unmaskedValue },
								})
							}
							placeholder="+7 999 999-99-99"
						/>
					</label>
				)}
				name="phone"
				control={control}
			/>
			<ErrorMessage
				errors={errors}
				name={"phone"}
				render={({ message }) => <p className={styles.error}>{message}</p>}
			/>
		</div>
	)
}

export default MaskInput
