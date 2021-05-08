import * as yup from "yup";

export const ClienteSchema = yup.object().shape({
	nome: yup.string().required("Campo obrigatório"),
	cpf: yup
		.string()
		.matches(/^[0-9]+$/, "Deve conter apenas dígitos")
		.min(11, "Deve conter exatamente 11 dígitos")
		.max(11, "Deve conter exatamente 11 dígitos")
		.required("Campo obrigatório"),
	dataNascimento: yup
		.date()
		.max(new Date(), "Deve ser anterior à data atual")
		.required("Campo obrigatório"),
});

export const ConsultaSchema = yup.object().shape({
	exame: yup.string().required("Campo obrigatório"),
	data: yup
		.date() //  min == data de hoje - (menos) um dia
		.min(new Date(Date.now() - 86400000), "Deve ser igual ou posterior à data atual")
		.required("Campo obrigatório"),
	hora: yup
		.string()
		.matches(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/gm, "Deve estar o formato HH:MM")
		.min(5, "Deve estar no formato HH:MM")
		.max(5, "Deve estar no formato HH:MM")
		.required("Campo obrigatório"),
});
