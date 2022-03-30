import Link from 'next/link';
import s from './Event.module.scss';

export function Event({ name, description, id }) {
    return (
        <div className={s.event}>
            <h3><Link href={`/events/${id}`}>{ name }</Link></h3>
            <p>{ description }</p>
        </div>
    );
}
