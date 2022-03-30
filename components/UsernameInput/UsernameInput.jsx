import { useState } from 'react';

import s from './UsernameInput.module.scss';

export function UsernameInput() {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className={s.username_wrapper}>
            <label htmlFor='username'>Notendanafn</label>
            <input className={s.username_input} name='username' type='text' value={value} onChange={handleChange}/>
        </div>

    );
}
