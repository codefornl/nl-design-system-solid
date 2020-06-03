import './label.scss';
import { Color } from '../../models/colors';

interface Properties {
    title: string;
    color: Color;
}

export const Label = (properties: Properties) => (
    <>
        <span class={`label label--${properties.color}`}>{properties.title}</span>
    </>
);