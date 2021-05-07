export const validatePassword = (password) => {
  const LETRAS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  if (password.length >= 6 && password.length <= 10) {
    let possuiLetras = false;
    let possuiNumeros = false;
    for (let i = 0; i < password.length; i++) {
      for (let e = 0; e < LETRAS.length; e++) {
        if (password.substring(i, i + 1) === LETRAS[e]) {
          possuiLetras = true;
        }
      }
      for (let y = 0; y < 10; y++) {
        if (password.substring(i, i + 1) === "" + y) {
          possuiNumeros = true;
        }
      }
    }
    if (possuiLetras === true && possuiNumeros === true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
