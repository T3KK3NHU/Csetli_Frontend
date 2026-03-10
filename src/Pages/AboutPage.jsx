import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import csetliLogo from "../kepek/csetli.png";
import theme from "../kepek/sun.png";
import "../style/style.css"
import Language from "../Components/Lanugage";

export default function AboutusPage() {
    return (
        <div className="background">
            <div className="d-flex  justify-content-end align-items-start ">
                <Language />
                <div>
                    <img width={50} src={theme} alt="Theme" />
                </div>
            </div>
            <div className="">

            </div>
            <div className=" d-flex justify-content-center align-items-center ">
                <img src={csetliLogo} alt="CsetliLogo" />
            </div>
            <div className="d-flex  justify-content-center align-items-center text-white ">Rólunk: OLvassá</div>
        </div>

    )
}
