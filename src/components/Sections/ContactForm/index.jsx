import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import "yup-phone"
import CalendarIcon from "../../../assets/icon-calendar.svg"
import Button from "../../Button"
import { Input, Select } from "../../FormElements"
import styles from "./ContactForm.module.scss"
import Checkbox from "../../FormElements/Checkbox"

const schema = yup.object().shape({
	fullName: yup.string().required("This field is required"),
	email: yup
		.string()
		.email("The email is not valid")
		.required("This field is required"),
	phone: yup.string().phone().required("This field is required"),
	product: yup.string(),
	terms: yup
		.boolean()
		.oneOf([true], "You must accept the terms to continue")
		.required()
})

const defaultValues = {
	fullName: "",
	email: "",
	phone: "",
	product: "",
	terms: false
}

export default function ContactForm() {
	const { register, getValues, watch, handleSubmit, formState } = useForm({
		mode: "onChange",
		defaultValues,
		resolver: yupResolver(schema)
	})
	const watchTerms = watch("terms", false)
	const { errors, isValid, isDirty } = formState
	const onSubmit = (data) => console.log(data)

	return (
		<section className={styles.section}>
			<h2 className={styles.title}>
				I am interested in getting the benefits of <span>Up Hellas</span>
			</h2>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Input
					label="Name & Surname"
					name="fullName"
					register={register}
					required
					errors={errors?.fullName}
				/>
				<Input
					type="email"
					label="Email"
					name="email"
					register={register}
					required
					errors={errors?.email}
				/>
				<Input
					name="phone"
					label="Phone"
					register={register}
					required
					errors={errors?.phone}
				/>
				<Select
					label="Product"
					name="product"
					register={register}
					errors={errors?.product}
					options={[
						{ label: "", value: "", default: true },
						{ label: "Digital", value: "digital" },
						{ label: "Physical", value: "physical" }
					]}
				/>
				<Checkbox
					name="terms"
					register={register}
					errors={errors?.terms}
					checked={getValues("terms")}
					className={styles.terms}
				>
					Επιθυμώ να χρησιμοποιηθούν τα παραπάνω στοιχεία μου από την Up Hellas,
					προκειμένου να ενημερωθώ για τα προϊόντα της, βάσει και του Γενικού
					Κανονισμού για την Προστασία Προσωπικών Δεδομένων που ισχύει από
					25/5/2018.
				</Checkbox>
				<footer className={styles.formFooter}>
					<Button type="submit" primary disabled={!isValid}>
						Send us your message
					</Button>
					<span>or</span>
					<Button as="a" href="#">
						<img src={CalendarIcon} alt="" />
						Schedule a meeting
					</Button>
				</footer>
			</form>
		</section>
	)
}
