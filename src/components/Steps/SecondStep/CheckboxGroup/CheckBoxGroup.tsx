import Checkbox from "./Checkbox/Checkbox"
import styles from "./CheckboxGroup.module.scss"

const CheckBoxGroup = () => {
	return (
		<div className={styles.checkboxItems}>
			<h4 className={styles.title}>Checkbox группа</h4>

			<Checkbox value="1" />
			<Checkbox value="2" />
			<Checkbox value="3" />
		</div>
	)
}

export default CheckBoxGroup
