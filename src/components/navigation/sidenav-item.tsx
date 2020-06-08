import './sidenav.scss'
export interface NavigationItemProperties {
    title: string
    href: string
    active?: boolean
    onclick?: () => void
}

export const SideNavItem = (properties: NavigationItemProperties) => (
    <li class={`sidenav__item ${properties.active ? "sidenav__item--active": ""}`} onClick={properties.onclick}>
        <a href={properties.href}>
            {properties.title}
        </a>
    </li>
)