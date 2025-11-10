import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { useMediaQuery } from "react-responsive"

const NavDry = () => {
    const [open, setOpen] = useState<boolean>(false);
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const { t } = useTranslation();
    useEffect(() => {
        if (!isMobile) setOpen(false)
    }, [isMobile])
    return (
        <div className="flex justify-center items-center">
            {isMobile && <button className=" md:hidden flex items-center justify-center  cursor-pointer" onClick={() => { setOpen(!open) }}>
                {open ? <X size={32} /> : <Menu size={30} />}
            </button>}

            <nav className="max-md:hidden">
                <Link to="/" className="p-2" >{t("Home")}</Link>
                <Link to="/signup" className="inline-block  cursor-pointer px-3.5 py-1 mx-2 border-2
                 border-neutral-200 shadow-md
                  hover:bg-neutral-100 rounded-lg">{t("Signup")}</Link>

                <Link to="/login" className="cursor-pointer px-3.5  text-white py-1
                 bg-purple-600 hover:bg-purple-700 
                 rounded-lg">{t("login")}</Link>
            </nav>

            {open && isMobile && (
                <nav>
                    <Link to="/" className="p-2" >{t("Home")}</Link>
                    <Link to="/signup" className="inline-block cursor-pointer px-3.5 py-1 mx-2 border-2
                 border-neutral-200 shadow-md
                  hover:bg-neutral-100 rounded-lg">{t("Signup")}</Link>

                    <Link to="/login" className="cursor-pointer px-3.5  text-white py-1
                 bg-purple-600 hover:bg-purple-700 
                 rounded-lg">{t("login")}</Link>
                </nav>
            )}




        </div>
    )
}

export default NavDry