export const decorate = cpf => {
    cpf = undecorate(cpf);

    return (
     cpf.slice(0,3) + "."
     + cpf.slice(3,6) + "."
     + cpf.slice(6,9) + "-"
     + cpf.slice(9)
    );
};

export const undecorate = cpf => {
    cpf = cpf.replace(/\./g,"");
    cpf = cpf.replace(/-/g,"");
    return cpf;
};
