import './footer.scss';
import { Color } from '../../models/colors';
import { Show } from 'solid-js';

interface Properties {
 color?: Color;
 title?: string
 children?: any;
}

export const Footer = (properties: Properties) => {

    return (
        <footer class="footer">
        <div class={`footer__content ${properties.color ? "background--" + properties.color : "background--transparent"}`}>
            <div class="container">
                <div class="row">
                    <Show when={properties.title}>
                    <div class="col-xs-12 col-md-10 col-md-offset-1">
                        <span class="footer__header footer__header--title">{properties.title}</span>
                    </div>
                    </Show>
                    <Show when={properties.children}>
                        { properties.children }
                    </Show>
                </div>
            </div>
        </div>
    </footer>
    )
};