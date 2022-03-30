import { useState, useEffect } from 'react';

import s from './EventInformation.module.scss';

import { Registration } from '../Registration/Registration.jsx';
import { NewRegistration } from '../NewRegistration/NewRegistration.jsx';
import { useLoggedInUser } from '../../contexts/LoginProvider';

export function EventInformation({ eventId }) {
    const [data, setData] = useState([], []);
    const [error, setError] = useState(null, []);
    const [loading, setLoading] = useState(false, []);

    const loggedInUser = useLoggedInUser();

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);
            let tempData;
            try {
                const res = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/${eventId}`);
                tempData = await res.json();
            } catch (e) {
                setError('Villa að hlaða inn gögnunum');
                return;
            } finally {
                setLoading(false);
            }
            setData(tempData);
        }

        if (eventId) {
            fetchData();
        }
    }, [eventId]);

    if (error) {
        return (
            <p>Villa: {error}</p>
        );
    }

    if (loading) {
        return (
            <p>Hleð inn gögnum</p>
        );
    }

    let newRegistration;

    if (loggedInUser) {
        newRegistration = (
            <div className={s.new_registration_container}>
                <NewRegistration />
            </div>
        );
    }

    return (
        <div className={s.event}>
            <h1>{data?.name}</h1>
            <p>{data?.description}</p>
            <h2>Skráningar á viðburð</h2>
            <div className={s.registrations}>
                {
                    data?.registrations?.map((d, i) => <Registration name={d.name} comment={d.comment} key={i} />)
                }
            </div>
            { newRegistration }
        </div>
    );
}
