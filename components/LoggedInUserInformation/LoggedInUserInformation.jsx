import { useLoggedInUser, useLogOut } from "../../contexts/LoginProvider";
import Link from "next/link";

import s from './LoggedInUserInformation.module.scss';

export function LoggedInUserInformation() {

    const loggedInUser = useLoggedInUser();
    const logOutUser = useLogOut();

    function handleLogOut() {
        logOutUser();
    }

    console.log(loggedInUser);

    if (loggedInUser) {
        return (
            <>
                <div className={s.line}></div>
                <div className={s.logged_in_user_information}>
                    <a href='#' className={s.login_link} onClick={handleLogOut}>Smelltu hér til að skrá út</a>
                    <p>Þú ert skráður inn sem {loggedInUser?.user?.name}</p>
                </div>
            </>
        );
    }

    return (
        <>
            <div className={s.line}></div>
            <div className={s.logged_in_user_information}>
                <Link href='/login' className={s.login_link}>Smelltu hér til að skrá þig inn</Link>
            </div>
        </>
    );
    
}