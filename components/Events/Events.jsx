import { useState, useEffect } from 'react';

import s from './Events.module.scss';
import { Event } from '../Event/Event.jsx';

export function Events() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(async () => {
        let tempData;
        try {
            const res = await fetch('https://vef2-20222-v3-synilausn.herokuapp.com/events');
            tempData = await res.json();
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }

        setData(tempData?.items);
    }, []);

    if (error) {
        return (
            <div className={s.events}>
                <h1>Viðburðasíðan</h1>
                <h2>Viðburðir á næstunni</h2>
                <p>Villa við að hlaða inn gögnum.</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className={s.events}>
                <h1>Viðburðasíðan</h1>
                <h2>Viðburðir á næstunni</h2>
                <p>Hleð inn gögnum...</p>
            </div>
        );
    }

    return (
        <div className={s.events}>
            <h1>Viðburðasíðan</h1>
            <h2>Viðburðir á næstunni</h2>
            <>
                {
                    data.map((d) => <Event name={d.name} description={d.description} key={d.id} id={d.id} />)
                }
            </>
        </div>
    );
}
