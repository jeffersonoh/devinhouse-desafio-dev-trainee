import DialogoOPEditar from 'components/dialogo/DialogoOPEditar';
import DialogoOPExcluir from 'components/dialogo/DialogoOPExcluir';
import { useAuth } from 'providers/auth';
import React, { Fragment, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const info = (msg) => toast.info(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

const erro = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

const Respostas = () => {
    const { resposta, setResposta, index, dialogo } = useAuth();

    useEffect(() => {
        //VERBOS HTTP
        if (resposta === 201) { info("Marcação foi cadastrada!"); }
        if (resposta === 202) { info("Marcação foi editada!"); }
        if (resposta === 203) { info("Marcação foi excluida!"); }
        if (resposta === 204) { info("Cliente foi cadastrado!"); }
        if (resposta === 205) { info("Cliente foi editado!"); }
        if (resposta === 206) { info("Cliente foi excluido!"); }
        if (resposta === 207) { info("Pesquisa concluída!"); }
        if (resposta === 401) { erro("Marcação não foi cadastrada!"); }
        if (resposta === 402) { erro("Marcação não foi editada!"); }
        if (resposta === 403) { erro("Marcação não foi excluida!"); }
        if (resposta === 404) { erro("Cliente não foi cadastrado! (CPF já cadastrado)"); }
        if (resposta === 405) { erro("Cliente não foi editado! (CPF já cadastrado)"); }
        if (resposta === 406) { erro("Cliente não foi excluido!"); }

        //VALIDAÇÕES COMPONENTS
        if (resposta === 901) { erro("Cliente não é valido!"); }
        if (resposta === 902) { erro("Data não é valida!"); }
        if (resposta === 903) { erro("Horário não é valido!"); }
        if (resposta === 904) { erro("Hora não é valida!"); }
        if (resposta === 905) { erro("Minuto não é valido!"); }
        if (resposta === 906) { erro("Exame não é valido!"); }
        if (resposta === 907) { erro("Nome não é valido!"); }
        if (resposta === 908) { erro("CPF não é valido!"); }
        if (resposta === 909) { erro("Data de nascimento não é valida!"); }

        setResposta(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resposta])

    return (
        <Fragment>
            {(index === 3 && dialogo) &&
                <DialogoOPEditar />
            }
            {(index === 4 && dialogo) &&
                <DialogoOPExcluir />
            }
            <ToastContainer />
        </Fragment>
    );
}

export default Respostas;