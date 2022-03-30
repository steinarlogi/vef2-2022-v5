import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LoginButton } from '../LoginButton/LoginButton.jsx';
import { useLoggedInUser, useLogOut } from '../../contexts/LoginProvider.jsx';
import { CustomButton } from '../CustomButton/CustomButton.jsx';

import s from './NewRegistration.module.scss';

export function NewRegistration() {
    const [registered, setRegistered] = useState(false);
    const loggedInUser = useLoggedInUser();
    const logOut = useLogOut();
    const router = useRouter();
    
    const [id, setId] = useState();

    useEffect(() => {
        if(router.isReady) {
            setId(router.query.id);
        }
    }, [router.isReady]);

    useEffect(() => {
        async function fetchData() {
                
            const res = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/${id}`);

            if (res.status === 200) {
                const resData = await res.json();

                let tempRegistered = false;
                for (let i = 0; i < resData.registrations.length; i++) {
                    const tempRegistration = resData.registrations[i];
                                        
                    tempRegistered = tempRegistered || (tempRegistration.id === loggedInUser.user.id);
                }

                setRegistered(tempRegistered);
            }
        }

        if (id) {
            fetchData();
        }
    }, [id]);

    function refreshPage() {
        window.location.reload();
    }

    async function handleRegister(e) {
        e.preventDefault();
        const {comment } = e.target.elements;

        const data = { comment }
  
        const res = await fetch(
            `https://vef2-20222-v3-synilausn.herokuapp.com/events/${id}/register`,
            {
                method: 'POST',
                headers: { 
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${loggedInUser.token}`
                },
                body: JSON.stringify(data)
            }
        );

        if (res.status === 401) {
            logOut();
            return;
        }

        if (res.status === 201) {
            refreshPage();
        }
    
    }

    async function handleUnregister(e) {
        const res = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/${id}/register`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${loggedInUser.token}`
            },
        });

        if (res.status === 401) {
            logOut();
            return;
        }

        refreshPage();
    }

    if (registered) {
        return (
            <div className={s.new_registration}>
                <p>Þú hefur skráð þig á þennan viðburð</p>
                <CustomButton text='Afskrá' handleClick={ handleUnregister }/>
            </div>
        );
    }

    return (
        <div className={s.new_registration} onSubmit={ handleRegister }>
            <h3>Skráðu þig!</h3>
            <form>
                <textarea className={s.comment}></textarea>
                <CustomButton type='submit' text='Skrá á viðburð'/>
            </form>
        </div>
    );
}
