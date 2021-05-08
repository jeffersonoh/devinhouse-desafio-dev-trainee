import MuiAlert from "@material-ui/lab/Alert";

export const cpfMask = (value) => {
	return value
		.replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
		.replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
		.replace(/(\d{3})(\d)/, "$1.$2")
		.replace(/(\d{3})(\d{1,2})/, "$1-$2")
		.replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const dateMask = (value) => {
	const data = new Date(value + "T12:00:00");
	return data.toLocaleDateString("pt-BR");
};

export const timeMask = (value) => {
	return value.slice(0, 5);
};

export function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}
