import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "~/components";

type FormData = z.infer<typeof FormData>;
const FormData = z.object({
  email: z.string().email("Електронна пошта недійсна"),
  username: z
    .string()
    .min(5, "Ім'я користувача повинно містити принаймні 5 символів")
    .max(16, "Ім'я користувача повинно містити не більше 16 символів"),
  password: z
    .string()
    .min(8, { message: "Пароль повинен містити принаймні 8 символів." })
    .max(16, { message: "Пароль повинен містити не більше 16 символів." })
    .regex(/[^a-zA-Z0-9]+/g, {
      message: "Пароль повинен містити принаймні 1 не буквено-цифровий символ.",
    })
    .refine(
      (val) => val.split("").some((ch) => ch === ch.toLocaleUpperCase()),
      {
        message:
          "Пароль повинен містити принаймні 1 символ у верхньому регістрі.",
      },
    )
    .refine(
      (val) => val.split("").some((ch) => ch === ch.toLocaleLowerCase()),
      {
        message:
          "Пароль повинен містити принаймні 1 символ у нижньому регістрі.",
      },
    ),
});

export default function ExampleFormPage() {
  const { register, formState, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(FormData),
  });

  console.warn(formState.errors);

  return (
    <div className="vr-mx-auto vr-max-w-[1200px] vr-py-12 vr-text-slate-800">
      <h1 className="vr-mb-8 vr-text-center vr-text-5xl vr-font-bold">
        Приклад форми
      </h1>
      <div>
        <form className="vr-space-y-12" onSubmit={handleSubmit(console.log)}>
          <div className="vr-grid vr-grid-cols-3 vr-gap-7">
            <div className="vr-flex vr-flex-col vr-space-y-3">
              <label>email</label>
              <Input {...register("email")} />
              {formState.errors?.email?.message && (
                <p className="vr-text-red-600">
                  {formState.errors.email.message}
                </p>
              )}
            </div>

            <div className="vr-flex vr-flex-col vr-space-y-3">
              <label>username</label>
              <Input {...register("username")} />
              {formState.errors?.username?.message && (
                <p className="vr-text-red-600">
                  {formState.errors.username.message}
                </p>
              )}
            </div>

            <div className="vr-flex vr-flex-col vr-space-y-3">
              <label>Password</label>
              <Input {...register("password")} />
              {formState.errors?.password?.message && (
                <p className="vr-text-red-600">
                  {formState.errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="vr-flex vr-w-full vr-items-center vr-justify-center">
            <Button className="vr-inline-flex" type="submit">
              Відправити
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
