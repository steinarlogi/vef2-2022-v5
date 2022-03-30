import s from './Registration.module.scss';

export function Registration({ name, comment }) {
    return (
        <div className={s.registration}>
            <h3>{ name }</h3>
            <p>{ comment }</p>
        </div>
    );
}
