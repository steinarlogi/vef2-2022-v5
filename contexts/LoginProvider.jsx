import React, { useState, useEffect, useContext } from 'react';

const LoginContext = React.createContext();
const LogOutUpdateContext = React.createContext();
const LogInUpdateContext = React.createContext();
const AuthenticatedRequestContext = React.createContext();

export function useLoggedInUser() {
    return useContext(LoginContext);
}

export function useLogOut() {
    return useContext(LogOutUpdateContext);
}

export function useLogIn() {
    return useContext(LogInUpdateContext);
}

export function useAuthenticatedRequestContext() {
    return useContext(AuthenticatedRequestContext);
}

export function LoginProvider({ children }) {
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));

        if (user) {
            setLoggedInUser(user);
        }

    }, []);

    function logOut() {
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
    }

    function logIn(user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
    }

    async function sendAuthenticatedRequest(url, method, body) {
        const res = await fetch(
            url,
            {
                method,
                body
            }
            );

        return res;
    }

    return (
        <LoginContext.Provider value={ loggedInUser }>
            <LogOutUpdateContext.Provider value={ logOut }>
                <LogInUpdateContext.Provider value={ logIn }>
                    <AuthenticatedRequestContext.Provider value={ sendAuthenticatedRequest }>
                        { children }
                    </AuthenticatedRequestContext.Provider>
                </LogInUpdateContext.Provider>
            </LogOutUpdateContext.Provider>
        </LoginContext.Provider>
    );
}