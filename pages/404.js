import Head from "next/head";

import { Events } from "../components/Events/Events";
import { LoginProvider } from "../contexts/LoginProvider";
import styles from '../styles/Home.module.scss';

import { LoggedInUserInformation } from "../components/LoggedInUserInformation/LoggedInUserInformation";

export default function NotFound() {
    return (
        <LoginProvider>
        <div className={styles.main_content}>
            <Head>
              <title>Viðburðasíðan</title>
              <meta name="description" content="Thetta er vidburdasidan" />
              <link rel="icon" href="/favicon.ico" />
            </Head>        

            <div className={styles.error_message}>
                <p>Síða fannst ekki :(</p>
            </div>
          <LoggedInUserInformation />
        </div>
      </LoginProvider>
    );
}