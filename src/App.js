import { useSelector } from "react-redux";
import { Authorization } from './Components/Autorun/Authorization'
import  "./app.scss"
import { Profile } from "./Components/Profile/Profile";

export const App = () => {
    const loginPassword = useSelector(state => state)
    if(loginPassword.login !== "admin@test.ru"){
        return(
            <div className = 'main_container' >
                < Authorization />
            </div>
        )
    }
    else if(loginPassword.password !== "12345678qwe"){
        return(
            <div className = 'main_container' >
                < Authorization />
            </div>
        )
    }
    else return(
        <div className = 'user_info' >
            <Profile />
        </div>
    )
}


