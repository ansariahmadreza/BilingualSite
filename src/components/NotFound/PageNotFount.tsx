import { useTranslation } from "react-i18next";


const NotFound = () => {
    const { t } = useTranslation()
    return (
        <div className="w-full text-center mt font-bold text-4xl mt-50">{t("pageNotFount")}</div>
    )
}


export default NotFound