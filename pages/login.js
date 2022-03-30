import { LoginProvider } from '../contexts/LoginProvider';
import { Login } from '../components/Login/Login.jsx';

import styles from '../styles/Home.module.scss';

export default function() {
    return (
        <LoginProvider>
            <div className={styles.main_content}>
                <Login />
            </div>
        </LoginProvider>
    );
}