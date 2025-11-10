import { useTranslation } from "react-i18next"
import Marktingfooter from "./Marktingfooter"
import { Link } from "react-router-dom"


const Markting = () => {
    const { t, i18n } = useTranslation()
    return (

        <div>
            <div className={`${i18n.language === "en" ? "max-xl:pr-85" : "max-xl:pl-30"} max-xl:w-5xl max-xl:flex max-xl:justify-center max-xl:items-center`}>
                <div className={`${i18n.language === "en" ? "w-305 ml-39" : "mr-[-50px]"} mt-10  max-xl:hidden `}>
                    <p className="mt-10 text-2xl text-start">{t("Markting")}</p>
                </div>

                <div className={`${i18n.language === "en" ? "ml-60  max-xl:ml-120" : "max-xl:mr-[-33px] mr-[40px]"} 
                      flex justify-center w-5xl items-center mt-5 `}>
                    <section className="hover:cursor-pointer  hover:text-purple-800 ">
                        <Link to={"/img1"}>
                            <img src={t("imgMarkting1")} className="object-cover aspect-square h-100 rounded-lg mb-5  max-xl:w-95 max-xl:h-90 w-115" />
                        </Link>
                        <p className="text-sm  text-neutral-500">{t("Markting")}</p>
                        <h3 className="w-90 max-xl:w-85 text-sm">{t("captinimgMark")}</h3>
                    </section>

                    <section className={`hover:cursor-pointer max-xl:mx-8 ${i18n.language === "en" ? "max-xl:mb-5" : ""} mx-16 hover:text-purple-800`}>
                        <Link to={"/img22"}>
                            <img src={t("imgMarkting1")} className={`object-cover  aspect-square h-100 rounded-lg max-xl:w-95 max-xl:h-90  
                            w-115 ${i18n.language === "en" ? "my-5" : "mb-5"}`} />
                        </Link>
                        <p className="text-sm inline-block text-neutral-500 ">{t("Markting")}</p>
                        <h3 className="w-90 max-xl:w-85 text-sm">{t("captinimgMark2")}</h3>
                    </section>

                    <section className={`${i18n.language === "en" ? "mb-5.5" : "mb-12.5"} hover:cursor-pointer 
                      hover:text-purple-800`}>
                        <Link to={ "/img33"}>
                            <img src={t("imgMarkting3")} className="object-cover aspect-square mb-5 h-100 rounded-lg max-xl:w-95 max-xl:h-90  w-115" />
                        </Link>
                        <h3 className="w-90 max-xl:w-85 text-sm">{t("captinimgMark3")}</h3>
                    </section>

                </div>
            </div>

            <Marktingfooter />
        </div >

    )
}


export default Markting