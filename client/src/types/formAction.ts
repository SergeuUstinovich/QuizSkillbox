import z from "zod";

export const FormScheme = z.object({
  username: z.string().nonempty("Имя обязательно для заполнения"),
  mobile_phone: z
    .string()
    .min(11, "Минимальное количество символов")
    .nonempty("Мобильный телефон обязателен для заполнения"),
  email: z
    .string()
    .email('Проверьте правильность ввода электронной почты')
    .nonempty("Почта обязательна для заполнения")
});

export type FormType = z.infer<typeof FormScheme>;
