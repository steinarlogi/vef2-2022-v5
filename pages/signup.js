import { LoginProvider } from "../contexts/LoginProvider";
import { Signup } from "../components/Signup/Signup";
import { LoggedInUserInformation } from "../components/LoggedInUserInformation/LoggedInUserInformation";

import style from '../styles/Home.module.scss';

export default function signup() {
    return (
        <LoginProvider>
            <div className={style.main_content}>
                <Signup />
            <LoggedInUserInformation />
            </div>
        </LoginProvider>
    );
}