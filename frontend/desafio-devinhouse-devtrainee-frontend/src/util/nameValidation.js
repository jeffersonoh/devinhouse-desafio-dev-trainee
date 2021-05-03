export const validateName = (name) => {
  for (let i = 0; i < name.length; i++) {
    for (let e = 0; e < 10; e++) {
      if (name.substring(i, i + 1) != " ") {
        if (name.substring(i, i + 1) == e) {
          console.log(name.substring(i, i + 1));
          return false;
        }
      }
    }
  }
};
