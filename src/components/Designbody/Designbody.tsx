import { useTranslation } from "react-i18next";
import Markting from "../Mrktingbody/MarktingBody";
import { Link } from "react-router-dom";

const Design = () => {
    const { t, i18n } = useTranslation()
    return (
        <div>
            <div className={`${i18n.language === "en" ? "max-2xl:pr-60" : "max-2xl:pl-30"} max-md:grid max-md:grid-cols-1
              max-2xl:w-5xl max-2xl:flex max-2xl:justify-center 
                max-2xl:mt-25 flex items-center justify-center mt-4 ml-50`}>
                <section className="hover:cursor-pointer hover:text-purple-800">
                    <Link to={"/img77"}>
                        <img className="max-2xl:w-100 max-2xl:h-95 w-115  h-100 object-cover mb-5
                     rounded-lg aspect-square" src={`${import.meta.env.BASE_URL}image/1.webp`} />
                    </Link>
                    <span className=" text-neutral-500 text-sm ">{t("branding")}</span>
                    <h3 className="max-2xl:w-85 w-90 text-sm">{t("captionImg1")}</h3>
                </section>

                <section className="mx-17 max-2xl:mx-8 hover:cursor-pointer hover:text-purple-800">
                    <Link to={"/img88"}>
                        <img className="max-2xl:w-100 max-2xl:h-95  w-115  h-100
                     object-cover rounded-2xl mb-5.5 aspect-square" src={`${import.meta.env.BASE_URL}image/2.avif`} />
                    </Link>
                    <h3 className="max-2xl:w-85 w-90 text-sm">{t("captionImg2")}</h3>
                </section>

                {i18n.language === "en" ? <section className="hover:cursor-pointer hover:text-purple-800">
                    <Link to={"/img99"}>
                        <img className="max-2xl:w-100 max-xl:h-95  w-115  
                    h-100 object-cover mt-5 rounded-lg" src={`${import.meta.env.BASE_URL}image/3.webp`} />
                    </Link>
                    <h6 className="text-neutral-500 pt-5 text-sm ">{t("branding2")} </h6>
                    <h3 className="max-2xl:85 w-90 text-sm">{t("captionImg3")}</h3>
                </section> : <section className="hover:cursor-pointer hover:text-purple-800">
                    <Link to={"/img90"}>
                        <img className=" w-115  h-100 object-cover mt-0.5 rounded-lg" src={`${import.meta.env.BASE_URL}image/3.webp`} />
                    </Link>
                    <h6 className="text-neutral-500 pt-5 text-sm">{t("branding2")} </h6>
                    <h3 className="w-90 text-sm">{t("captionImg3")}</h3>
                </section>}
                
            </div>
            <Markting />
        </div>
    )
}

export default Design