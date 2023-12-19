import { FormProvider, useForm } from "react-hook-form"
import DefaultInput from "../../components/ui/DefaultInput/DefaultInput"
import styles from "./Main.module.scss"
import { useNavigate } from "react-router"
import { yupResolver } from "@hookform/resolvers/yup"
import FolderImage from "../../assets/img/folder.png"
import MaskInput from "../../components/MaskInput/MaskInput"
import { MainFormValues } from "./type"
import { validationSchema } from "./schemas"

const Main = () => {
	const methods = useForm<MainFormValues>({
		resolver: yupResolver(validationSchema),
	})

	const navigate = useNavigate()
	const onSubmit = (data: MainFormValues) => {
		navigate("/form", { state: { phone: data.phone, email: data.email } })
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.infoInner}>
				<div className={styles.infoCircle}>
					<span>АИ</span>
				</div>
				<div className={styles}>
					<h4 className={styles.nameTitle}>Алексей Иванов</h4>
					<div className={styles.itemsLink}>
						<div className={styles.itemLink}>
							<img src={FolderImage} alt="" />
							<span>Telegram</span>
						</div>
						<div className={styles.itemLink}>
							<img src={FolderImage} alt="" />
							<span>GitHub</span>
						</div>
						<div className={styles.itemLink}>
							<img src={FolderImage} alt="" />
							<span>Резюме</span>
						</div>
					</div>
				</div>
			</div>

			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
					<MaskInput />
					<DefaultInput
						className={styles.input}
						type="text"
						value="email"
						placeholder="webstudio.fractal@example.com"
						label="Email"
					/>
					<button className={styles.btn}>Начать</button>
				</form>
			</FormProvider>
		</div>
	)
}

export default Main
