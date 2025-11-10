import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Nav from "./components/Nav/Nav";


const Languageselector = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(() => {
        try {
            const saveLange = localStorage.getItem("lang");///فرخوانی مقدار فعلی از لوکال
            return saveLange ? JSON.parse(saveLange) : "en";/// اگر مقدار فعلی درست بود ذخیره شود در غیر اینصورت زبان پیش فرض انگلیسی 
        } catch (err) {
            console.log(err);
        };
    });

    const languages = [
        { code: "en", lang: "EN" },
        { code: "fa", lang: "FA" }
    ];

    const nextLanguage = languages.find(l => l.code !== i18n.language) || languages[0];//در دکمه تغییر زبان موردی رو نمایش بده که مخالف مقدار فعلی هست


    const changeLanguage = () => {
        ///با کلیک کاربر صدا زده میشه و مقدار جدید در state ذخیره میشه
        setLang(nextLanguage.code);///زبان بعدی رو که کاربر انتخاب میکنه ذخیره کن در state
        try {
            window.localStorage.setItem("lang", JSON.stringify(nextLanguage.code));//همون زبان بعدی رو در لوکال ذخیره کن
        } catch (err) {
            console.log(err)
        };
    };

/// با کلیک روی دکمه تغییر زبان این اجرا میشه
    useEffect(() => {
        document.body.dir = i18n.dir();
        i18n.changeLanguage(lang)/// ارسال برای مقایسه و ترجمه
    }, [i18n, i18n.language, lang]);


    return (
        <div className="bg-white flex items-center  gap-2 p-2">
            <button className="bg-purple-600 box-border  border-xl hover:bg-purple-700 p-3 
            rounded-sm text-white cursor-pointer" onClick={changeLanguage}>
                {nextLanguage.lang}
            </button>
         <Nav />
        </div>
    );
};

export default Languageselector;


// مراحل تغییر زبان:
// 1. کاربر روی دکمه کلیک می‌کند.
// 2. setLang مقدار جدید را در state قرار می‌دهد.
// 3. ری‌اکت با مقدار جدید دوباره رندر می‌شود.
// 4. useEffect به تغییر lang واکنش نشان می‌دهد.
// 5. i18n.changeLanguage زبان جدید را اعمال می‌کند.
