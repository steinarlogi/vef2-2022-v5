import { PasswordComponent } from '../PasswordComponent/PasswordComponent.jsx';
import { UsernameInput } from '../UsernameInput/UsernameInput.jsx';
import { LoginButton } from '../LoginButton/LoginButton.jsx';
import { useRouter } from 'next/router';
import { useState } from 'react';

import s from './LoginForm.module.scss';
import { LoginProvider, useLogIn, useLoggedInUser } from '../../contexts/LoginProvider.jsx';
import { useRef } from 'react';

export function LoginForm() {
    const router = useRouter();
    const loggedInUser = useLoggedInUser();

    if (loggedInUser) {
        router.push('/');
    }

    const [errorMessage, setErrorMessage] = useState(null);
    const loginFormContainer = useRef(null);
    const logIn = useLogIn();

    async function handleSubmit(event) {
        const { password, username } = event.target.elements;
        event.preventDefault();
        
        loginFormContainer.current.reset();

        const data = { password: password.value, username: username.value };

        const res = await fetch('https://vef2-20222-v3-synilausn.herokuapp.com/users/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        });

        const responseData = await res.json();
        
        if (res.ok) {
            
            const { user, token } = responseData;

            const userData = { user, token };

            logIn(userData);

            router.push('/');

        } else {
            setErrorMessage(responseData?.error);
        }
    }

    if (errorMessage) {
        return(
            <LoginProvider>
                <form ref={loginFormContainer} onSubmit={handleSubmit}>
                    <div className={s.error_message}>
                        <p>{errorMessage}</p>
                    </div>
                    <UsernameInput />
                    <PasswordComponent />
                    <LoginButton />
                </form>
            </ LoginProvider>
        );
    }

    return (
        <LoginProvider>
            <form ref={ loginFormContainer } onSubmit={handleSubmit}>
                <UsernameInput />
                <PasswordComponent />
                <LoginButton />
            </form>
        </LoginProvider>
    );
}
