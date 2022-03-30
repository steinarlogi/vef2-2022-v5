import { useState } from 'react';

import { UsernameInput } from '../UsernameInput/UsernameInput.jsx';
import { PasswordComponent } from '../PasswordComponent/PasswordComponent.jsx';
import { NameInput } from '../NameInput/NameInput.jsx';
import { LoginButton } from '../LoginButton/LoginButton.jsx';

import { useRouter } from 'next/router';

import s from './SignupForm.module.scss';

export function SignupForm() {
    const [error, setError] = useState(null);
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();

        const { password, username, name } = e.target.elements;

        const data = { password: password.value, username: username.value, name: name.value };

        try {
            const res = await fetch('https://vef2-20222-v3-synilausn.herokuapp.com/users/register', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(data)
            });

            const resData = await res.json();
            
            if (!res.ok) {
                setError(resData?.errors);
                return;
            } else {
                router.push('/login');
            }

        } catch (error) {
            setError(JSON.parse(`[{"msg": "server error"}]`));
        }
    }

    if (error) {
        return (
            <form onSubmit={ handleSubmit }>
                <div className={s.error_message}>
                    <>
                    {
                        error.map((d) => 
                            <p>{d.msg}</p>
                        )
                    }
                    </>
                </div>
                <NameInput />
                <UsernameInput />
                <PasswordComponent />
                <LoginButton texti='Nýskrá' />
            </form>
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <NameInput />
                <UsernameInput />
                <PasswordComponent />
                <LoginButton texti='Nýskrá'/>
            </form>
        </>
    );
}