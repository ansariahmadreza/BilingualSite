import { useTranslation } from "react-i18next";
import Design from "../Designbody/Designbody";
import { Link } from "react-router-dom";


const Header = () => {
    const { i18n, t } = useTranslation();
    return (
        <div>

            <div className="flex  items-center  max-xl:relative max-xl:ml-10 max-xl:w-5xl 
             max-lg:pr-15 justify-center flex-col">
                <div className="ml-10 xl:ml-1.5 font-sans">
                    <h1 className=" text-xl  lg:text-4xl mb-3">{t("titlePage")}</h1>
                    <span className="text-center  text-neutral-500 text-xs lg:text-xl">{t("Description")}</span>
                    <Link to="/DescripHeader">
                        <img className=" rounded-lg w-5xl   h-132 mt-5 " src={"image/designthinking.webp"}></img>
                    </Link>
                </div>

                <div className="text-start max-xl:py-7 max-xl:mt-170 max-xl:absolute max-xl:left-0 font-sans
                 max-xl:text-center
                 max-xl:mx-auto
                 max-xl:w-3/4 max-xl:h-fit
                 max-xl:right-0  shadow-xl
                 hover:text-purple-800 hover:cursor-pointer p-13.5 
                absolute h-76 mt-35 ml-300 w-90 bg-white rounded-lg">
                    <h6 className="text-neutral-500">{t("titledesignbox")}</h6>
                    <span className="text-xl">{t("Descriptionbox")}</span>

                    <div className="flex max-xl:hidden items-center font-sans pt-5">
                        <span className="  text-neutral-500 text-sm">{t("Readmore")}</span>
                        {i18n.language === "en" ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                            stroke="currentColor" className="size-4 pt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />

                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                            stroke="currentColor" className="size-4 pt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        }
                    </div>
                </div>
            </div>
            <Design />
        </div>
    )
}

export default Header



