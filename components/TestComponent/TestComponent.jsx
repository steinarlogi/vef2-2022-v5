import s from './TestComponent.module.scss';

export function TestComponent() {
    return (
        <div className={s.test_component}>
            <h1>Þetta er test component</h1>
        </div>
    );
}