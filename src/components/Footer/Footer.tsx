import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Footer = () => {

    const { t, i18n } = useTranslation()

    return (
        <div className={`shadow-lg border-2 border-neutral-200  rounded-2xl w-[1230px] my-5  pt-[60px] h-[300px] 
        ${i18n.language === "en" ? "ml-[135px] max-xl:w-[1100px] max-xl:ml-[25px]" : "mr-[-50px]  max-xl:mr-[-120px] max-xl:w-[1100px]"} `}>
            <div className="text-center">
                <p className="inline-block pb-[20px]" >{t("tech stack")}</p>

                <div className="flex justify-center items-center">
                    <Link target="_blank" to={"https://react.dev/"} className="px-5">
                        <div className="flex flex-col items-center">
                            <img className="w-10 h-10 cursor-pointer" src="../icons/react.png" alt="react" title="react" />
                            <p className="text-[12px] mt-1">React</p>
                        </div>
                    </Link>

                    <Link target="_blank" to={"https://www.typescriptlang.org/"} className="px-5">
                        <div className="flex flex-col items-center">
                            <img className="w-10 h-10 cursor-pointer" src="../icons/type.png" alt="typescript" title="typescript" />
                            <p className="text-[12px] mt-1">Typescript</p>
                        </div>
                    </Link>

                    <Link to={"https://tailwindcss.com/"} target="_blank" className="px-5">
                        <div className="flex flex-col items-center">
                            <img className="w-15 h-8 cursor-pointer" src="../icons/tailwindcss.png" alt="tailwindcss" title="tailwindcss" />
                            <p className="text-[12px] mt-1">Tailwindcss</p>
                        </div>
                    </Link>

                    <Link to={"https://www.i18next.com/"} target="_blank" className="px-5">
                        <div className="flex flex-col items-center">
                            <img className="w-10 h-10 cursor-pointer" src="../icons/i18.png" alt="i18next" title="i18next" />
                            <p className="text-[12px] mt-1">i18next</p>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )

}

export default Footer