import s from './CustomButton.module.scss';

export function CustomButton({ handleClick, text, type='button' }) {
    return (
        <div className={s.button_container}>
            <button type={type} className={s.button} onClick={ handleClick }>{ text }</button>
        </div>
    );
}