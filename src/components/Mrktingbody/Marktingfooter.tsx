import { useTranslation } from "react-i18next"
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"

const Marktingfooter = () => {

    const { t, i18n } = useTranslation()

    return (
        <div>
            <div className={`${i18n.language === "en" ? "ml-65 max-xl:ml-[75px]" : "mr-16 max-xl:-mr-20"}  flex justify-center items-center  mt-10 w-5xl`}>
                <section className="hover:cursor-pointer  hover:text-purple-800">
                    <Link to={"/imgMarkting4"} >
                        <img src={`${import.meta.env.BASE_URL}image/mark-4.avif`} className="w-92 h-90 rounded-lg object-center max-xl:w-90 max-xl:h-95" />
                    </Link>
                   
                    <h3 className="mb-10 w-100 max-xl:w-85 text-sm mt-5">{t("captinimgMark4")}</h3>
                </section>

                <section className={`${i18n.language === "en" ? "max-xl:mb-4" : " "}  mx-9 hover:cursor-pointer  hover:text-purple-800 max-xl:mt-8`}>
                    <Link to={"img5"}>
                        <img src={`${import.meta.env.BASE_URL}image/mark-5.jpeg`} className={` ${i18n.language === "en" ? "max-xl:mb-6" : "max-xl:mb-8"} w-90 h-90 rounded-lg 
                        object-cover -mt-5 max-xl:w-100 max-xl:h-95 `} />
                    </Link>
                    <p className="text-neutral-500 mt-5">{t("Digital marketing")}</p>
                    <h3 className="w-99 max-xl:w-85 text-sm">{t("captinimgMark5")}</h3>
                </section>

                <section className={` ${i18n.language === "en" ? "mb-7" : " mb-5"}  hover:cursor-pointer  hover:text-purple-800`}>
                    <Link to={"img6"}>
                        <img src={`${import.meta.env.BASE_URL}image/mark-6.webp`} className="w-90 h-90 rounded-lg max-xl:w-100 max-xl:h-95 " />
                    </Link>
                    <p className="text-neutral-500 mt-5">{t("Business")}</p>
                    <h3 className="w-100 max-xl:w-85 text-sm">{t("captinimgMark6")}</h3>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Marktingfooter