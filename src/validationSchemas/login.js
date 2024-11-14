import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Correo Electronico Invalido")
    .required("El correo electronico es requerido"),
  password: yup
    .string()
    .min(5, "La contraseña debe tener al menos 5 caracteres")
    .max(50, "La contraseña debe tener menos de 50 caracteres")
    .required("La contraseña es requerida"),
});
