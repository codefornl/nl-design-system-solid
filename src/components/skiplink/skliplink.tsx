import './skiplink.scss';

interface Properties {
    id: string;
    title: string;
}

export const SkipLink = (properties: Properties) => (
    <>
        <a class="skiplink" href={`#${properties.id}`}>{properties.title}</a>
    </>
);