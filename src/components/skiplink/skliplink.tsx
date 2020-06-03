import './skiplink.scss';

interface Properties {
    title: string;
    href?: string;
}

export const SkipLink = (properties: Properties) => (
    <>
        <a class="skiplink" href={properties.href ? properties.href : "#main-content"}>{properties.title}</a>
    </>
);