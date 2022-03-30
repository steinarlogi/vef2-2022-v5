import { useState } from 'react';
import { LoginButton } from '../LoginButton/LoginButton.jsx';

import s from './NewRegistration.module.scss';

export function NewRegistration() {
    const [registered, setRegistered] = useState(false);

    function register() {
        setRegistered(true);
    }

    if (registered) {
        return (
            <div className={s.new_registration}>
                <p>Þú hefur skráð þig á þennan viðburð</p>
            </div>
        );
    }

    return (
        <div className={s.new_registration}>
            <h3>Skráðu þig!</h3>
            <textarea className={s.comment}></textarea>
            <LoginButton text='Skrá á viðburð' handleClick={register}/>
        </div>
    );
}
