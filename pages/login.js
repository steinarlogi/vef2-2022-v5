import { LoginProvider } from '../contexts/LoginProvider';
import { Login } from '../components/Login/Login.jsx';
import { LoggedInUserInformation } from '../components/LoggedInUserInformation/LoggedInUserInformation.jsx'

import styles from '../styles/Home.module.scss';

export default function() {
    return (
        <LoginProvider>
            <div className={styles.main_content}>
                <Login />
                <LoggedInUserInformation />
            </div>
        </LoginProvider>
    );
}