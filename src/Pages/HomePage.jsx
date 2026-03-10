import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import TextBox from "../Components/TextBox"
import Button from "../Components/Button"
import { Link, useNavigate } from "react-router-dom";
import csetliLogo from "../kepek/csetli.png";
import Profilkep from "../kepek/search.webp";
import "../style/style.css"

export default function HomePage() {

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center background">
            <div >
                <div>
                    <Link to="/registration" className=" text-decoration-none csetliColor">Regisztráció</Link>
                </div>
                <div>
                    <Link to="/login" className=" text-decoration-none csetliColor">Bejelentkezés</Link>
                </div>
            </div>
        </div>

    )
}        