import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import type { JSX } from "react";
import type { InferType } from "yup";
import type { schema } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import { useTranslation } from "react-i18next";


type FormValues = InferType<typeof schema>;

const Signup = (): JSX.Element => {

    const { t, i18n } = useTranslation()

    const schema = yup.object().shape({
        name: yup.string().required("فیلد نام اجباری است"),
        email: yup.string().email("ایمیل نامعتبر است").required("وارد کردن ایمیل اجباری است"),
        age: yup.number().positive().min(18).max(100).required(),
        password: yup.string().min(4).max(15).matches(/[a-z]+/, "رمز باید شامل یک حرف کوچک انگلیسی باشد").matches(/[A-Z]+/, " رمز باید شامل یک حرف بزرگ انگلیسی باشد").matches(/\d+/).required(),///regular expression(regex)  برای اجباری بودن حرف بزرگ و کوچیک یا کاراکتر خاص 
        confrimpassword: yup.string().oneOf([yup.ref("password")], "مقدار وارد شده با پسورد اصلی مطابقت ندارد").required(),
    });

    const { handleSubmit: submit, register, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
    const onSubmitForm: SubmitHandler<FormValues> = (data) => {
        console.log("data:", data)
    };

    return (
        <div >
            <form action="" onSubmit={submit(onSubmitForm)} className="flex flex-col justify-center items-center">

                <input type="text" className="border outline-0 m-2 p-1"
                    placeholder={`${i18n.language === "en" ? "name..." : "نام..."}`} {...register("name")} />
                {errors.name && (<p>{errors.name?.message}</p>)}


                <input type="email" placeholder={`${i18n.language === "en" ? "email..." : "ایمیل..."}`}
                    className="border outline-0 m-2 p-1" {...register("email")} />
                {errors.email && (<p>{errors.email?.message}</p>)}


                <input type="age" placeholder={`${i18n.language === "en" ? "age..." : "سن..."}`}
                    className="border outline-0 m-2 p-1" {...register("age")} />
                {errors.email && (<p>{errors.email?.message}</p>)}


                <input type="password" placeholder={`${i18n.language === "en" ? "password..." : "رمز عبور..."}`}
                    className="border outline-0 m-2 p-1" {...register("password")} />
                {errors.email && (<p>{errors.email?.message}</p>)}


                <input type="password" placeholder={`${i18n.language === "en" ? "confrimpassword..." : "تایید رمز عبور..."}`}
                    className="border outline-0 m-2 p-1" {...register("confrimpassword")} />
                {errors.email && (<p>{errors.email?.message}</p>)}

                <button type="submit"  className="cursor-pointer bg-fuchsia-800 rounded p-2 mt-5">{t("Login")}</button>
            </form>
        </div>
    )

}

export default Signup