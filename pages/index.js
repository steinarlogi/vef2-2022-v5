import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Events } from '../components/Events/Events.jsx';
import { LoginProvider } from '../contexts/LoginProvider.jsx';
import { LoggedInUserInformation } from '../components/LoggedInUserInformation/LoggedInUserInformation.jsx';

import styles from '../styles/Home.module.scss'

export default function Home() {


  return (
    <LoginProvider>
      <div className={styles.main_content}>
        <Head>
          <title>Viðburðasíðan</title>
          <meta name="description" content="Thetta er vidburdasidan" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Events />
        <LoggedInUserInformation />
      </div>
    </LoginProvider>
  );
}
