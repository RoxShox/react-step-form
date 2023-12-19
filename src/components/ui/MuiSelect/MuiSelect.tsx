import { InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useFormContext } from "react-hook-form"
import { StyledFormControl } from "./styles"
import { ErrorMessage } from "@hookform/error-message"
import { useState } from "react"
const currencies = [
	{
		value: "sexOptionMan",
		label: "мужской",
	},
	{
		value: "sexOptionWoman",
		label: "женский",
	},
]
const MuiSelect = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext()
	const [answer, setAnswer] = useState("")

	return (
		<StyledFormControl>
			<span>Пол</span>
			<Select
				{...register("sex")}
				value={answer}
				displayEmpty
				onChange={(event) => setAnswer(event.target.value)}
				renderValue={answer !== "" ? undefined : () => <div>Не выбрано</div>}
			>
				{currencies.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
			<ErrorMessage
				errors={errors}
				name="sex"
				render={({ message }) => <p className="select-error">{message}</p>}
			/>
		</StyledFormControl>
	)
}

export default MuiSelect
