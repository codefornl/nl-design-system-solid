import './badge.scss';
import { Color } from '../../models/colors';
import { Icon } from '../../models/icons';

interface Properties {
    value: number;
    color: Color;
    icon?: Icon;
}

export const Badge = (properties: Properties) => {
    if (properties.icon) {
        return (
            <>
            <div>
                <i class={`icon icon-${properties.icon}`}></i>
                <span class={`badge badge--icon badge--${properties.color}`}>{properties.value}</span>
            </div>
            </>
        )
    }
    return (
        <>
            <span class={`badge badge--${properties.color}`}>{properties.value}</span>
        </>
    )
};