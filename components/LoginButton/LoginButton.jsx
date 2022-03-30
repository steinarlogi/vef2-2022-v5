import s from './LoginButton.module.scss';

export function LoginButton({ text = 'Skrá inn' }) {
    return (
        <div className={s.button_container}>
            <input type='submit' className={s.login_button} value={ text } />
        </div>
    );
}
