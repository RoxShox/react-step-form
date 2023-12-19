import { ErrorMessage } from "@hookform/error-message"
import React from "react"
import { useFormContext } from "react-hook-form"
import styles from "./DefaultInput.module.scss"
import clsx from "clsx"
interface DefaultInputProps {
	type: string
	value: string
	placeholder: string
	label: string
	children?: React.ReactNode
	className?: string
}
const DefaultInput = ({
	type,
	value,
	placeholder,
	label,
	className,
	children,
}: DefaultInputProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()
	const inputError = clsx({
		[styles.inputError]: errors[value] && errors[value]?.message,
	})

	return (
		<div className={className}>
			<label>
				<span>{label}</span>
				<input
					className={inputError}
					type={type}
					{...register(value)}
					placeholder={placeholder}
				/>
			</label>
			{children}
			<ErrorMessage
				errors={errors}
				name={value}
				render={({ message }) => <p className={styles.error}>{message}</p>}
			/>
		</div>
	)
}

export default DefaultInput
