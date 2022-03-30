import Head from "next/head";

import { Events } from "../components/Events/Events";
import { LoginProvider } from "../contexts/LoginProvider";
import styles from '../styles/Home.module.scss';

import { LoggedInUserInformation } from "../components/LoggedInUserInformation/LoggedInUserInformation";

export default function Events() {
    return (
    <LoginProvider>
      <div className={styles.main_content}>
          <Head>
            <title>Viðburðasíðan</title>
            <meta name="description" content="Thetta er vidburdasidan" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        <Events/>
        <LoggedInUserInformation />
      </div>
    </LoginProvider>
    );
}