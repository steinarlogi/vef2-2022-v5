import { useState } from 'react';

import s from './PasswordComponent.module.scss';

export function PasswordComponent() {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className={s.password_wrapper}>
            <label htmlFor='password'>Lykilorð</label>
            <input className={s.password_input} name='password' type='password' value={value} onChange={handleChange} />
        </div>
    );
}
