import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { JSX } from "react";
import type { InferType } from "yup";
import { useTranslation } from "react-i18next";

const schema = yup.object({
    name: yup.string().required("فیلد نام اجباری است"),
    email: yup.string().email("ایمیل نامعتبر است").required("وارد کردن ایمیل اجباری است"),
    age: yup.number().positive().min(18).max(100).required("سن باید بین 18 تا 100 باشد"),
    password: yup.string()
        .min(4)
        .max(15)
        .matches(/[a-z]+/, "رمز باید شامل یک حرف کوچک انگلیسی باشد")
        .matches(/[A-Z]+/, "رمز باید شامل یک حرف بزرگ انگلیسی باشد")
        .matches(/\d+/, "رمز باید شامل یک عدد باشد")
        .required("وارد کردن رمز عبور الزامی است"),
    confrimpassword: yup.string()
        .oneOf([yup.ref("password")], "مقدار وارد شده با پسورد اصلی مطابقت ندارد")
        .required("تایید رمز عبور الزامی است"),
});

type FormValues = InferType<typeof schema>;

const Signup = (): JSX.Element => {
    const { t, i18n } = useTranslation();

    const { handleSubmit, register, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmitForm: SubmitHandler<FormValues> = (data) => {
        console.log("data:", data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col justify-center items-center">

                <input type="text" placeholder={i18n.language === "en" ? "name..." : "نام..."} {...register("name")}
                    className="border outline-0 m-2 p-1" />
                {errors.name && <p>{errors.name?.message}</p>}

                <input type="email" placeholder={i18n.language === "en" ? "email..." : "ایمیل..."} {...register("email")}
                    className="border outline-0 m-2 p-1" />
                {errors.email && <p>{errors.email?.message}</p>}

                <input type="number" placeholder={i18n.language === "en" ? "age..." : "سن..."} {...register("age")}
                    className="border outline-0 m-2 p-1" />
                {errors.age && <p>{errors.age?.message}</p>}

                <input type="password" placeholder={i18n.language === "en" ? "password..." : "رمز عبور..."} {...register("password")}
                    className="border outline-0 m-2 p-1" />
                {errors.password && <p>{errors.password?.message}</p>}

                <input type="password" placeholder={i18n.language === "en" ? "confrimpassword..." : "تایید رمز عبور..."} {...register("confrimpassword")}
                    className="border outline-0 m-2 p-1" />
                {errors.confrimpassword && <p>{errors.confrimpassword?.message}</p>}

                <button type="submit" className="cursor-pointer bg-fuchsia-800 rounded p-2 mt-5">{t("Login")}</button>
            </form>
        </div>
    );
};

export default Signup