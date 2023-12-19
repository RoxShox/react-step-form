interface AdvantagesArray {
	advantages: string
}

export interface StepFormValues {
	name: string
	nickname: string
	surname: string
	sex: string
	advantages: AdvantagesArray[]
	about: string
}
