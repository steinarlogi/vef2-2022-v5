import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { EventInformation } from '../../components/EventInformation/EventInformation.jsx';
import { LoggedInUserInformation } from "../../components/LoggedInUserInformation/LoggedInUserInformation.jsx";
import { LoginProvider } from "../../contexts/LoginProvider.jsx";

import s from '../../styles/Home.module.scss';

export default function() {
    const router = useRouter();
    const [id, setId] = useState();

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        setId(router.query.id);

    }, [router.isReady]);

    console.log(id);

    return (
        <LoginProvider>
            <div className={s.main_content}>
                <EventInformation eventId={ id }/>
                <LoggedInUserInformation />
            </div>
        </LoginProvider>
    );
}