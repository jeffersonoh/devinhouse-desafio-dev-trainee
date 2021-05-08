import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const ExamesContext = createContext();

export const ExamesProvider = ({ children }) => {
	const [exames, setExames] = useState([]);

	useEffect(() => {
		buscarExames();
	}, []);

	const buscarExames = async () => {
		const response = await api
			.buscarExames()
			.then((response) => response)
			.catch((error) => error?.response);
		// console.log(response);

		if (response?.status === 200) {
			setExames(response.data);
		}
	};

	return <ExamesContext.Provider value={{ exames }}>{children}</ExamesContext.Provider>;
};

export function useExames() {
	const context = useContext(ExamesContext);

	if (!context) throw new Error("(!context) em useExames()");

	const { exames } = context;
	return { exames };
}
