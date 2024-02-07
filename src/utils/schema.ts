
import * as yup from "yup";

export const schema = yup.object().shape({
    word: yup
      .string()
      .required("Este campo é obrigatório")
      .test(
        "no-leading-spaces",
        "A palavra não pode começar com espaços",
        (value) => {
          return !/^\s/.test(value);
        }
      )
      .matches(/^[^0-9]*$/, "Não pode conter números")
      .min(3, "Mínimo de 3 caracteres")
      .max(10, "Máximo de 10 caracteres"),
});

