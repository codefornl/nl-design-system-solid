import './button.scss';

interface Properties {
    title: string;
    disabled?: boolean;
    primary?: boolean;
}

export const Button = (properties: Properties) => (
    <>
        <button class={`btn${properties.primary ? " btn--primary" : ""}`}  disabled={properties.disabled}>{properties.title}</button>
    </>
);