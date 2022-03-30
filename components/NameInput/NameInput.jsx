import { useState } from 'react';

import s from './NameInput.module.scss';

export function NameInput() {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className={s.username_wrapper}>
            <label htmlFor='name'>Nafn</label>
            <input className={s.username_input} name='name' type='text' value={value} onChange={handleChange}/>
        </div>

    );
}