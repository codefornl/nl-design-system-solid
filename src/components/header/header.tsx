import './header.scss';

export interface HeaderProperties {
    title?: string;
    screenreader?: string;
    link?: string;
    transparent?: boolean;
    logo?: 'ocw' | 'cte';
    white?: boolean;
    hide?: boolean;
}

/**
 * See: https://nl-design-system.gitlab.io/nl-design-system/componenten/header/index.html
 * 
 * @param properties
 */
export const Header = (properties: HeaderProperties) => (
    <>
        <header class={`header${properties.transparent ? " header--transparent" : ""}`} role="banner">
            {properties.hide ? "" : <div class={`header-logo
                ${properties.logo ? " header-logo--" + properties.logo : ""}
                ${properties.white ? " header-logo--white" : ""}
            `}>
                <a href={properties.link ? properties.link : "/"} title={properties.title}>
                    <span class="screenreader-only">{properties.screenreader}</span>
                </a>
            </div>}
        </header>
    </>
);

