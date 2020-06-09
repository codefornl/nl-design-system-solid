import { Icon } from "../../tools/icon"
import { Show } from "solid-js"

export interface NavigationItemProperties {
    title: string
    href?: string
    active?: boolean
    icon?: string
    onclick?: any
}

export const NavigationItem = (properties: NavigationItemProperties) => (
    <li class="nav__item" onClick={properties.onclick}>
        <a class="nav__link" href={properties.href}>
            <Show when={properties.icon}><Icon icon={properties.icon} role="presentation" /></Show>
            {properties.title}
        </a>
    </li>
)