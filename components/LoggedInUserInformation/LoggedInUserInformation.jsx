import { useLoggedInUser, useLogOut } from "../../contexts/LoginProvider";
import Link from "next/link";

import s from './LoggedInUserInformation.module.scss';

export function LoggedInUserInformation() {

    const loggedInUser = useLoggedInUser();
    const logOutUser = useLogOut();

    function handleLogOut() {
        logOutUser();
    }

    if (loggedInUser) {
        return (
            <>
                <div className={s.line}></div>
                <div className={s.logged_in_user_information}>
                    <a href='#' className={s.login_link} onClick={handleLogOut}>Smelltu hér til að skrá út</a>
                    <p>Þú ert skráður inn sem <strong>{loggedInUser?.user?.name}</strong></p>
                    <Link href='/'><a className={s.login_link}>Forsíða</a></Link>
                </div>
            </>
        );
    }

    return (
        <>
            <div className={s.line}></div>
            <div className={s.logged_in_user_information}>
                <Link href='/'><a className={s.login_link}>Forsíða</a></Link>
                <Link href='/login'><a className={s.login_link}>Innskrá</a></Link>
                <Link href='/signup'><a className={s.login_link}>nýskrá</a></Link>
            </div>
        </>
    );
    
}