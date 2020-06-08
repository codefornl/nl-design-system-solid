import './sidenav.scss'
import { NavigationItemProperties } from './navigation-item'
import { For, Show } from 'solid-js'
import { SideNavItem } from './sidenav-item'

interface Properties {
    show?: boolean
    items: NavigationItemProperties[]
}
export const SideNav = (properties: Properties) => (
    <Show when={properties.show}>
        <aside class="col-xl-3 col-lg-4 col-md-3 col-sm-modal">
            <nav class="sidenav">
                <ul>
                    <For each={properties.items} fallback={<li class="sidenav__item"></li>}>
                            {item => (
                                <SideNavItem {...item} />
                            )}
                    </For>
                </ul>
            </nav>
        </aside>
    </Show>
)