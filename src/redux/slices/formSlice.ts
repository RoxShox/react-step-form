import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { MainFormValues } from "../../screens/Main/type"
import { StepFormValues } from "../../screens/StepsForm/type"
import { FormSteps } from "../../enum"

interface PostFormData extends MainFormValues, StepFormValues {}

export const postFormData = createAsyncThunk(
	"form/postFormData",
	async (data: PostFormData) => {
		const response = await fetch(
			"https://62d7c00c49c87ff2af3bebec.mockapi.io/formData",
			{
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json;charset=utf-8",
				},
			}
		)
		const check = await response.json()
		console.log(check)
	}
)
export enum Status {
	LOADING = "loading",
	SUCCESS = "success",
	ERROR = "error",
}

export interface FormState {
	curentStep: FormSteps
	isSendForm: boolean
	status: Status
	showModal: boolean
}

const initialState: FormState = {
	curentStep: FormSteps.FirstStep,
	isSendForm: false,
	status: Status.LOADING,
	showModal: false,
}

export const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		setCurrentStep: (state, action: PayloadAction<FormSteps>) => {
			state.curentStep = action.payload
		},
		setSendForm: (state, action: PayloadAction<boolean>) => {
			state.isSendForm = action.payload
		},
		closeModal: (state, action: PayloadAction<boolean>) => {
			state.showModal = false
		},
	},
	extraReducers: (builder) => {
		builder.addCase(postFormData.pending, (state, action) => {
			state.status = Status.LOADING
		})

		builder.addCase(postFormData.fulfilled, (state, action) => {
			state.status = Status.SUCCESS
			state.showModal = true
		})

		builder.addCase(postFormData.rejected, (state, action) => {
			state.status = Status.ERROR
			state.showModal = true
		})
	},
})

export const { setCurrentStep, setSendForm, closeModal } = formSlice.actions

export default formSlice.reducer
