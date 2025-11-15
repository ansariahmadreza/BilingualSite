import { useTranslation } from "react-i18next"
import Marktingfooter from "./Marktingfooter"
import { Link } from "react-router-dom"


const Markting = () => {
    const { t, i18n } = useTranslation()
    return (
        <div>
            <div className={`${i18n.language === "en" ? "max-2xl:pr-85" : "max-2xl:pl-30"} 
                max-2xl:w-5xl max-2xl:flex max-2xl:justify-center max-2xl:items-center`}>
                <div className={`${i18n.language === "en" ? "w-305 ml-39" : "mr-[-50px]"} mt-10  max-2xl:hidden `}>
                    <p className="mt-10 text-2xl text-start">{t("Markting")}</p>
                </div>

                <div className={`${i18n.language === "en" ? "ml-60  max-2xl:ml-120" : "max-2xl:mr-[-33px] mr-10"} 
                      flex justify-center w-5xl items-center mt-5 `}>
                    <section className="hover:cursor-pointer  hover:text-purple-800 ">
                        <Link to={"/img1"}>
                            <img src={`${import.meta.env.BASE_URL}image/mark-1.avif`} className="object-cover aspect-square h-100 rounded-lg mb-5
                             max-md:w-80 max-md:h-80 max-2xl:w-95 max-2xl:h-90 w-115" />
                        </Link>
                        <p className="text-sm text-[12px] text-neutral-500">{t("Markting")}</p>
                        <h3 className="w-90 max-2xl:w-85 max-md:w-72 text-sm">{t("captinimgMark")}</h3>
                    </section>

                    <section className={`hover:cursor-pointer max-2xl:mx-8 ${i18n.language === "en" ? "max-2xl:mb-5" : ""} mx-16 hover:text-purple-800`}>
                        <Link to={"/img22"}>
                            <img src={`${import.meta.env.BASE_URL}image/mark-1.avif`} className={`object-cover max-md:w-80 max-md:h-80
                            aspect-square h-100 rounded-lg max-2xl:w-95 max-2xl:h-90  
                            w-115 ${i18n.language === "en" ? "my-5" : "mb-5"}`} />
                        </Link>
                        <p className="text-sm inline-block text-[12px] text-neutral-500 ">{t("Markting")}</p>
                        <h3 className="w-90 max-2xl:w-85 max-md:w-72 text-sm">{t("captinimgMark2")}</h3>
                    </section>

                    <section className={`${i18n.language === "en" ? "mb-5.5" : "mb-12.5"} hover:cursor-pointer 
                      hover:text-purple-800`}>
                        <Link to={ "/img33"}>
                            <img src={`${import.meta.env.BASE_URL}image/mark-3.avif`} className="object-cover aspect-square  max-md:w-80 max-md:h-80
                             mb-5 h-100 rounded-lg max-2xl:w-95 max-2xl:h-90  w-115" />
                        </Link>
                        <h3 className="w-90 max-2xl:w-85 max-md:w-72 text-sm">{t("captinimgMark3")}</h3>
                    </section>

                </div>
            </div>

            <Marktingfooter />
        </div >

    )
}


export default Markting