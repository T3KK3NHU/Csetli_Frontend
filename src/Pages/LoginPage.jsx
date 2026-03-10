import { useEffect, useState } from "react"
import TextBox from "../Components/TextBox";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { belepes } from "../api";
import csetliLogo from "../kepek/csetli.png"
import "../style/style.css"

export default function LoginPage(){
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [jelszo, setJelszo]= useState("");
    return(
        <div className="vh-100 d-flex justify-content-center align-items-center background">
            <img src={csetliLogo} alt="CsetliLogo" />
            <div style={{minWidth: 500}}>
                <div className="text-center fs-1 mb-5 csetliColor">Bejelentkezés</div>
                <TextBox title={"E-mail vagy felhasználónév"} type={"text"} placeholder={"Felhasználónév/Email"} value={usernameOrEmail} setValue={setUsernameOrEmail}/>
                <TextBox title={"Jelszó"} type={"password"} placeholder={"Jelszó"} value={jelszo} setValue={setJelszo}/>
                <div className="text-center mt-3">
                <Button content={"Bejelentkezés"} onClick={async ()=> {
                    if(!usernameOrEmail || !jelszo){
                        alert("A felhasználónév vagy Email jelszópáros megadása kötelező")
                        return;
                    }
                    const res= await belepes(usernameOrEmail, jelszo);
                    alert(res.message)
                        if (res.result)
                        {
                            // navigálás a bejelentkezésbe
                            <Link to="/" className="text-decoration-none"></Link>
                        }
                    }}/>
                </div>

                <div className="text-center mt-3">
                <Link to="/registration" className="csetliColor text-decoration-none">Még nincs fiókom</Link> 
                </div>
            </div>
        </div>
    )
}