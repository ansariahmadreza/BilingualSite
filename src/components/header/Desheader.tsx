import { useTranslation } from "react-i18next"

const DescripHeader = () => {

    const { t, i18n } = useTranslation()
    return (
        <div>
            <section className="flex justify  items-center max-lg:grid">
                <div>
                    <img src={`${import.meta.env.BASE_URL}image/designthinking.webp`} className={`w-[600px] h-[350px] rounded-2xl  ${i18n.language === "en" ?
                         "ml-[60px] max-md:ml-10" : "mr-[-60px] max-md:mr-[-3px]"} `} />
                </div>
         
                <div className="ml-[90px]">
                    <p className="text-neutral-600">{t("titleTow")}</p>
                    <p className="font-bold text-2xl w-[400px] py-4">{t("headerTow")}</p>
                    <p className="text-neutral-400 text-sm w-[450px]">{t("desTow")}</p>
                </div>
            </section>

            <div className="ml-[100px] mt-[50px] w-[1200px] max-md:ml-12 max-md:w-[550px] max-lg:w-[800px]">
                <p>{t("desAll")}</p>
            </div>
        </div>
    )
}

export default DescripHeader