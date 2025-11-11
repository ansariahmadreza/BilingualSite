import { useTranslation } from "react-i18next"

const DescripHeader = () => {

    const { t, i18n } = useTranslation()
    return (
        <div>
            <section className="flex justify  items-center">
                <div>
                    <img src={"/src/data/image/designthinking.webp"} className={`w-[600px] h-[350px] rounded-2xl  ${i18n.language === "en" ? "ml-[60px]" : "mr-[-60px]"} `} />
                </div>

                <div className="ml-[90px]">
                    <p className="text-neutral-600">{t("titleTow")}</p>
                    <p className="font-bold text-2xl w-[400px] py-4">{t("headerTow")}</p>
                    <p className="text-neutral-400 text-sm w-[450px]">{t("desTow")}</p>
                </div>
            </section>

            <div className="ml-[100px] mt-[50px]">
                <p>{t("desAll")}</p>
            </div>
        </div>
    )
}

export default DescripHeader